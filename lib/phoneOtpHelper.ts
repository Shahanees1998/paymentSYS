// import twilio from 'twilio'

// // eslint-disable-next-line @typescript-eslint/no-extraneous-class
// class OTPHelper {
//   static async sendOTPPhone (number: string): Promise<boolean> {
//     const verifySid = process.env.VERIFY_SID
//     const client = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)

//     try {
//       if (verifySid !== null && verifySid !== undefined) {
//         await client.verify.v2.services(verifySid).verifications.create({
//           to: number,
//           channel: 'sms'
//         })
//         return true
//       }
//       return false
//     } catch (error) {
//       console.error(error)
//       throw error
//     }
//   }

//   static async verifyPhoneOTP (number: string, otp: string): Promise<boolean> {
//     let verification
//     const verifySid = process.env.VERIFY_SID
//     const client = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)

//     try {
//       if (verifySid !== null && verifySid !== undefined) {
//         verification = await client.verify.v2.services(verifySid).verificationChecks.create({
//           to: number,
//           code: otp
//         })
//         if (verification.status === 'approved') {
//           return true
//         }
//       }
//       return false
//     } catch (error) {
//       console.error(error)
//       throw error
//     }
//   }
// }

// export default OTPHelper
'use server'
import twilio from 'twilio'

async function sendOTPPhone (number: string): Promise<boolean> {
  const verifySid = process.env.VERIFY_SID
  const client = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)

  try {
    if (verifySid !== null && verifySid !== undefined) {
      await client.verify.v2.services(verifySid).verifications.create({
        to: number,
        channel: 'sms'
      })
      return true
    }
    return false
  } catch (error) {
    console.error(error)
    throw error
  }
}

async function verifyPhoneOTP (number: string, otp: string): Promise<boolean> {
  let verification
  const verifySid = process.env.VERIFY_SID
  const client = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)

  try {
    if (verifySid !== null && verifySid !== undefined) {
      verification = await client.verify.v2.services(verifySid).verificationChecks.create({
        to: number,
        code: otp
      })
      if (verification.status === 'approved') {
        return true
      }
    }
    return false
  } catch (error) {
    console.error(error)
    throw error
  }
}

export { sendOTPPhone, verifyPhoneOTP }
