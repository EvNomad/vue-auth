import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

const routes = [
  {
    path: '/', component: Home, name: 'home',
  },
  {
    path: '/login', component: Login, name: 'login',
  },
  {
    path: '/register', component: Register, name: 'register',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
