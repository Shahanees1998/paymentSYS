'use server'

import prisma from './prismadb'

interface OTPObject {
  OTP: string
  secret: string
  email: string
}

export async function createOTP (email: string): Promise<OTPObject> {
  const min = 100000
  const max = 999999
  const length = 10
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let secretKey = ''
  const otp = Math.floor(Math.random() * (max - min + 1)) + min
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    secretKey += characters.charAt(randomIndex)
  }
  const OTP = JSON.stringify(otp)
  const existingRecord = await prisma.otpStore.findUnique({ where: { email } })
  if (existingRecord !== undefined && existingRecord !== null) {
    await prisma.otpStore.delete({ where: { email } })
  }
  await prisma.otpStore.create({
    data: {
      email,
      token: OTP,
      secret: secretKey
    }
  })
  const otpObject: OTPObject = {
    OTP,
    secret: secretKey,
    email
  }

  return otpObject
}
