import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router.config.js'
Vue.use(VueRouter)





const router = new VueRouter({
    mode: 'hash',
    routes,
    // base:process.env.BASE_URL,
})

router.beforeEach((to, from, next) => {
    // console.log(to.name)
    document.title = to.meta.title
    if (to.meta.isLogin && !localStorage.uid) {
        next({
            name: 'Login'
        })
    } else {
        next()
    }

})

export default router