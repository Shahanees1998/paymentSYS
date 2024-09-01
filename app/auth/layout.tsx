import type { Metadata } from 'next'
import '../globals-public.css'
import React from 'react'
// import { fixSession } from 'libs/helpers'

import '../globals.scss'
import '../data-tables-css.css'
import 'primeicons/primeicons.css'

export const metadata: Metadata = {
  title: 'Couriler',
  description: 'Your personal courier service'
}

export default async function RootLayout ({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: { lang: string }
}>): Promise<JSX.Element> {
  // const session = await getServerSession()
  // await fixSession(session)
  // const dict = getDictionary(params.lang)

  return (
    <>
        <html lang={params.lang} className="h-full text-xs 2xl:text-base" style={{ fontSize: '1rem' }}>
        {children}
      </html>
    </>
  )
}
