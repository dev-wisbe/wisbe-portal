import cookies from './cookies'

export const isAuthenticated = () => !!cookies.getItem('token')
  && !!cookies.getItem('refreshToken')

export default { isAuthenticated }
