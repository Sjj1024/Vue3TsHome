import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'login',
        component: ()=> import('../views/login/index.vue')
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: ()=> import('../views/welcome/index.vue')
  },
]

const router = createRouter({
    history: createWebHashHistory(""),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve) => {
            if (savedPosition) {
                return savedPosition
            } else {
                if (from.meta.saveSrollTop) {
                    const top: number =
                        document.documentElement.scrollTop ||
                        document.body.scrollTop
                    resolve({ left: 0, top })
                }
            }
        })
    },
})

export default router