'use client'
import LanguageBase from '@/game_components/LanguageBase'
import { useTranslation } from '@/app/i18n/client'
import { usePathname } from 'next/navigation'
import { languages } from '@/app/i18n/settings'

const Language = ({ lng }) => {
  const pathname = usePathname()
  const pathSegments = pathname.split('/')
  let secondSegment
  if (pathSegments.length == 3) {
    secondSegment = pathSegments[2]
  }else if(pathSegments.length == 2){
    if(!languages.includes(pathSegments[1])){
      secondSegment = pathSegments[1]
    }
  }
  
  const { t } = useTranslation(lng, 'language')

  return (
    <div className="flex items-center justify-end px-4">
      <LanguageBase t={t} lng={lng} second={secondSegment} />
    </div>
  )
}

export default Language;