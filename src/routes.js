import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import home from "@/components/entrance";
import circleHome from "@/components/circlehome";
import details from "@/pages/details";
import chat from "@/pages/chat";

const routes =  [
    { path: '/details/:id', name:'details',component: details},
    {path: '/',name:'circleHome', component: circleHome },
    { path: '/home',name:'home', component: home },
    { path: '/chat',name:'chat', component: chat },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
