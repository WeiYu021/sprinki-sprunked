import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages } from '../app/i18n/settings'

const LanguageBase = ({ t, lng, second }) => {
  return (
    <>
      <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{{lng}}</strong> to:{' '}
      </Trans>
      {languages.filter((l) => lng !== l).map((l, index) => {
        return (
          <span key={l}>
            {index > 0 && (' or ')}
            <Link href={second ? `/${l}/${second}` : `/${l}`}>
              {l}
            </Link>
          </span>
        )
      })}
    </>
  )
}

export default LanguageBase;