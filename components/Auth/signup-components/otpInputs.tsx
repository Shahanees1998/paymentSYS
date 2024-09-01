'use client'
import React, { useEffect, type SetStateAction, type Dispatch } from 'react'
import { useForm } from 'react-hook-form'

export default function OTPInputs ({ otp, setOtp }: { otp: string, setOtp: Dispatch<SetStateAction<string>> }): JSX.Element {
  const {
    register,
    getValues,
    setFocus,
    watch,
    setValue
  } = useForm({
    defaultValues: {
      otp1: '',
      otp2: '',
      otp3: '',
      otp4: '',
      otp5: '',
      otp6: ''
    }
  })

  const watcher = watch(['otp1', 'otp2', 'otp3', 'otp4', 'otp5', 'otp6'])

  useEffect(() => {
    const values = getValues()
    const emptyIndex = Object.values(values).findIndex(value => value === '')
    if (emptyIndex !== -1) {
      const inp = `otp${emptyIndex + 1}` as any
      setFocus(inp)
    }
    setOtp(Object.values(values).join(''))
  }, [watcher])

  const onPaste = (e: any): void => {
    const value = (e.clipboardData.getData('Text') ?? '').trim()
    console.log(value[0], value[6])
    if (value?.length === 6) {
      setValue('otp1', value[0] as string)
      setValue('otp2', value[1] as string)
      setValue('otp3', value[2] as string)
      setValue('otp4', value[3] as string)
      setValue('otp5', value[4] as string)
      setValue('otp6', value[5] as string)
    }
  }

  return (
    <div className='w-full flex items-center justify-center'>
      <div className='flex items-center justify-between mt-4 my-8' onPaste={onPaste}>
        <input
          {...register('otp1', { required: true })}
          maxLength={1}
          className='text-2xl m-2 p-5 w-20 text-center text-darkblue border border-gray-1 rounded-md focus:outline-none focus:border-blue-500'
        />
        <input
          maxLength={1}
          {...register('otp2', { required: true })}
          className='text-2xl m-2 p-5 w-20 text-center text-darkblue border border-gray-1 rounded-md focus:outline-none focus:border-blue-500'
        />
        <input
          maxLength={1}
          {...register('otp3', { required: true })}
          className='text-2xl m-2 p-5 w-20 text-center text-darkblue border border-gray-1 rounded-md focus:outline-none focus:border-blue-500'
        />
        <input
          {...register('otp4', { required: true })}
          maxLength={1}
          className='text-2xl m-2 p-5 w-20 text-center text-darkblue border border-gray-1 rounded-md focus:outline-none focus:border-blue-500'
        />
        <input
          maxLength={1}
          {...register('otp5', { required: true })}
          className='text-2xl m-2 p-5 w-20 text-center text-darkblue border border-gray-1 rounded-md focus:outline-none focus:border-blue-500'
        />
        <input
          maxLength={1}
          {...register('otp6', { required: true })}
          className='text-2xl m-2 p-5 w-20 text-center text-darkblue border border-gray-1 rounded-md focus:outline-none focus:border-blue-500'
        />
      </div>
    </div>
  )
}
