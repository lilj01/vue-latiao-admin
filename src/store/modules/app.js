import {
  Storage
} from '@/utils/storage'
import {
  SysConst
} from '@/constant/sys-const'
export default {
  namespaced: true,
  state: () => ({
    sidebarOpened: true,
    language: Storage.getItem(SysConst.LANG) || 'zh'
  }),
  mutations: {
    triggerSidebarOpened(state) {
      state.sidebarOpened = !state.sidebarOpened
    },
    setLanguage(state, lang) {
      Storage.setItem(SysConst.LANG, lang)
      state.language = lang
    }
  },
  actions: {}
}
