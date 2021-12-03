// import {
//   login
// } from '@/api/sys'
import {
  Storage as Cache
} from '@/utils/storage'
import {
  TOKEN
} from '@/constant/index'
export default {
  namespaced: true,
  state: () => ({
    token: Cache.getItem(TOKEN) || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      Cache.setItem(TOKEN, token)
    }
  },
  actions: {
    login(context, token) {
      this.commit('user/setToken', token)
    }
  }
}
