import Vue from 'vue'
import VueRouter from 'vue-router'

const ConstantQuasi = () => import('views/constantquasi/ConstantQuasi')
const Steady = () => import('views/steady/Steady')
const Stowage = () => import('views/stowage/Stowage')
const Intensity = () => import('views/intensity/Intensity')
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/Stowage'
  },
  {
    path: '/Stowage',
    component: Stowage
  },
  {
    path: '/Steady',
    component: Steady
  },
  {
    path: '/ConstantQuasi',
    component: ConstantQuasi
  },
  {
    path: '/Intensity',
    component: Intensity
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
