'use client'
import { useState } from 'react'
import { InputSwitch } from 'primereact/inputswitch'

const Switcher = ({ name = '', label = '', defaultState = false, id }: { name: string, label: string, defaultState?: boolean, id: string }): JSX.Element => {
  const [enabled, setEnabled] = useState(defaultState)
  const [elemId] = useState(id ?? Math.random().toString(36).substring(7))

  return (
    <div>
      <label
        htmlFor={ elemId }
        className="flex cursor-pointer select-none items-center"
      >
        <InputSwitch name={name} checked={enabled} onChange={(e) => { setEnabled(e.value) }} />
        <span className='ml-1'>{label}</span>
      </label>
    </div>
  )
}

export default Switcher
