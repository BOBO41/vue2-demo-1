//路由
import Vue from 'vue'
import Router from 'vue-router'
import {getCookie} from '../utils/util';
//路由懒加载
const index = r => require.ensure([], () => r(require('@/pages/index/index')), 'index')
const list = r => require.ensure([], () => r(require('@/pages/list/list')), 'list')
const detail = r => require.ensure([], () => r(require('@/pages/detail/detail')), 'detail')
const login = r => require.ensure([], () => r(require('@/pages/login/login')), 'login')
const user = r => require.ensure([], () => r(require('@/pages/user/user')), 'user')
const journey = r => require.ensure([], () => r(require('@/pages/journey/journey')), 'journey')
Vue.use(Router)
//默认 hash 模式
const router = new Router({
    // 带查询参数，变成 /register?plan=private
    //router.push({ path: 'register', query: { plan: 'private' }})
    routes: [
        {
            path: '',
            redirect: '/index'
        },{
            path:'/index',
            component:index
        },{
            path:'/list/:type',
            name:'list',
            component:list
        },{
            path:'/detail/:id',
            name:'detail',
            component:detail
        },{
            path:'/login',
            component:login
        },{
            path:'/journey',
            component:journey
        },{
            path:'/user',
            component:user,
            meta:{
                requiresAuth:true
            }
        }
    ]
});
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!getCookie('token')) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next();
        }
    } else {
        next();
    }
});
export default router;
