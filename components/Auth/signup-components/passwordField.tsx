'use client'
import React, { useState } from 'react'

export default function PasswordField ({ placeholder, register, errors }: { placeholder: string, register: any, errors: any }): JSX.Element {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false)

  const togglePasswordVisibility = (): void => {
    setPasswordVisible(!passwordVisible)
  }
  return (
    <div className='relative'>
      <input
        type={passwordVisible ? 'text' : 'password'}
        {...register}
        placeholder={placeholder}
        className={
          'text-text w-full rounded-full width-50 border bg-transparent py-4 pl-6 px-4 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary inline-block ' +
          (errors.email !== undefined ? ' border-danger' : ' border-stroke')
        }
      />
      <button
          type='button'
          onClick={togglePasswordVisibility}
          className='cursor-pointer focus:outline-none absolute right-5 top-4'
        >
          {passwordVisible
            ? (
              <i className="pi pi-eye-slash text-2xl" ></i>
              )
            : (
              <i className="pi pi-eye text-2xl" ></i>
              )
          }
        </button>
    </div>
  )
}
