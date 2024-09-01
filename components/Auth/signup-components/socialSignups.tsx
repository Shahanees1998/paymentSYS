import React from 'react'
import Image from 'next/image'

const SocialSignups: React.FC<{ dict: any }> = ({ dict }) => {
  return (
    <div className=' flex flex-col items-center'>
      <button className='w-2/3 text-xl cursor-pointer flex items-center justify-center gap-3.5 rounded-full border border-stroke bg-white py-3 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50'>
      <span className='w-6 h-6 block relative'>
        <Image
            src={'/images/auth/icons/google_logo.svg'}
            alt={dict.signup?.googleLogo}
            layout='fill'
          />
        </span>
        {dict.general?.continueGoogle}
      </button>
      <button className='w-2/3 my-6 text-xl cursor-pointer flex items-center justify-center gap-3.5 rounded-full border border-stroke bg-white py-3 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50'>
        <span className='w-6 h-6 block relative'>
          <Image
            src={'/images/auth/appleLogo.svg'}
            alt={dict.signup?.appleLogo}
            layout='fill'
          />
        </span>
        {dict.general?.continueApple}
      </button>
      <button className='w-2/3 text-xl cursor-pointer flex items-center justify-center gap-3.5 rounded-full border border-stroke bg-white py-3 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50'>
        <span className='w-6 h-6 block relative'>
        <Image
            src={'/images/auth/icons/fblogo.svg'}
            alt={dict.signup?.facebookLogo}
            layout='fill'
          />
        </span>
        {dict.general?.continueFacebook}
      </button>
    </div>
  )
}

export default SocialSignups
