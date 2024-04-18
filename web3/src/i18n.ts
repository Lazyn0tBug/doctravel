import { createI18n } from 'vue-i18n'

const messages = {
  zh: {
    message: {
      entity: '镜心堂',
      home: '首页',
      physical: '医旅服务',
      medical: '再生医疗',
      referral: '应急医疗',
      about: '关于我们'
    }
  },
  en: {
    message: {
      entity: 'しみずゆきな',
      home: 'Home',
      physical: 'Service',
      medical: 'Medical',
      referral: 'Referral',
      about: 'About'
    }
  }
  // ...其他语言
}

const i18n = createI18n({
  locale: 'zh', // 设置默认语言
  fallbackLocale: 'zh', // 设置备选语言
  legacy: false, // 设置为false以使用新的Composition API
  globalInjection: true, // 允许全局注入
  messages // 设置语言包
})

export default i18n
console.log(i18n.global)
console.log(i18n.allowComposition)
console.log('locale value is ', i18n.global.locale.value)
