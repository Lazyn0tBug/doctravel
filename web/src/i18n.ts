import { createI18n } from 'vue-i18n'

const messages = {
  zh: {
    message: {
      home: '首页',
      physical: '精密体检',
      medical: '再生医疗',
      referral: '应急医疗'
    }
  },
  en: {
    message: {
      home: 'Home',
      physical: 'Examination',
      medical: 'Medical',
      referral: 'Referral'
    }
  }
  // ...其他语言
}

const i18n = createI18n({
  locale: 'zh', // 设置默认语言
  fallbackLocale: 'zh', // 设置备选语言
  legacy: false, // 设置为false以使用新的Composition API
  globalInjection: true, // 允许全局注入
  messages, // 设置语言包
})

export default i18n
console.log(i18n.global)
console.log(i18n.allowComposition)
console.log("locale value is ", i18n.global.locale.value);
