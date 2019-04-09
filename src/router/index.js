import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Listview = () => import('components/listview/listview')

export default  new Router({
  routes:[
    {
      path:'/',
      redirect:'/listview'
    },
    {
      path:'/listview',
      components:Listview
    }
  ]
});