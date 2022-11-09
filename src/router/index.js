import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CategoryManager from '@/views/CategoryManagers/CategoryManager'
import AddCategory from '@/views/CategoryManagers/AddCategory'
import EditCategory from '@/views/CategoryManagers/EditCategory'
import ViewCategory from '@/views/CategoryManagers/ViewCategory'
import PageNotFound from '@/views/PageNotFound/PageNotFound'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import { authGuard } from "../helpers/auth.Guard";

const routes = [
  {
    path: '/categories',
    name: 'CategoryManager',
    component: CategoryManager
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
    path: '/',
    name: 'Login',
    component: Login
        // component: HomeView
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

router.beforeEach((to, from, next) => {
  console.log(to);
  if(to.matched[0].name == 'CategoryManager'){
      authGuard()
  }
  next();
})
export default router
