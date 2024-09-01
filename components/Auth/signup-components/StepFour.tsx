'use client'
import React, { type FormEvent, useState } from 'react'
import { useDictionary } from 'libs/dictionary.context'
import FileHandle from './fileHandle'
import { type TradeLicenseType, type PersonalDocumentType } from '@prisma/client'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { uploadToAWS } from 'libs/s3'
import { updateUser } from 'actions/authActions'
import { useSession } from 'next-auth/react'

interface StepFour {
  documents: PersonalDocumentType[]
  license: TradeLicenseType[]
}

export default function OTP ({ documents, license }: StepFour): JSX.Element {
  const { dict } = useDictionary()
  const { update } = useSession()
  const [personalDocument, setPersonalDocument] = useState<File>()
  const [docUploadError, setDocUploadError] = useState<boolean>(false)
  const [licenseDoc, setLicenseDoc] = useState<File>()
  const [loading, setLoading] = useState<any>(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      personalDocumentType: '',
      tradeLicenseType: ''
    }
  }
  )
  const onSubmit: SubmitHandler<any> = async (data, event) => {
    event?.preventDefault()
    if (personalDocument === undefined || licenseDoc === undefined) {
      setDocUploadError(true)
      return null
    }
    setLoading(true)
    setDocUploadError(true)
    const objecData = {
      personalDocumentTypeId: data?.personalDocumentType,
      tradeLicenseTypeId: data.tradeLicenseType,
      onboardingStage: {
        update: {
          documentsProvided: true
        }
      }
    }
    const res = await updateUser(objecData)
    if (res !== undefined) {
      await update({
        onboardingStage: {
          emailVarified: true,
          phoneVerified: true,
          addressProvided: true,
          documentsProvided: true
        }
      })
      setLoading(false)
    }
    setLoading(false)
  }
  const onChangeDoc = async (e: FormEvent): Promise<void> => {
    setLoading(true)
    const uploadPromises = Array.from((e as any).target.files as FileList).map(async (file: any) => {
      try {
        const uploadedFile = await new Promise((resolve, reject) => {
          const subscription = uploadToAWS(file as File).subscribe(
            (fileData) => {
              if (fileData.data !== undefined) {
                resolve(fileData.data)
              }
            },
            (error) => {
              console.error('Error uploading file', error)
              reject(error)
            },
            () => {
              subscription.unsubscribe()
            }
          )
        })
        return uploadedFile
      } catch (error) {
        console.error('Error uploading file', error)
        setLoading(false)
        return null
      }
    })

    const uploadedFiles = await Promise.all(uploadPromises)
    const validFiles = uploadedFiles.filter((file) => file !== null)
    const objecData = {
      personalDocument: validFiles[0]
    }
    await updateUser(objecData)
    setPersonalDocument(validFiles[0] as File)
    setLoading(false)
  }

  const onChangeLicense = async (e: FormEvent): Promise<void> => {
    setLoading(true)
    const uploadPromises = Array.from((e as any).target.files as FileList).map(async (file: any) => {
      try {
        const uploadedFile = await new Promise((resolve, reject) => {
          const subscription = uploadToAWS(file as File).subscribe(
            (fileData) => {
              if (fileData.data !== undefined) {
                resolve(fileData.data)
              }
            },
            (error) => {
              console.error('Error uploading file', error)
              reject(error)
            },
            () => {
              subscription.unsubscribe()
            }
          )
        })
        return uploadedFile
      } catch (error) {
        console.error('Error uploading file', error)
        setLoading(false)
        return null
      }
    })

    const uploadedFiles = await Promise.all(uploadPromises)
    const validFiles = uploadedFiles.filter((file) => file !== null)
    const objecData = {
      tradeLicense: validFiles[0]
    }
    await updateUser(objecData)
    setLicenseDoc(validFiles[0] as File)
    setLoading(false)
  }
  return (
    <>
      <h3 className='text-4xl font-semibold mt-20 mb-10 text-center text-text'>
        {dict.signup?.stepFourHeading}
      </h3>

      <form className='flex flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-6 w-11/12'>
          <label className='pl-5 mb-0 text-secondary font-thin'>
            {dict.signup?.choosePersonalDocument}
          </label>

          <div className='relative w-full rounded-full border border-stroke py-2 pl-4 pr-4 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
            <select
              placeholder={dict.signup?.selectDocumentType}
              {...register('personalDocumentType', {
                required: 'required'
              })}
              className={'text-text py-2 h-full flex items-center w-full bg-transparent' + (errors.personalDocumentType !== undefined ? ' border-danger' : ' border-stroke')}
            >
              <option value='' disabled selected>
                {dict.signup?.selectDocumentType}
              </option>
              {documents?.map((document: PersonalDocumentType) => (
                <option key={document.id} value={document.id}>
                  {document.name}
                </option>
              ))}
            </select>

          </div>
          <div className='input-container'>
            <FileHandle placeholder={dict.signup.selectDocumentType} key={'1'} onChange={onChangeDoc} disabled={loading} value={personalDocument}/>
          </div>
        </div>
        <div className='mb-8 w-11/12'>
          <label className='pl-5 mb-0 text-secondary font-thin'>
            {dict.signup?.tradeLicense}
          </label>

          <div className='relative w-full rounded-full border border-stroke py-2 pl-4 pr-4 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
            <select
              placeholder={dict.signup?.tradeLicense}
              {...register('tradeLicenseType', {
                required: 'required'
              })}
              className='text-text py-2 h-full flex items-center w-full bg-transparent'
            >
              <option value='' disabled selected>
                {dict.signup?.tradeLicense}
              </option>
              {license?.map((license: TradeLicenseType) => (
                <option key={license.id} value={license.id}>
                  {license.name}
                </option>
              ))}
            </select>
          </div>
          <div className='input-container'>
            <FileHandle placeholder={dict.signup.tradeLicense} key={'2'} onChange={onChangeLicense} disabled={loading} value={licenseDoc}/>
          </div>
        </div>
        {docUploadError ? <div className='w-full text-left mb-8'> <span className='input-error'>{dict.general?.docError}</span></div> : ''}

        <div className='mb-5 w-3/5'>
          <div className='text-center'>
            <input
              type={dict.general?.submit}
              value={loading === true ? dict.general?.wait : dict.signup?.signup}
              disabled={loading}
              className='w-full text-xl cursor-pointer rounded-full border border-darkblue bg-darkblue py-3 px-4 text-white transition hover:bg-opacity-90'
            />
          </div>
        </div>
      </form>
    </>
  )
}
