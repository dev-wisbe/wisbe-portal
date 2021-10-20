const secureString = process.env.NODE_ENV === 'production'
  ? 'SameSite=Strict Secure'
  : 'SameSite=Strict'
const domain = process.env.VUE_APP_COOKIES_DOMAIN

const A_DAY_IN_SECONDS = 86400

const setItem = (name, value, maxAge = A_DAY_IN_SECONDS) => {
  document.cookie = [
    `${name}=${value}`,
    'path=/',
    `domain=${domain}`,
    `max-age=${maxAge}`,
    secureString,
  ].join(';')
}

const setAuthCookies = ({ token, refreshToken, sessionToken }) => {
  const THIRTY_DAYS_IN_SECONDS = 2592000

  setItem('token', token)
  setItem('session', sessionToken)
  setItem('refreshToken', refreshToken, THIRTY_DAYS_IN_SECONDS)
}

const getItem = (name) => {
  const cookieName = `${name}=`
  const decodedCookie = decodeURIComponent(document.cookie)
  const cookies = decodedCookie.split(';')

  for (let i = 0; i < cookies.length; i += 1) {
    let cookie = cookies[i]

    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1)
    }

    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length)
    }
  }

  return null
}

const removeItem = (name) => {
  document.cookie = [
    `${name}=`,
    'path=/',
    `domain=${domain}`,
    'expires=Thu, 01 Jan 1970 00:00:00 UTC',
    secureString,
  ].join(';')
}

export default {
  setItem,
  setAuthCookies,
  getItem,
  removeItem,
}
