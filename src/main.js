import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import i18n from '@/i18n'

import '@/styles/index.scss'

// 导入 svgIcon
import installIcons from '@/icons/index.js'
// 导入权限控制模块
import './permission'

const app = createApp(App)
installIcons(app)
installElementPlus(app)
app.use(store)
  .use(router)
  .use(i18n)
  .mount('#app')
