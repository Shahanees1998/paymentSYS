'use client'
import React, { useEffect, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import SocialSignups from './socialSignups'
import PasswordField from './passwordField'
import { CreateOTPAndSendEmail, isEmailUnique } from 'actions/authActions'
import { useDictionary } from 'libs/dictionary.context'
import { useRouter } from 'next/navigation'

const StepOne: React.FC = () => {
  const [emailInUse, setEmailInUse] = useState<any>(false)
  const [loading, setLoading] = useState<any>(false)
  const router = useRouter()

  const { dict } = useDictionary()

  useEffect(() => {
    router.prefetch('/auth/signup/step/1/otp')
  }, [router])

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
    }
  }
  )

  const onSubmit: SubmitHandler<any> = async (data, event) => {
    event?.preventDefault()
    setLoading(true)
    setEmailInUse(false)
    const isEmailUniqueResp = await isEmailUnique(data.email as string)
    if (!isEmailUniqueResp) {
      setLoading(false)
      setEmailInUse(true)
      return
    }

    try {
      await CreateOTPAndSendEmail(data.email as string)
      await signIn('credentials', { username: data.email, password: data.password, redirect: false })
      router.push('/auth/signup/step/1/otp')
    } catch (error) {

    }
    setLoading(false)
  }

  return (
    <div>
      <h3 className='text-4xl font-bold my-12 text-center text-text'>
        {dict.signup?.topHeading}
      </h3>
      <h2 className='text-6xl mb-12 font-bold text-center text-darkblue'>
        {dict.signup?.heading}
      </h2>

      <form className='flex flex-col items-center px-10' onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-6 w-full'>
          <label className='pl-4 block mb-1/2 text-secondary'>
            {dict.general?.email}
          </label>

          <div className='relative'>
            <input
              placeholder={dict.general?.enterEmail}
              {...register('email', {
                required: 'required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'emailValidate'
                }
              })}
              className={
                'text-text w-full rounded-full width-50 border bg-transparent py-4 pl-6 px-4 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ' +
                (errors.email !== undefined ? ' border-danger' : ' border-stroke')
              }
            />
            <span className='absolute right-5 top-4'>
              <i className="pi pi-angle-down text-2xl" ></i>
            </span>
          </div>
          {errors.email !== undefined && dict?.signup !== undefined ? <span className='input-error'>{dict?.signup[errors.email.message ?? '']}</span> : ''}
          {emailInUse === true ? <span className='input-error'>{dict?.signup?.emailInUse}</span> : ''}
        </div>
        <div className='mb-6 w-full'>
          <label className='pl-4 block mb-1/2 text-secondary'>
            {dict.general?.password}
          </label>
          <PasswordField register={register('password', {
            required: 'required',
            minLength: {
              value: 6,
              message: 'min'
            }
          })} errors={errors} placeholder={dict.general?.enterPassword} />
          {errors.password !== undefined && dict?.signup !== undefined ? <span className='input-error'>{dict?.signup[errors.password.message ?? '']}</span> : ''}
        </div>
        <div className='mb-7 w-full'>
          <label className='pl-4 block mb-1/2 text-secondary'>
            {dict.general?.confirmPassword}
          </label>
          <PasswordField register={register('confirmPassword', {
            required: 'required',
            minLength: {
              value: 6,
              message: 'min'
            },
            validate: (val: string) => {
              if (watch('password') !== val) {
                return 'passwordMismatch'
              }
            }
          }) } errors={errors} placeholder={dict.general?.reEnterPassword}/>
          {errors.confirmPassword !== undefined && dict?.signup !== undefined ? <span className='input-error'>{dict?.signup[errors.confirmPassword.message ?? '']}</span> : ''}
        </div>

        <input
          type='submit'
          value={loading === true ? dict.general?.wait : dict.general?.continue}
          className='text-xl cursor-pointer rounded-full border border-lightblue bg-lightblue py-3 px-4 text-white transition hover:bg-opacity-90 w-2/3'
        />
      </form>
      <div className='flex items-center justify-center my-8'>
        <div
          style={{ height: '1px' }}
          className='w-35 bg-gray-1 rounded-full'
        ></div>
        <p className='px-5 block mb-1 text-textsecondary'>{dict.general?.or}</p>
        <div
          style={{ height: '1px' }}
          className='w-35 bg-gray-1 rounded-full'
        ></div>
      </div>
      <SocialSignups dict={dict} />
    </div>
  )
}

export default StepOne
