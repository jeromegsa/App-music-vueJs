import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import	appView from '../App.vue'
import asideView from '../components/asideComponent.vue'
import albumView from '../views/albumView.vue'
import formulaireView from '../components/formComponent.vue'




  const routes= [
    {
      path: '/home',
      name: 'home2',
      component: HomeView
    },
    
      {
        path: '/',
        name: 'home',
        component:appView
      },

      {
        path: '/albums-details/index',
        name: 'albms-details',
        component:asideView
      },
      {
        path:'/album/:id',
        component:albumView,
      },
      {
        path:'/formulaire',
        component:formulaireView
      }
   
  ]
  const router = createRouter({
    history: createWebHistory(),
    routes
  })


export default router
