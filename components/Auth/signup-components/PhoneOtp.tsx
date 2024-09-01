'use client'
import React, { useEffect, useState } from 'react'
import { useDictionary } from 'libs/dictionary.context'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import UpdatePhone from './UpdatePhone'
import { sendOTPPhone } from 'libs/phoneOtpHelper'
import { verifyPhoneOTPAndUpdateUser } from 'actions/authActions'
import OTPInputs from './otpInputs'

interface OTPProps {
  title: string
  value: string
  path: string
}

export default function PhoneOTP ({ title, value }: OTPProps): JSX.Element {
  const { update } = useSession()
  const { dict } = useDictionary()
  const [loading, setLoading] = useState<any>(false)
  const [wrongOtp, setWrongOtp] = useState<any>(false)
  const router = useRouter()
  const [otp, setOtp] = useState<string>('')

  const onSubmit = async (): Promise<void> => {
    setLoading(true)
    const res = await verifyPhoneOTPAndUpdateUser(value, otp)
    if (res) {
      await update()
      router.push('/en/auth/signup/step/3')
    } else {
      setWrongOtp(true)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (otp.length === 6) {
      void onSubmit()
    }
  }, [otp])

  const resendCode = async (): Promise<any> => {
    setLoading(true)
    await sendOTPPhone(value as string)
    setLoading(false)
  }

  return (
    <>
      <h3 className='text-4xl font-semibold mt-20 mb-8 text-center text-text'>
        {dict.signup?.otpHeading?.replace('{title}', title)}
      </h3>
      <div className='w-full flex items-center justify-center'>
        <h5
          className='text-xl mb-8 text-center text-secondary font-thin'
        >
          {dict.signup?.otpText?.replace('{title}', title)}
        </h5>
      </div>
      {wrongOtp === true ? <div className='w-full text-center text-danger'>{dict.signup?.wrongOtp}</div> : ''}
      <form className='w-full text-center relative'>
        <div className='w-full flex items-center justify-center'>
          <div className='flex items-center justify-between mt-4 my-8'>
            <OTPInputs setOtp={setOtp} otp={otp} />
          </div>
        </div>
        <h3 className='text-xl text-darkblue font-normal mb-6 mt-5 text-center color-primary'>
          <UpdatePhone title={title} value={value} />
        </h3>
        <div className='mb-5 mt-14'>
          <div className='flex align-center justify-center'>
            <input
              type='button'
              value={dict.signup?.resend}
              onClick={async () => { await resendCode() }}
              disabled={loading}
              className='text-xl font-normal px-10 py-4 cursor-pointer rounded-full border border-darkblue text-darkblue transition hover:bg-opacity-80 w-60'
            />
            <input
              type={dict.general?.submit}
              value={loading === true ? dict.general?.wait : dict.general?.continue}
              disabled={loading === true || otp.length < 6}
              className='text-xl font-normal px-10 py-4 ml-4 cursor-pointer rounded-full border border-darkblue bg-darkblue text-white transition hover:bg-opacity-80 w-60'
            />
          </div>
        </div>
      </form>
    </>
  )
}
