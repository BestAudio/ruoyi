import Vue from 'vue'
import Router from 'vue-router'
import RyLogin from '@/pages/ry-login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: RyLogin,
    }
  ]
})
