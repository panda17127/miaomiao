import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'

Vue.use(Router)
/***
 * 两种路由请求方式
 * 1. 项目一开始运行就会被加载
 *  {
      path: '/',
      name: 'home',
      component: Home
    },
 * 2. 按需载入，使用到的时候才会被加载
 *  path: '/about',
    name: 'about',
    // route level code-splitting （路由等级代码拆分）
    // this generates a separate chunk (about.[hash].js) for this route （这将为此路由生成一个单独的块（关于[hash].js））
    // which is lazy-loaded when the route is visited. (当路由被访问时，它才会加载。 )
    component: () => import('./views/About.vue')
 */
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
     movieRouter,
     cinemaRouter,
     mineRouter,
     {
        path: '/*',
        redirect: '/movie'
     }
  ]
})
