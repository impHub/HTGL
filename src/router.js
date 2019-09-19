import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Ele from './views/ele-sy.vue'
import Index from './components/HelloWorld.vue'
import Nav from './views/Nav.vue'
import Commodity from './views/Commodity.vue'
import About from './views/About.vue'
//底下使用了一种模块化引入的方法
// import About from './views/About.vue'

Vue.use(Router)


export default new Router({
  // mode: 'history',
  routes: [
    // 主页默认路径
    { path: '/', redirect: '/index', },
    { path: '/index', name: 'index', component: Index, },
    // 导航栏
    {
      path: '/nav', name: 'nav', component: Nav,
      // 默认显示子路由
      redirect: '/nav/home',
      children: [
        // {path:'', redirect: '/nav/home',component: Home,},
        { path: '/nav/home', name: 'home', component: Home },
        { path: '/nav/commodity', name: 'commodity', component: Commodity },
        { path: '/nav/about', name: 'about', component: About },
        // { path: '/infoshow', name: 'infoshow', component: InfoShow },
        // { path: '/foundlist', name: 'foundlist', component: FoundList }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      // component:About
    },
    { path: '/ele', name: 'ele', component: Ele },
  ]
})
