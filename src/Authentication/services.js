import http from '@/App/utils/http'

export default {
  getUser: () => http.get(
    'user',
  ),
}
