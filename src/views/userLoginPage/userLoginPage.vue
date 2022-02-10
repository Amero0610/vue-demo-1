<!--
 * @Author: Amero
 * @Date: 2022-02-06 19:39:03
 * @LastEditors: Amero
 * @LastEditTime: 2022-02-11 00:19:20
 * @FilePath: \vue-demo-1\src\views\userLoginPage\userLoginPage.vue
-->
<template>
    <div id="MainBox">
 <router-view></router-view>
 <router-link to='/mainpage'>root</router-link>
 <br>
 <router-link to="/userlogin/login"> newx</router-link>
    </div>
</template>
<script>
export default {
    components:{

    }
}
</script>
<style>
#MainBox{
    width: 100%;
    height: 100vh;
    background-color: rgb(171, 247, 218);
}
</style>