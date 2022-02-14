import {
  SysConst
} from '@/constant/sys-const'
import {
  Storage
} from '@/utils/storage'
export default {
  namespaced: true,
  state: () => ({
    mainColor: Storage.getItem(SysConst.MAIN_COLOR) || SysConst.DEFAULT_COLOR
  }),
  mutations: {
    /**
     * 设置主题色
     */
    setMainColor(state, newColor) {
      state.mainColor = newColor
      Storage.setItem(SysConst.MAIN_COLOR, newColor)
    }
  },
  actions: {}
}
