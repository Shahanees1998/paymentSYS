'use client'

import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog'
import { useDictionary } from 'libs/dictionary.context'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { updateUser } from 'actions/authActions'
import { sendOTPPhone } from 'libs/phoneOtpHelper'

interface updatedInfoProps {
  title: string
  value: string
}

export default function UpdatePhone ({ title, value }: updatedInfoProps): JSX.Element {
  const [openDialog, setOpenDialog] = useState(false)
  const { update } = useSession()
  const [val, setVal] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<any>(false)
  const { dict } = useDictionary()
  const router = useRouter()
  const onClose = (): void => {
    setOpenDialog(!openDialog)
  }

  const onSubmit = async (): Promise<any> => {
    try {
      if (val !== '') {
        setLoading(true)
        const objectData = {
          phone: val as string
        }
        const updateduser = await updateUser(objectData)
        if (updateduser !== undefined) {
          await update({
            phone: val as string
          })
          const res = await sendOTPPhone(val as string)
          if (res !== undefined) {
            router.refresh()
            setOpenDialog(false)
          }
        }
      } else {
        setError(true)
      }
    } catch (error) {
      console.error('An error occurred:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className='cursor-pointer' onClick={() => { setOpenDialog(true) }}>{dict.signup?.changeOtpSource?.replace('{title}', title).replace('{value}', value)}</div>
      <Dialog
        draggable={false}
        position="top"
        header={dict.general?.update + ' ' + title}
        visible={openDialog}
        style={{ width: '40vw' }}
        onHide={onClose}
      >
        <>
          <div className='mb-6 w-full'>
            <label className='pl-4 block mb-2 text-secondary'>
              {title}
            </label>
            <div className='relative'>
              <input
                placeholder={dict.general?.enter + ' ' + title}
                value={val}
                onChange={(e) => { setVal(e.target.value) }}
                className={
                  'text-text w-full rounded-full width-50 border bg-transparent py-4 pl-6 px-4 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ' +
                  (error ? ' border-danger' : ' border-stroke')
                }
              />
            </div>
          </div>
          <div className='mb-5 mt-14'>
            <div className='flex align-center justify-center'>
              <input
                type='button'
                value={dict.general?.close}
                onClick={() => { setOpenDialog(!openDialog) }}
                className='text-xl font-normal px-10 py-4 cursor-pointer rounded-full border border-darkblue text-darkblue transition hover:bg-opacity-80 w-60'
              />
              <input
                type='button'
                value={loading === true ? dict.general?.wait : dict.general?.continue}
                onClick={async () => await onSubmit()}
                className='text-xl font-normal px-10 py-4 ml-4 cursor-pointer rounded-full border border-darkblue bg-darkblue text-white transition hover:bg-opacity-80 w-60'
              />
            </div>
          </div>
        </>
      </Dialog>
    </div>
  )
}
