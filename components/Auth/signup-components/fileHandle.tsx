'use client'

import React, { type FormEvent } from 'react'
import Image from 'next/image'
import './FileInput.css'

interface FileHandleProps {
  placeholder: string
  onChange?: (e: FormEvent) => void
  disabled: boolean
  value: File | undefined
}
export default function FileHandle ({ placeholder, onChange, disabled, value }: FileHandleProps): JSX.Element {
  return (
    <div className={'file-input-container border-stroke'}>
      <input
        type='file'
        name='file-input'
        id={placeholder}
        accept={'image/x-png,image/gif,image/jpeg'}
        multiple={false}
        onChange={(e) => {
          if (onChange !== undefined) {
            onChange(e)
          }
        }}
        disabled={disabled}
      />
      <label htmlFor={placeholder} className='flex justify-center mt-4'>
       {value == null || value === undefined || Object?.keys(value).length === 0
         ? <Image
          src={'/images/auth/fileUpload.png'}
          alt='Choose File'
          width={180}
          height={180}
        />
         : value?.name
      }
      </label>
    </div>
  )
}
