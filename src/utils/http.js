import axios from 'axios'
import router from '@/router'
import * as errorsEnum from '@/enums/errors'
import cookies from './cookies'

axios.defaults.baseURL = process.env.VUE_APP_BACKEND_API

const expectedErrors = [
  errorsEnum.UNAUTHORIZED,
  errorsEnum.FORBIDDEN,
  errorsEnum.INTERNAL_ERROR,
  errorsEnum.SERVICE_UNAVAILABLE,
]

const handleRequestError = (error) => {
  if (expectedErrors.includes(error.response.status)) {
    router.push({
      name: 'pageError',
      params: { error: error.response.status },
    })
  } else {
    throw error
  }
}

const getRequestHeader = () => {
  const authorization = cookies.getItem('token')

  return { authorization }
}

const get = (url, config) => {
  const configHeaders = config
    ? config.headers
    : {}

  const headers = {
    ...getRequestHeader(),
    ...configHeaders,
  }

  return axios
    .get(url, { ...config, headers })
    .catch((error) => {
      handleRequestError(error)
    })
}

const update = (url, data, config) => {
  const configHeaders = config
    ? config.headers
    : {}

  const headers = {
    ...getRequestHeader(),
    ...configHeaders,
  }

  return axios
    .put(url, data, { ...config, headers })
    .catch(handleRequestError)
}

export default {
  get,
  update,
}
