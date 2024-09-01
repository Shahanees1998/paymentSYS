'use client'
import { useEffect, useState } from 'react'
import { MultiSelect as MultiSelectPrime } from 'primereact/multiselect'

const MultiSelect = ({ options, placeholder, className, name }: { options: any, placeholder: string, className: string, name: string }): JSX.Element => {
  const [value, setValue] = useState<any[]>([])

  useEffect(() => {
    console.log(value)
  }, [value])

  return (
    <>
      <MultiSelectPrime name={name} options={options} placeholder={placeholder} value={value} className={className} onChange={(e: any): void => { if (e?.value != null) { setValue(e.value as string[]) } }} />
      {value.map((v, index) => <input type='text' defaultValue={v} name={name} key={index} className='hidden' />)}
    </>
  )
}

export default MultiSelect
