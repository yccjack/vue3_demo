import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

import entrance from "@/home/entrance";
import circle from "@/home/circle";
import details from "@/pages/details";
import home from "@/home/home";
import chat from "@/pages/chat";
import circlePolymerization from "@/components/circle/circlePolymerization"

const routes = [
    {
        path: '/', name: 'entrance', component: entrance,
        children: [
            {
                // 当 /user/:id/profile 匹配成功
                // UserProfile 将被渲染到 User 的 <router-view> 内部
                path: '/details/:id',
                component: details,
            },
            {
                // 当 /user/:id/posts 匹配成功
                // UserPosts 将被渲染到 User 的 <router-view> 内部
                path: '/circle',
                component: circle

            }, {
                // 当 /user/:id/profile 匹配成功
                // UserProfile 将被渲染到 User 的 <router-view> 内部
                path: '/',
                component: home,
            }, {
                // 当 /user/:id/profile 匹配成功
                // UserProfile 将被渲染到 User 的 <router-view> 内部
                path: '/chat',
                component: chat,
            }
        ]
    }
    // { path: '/details/:id', name:'details',component: details},
    // {path: '/',name:'circleHome', component: circleHome },
    // { path: '/home',name:'home', component: home },
    // { path: '/chat',name:'chat', component: chat },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
