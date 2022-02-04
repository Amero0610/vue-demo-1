/*
 * @Author: Amero
 * @Date: 2022-01-11 21:30:16
 * @LastEditors: Amero
 * @LastEditTime: 2022-02-02 00:47:16
 * @FilePath: \vue-demo-1\src\main.js
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/icon/myicon/iconfont.css'
import './../node_modules/element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(ElementUI, { locale })
Vue.prototype.$axios = axios
Vue.use(ElementUI);
import APlayer from '@moefe/vue-aplayer';
Vue.use(APlayer, {
  defaultCover: 'https://github.com/u3u.png',
  productionTip: true,
});



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
