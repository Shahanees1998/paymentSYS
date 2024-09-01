'use client'
import React, { useState } from 'react'
import { useDictionary } from 'libs/dictionary.context'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { type PrimaryFunction } from '@prisma/client'
import { useRouter } from 'next/navigation'
import { sendPhoneOTPAndUpdateUser } from 'actions/authActions'

interface StepTwoProps {
  prmFunctions: PrimaryFunction[]
}

export default function StepTwo ({ prmFunctions }: StepTwoProps): JSX.Element {
  const { dict } = useDictionary()
  const router = useRouter()
  const [loading, setLoading] = useState<any>(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      primaryFunction: '',
      country: '',
      phoneNumber: ''
    }
  }
  )
  const onSubmit: SubmitHandler<any> = async (data, event) => {
    event?.preventDefault()
    setLoading(true)
    const res = await sendPhoneOTPAndUpdateUser(data?.phoneNumber as string, data.primaryFunction as string)
    if (res) {
      router.push('/auth/signup/step/2/otp')
    }
  }
  return (
    <>
      <h3 className='text-4xl font-semibold mt-20 mb-10 text-center text-text'>
        {dict.signup?.continueSignup}
      </h3>

      <form className='flex flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-6 w-11/12'>
          <label className='pl-5 mb-0 text-secondary font-thin'>
            {dict.signup?.primaryFunction}
          </label>

          <div className='relative w-full rounded-full border py-2 pl-4 pr-4 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
            <select
              {...register('primaryFunction', {
                required: 'required'
              })}
              className={'text-text py-2 h-full flex items-center w-full bg-transparent' + (errors.primaryFunction !== undefined ? ' border-danger' : ' border-stroke')}
            >
              <option value='' disabled>
                {dict.signup?.select} {dict.signup?.primaryFunction}
              </option>
              {prmFunctions?.map((document: PrimaryFunction) => (
                <option key={document.id} value={document.id}>
                  {document.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='mb-6 w-11/12'>
          <label className='pl-5 mb-0 text-secondary font-thin'>
            {dict.signup?.country}
          </label>

          <div className='relative w-full rounded-full border py-2 pl-4 pr-4 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
            <select
              placeholder={dict.signup?.selectPrimary}
              {...register('country', {
                required: 'required'
              })}
              className={'text-text py-2 h-full flex items-center w-full bg-transparent' + (errors.country !== undefined ? ' border-danger' : ' border-stroke')}
            >
              <option value='' disabled selected>
                {dict.signup?.country} {dict.signup?.selectYour}
              </option>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
            </select>
          </div>
        </div>
        <div className='mb-6 w-11/12'>
          <label className='pl-5 mb-0 text-secondary font-thin'>
            {dict.signup?.phoneNumber}
          </label>

          <div className='relative'>
            <input
              type='dropdown'
              {...register('phoneNumber', {
                required: 'required'
              })}
              placeholder={dict.signup?.phonePlaceHolder}
              className={'text-text py-4 px-5 h-full flex items-center w-full bg-transparent rounded-full border first-letter:outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark  dark:focus:border-primary' + (errors.phoneNumber !== undefined ? ' border-danger' : ' border-stroke')}
            />
          </div>
        </div>
        <div className='mt-2'>
          <div className='text-center'>
            <input
              type={dict.general?.submit}
              value={loading === true ? dict.general?.wait : dict.general?.sendCode}
              disabled={loading}
              className='text-xl font-normal px-10 py-3 ml-4 cursor-pointer rounded-full border border-darkblue bg-darkblue text-white transition hover:bg-opacity-80 w-80'
            />
          </div>
        </div>
      </form>
    </>
  )
}
