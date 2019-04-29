export default function ({ app }) {

  app.$moment.locale(app.i18n.locale)

  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    app.$moment.locale(newLocale)
  }
}
