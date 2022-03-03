/*
 * @Author: Amero
 * @Date: 2022-01-11 21:35:18
 * @LastEditors: Amero
 * @LastEditTime: 2022-03-03 22:47:26
 * @FilePath: \vue-demo-1\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AboutPageCom from '../views/About.vue'
import MainPageCom from '../views/MainPage.vue'
import InfoPageCom from '../views/InfoPage.vue'
import DownloadPageCom from '../views/menuPage/downloadfile.vue'
import MusciPlayerPageCom from '../views/menuPage/musicplayer.vue'
import PdfPageCom from '../views/menuPage/pdfPage.vue'
import ExamPaperPageCom from '../views/menuPage/examPaper.vue'
import ExamPageCom from '../views/examPage/examPage.vue'
import UserLoginPageCom from '../views/userLoginPage/userLoginPage.vue'
import UserLoginLoginCom from '../components/loginPage/loginPage.vue'
import UserLoginlogupCom from '../components/loginPage/logupPage.vue'
import UserInfoCom from '../views/userinfo.vue'
import UsersCom from '../views/users.vue'
import PaperListCom from '../views/paperList.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        redirect:'/mainpage',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPageCom
    },
    {
        path: '/mainpage',
        name: 'MainPage',
        component: MainPageCom
    },
    {
        path: '/info',
        name: 'InfoPage',
        component: InfoPageCom
    },
    {
        path: '/downloadfile',
        name: 'DownloadFile',
        component: DownloadPageCom

    },
    {
        path: '/musicplayer',
        name: 'MusicPlayer',
        component: MusciPlayerPageCom
    },
    {
        path:'/pdfpage',
        name:'PDFPage',
        component:PdfPageCom
    },
    {
        path:'/exampaper',
        name:'ExamPaper',
        component:ExamPaperPageCom
    },
    {
        path:'/exampage',
        name:'ExamPage',
        component:ExamPageCom
    },
    {
        path:'/userlogin',
        name:"User",
        redirect:'/userlogin/login',
        component:UserLoginPageCom,
        children:[
            {
                path:"logup",
                name:"LogUp",
                component:UserLoginlogupCom
            },
            {
                path:"login",
                name:"LogIn",
                component:UserLoginLoginCom
            }
        ]

    },
    {
        path:'/userinfo',
        name:"UserInfo",
        component:UserInfoCom
    },{
        path:'/users',
        name:"Users Info",
        component:UsersCom
    },
    {
        path:'/showpaperlist',
        name:"Paper List",
        component:PaperListCom
    }
    
]

const router = new VueRouter({
    // mode: 'history',
    routes,
})

export default router