import Vue from 'vue'
import Router from 'vue-router'
import MakeOrder from '../templates/MakeOrder'
import MyOrder from '../templates/MyOrder'
import { urls } from '../assets/resources'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: urls.neworder,
      name: 'MakeOrder',
      component: MakeOrder
    },
    {
      path: urls.myorder,
      name: 'MyOrder',
      component: MyOrder
    }
  ]
})
