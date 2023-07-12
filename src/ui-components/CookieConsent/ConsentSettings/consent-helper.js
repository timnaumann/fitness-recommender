export const createSettingsArray = (i18nSettings, storedCookieSettingsAndFunc) => (
  i18nSettings && i18nSettings.map((setting) => {
    const cookie = storedCookieSettingsAndFunc && storedCookieSettingsAndFunc.find(
      (c) => setting.cookieName === c.cookieName,
    )

    if (cookie) {
      return { ...setting, ...cookie }
    }
    return null
  })
)

export const createCookieStateArray = (cookiesArray) => {
  cookiesArray.forEach((cookie) => ({
    cookieName: cookie.cookieName,
    cookieState: cookie.value,
  }))
  return cookiesArray
}
