import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import layout from '@/layout'

const publicRoutes = [{
  path: '/login',
  component: () => import('@/views/login/index')
}, {
  path: '/',
  component: layout
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
