import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import { initReactI18next } from 'react-i18next'

let lang = localStorage.getItem("savedLang_michalgeci") == null ? 'en' : localStorage.getItem("savedLang_michalgeci")

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: lang,
    backend: {
      /* translation file path */
      loadPath: '/assets/i18n/{{ns}}/{{lng}}.json'
    },
    fallbackLng: 'en',
    debug: false,
    /* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },
    react: {
      useSuspense: false,
      wait: true
    }
  })

export default i18n
