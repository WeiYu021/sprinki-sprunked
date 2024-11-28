export const fallbackLng = 'en'
export const languages = [fallbackLng, 'zh', 'ja']
export const cookieName = 'i18next'
export const defaultNS = 'main'

export function getOptions (lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}