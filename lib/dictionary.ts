import en from './locales/en.json'
import cn from './locales/cn.json'
const dictionaries: any = {
  en,
  cn
}

export const getDictionary = (lang: string): any => {
  return dictionaries[lang]
}
