import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Home.vue')
    },
    {
        path: '/users',
        name: 'Users',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/User.vue')
    },
    {
        path: '/user/:id',
        name: 'User',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/UserSingle.vue')
    },
    {
        path: '/posts',
        name: 'Posts',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Post.vue')
    },
    {
        path: '/post/:id',
        name: 'Post',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/PostSingle.vue')
    },
    {
        path: '/Albums',
        name: 'Albums',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Album.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router