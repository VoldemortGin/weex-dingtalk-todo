import VueRouter from 'vue-router';
import Home from '../pages/home/index.vue';
import TodoApp from '../pages/app/index.vue';

const routes = [
  {
    path:'/',
    name: 'home',
    component: Home
  },
  {
    path: '/todoapp',
    name: 'todoapp',
    component: TodoApp
  }
];

export default function Router(Vue){
  Vue.use(VueRouter);
  const router = new VueRouter({
    routes: routes
  });
  return {
    router
  }
}
