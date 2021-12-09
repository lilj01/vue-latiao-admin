import {
  http
} from '@/utils/http.js'
import {
  SvcConst
} from '@/constant/svc-const'
import md5 from 'md5'

class Sys {
  login(data) {
    const password = md5(data.password)
    const {
      username
    } = data
    return http.request({
      url: SvcConst.SYS_LOGIN,
      method: 'post',
      data: {
        username,
        password
      }
    })
  }

  getUserInfo() {
    return http.request({
      url: SvcConst.SYS_PROFILE
    })
  }
}
const sys = new Sys()
export {
  sys,
  Sys
}
