import {
  http
} from '@/utils/http.js'
import md5 from 'md5'

class Sys {
  login(data) {
    const password = md5(data.password)
    const {
      username
    } = data
    return http.request({
      url: '/sys/login',
      method: 'post',
      data: {
        username,
        password
      }
    })
  }

  getUserInfo() {
    return http.request({
      url: '/sys/profile'
    })
  }
}
const sys = new Sys()
export {
  sys,
  Sys
}