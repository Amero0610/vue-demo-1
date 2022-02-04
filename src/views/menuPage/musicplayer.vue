<!--
 * @Author: Amero
 * @Date: 2022-02-01 23:00:45
 * @LastEditors: Amero
 * @LastEditTime: 2022-02-03 02:31:21
 * @FilePath: \vue-demo-1\src\views\menuPage\musicplayer.vue
-->
<template>
  <div>
    <div id="playerbox">
      <aplayer :audio="audio" :lrcType="3"  />
    </div>
  </div>
</template>
<script>
export default {
  name: "Vueaplayer",
  components: {},
  data() {
    return {
      audio: [
        {
          name: "Nevada",
          artist: "Vicetone",
          url: require("../../assets/file/Nevada.mp3"),
          cover: require("../../assets/file/NevadaPic.jpg"),
          lrc: require("../../assets/file/NevadabyVicetone.lrc"),
        },
                {
          name: "Nevada",
          artist: "Vicetone",
          url: require("../../assets/file/Nevada.mp3"),
          cover: require("../../assets/file/NevadaPic.jpg"),
          lrc: require("../../assets/file/NevadabyVicetone.lrc"),
        },
      ],
    };
  },
};
</script>
<style>
#playerbox {
  width: 50%;
}
</style>