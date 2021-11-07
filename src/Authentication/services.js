// import http from '@/App/utils/http'
import { Auth } from 'aws-amplify';

export default {
  // getUser: () => http.get(
  //   'user',
  // ),
  submitUser: (username, password) => Auth.signIn(username, password),
  submitNewUser: (payload) => Auth.signUp(payload),
}
