<template>
  <div id="app">
    <el-container>
      <el-header id="HeaderStyle">
        <HeaderPage v-if="isContainShow"></HeaderPage
      ></el-header>
      <el-container>
        <el-aside>
          <Asidepage id="AsidePage"></Asidepage>
        </el-aside>
        <el-main class="mymainpage">
          <transition name="fade" mode="out-in">
            <router-view>
              <MainPage></MainPage>
            </router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Asidepage from "./views/AsidePage";
import HeaderPage from "./views/HeaderPage";
import MainPage from "./views/MainPage";
export default {
  name: "App",
  components: {
    Asidepage,
    HeaderPage,
    MainPage,
  },
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isContainShow: true,
    };
  },
  methods: {
    reload() {
      this.isContainShow = false;
      this.$nextTick(() => {
        this.isContainShow = true;
      });
    },
  },
  watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = "fade-leave";
      } else {
        this.transitionName = "fade-enter";
      }
    },
  },
};
</script>

<style>
@font-face {
  font-family: "ansFont";
  src: url("./assets/font/Gravity-V546.otf");
  
}
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
/* ::-webkit-scrollbar {
    width: 5px;
    height: 14px;
}
 
 ::-webkit-scrollbar-thumb {
/* background-color: #01c8dc;
border-radius: 3px; 
    background-color: #b6b6b6;
} */

.mymainpage {
  /* height: 500px; */
}
.classTrademark::-webkit-scrollbar {
  height: 1px;
  width: 6px;
}
.classTrademark::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: #bbbbbb;
}
.classTrademark::-webkit-scrollbar-track {
  background: #f3f3f3;
  border-radius: 4px;
}

#AsidePage {
  width: 100%;
  /* height: 83vh; */
  /* background-color: #5eaeff; */
}
* {
  margin: 0px;
  padding: 0px;
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-family: "asnFont"; */
  /* Montserrat  Poppins*/
   font-family: "Montserrat", sans-serif !important;

  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.el-header {
  padding: 0px !important;
}

.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 0.3s;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.3s;
}
#HeaderStyle {
}
</style>
