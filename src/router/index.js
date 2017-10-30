import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home';
import Quadribol from '@/components/Quadribol';
import Menssagens from '@/components/Menssagens';
import todo from '@/components/todo';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/Quadribol',
    	name: 'Quadribol',
    	component: Quadribol

    },
    {
      path: '/Menssagens',
      name: 'Menssagens',
      component: Menssagens

    },
    {
      path: '/todo',
      name: 'todo',
      component: todo

    }
  ]
})
