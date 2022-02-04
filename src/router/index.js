/*
 * @Author: Amero
 * @Date: 2022-01-11 21:35:18
 * @LastEditors: Amero
 * @LastEditTime: 2022-02-02 21:11:27
 * @FilePath: \vue-demo-1\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import('../views/About.vue')
    },
    {
        path: '/mainpage',
        name: 'MainPage',
        component: () =>
            import('../views/MainPage.vue')
    },
    {
        path: '/info',
        name: 'InfoPage',
        component: () =>
            import('../views/InfoPage.vue')
    },
    {
        path: '/downloadfile',
        name: 'DownloadFile',
        component: () =>
            import('../views/menuPage/downloadfile.vue')

    },
    {
        path: '/musicplayer',
        name: 'MusicPlayer',
        component: () =>
            import('../views/menuPage/musicplayer.vue')
    },
    {
        path:'/pdfpage',
        name:'PDFPage',
        component:()=>
        import('../views/menuPage/pdfPage.vue')
    },
    {
        path:'/exampaper',
        name:'ExamPaper',
        component:()=>
        import('../views/menuPage/examPaper.vue')
    },
    {
        path:'/exampage',
        name:'ExamPage',
        component:()=>
        import('../views/examPage/examPage.vue')
    }
    
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router