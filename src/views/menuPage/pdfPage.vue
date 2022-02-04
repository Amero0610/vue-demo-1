<!--
 * @Author: Amero
 * @Date: 2022-02-02 21:10:35
 * @LastEditors: Amero
 * @LastEditTime: 2022-02-03 02:29:09
 * @FilePath: \vue-demo-1\src\views\menuPage\pdfPage.vue
-->
<template>

    <div id="pdfContent">
        <iframe :src="pdfUrl" frameborder="0" height="100%" width="100%" />
    </div>
</template>
<script>

export default {
    data(){
        return{
            pdfUrl:"./pdfjs-2.12.313-dist/web/viewer.html?file="+"http://123.57.7.40:5057/煤气灯效应.pdf"
        }
    }
}
</script>
<style>
#pdfContent{
    width: 100%;
    height: 100%;
}
</style>