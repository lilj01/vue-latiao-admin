import {
  sys
} from '@/models/sys'
import {
  Storage
} from '@/utils/storage'
import {
  SysConst
} from '@/constant/sys-const'
import router from '@/router'
export default {
  namespaced: true,
  state: () => ({
    token: Storage.getItem(SysConst.TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      Storage.setItem(SysConst.TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
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
    },
    async getUserInfo(context) {
      const userInfo = await sys.getUserInfo()
      console.log(userInfo)
      this.commit('user/setUserInfo', userInfo)
      return userInfo
    },
    logout() {
      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      Storage.removeAllItem()
      // todo:清理权限相关配置
      router.push('/login')
    }
  }
}
