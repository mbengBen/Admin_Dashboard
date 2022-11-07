import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CategoryManager from '@/views/CategoryManagers/CategoryManager'
import AddCategory from '@/views/CategoryManagers/AddCategory'
import EditCategory from '@/views/CategoryManagers/EditCategory'
import ViewCategory from '@/views/CategoryManagers/ViewCategory'
import PageNotFound from '@/views/PageNotFound/PageNotFound'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect:'/categories',
    component: HomeView
  },
  {
    path: '/categories',
    name: 'CategoryManager',
    component: CategoryManager
  },

  {
    path: '/categories/add',
    name: 'AddCategory',
    component: AddCategory
  },

  {
    path: '/categories/edit/:categoryId',
    name: 'EditCategory',
    component: EditCategory
  },

  {
    path: '/categories/view/:categoryId',
    name: 'ViewCategory',
    component: ViewCategory
  },


  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
