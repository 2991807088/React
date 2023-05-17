import React, { lazy } from "react";
import Auth from '@/utils/auth'
import lazyLoad from '@/utils/lazyLoad'
import Layouts from "@/components/layout";
const Login = lazyLoad(lazy(() => import("@/views/login/login")))
const Home = lazyLoad(lazy(() => import("@/views/home/home")))
const Set = lazyLoad(lazy(() => import("@/views/set/set")))
const NotFound = lazyLoad(lazy(() => import("@/views/notFound/404")))

const routes = [
    {
        path: '/',
        element: <Auth comp={<Layouts />} />,
        children: [
            {
                index: true, // 表示layout布局默认进入此路由
                element: Home,
                name: '综合看板'
            },
            {
                path: '/set',
                element: Set,
                name: '设置'
            }
        ]
    },
    {
        path: '/login',
        element: Login
    },
    {
        path: '/404',
        element: NotFound
    }
]
export default routes