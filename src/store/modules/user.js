import {
  sys
} from '@/models/sys'
import {
  Storage as Cache
} from '@/utils/storage'
import {
  SysConst
} from '@/constant/index'
export default {
  namespaced: true,
  state: () => ({
    token: Cache.getItem(SysConst.TOKEN) || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      Cache.setItem(SysConst.TOKEN, token)
    }
  },
  actions: {
    login(context, userInfo) {
      return new Promise((resolve, reject) => {
        sys.login(userInfo)
          .then(data => {
            this.commit('user/setToken', data.token)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}
