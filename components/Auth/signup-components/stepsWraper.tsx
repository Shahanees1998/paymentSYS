'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { getDictionary } from 'libs/dictionary'

const steps = [
  { name: '1', path: '/en/auth/signup/step/1' },
  { name: '2', path: '/en/auth/signup/step/2' },
  { name: '3', path: '/en/auth/signup/step/3' },
  { name: '4', path: '/en/auth/signup/step/4' }
]

const StepsWraper: React.FC = () => {
  const [dict, setDict] = useState<any>({})
  const params = useParams()
  const { vars } = params
  const number = vars?.length > 0 ? vars[0] : '1'

  useEffect(() => {
    setDict(getDictionary(params.lang as string))
  }, [params])

  return (
    <div className='flex justify-center items-center pb-4'>
      {steps.map((step, index) => (
        <div key={index} className='relative flex items-center justify-center'>
          <Link href={step.path}>
            <div
              className={`flex items-center justify-center border h-11 w-11 ${
                Number(step.name) < Number(number)
                  ? 'bg-additional text-white'
                  : Number(step.name) === Number(number)
                  ? 'bg-darkblue text-white'
                  : 'bg-white text-darkblue'
              } border-sky-400 rounded-full mx-4 font-normal`}
            >
              {dict?.general !== undefined ? dict?.general[index + 1] : ''}
            </div>
          </Link>
          {index < steps.length - 1 && (
            <div
              className='w-20 h-[1px] bg-darkblue rounded-full'
            ></div>
          )}
        </div>
      ))}
    </div>
  )
}

export default StepsWraper
