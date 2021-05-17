import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tattoos from '../views/Tattoos.vue'
import Art from '../views/Art.vue'
import Contact from '../views/Contact.vue'
// import Trivia from '../components/TriviaNight/trivia.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/tatttoos',
    name: 'tattoos',
    component: Tattoos
  },
  {
    path:'/art',
    name:'art',
    component: Art
  },
  {
    path:'/contact',
    name:'contact',
    component: Contact
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
