import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

// import translationEN from '../modules/home/banner/i18n/en.json';
import authTranslationVI from '../modules/auth/i18n/vn.json'
import accountTranslationVI from '../modules/user-system/account/i18n/vn.json'

// the translations
const resources = {
	en: {
		// translation: translationEN
	},
	vi: {
		translation: {
			AUTH: {
				...authTranslationVI
			},
			USER_SYSTEM: {
				ACCOUNT: {
					...accountTranslationVI
				}
			}
		}
	}
}
console.log(resources, 'resources')
i18n.use(Backend)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: 'vi',
		debug: true,
		interpolation: {
			escapeValue: false // not needed for react as it escapes by default
		}
	})

export default i18n
