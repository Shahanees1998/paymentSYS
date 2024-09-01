'use client'
import React from 'react'
import { SessionProvider } from 'next-auth/react'

const AuthProvider = ({
  children,
  session
}: Readonly<{
  children: React.ReactNode
  session: any
}>): JSX.Element => {
  return <SessionProvider session={session}>{children}</SessionProvider>
}

export default AuthProvider
