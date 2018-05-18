import Vue from 'vue'
import Router from 'vue-router'
// import Layout from '@/components/layout'
import IndexPage from '@/pages/Indexpage'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    }
  ]
})
