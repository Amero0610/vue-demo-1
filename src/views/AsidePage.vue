<!--
 * @Author: Amero
 * @Date: 2022-01-11 21:45:39
 * @LastEditors: Amero
 * @LastEditTime: 2022-01-28 00:17:04
 * @FilePath: \vue-demo-1\src\views\AsidePage.vue
-->
<template>
  <div class="myMenubox">
    <Menu v-on="$listeners"></Menu>
  </div>
</template>
<script>
import Menu from '../components/AsidePage/Menu'
export default {
  components:{
    Menu
  }
}
</script>
<style>
</style>