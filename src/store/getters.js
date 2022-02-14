import variables from '@/styles/variables.scss'
const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  hasUserInfo: state => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  sidebarOpened: state => state.app.sidebarOpened,
  cssVar: state => variables,
  language: state => state.app.language,
  mainColor: state => state.theme.mainColor
}
export default getters
