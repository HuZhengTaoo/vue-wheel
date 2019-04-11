import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Listview = () => import('components/listview/listview')
const createPoster = () => import('components/create-poster/create-poster')

export default  new Router({
  routes:[
    {
      path:'/',
      redirect:'/create-poster'
    },
    {
      path:'/listview',
      components:Listview
    },
    {
      path:'/create-poster',
      components:createPoster
    }
  ]
});