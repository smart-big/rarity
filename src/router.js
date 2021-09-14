import { createRouter, createWebHashHistory } from 'vue-router'
import routes from 'virtual:generated-pages'

console.log(routes);

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export default router
