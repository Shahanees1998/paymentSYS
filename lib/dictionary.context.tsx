'use client'
import { createContext, useContext, useState } from 'react'

export interface IDictionary {
  data: any
}

const DictionaryController = (data: any): any => {
  const [dict, setDict] = useState<any | null>(data)

  return {
    dict,
    setDict
  }
}

const DictionaryContext = createContext<ReturnType<typeof DictionaryController>>({
  dict: {},
  setDict: () => []
})

export const DictionaryProvider = ({ children, data }: { children: React.ReactNode, data: any }): any => (
  <DictionaryContext.Provider value={DictionaryController(data)}>
    {children}
  </DictionaryContext.Provider>
)

export const useDictionary = (): any => useContext(DictionaryContext)
