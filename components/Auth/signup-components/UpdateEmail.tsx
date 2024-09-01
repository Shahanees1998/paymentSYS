'use client'

import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog'
import { useDictionary } from 'libs/dictionary.context'
import { CreateOTPAndSendEmail, isEmailUnique, updateUser } from 'actions/authActions'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

interface updatedInfoProps {
  title: string
  value: string
}

export default function UpdateEmail ({ title, value }: updatedInfoProps): JSX.Element {
  const [openDialog, setOpenDialog] = useState(false)
  const { update } = useSession()
  const [emailInUse, setEmailInUse] = useState<any>(false)
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
        setEmailInUse(false)

        const isEmailUniqueResp = await isEmailUnique(val as string)
        if (!isEmailUniqueResp) {
          setLoading(false)
          setOpenDialog(!openDialog)
          setEmailInUse(true)
          return
        }
        const objectData = {
          email: val as string
        }
        const updatedUser = await updateUser(objectData)
        if (updatedUser !== undefined) {
          const res2 = await update({
            email: val as string
          })
          await CreateOTPAndSendEmail(val as string)
          if (res2 !== undefined) {
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
            {emailInUse === true ? <span className='input-error'>{dict?.signup?.emailInUse}</span> : ''}
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
