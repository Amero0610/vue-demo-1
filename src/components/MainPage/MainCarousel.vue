<template>
  <div>
    <div id="MainPageText">
      <p>This is a carousel</p>
    </div>
    <div id="Carousel">
      <el-carousel trigger="click" type="card">
        <el-carousel-item v-for="item in imageSrc" :key="item">
          <el-image
            :src="item"
            fit="contain"
            :preview-src-list="srclist"
          ></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageSrc: [
        require("../../assets/pictures/pic1.jpg"),
        require("../../assets/pictures/pic2.jpg"),
        require("../../assets/pictures/pic3.jpg"),
        require("../../assets/pictures/pic4.jpg"),
        require("../../assets/pictures/pic5.jpg"),
        require("../../assets/pictures/pic6.jpg"),
        require("../../assets/pictures/pic7.jpg"),
        require("../../assets/pictures/pic8.jpg"),
      ],
      srclist: [
        require("../../assets/pictures/pic1.jpg"),
        require("../../assets/pictures/pic2.jpg"),
        require("../../assets/pictures/pic3.jpg"),
        require("../../assets/pictures/pic4.jpg"),
        require("../../assets/pictures/pic5.jpg"),
        require("../../assets/pictures/pic6.jpg"),
        require("../../assets/pictures/pic7.jpg"),
        require("../../assets/pictures/pic8.jpg"),
      ],
    };
  },
};
</script>
<style>
#MainPageText {
  font-weight: bolder;
  font-size: 20px;
}
</style>
