import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'

import '@/styles/index.scss'

// 导入 svgIcon
import installIcons from '@/icons/index.js'

const app = createApp(App)
installIcons(app)
installElementPlus(app)
app.use(store)
  .use(router)
  .mount('#app')
