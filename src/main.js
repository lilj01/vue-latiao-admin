import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import '@/styles/index.scss'

createApp(App)
  .use(store)
  .use(router)
  .use(installElementPlus)
  .mount('#app')
