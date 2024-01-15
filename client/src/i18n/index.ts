import translationsEn from '../translations/en/translation.json'
import translationsEs from '../translations/es/translation.json'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init(
  {
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  },
  (err, t) => {
    if (err) return console.log('something went wrong loading', err)
    t('key')
  }
)

i18n.addResourceBundle('es', 'translation', translationsEs, true, true)
i18n.addResourceBundle('en', 'translation', translationsEn, true, true)

export default i18n
