import { createRouter, createWebHashHistory } from "vue-router";
import routes from './config'


const router = createRouter({
  history: createWebHashHistory(),
  routes,router
});
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
    return
  }
  let user = JSON.parse(localStorage.getItem('user'))
  if (user && user.userName && user.pwd) {
    next()
    return
  }
  next('/login')


})
export default router;
