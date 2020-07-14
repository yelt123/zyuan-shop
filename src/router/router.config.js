const routes = [{
    path: '/',
    redirect: '/Home'
}, {
    path: '/Home',
    name: 'Home',
    component: () => import( /* webpackChunkName: "Home" */ '@/layout/Home.vue'),
    meta: {
        title: '首页'
    }
}, {
    path: '/Login',
    name: 'Login',
    component: () => import( /* webpackChunkName: "Login" */ '@/layout/Login.vue'),
    meta: {
        title: '登录'
    },
    beforeEnter(to, from, next) {
        // console.log(to);
        // console.log(from);
        next()
    }
}, {
    path: '/Category',
    name: 'Category',
    component: () => import( /* webpackChunkName: "Category" */ '@/layout/Category.vue'),
    meta: {
        title: '分类'
    }
}, {
    path: '/Cart',
    name: 'Cart',
    component: () => import( /* webpackChunkName: "Cart" */ '@/layout/Cart.vue'),
    meta: {
        title: '购物车',
        isLogin: true
    }
}, {
    path: '/Profile',
    name: 'Profile',
    component: () => import( /* webpackChunkName: "Profile" */ '@/layout/Profile.vue'),
    meta: {
        title: '个人中心',
        isLogin: true
    }
}, {
    path: '/Search',
    name: 'Search',
    component: () => import( /* webpackChunkName: "Home" */ '@/views/Home/SearchPage.vue'),
    meta: {
        title: '搜索'
    },
    beforeEnter(to, from, next) {
        // this.$router.go(0)
        // console.log(to,from)
        next()
    },
    children: [{
        path: '/SearchResult',
        name: 'SearchResult',
        component: () => import( /* webpackChunkName: "Home" */ '@/views/Home/SearchResult.vue'),
        meta: {
            title: '搜索结果'
        }
    }]
}, {
    path: '/ResultSearch/:catname',
    name: 'ResultSearch',
    component: () => import( /* webpackChunkName: "Home" */ '@/views/Home/ResultSearch.vue'),
}, {
    path: '/Register',
    name: 'Register',
    component: () => import( /* webpackChunkName: "Login" */ '@/views/Login/Register.vue'),
    meta: {
        title: '注册',
    }
}, {
    path: '/Order',
    name: 'Order',
    component: () => import( /* webpackChunkName: "Profile" */ '@/views/Profile/Order.vue'),
    meta: {
        title: '我的订单',
    }
}, {
    path: '/Address',
    name: 'Address',
    component: () => import( /* webpackChunkName: "Profile" */ '@/views/Profile/Address.vue'),
    meta: {
        title: '我的地址',
    }
}, {
    path: '/SafeCenter',
    name: 'SafeCenter',
    component: () => import( /* webpackChunkName: "Profile" */ '@/views/Profile/SafeCenter.vue'),
    meta: {
        title: '安全中心',
    }
}, {
    path: '/Setting',
    name: 'Setting',
    component: () => import( /* webpackChunkName: "Profile" */ '@/views/Profile/Setting.vue'),
    meta: {
        title: '设置',
    }
}, {
    path: '/EditAddress',
    name: 'EditAddress',
    component: () => import( /* webpackChunkName: "Profile" */ '@/views/Profile/EditAddress.vue'),
    meta: {
        title: '地址管理',
        NoKeepAlive: true
    }
}, {
    path: '/MobileVerify',
    name: 'MobileVerify',
    component: () => import( /* webpackChunkName: "Profile" */ '@/views/Profile/MobileVerify.vue'),
    meta: {
        title: '手机验证',
    }
}, {
    path: '/ChangePassword',
    name: 'ChangePassword',
    component: () => import( /* webpackChunkName: "Profile" */ '@/views/Profile/ChangePassword.vue'),
    meta: {
        title: '修改登录密码',
    }
}]

export default routes