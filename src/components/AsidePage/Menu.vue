<template>
  <div class="MenuItemtext">
    <!-- <el-radio-group
      v-model="isCollapse"
      id="MenuButton"
      style="margin-bottom: 20px"
      fill="#6c5ce7"
      text-color="#a29bfe"
      size="medium "
    >
      <el-radio-button :label="false">
        <i class="el-icon-my-zhankai-"></i>Expand</el-radio-button
      >
      <el-radio-button :label="true" >
        <i class="el-icon-my-zhankai"></i>Collapse</el-radio-button
      >
    </el-radio-group> -->
    <el-row type="flex" justify="start" align="top">
      <el-col :span="5" style="margin-bottom: 5px">
        <transition>
          <el-button
            id="MenuButton"
            type="primary"
            circle
            icon="el-icon-my-zhankai-"
            size="mini"
            :class="{
              arrowTransform: !isCollapse,
              arrowTransformReturn: isCollapse,
            }"
            @click="testfunc()"
          ></el-button>
        </transition>
      </el-col>
    </el-row>

    <div class="atestbox">
      <el-scrollbar style="height: 100%">
        <el-menu
          class="el-menu-vertical-demo2"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          router
          default-active=""
        >
          <el-menu-item
            index="5-1"
            route="/mainpage"
            class="menuItemContentleft"
          >
            <i class="el-icon-my-zhanghao"></i>
            <span slot="title">MainPage</span>
          </el-menu-item>
          <el-menu-item index="5-2" route="/about" class="menuItemContentleft">
            <i class="el-icon-my-xiangmuxiangqing"></i>
            <span slot="title">AboutPage</span>
          </el-menu-item>
          <el-menu-item index="info" class="menuItemContentleft">
            <i class="el-icon-my-quanbuguanli"></i>
            <span slot="title">InfoPage</span>
          </el-menu-item>
        </el-menu>
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          router
        >
          <el-submenu index="1" class="menuItemContentleft">
            <template slot="title">
              <i class="el-icon-my-xiangmuguanli"></i>
              <span slot="title">Navigator One</span>
            </template>
            <el-menu-item-group class="menuItemContentcenter">
              <el-menu-item index="1-1" route="/downloadfile"
                >Download file</el-menu-item
              >
              <el-menu-item index="1-2" route="/musicplayer"
                >Music Player</el-menu-item
              >
              <el-menu-item index="1-3" route="/pdfpage"
                >PDF Viewer</el-menu-item
              >
              <el-menu-item index="1-4" route="/exampaper"
                >Exam Paper</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2" class="menuItemContentleft">
            <template slot="title">
              <i class="el-icon-my-tiqiatiku"></i>
              <span slot="title">Navigator Two</span>
            </template>
            <el-menu-item-group class="menuItemContentcenter">
              <el-menu-item index="2-1" route="/exampage"
                >Exam Page</el-menu-item
              >
              <el-menu-item index="2-2" route="/userlogin">User Login</el-menu-item>
              <el-menu-item index="2-3">Option 2-3</el-menu-item>
              <el-submenu index="2-4" class="menuItemContentcenter">
                <template slot="title">
                  <span slot="title">Option 4</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-4-1">Option 2-4-1</el-menu-item>
                  <el-menu-item index="2-4-2">Option 2-4-2</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="3" id="testthird" class="menuItemContentleft">
            <i class="el-icon-my-chengjifenxi"></i>
            <span slot="title">Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4" class="menuItemContentleft">
            <i class="el-icon-my-shijuandianping"></i>
            <span slot="title">Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>
<style>
.atestbox {
  height: calc(100vh - 57px - 60px - 5px);
}
.atestbox .el-scrollbar__wrap {
  overflow-x: hidden;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 99%;
  border-right: solid 1px #e6e6e6;
  min-height: 0px;
}
.el-menu-vertical-demo2:not(.el-menu--collapse) {
  border-right: solid 1px #e6e6e6;
  width: 99%;
  min-height: 0px;
}
.el-menu-vertical-demo,
.el-menu-vertical-demo2 {
  /* border-right: none !important; */
}
#MenuButton {
  margin-top: 20px;
  transition-duration: 0.8s;
  /* margin-right: 135px; */
}
.menuItemContentleft {
  text-align: left !important;
}
.menuItemContentcenter {
  text-align: center !important;
}
.menuItemContentcenter .el-submenu__title {
  padding-left: 3px !important;
}
.el-submenu__icon-arrow {
  background: url("../../assets/downicon.png") center center no-repeat;
  background-size: 16px;
}
.arrowTransform {
  /* animation: myframes 1s ; */
  transform: rotate(180deg);
}
.arrowTransformReturn {
  /* animation: myframes1 1s ; */
  transform: rotate(0deg);
}
@keyframes myframes {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
}
@keyframes myframes1 {
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(0deg);
  }
}
.MenuItemtext {
  /* font-family: cursive; */
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    testfunc() {
      if (this.isCollapse) {
        this.isCollapse = false;
      } else {
        this.isCollapse = true;
      }
    },
  },
};
</script>


