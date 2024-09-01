'use client'
import React, { useState } from 'react'
import { useDictionary } from 'libs/dictionary.context'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { updateUser } from 'actions/authActions'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

const StepThree: React.FC = () => {
  const { dict } = useDictionary()
  const { update } = useSession()
  const [loading, setLoading] = useState<any>(false)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      address1: '',
      address2: '',
      city: '',
      state: '',
      postalCode: ''
    }
  }
  )

  const onSubmit: SubmitHandler<any> = async (data, event) => {
    event?.preventDefault()
    setLoading(true)
    const locationData = {
      address1: data?.address1,
      address2: data?.address2,
      city: data?.city,
      state: data?.state,
      postalCode: data?.postalCode
    }
    const objectData = {
      location: locationData,
      onboardingStage: {
        update: {
          addressProvided: true
        }
      }
    }
    const res = await updateUser(objectData)
    if (res !== null) {
      await update({
        onboardingStage: {
          emailVarified: true,
          phoneVerified: true,
          addressProvided: true,
          documentsProvided: false
        }
      })
      router.push('/auth/signup/step/4')
    }
  }
  return (
    <>
      <h3 className='text-4xl font-semibold mt-20 mb-10 text-center text-text'>
        {dict.signup?.stepThreeHeading}
      </h3>
      <form className='w-full flex flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-6 w-11/12'>
          <label className='pl-5 mb-0 text-secondary font-thin'>
            {dict.signup?.addressLine} 1
          </label>
          <div className='relative'>
            <input
              type='text'
              placeholder={dict.general?.line + ' 1'}
              {...register('address1', {
                required: 'required'
              })}
              className={'text-text py-4 px-5 h-full flex items-center w-full bg-transparent rounded-full border first-letter:outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary' + (errors.address1 !== undefined ? ' border-danger' : ' border-stroke')}
            />
          </div>
        </div>
        <div className='mb-6 w-11/12'>
          <label className='pl-5 mb-0 text-secondary font-thin'>
            {dict.signup?.addressLine} 2
          </label>

          <div className='relative'>
            <input
              type='text'
              placeholder={dict.general?.line + ' 2'}
              {...register('address2', {
                required: 'required'
              })}
              className={'text-text py-4 px-5 h-full flex items-center w-full bg-transparent rounded-full border first-letter:outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary' + (errors.address2 !== undefined ? ' border-danger' : ' border-stroke')}
            />
          </div>
        </div>
        <div className='mb-6 w-11/12'>
          <label className='pl-5 mb-0 text-secondary font-thin'>
            {dict.signup?.city}
          </label>
          <div className='relative'>
            <input
              type='text'
              placeholder={dict.signup?.city}
              {...register('city', {
                required: 'required'
              })}
              className={'text-text py-4 px-5 h-full flex items-center w-full bg-transparent rounded-full border first-letter:outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary' + (errors.city !== undefined ? ' border-danger' : ' border-stroke')}
            />
          </div>
        </div>

        <div className='mb-6 w-11/12'>
          <label className='pl-5 mb-0 text-secondary font-thin'>
            {dict.signup?.addressPlaceHolder}
          </label>
          <div className='relative'>
            <input
              type='text'
              placeholder={dict.signup?.addressPlaceHolder}
              {...register('state', {
                required: 'required'
              })}
              className={'text-text py-4 px-5 h-full flex items-center w-full bg-transparent rounded-full border first-letter:outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary' + (errors.state !== undefined ? ' border-danger' : ' border-stroke')}
            />
          </div>
        </div>
        <div className='mb-8 w-11/12'>
          <label className='pl-5 mb-0 text-secondary font-thin'>
            {dict.signup?.postalCode}
          </label>
          <div className='relative'>
            <input
              type='text'
              placeholder={dict.signup?.postalCode}
              {...register('postalCode', {
                required: 'required'
              })}
              className={'text-text py-4 px-5 h-full flex items-center w-full bg-transparent rounded-full border first-letter:outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary' + (errors.postalCode !== undefined ? ' border-danger' : ' border-stroke')}
            />
          </div>
        </div>
        <div className='w-3/5'>
          <div className='text-center'>
            <input
              type={dict.general?.submit}
              value={loading === true ? dict.general?.wait : dict.general?.continue}
              disabled={loading}
              className='w-full text-xl cursor-pointer rounded-full border border-darkblue bg-darkblue py-3 px-4 text-white transition hover:bg-opacity-90'
            />
          </div>
        </div>
      </form>
    </>
  )
}

export default StepThree
