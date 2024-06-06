<template>
  <div id="app">
    <el-container>
      <el-header style="height: 60px">
        <el-row style="height: 58px">
          <el-col :span="4" style="height: 58px">
            <div class="el1">
              <img
                src="../public/img/logo.png"
                alt=""
                width="55px"
                height="55px"
              />
            </div>
          </el-col>
          <el-col :span="16" style="height: 58px">
            <div class="el2">
              <ul class="head-ul">
                <li class="head-li"><a href="/app">首页</a></li>
                <li class="head-li"> <a href="/guide">旅游攻略</a></li>
                <li class="head-li"> <a href="/hotel">酒店民宿</a></li>
                <li class="head-li"> <a href="/personal">个人中心</a></li>
                <li class="head-li">社区</li>
                <li class="head-li">AI咨询</li>
              </ul>
            </div>
          </el-col>
          <el-col :span="4" style="height: 58px">
            <div class="el3">
              <a href="/login" style="margin: auto; border-right: 2px solid black"
                >登录</a
              >
              <a href="/login" style="margin: auto; border-left: 2px solid black"
                >注册</a
              >
            </div>
          </el-col>
        </el-row>
      </el-header>


    </el-container>

        <!-- 走马灯 -->
        <template>
          <el-carousel
            :interval="5000"
            arrow="always"
            height="400px"
            style="padding-bottom: 15px"
          >
            <el-carousel-item v-for="item in hpicture" :key="item">
              <img :src="item.url" alt="" style="height: 100%; width: 100%" />
            </el-carousel-item>
          </el-carousel>
        </template>
        <!-- 搜索栏 -->

        <!-- 搜索栏 -->
        <el-row>
          <el-col :span="8">
            <div
              class="search_entrys_item"
              style="background-position: 78px -30px"
            >
              <div class="search_entrys_title">&nbsp;&nbsp;&nbsp;跟团游</div>
              <div class="search-entrys-subtitle">
                &nbsp;&nbsp;&nbsp;行程透明省心游
              </div>
            </div>
            <div
              class="search_entrys_item"
              style="background-position: 78px -134px"
            >
              <div class="search_entrys_title">&nbsp;&nbsp;&nbsp;自由行</div>
              <div class="search-entrys-subtitle">
                &nbsp;&nbsp;&nbsp;旅行就要更自在
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="search">
              <input
                type="text"
                class="input1"
                placeholder="搜索目的地/攻略/酒店"
              />
              <button class="btn1">搜索</button>
            </div>
          </el-col>
          <el-col :span="8">
            <div
              class="search_entrys_item"
              style="background-position: 78px -239px"
            >
              <div class="search_entrys_title">&nbsp;&nbsp;&nbsp;当地游</div>
              <div class="search-entrys-subtitle">
                &nbsp;&nbsp;&nbsp;最地道的玩法体验
              </div>
            </div>
            <div
              class="search_entrys_item"
              style="background-position: 78px -341px"
            >
              <div class="search_entrys_title">&nbsp;&nbsp;&nbsp;订酒店</div>
              <div class="search-entrys-subtitle">
                &nbsp;&nbsp;&nbsp;全网一键比价
              </div>
            </div>
          </el-col>
        </el-row>
        <!-- 热门攻略 -->
        <div class="title">
          <h3 style="text-decoration: none">热门攻略与话题</h3>
        </div>

        <div style="width:auto;height: 750px">
          <el-row>
          <el-col :span="6" v-for="item in cards" :key="item">
            <div class="cards_s" style="padding: 10px">
              <el-card :style="{ padding: '0px' }" shadow="hover">
                <img :src="item.url" style="width: 100%; height: 250px" />
                <div style="padding: 10px">
                  <span>美丽的风景</span>
                </div>
              </el-card>
            </div>
          </el-col>
        </el-row></div>

        <!-- 页脚 -->
        <div
          style="
            width: 1070px;
            background-color: #3f3f3f;
            height: 70px;
            margin: auto;
          "
        >
        <div style="color: white;font-size: 20px;width: 130px;height: 40px;padding-top: 20px;margin: auto;line-height: 25px;">制作人:谢广峰</div>
        </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data: function () {
    return {
      hpicture: [
        { id: 1, url: require("../public/img/carousel/p1.jpg") },
        { id: 2, url: require("../public/img/carousel/p2.jpg") },
        { id: 3, url: require("../public/img/carousel/p3.jpg") },
        { id: 4, url: require("../public/img/carousel/p4.jpg") },
      ],
      cards: [
        { id: 1, url: require("../public/img/cards/1.jpg") },
        { id: 2, url: require("../public/img/cards/1.jpg") },
        { id: 3, url: require("../public/img/cards/1.jpg") },
        { id: 4, url: require("../public/img/cards/1.jpg") },
        { id: 5, url: require("../public/img/cards/1.jpg") },
        { id: 6, url: require("../public/img/cards/1.jpg") },
        { id: 7, url: require("../public/img/cards/1.jpg") },
        { id: 8, url: require("../public/img/cards/1.jpg") },
      ],
    };
  },
  created: function () {},
  mounted: function () {
    console.log("APP被挂载完毕");
  },
  components: {},
};
</script>

<style>
#app {
  margin: auto;
  width: 1120px;
  height: auto;
  overflow-x: hidden;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

a {
  text-decoration: none;
  display: inline-block;
  color: rgb(153, 153, 153);
}

.el-row {
  height: 68px;
  border-bottom: 2px solid rgb(245, 246, 247);
}

.head-ul {
  list-style-type: none;
}

.head-ul a{
  color: #000000;
}

.head-li {
  display: inline;
  margin-left: 29px;
  cursor: pointer;
}

.head-li:hover {
  border-bottom: 3px solid #f18541;
}

.el1 {
  overflow-y: hidden;
  width: 55px;
  margin: auto;
}

.el2 {
  font-size: 18px;
}

.el3 {
  width: auto;
  float: left;
  font-size: 14px;
  margin: auto;
  padding-top: 15px;
  padding-left: 32px;
}

.search {
  width: 420px;
  height: 50px;
  margin: auto;

  float: left;
}

.btn1 {
  width: 40px;
  height: 44px;
  border: none;
  background-color: #f18541;
  color: white;
  font-size: 10px;
  border-radius: 0 10px 10px 0;
  margin-left: -2px;
}

.input1 {
  height: 39px;
  width: 320px;
  border: 2px solid #c4c7ce;
  /* 取消点击后的边框 */
  outline: none;
  border-radius: 10px 0 0 10px;
  float: left;
}

.input1:hover {
  border-color: #a7aab5;
}

.input1:focus {
  /*针对input点击*/
  border-color: #f18541;
}

.btn1:hover {
  background-color: #ce570d;
}

.search_entrys_item {
  width: 157px;
  height: 50px;
  border: 1px solid #e5e5e5;
  background-image: url(../public/img/entry_item.png);
  background-repeat: no-repeat;
  background-size: 104px auto;
  display: inline-block;
  margin-left: 13px;
  border-radius: 7px;
}

.search_entrys_item:hover {
  box-shadow: 8px 8px 8px #dedede;
}

.search_entrys_title {
  height: 22px;
  width: 68px;
  font-size: 16px;
  font-weight: 600;
  font-family: PingFangSC-Semibold;
  color: #333;
}

.search-entrys-subtitle {
  height: 16px;
  padding-top: 1px;
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  font-family: PingFangSC-Regular;
  color: #9d9d9d;
}

.title {
  position: relative;
  height: 64px;
  color: #636363;
  text-align: center;
  font: 36px / 74px Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun,
    sans-serif;
}
</style>
