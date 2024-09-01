import React from 'react'
import { PrimeReactProvider } from 'primereact/api'

import Sidebar from '../../components/Sidebar'
import type { Metadata } from 'next'
import AuthProvider from 'components/AuthProvider/AuthProvider'
import { getServerSession } from 'next-auth'
import { fixSession } from 'libs/helpers'

import '../globals.scss'
import 'primeicons/primeicons.css'

// import '../data-tables-css.css'
// import '../satoshi.css'

import 'primereact/resources/themes/lara-light-indigo/theme.css' // theme
import { ConfirmDialog } from 'primereact/confirmdialog'

export const metadata: Metadata = {
  title: 'Just Tutor Lah | Admin',
  description: 'Just Tutor Lah'
}

export default async function AdminLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>): Promise<Promise<JSX.Element>> {
  const session = await getServerSession()
  await fixSession(session)

  return (
    <html lang="en" className="h-full">
      <body className={'h-full'}>
      <ConfirmDialog />
        <AuthProvider session={session}>
          <PrimeReactProvider>
            <div className="dark:bg-boxdark-2 dark:text-bodydark flex ">
              <div className="flex min-h-screen">
                <Sidebar />

              </div>
              <div className="flex justify-center overflow-y-auto overflow-x-hidden mt-[85px] w-[100%] lg:!ml-75">
                <main className='flex w-full'>
                  <div className="flex flex-grow flex-col mx-auto p-4 md:p-6 2xl:p-10 overflow-y-auto">
                    {children}
                  </div>
                </main>
              </div>
            </div>
            </PrimeReactProvider>
          </AuthProvider>
      </body>
    </html>
  )
}
