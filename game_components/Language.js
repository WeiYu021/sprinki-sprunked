'use client'
import LanguageBase from '@/game_components/LanguageBase'
import { useTranslation } from '@/app/i18n/client'
import { usePathname } from 'next/navigation'

const Language = ({ lng }) => {
  const pathname = usePathname()
  const pathSegments = pathname.split('/')
  const secondSegment = pathSegments[2]
  const { t } = useTranslation(lng, 'language')

  return (
    <div className="flex items-center justify-end px-4">
      <LanguageBase t={t} lng={lng} second={secondSegment} />
    </div>
  )
}

export default Language;