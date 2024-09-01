import { type Observable, map } from 'rxjs'
import { Amplify } from 'aws-amplify'
import { generateClient } from 'aws-amplify/api'
import { publish } from '../graphql/mutations'
import { subscribe } from '../graphql/subscriptions'

export const appSyncConfig = {
  endpoint: process.env.NEXT_PUBLIC_APPSYNC_ENDPOINT ?? '',
  region: process.env.NEXT_PUBLIC_APPSYNC_REGION ?? '',
  defaultAuthMode: 'apiKey',
  apiKey: process.env.NEXT_PUBLIC_APPSYNC_API_KEY ?? ''
}

Amplify.configure({
  API: {
    GraphQL: {
      ...appSyncConfig,
      defaultAuthMode: 'apiKey'
    }
  }
})

const client = generateClient()

/**
 * @param  {string} name the name of the channel
 * @param  {Object} data the data to publish to the channel
 */
// refactor any to specific models for chat and notifications.
export async function publishData (name: string, data: any): Promise<void> {
  await client.graphql({
    query: publish,
    variables: { name, data }
  }).catch((error) => {
    console.error('Error publishing data', error)
  })
}

/**
 * @param  {string} name the name of the channel
 * @param  {nextCallback} next callback function that will be called with subscription payload data
 * @param  {function} [error] optional function to handle errors
 * @returns {Observable} an observable subscription object
 */
export function subscribeData (
  name: string
): Observable<any> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return client.graphql({ query: subscribe, variables: { name } }).pipe(map((payload: any) => {
    return payload.data.subscribe
  }))
}

/**
 * @callback nextCallback
 * @param {Object} data the subscription response including the `name`, and `data`.
 * @param {Object} [provider] the provider object
 * @param {Object} [payload] the entire payload
 */
