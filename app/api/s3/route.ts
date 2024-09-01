import { getPostSignedURL, getSignedURL } from 'libs/s3'

export async function GET (req: Request): Promise<Response> {
  const { searchParams } = new URL(req.url)
  const key = searchParams.get('key')
  const action = searchParams.get('action')

  if (key == null || typeof key !== 'string') {
    return Response.json({ error: true, message: 'key is required' }, { status: 400 })
  }

  try {
    if (action === 'getPostSignedURL') {
      const data = await getPostSignedURL(key)
      return Response.json({ error: false, data: data.fields, url: data.url })
    } else if (action === 'getSignedURL') {
      const data = await getSignedURL(key)
      return Response.json({ error: false, url: data })
    } else {
      return Response.json({ error: true, message: 'no action defined' }, { status: 400 })
    }
  } catch (error) {
    // log error
    return Response.json({ error: true, message: 'error in generating key' }, { status: 500 })
  }
}
