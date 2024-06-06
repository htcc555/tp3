<template>
  <div id="app" style="width: 980px; height: auto; margin: auto">
        <el-header style="height: 60px">
          <el-row style="height: 58px">
            <el-col :span="4" style="height: 58px">
              <div class="el1">
                <img
                  src="../../assets/img/logo.png"
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
                  <li class="head-li"><a href="/guide">旅游攻略</a></li>
                  <li class="head-li"><a href="/hotel">酒店民宿</a></li>
                  <li class="head-li"><a href="/personal">个人中心</a></li>
                  <li class="head-li">社区</li>
                  <li class="head-li">AI咨询</li>
                </ul>
              </div>
            </el-col>
            <el-col :span="4" style="height: 58px">
              <div class="el3">
                欢迎登陆,用户001
              </div>
            </el-col>
          </el-row>
        </el-header>

        <!-- 搜索部分 -->
        <div v-bind:style="get_color()" style="width: auto; height: 540px">
          <div
            style="
              width: auto;
              height: 100px;
              padding-top: 110px;
              padding-left: 106px;
              line-height: 42px;
              font-size: 42px;
              color: #ffffff;
              font-weight: 100;
            "
          >
            美好旅程,即刻出发
          </div>

          <div id="osselect" style="padding-bottom: 3px">
            <ul>
              <li @click="get_click()" :style="get_underline()">国内酒店</li>
              <li @click="get_click2()" :style="get_underline2()">国外酒店</li>
            </ul>
          </div>
          <!--搜索框  -->
          <div
            id="search1"
            style="width: 800px; height: 70px; padding-left: 106px"
          >
            <div
              style="
                width: 150px;
                height: 68px;
                float: left;
                background-color: #ffffff;
                border: 1px solid #dcdfe6;
              "
            >
              <el-input
                class="bodernone"
                v-model="input_value"
                placeholder="想去哪里"
                style="width: 120px; padding-top: 15px; padding-left: 20px"
              ></el-input>
            </div>

            <el-date-picker
              style="width: 480px; height: 70px; margin-left: 15px"
              prefix-icon="none"
              v-model="value1"
              type="daterange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              value-format="yyyy:MM:dd"
            >
            </el-date-picker>

            <div
              v-bind:style="get_color2()"
              style="
                width: 120px;
                height: 69px;
                display: inline-block;
                text-align: center;
                line-height: 66px;
                color: #ffffff;
                font-weight: 100;
                margin-left: -5px;
                cursor: pointer;
              "
              @click="search_click()"
            >
              <i class="el-icon-thumb"></i><span>点击搜索 </span>
            </div>

            <div class="abroad" v-if="!color_change">
              <ul>
                <li>曼谷</li>
                <li>洛杉矶</li>
                <li>纽约</li>
                <li>旧金山</li>
                <li>东京</li>
                <li>大阪</li>
              </ul>
            </div>
            <div class="domestic" v-if="color_change">
              <ul>
                <li>香港</li>
                <li>上海</li>
                <li>西安</li>
                <li>北京</li>
                <li>广州</li>
                <li>重庆</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 精选部分 -->
        <div style="width: auto; height: 740px">
          <h3 style="margin-left: 15px; margin-top: 30px">精选酒店</h3>
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1">北京</el-menu-item>
            <el-menu-item index="2">重庆</el-menu-item>
            <el-menu-item index="3">杭州</el-menu-item>
            <el-menu-item index="4">洛杉矶</el-menu-item>
            <el-menu-item index="5">旧金山</el-menu-item>
            <el-menu-item index="6">东京</el-menu-item>
            <el-menu-item index="7">伦敦</el-menu-item>
          </el-menu>
          <div
            v-for="(item, index) in hotel_mg"
            :key="index"
            :class="featured_hotel[index]"
          >
            <img
              class="img_scale"
              :src="item.img_url"
              alt=""
              width="232px"
              height="156px"
            />
            <span style="line-height: 40px">{{ item.name }}</span>
            <el-rate
              v-model="item.mark"
              disabled
              show-score
              text-color="#ff9900"
            >
            </el-rate>
            <p>{{ item.price }} 元起</p>
          </div>
        </div>

        <!-- 跟着电影去旅行 -->
        <div style="width: 980px; height: 550px">
          <div id="movie">
            <p
              style="
                font-size: 20px;
                font-weight: 500;
                line-height: 12px;
                margin-left: 50px;
                margin-top: 40px;
              "
            >
              跟着电影去旅行
            </p>
            <p
              style="
                font-size: 16px;
                opacity: 0.6;
                line-height: 31px;
                margin-top: 25px;
                margin-left: 50px;
                margin-top: -2px;
              "
            >
              电影镜头下的异国他乡，永远对旅人有着非凡的吸引力。多瑙河畔的忧郁星期天，罗马街头的阳光与微风，在午夜巴黎寻找黄金时代，到喧闹旺角体会平凡人的英雄梦想，或是干脆放空所有，迷失于东京的霓虹闪烁……
            </p>
          </div>

          <div
            v-for="(item, index) in movie_travle"
            :key="index"
            class="mv"
            :style="{ 'background-image': 'url(' + item.img_url + ')' }"
          >
            <div
              style="
                width: 150px;
                height: 25px;
                margin-top: 230px;
                margin-left: 20px;
              "
            >
              <p
                class="mv_p"
                style="font-size: 18px; line-height: 15px; font-weight: 500"
              >
                {{ item.title }}
              </p>
            </div>

            <div style="width: 150px; height: 17px; margin-left: 20px">
              <p
                class="mv_p"
                style="font-size: 12px; line-height: 10px; font-weight: 400"
              >
                {{ item.name }}
              </p>
            </div>
          </div>
        </div>


        <!-- 酒店推荐部分 -->
        <div style="width: 980px;height: 180px;"> 
            <div style="font-size: 18px;
            line-height: 14px;
            padding: 0;
            font-weight: 400;
            cursor: default;
            color: #323232;
            display: block;
            margin-top: 50px;">国外酒店预订</div>
            <el-divider></el-divider>
            <ul class="flex"><li><a href="https://hotel.qyer.com/country_australia/">
                澳大利亚</a></li><li><a href="https://hotel.qyer.com/country_austria/">
                奥地利</a></li><li><a href="https://hotel.qyer.com/country_cambodia/">
                柬埔寨</a></li><li><a href="https://hotel.qyer.com/country_vietnam/">
                越南</a></li><li><a href="https://hotel.qyer.com/country_netherlands/">
                荷兰</a></li><li><a href="https://hotel.qyer.com/country_indonesia/">
                印度尼西亚</a></li><li><a href="https://hotel.qyer.com/country_vatican/">
                梵蒂冈</a></li><li><a href="https://hotel.qyer.com/country_czech-republic/">
                捷克</a></li><li><a href="https://hotel.qyer.com/country_russia/">
                俄罗斯</a></li><li><a href="https://hotel.qyer.com/country_new-zealand/">
                新西兰</a></li><li><a href="https://hotel.qyer.com/country_philippines/">
                菲律宾</a></li><li><a href="https://hotel.qyer.com/country_belgium/">
                比利时</a></li><li><a href="https://hotel.qyer.com/country_turkey/">
                土耳其</a></li><li><a href="https://hotel.qyer.com/country_canada/">
                加拿大</a></li><li><a href="https://hotel.qyer.com/country_greece/">
                希腊</a></li><li><a href="https://hotel.qyer.com/country_united-arab-emirates/">
                阿联酋</a></li><li><a href="https://hotel.qyer.com/country_hungary/">
                匈牙利</a></li><li><a href="https://hotel.qyer.com/country_sweden/">
                瑞典</a></li><li><a href="https://hotel.qyer.com/country_denmark/">
                丹麦</a></li><li><a href="https://hotel.qyer.com/country_portugal/">
                葡萄牙</a></li></ul>
        </div>
    
        <div style="width: 980px;height: 230px;"> 
            <div style="font-size: 18px;
            line-height: 14px;
            padding: 0;
            font-weight: 400;
            cursor: default;
            color: #323232;
            display: block;
            margin-top: 50px;">国外酒店预订</div>
            <el-divider></el-divider>
            <ul class="flex"><li><a href="https://hotel.qyer.com/sanya/" data-bn-ipg="Hotel-home-seo" target="_blank">
                三亚</a></li><li><a href="https://hotel.qyer.com/london/" data-bn-ipg="Hotel-home-seo" target="_blank">
                伦敦</a></li><li><a href="https://hotel.qyer.com/suzhou/" data-bn-ipg="Hotel-home-seo" target="_blank">
                苏州</a></li><li><a href="https://hotel.qyer.com/zhuhai/" data-bn-ipg="Hotel-home-seo" target="_blank">
                珠海</a></li><li><a href="https://hotel.qyer.com/xian/" data-bn-ipg="Hotel-home-seo" target="_blank">
                西安</a></li><li><a href="https://hotel.qyer.com/munich/" data-bn-ipg="Hotel-home-seo" target="_blank">
                慕尼黑</a></li><li><a href="https://hotel.qyer.com/nara/" data-bn-ipg="Hotel-home-seo" target="_blank">
                奈良</a></li><li><a href="https://hotel.qyer.com/wuhan/" data-bn-ipg="Hotel-home-seo" target="_blank">
                武汉</a></li><li><a href="https://hotel.qyer.com/dalian/" data-bn-ipg="Hotel-home-seo" target="_blank">
                大连</a></li><li><a href="https://hotel.qyer.com/pattaya/" data-bn-ipg="Hotel-home-seo" target="_blank">
                芭提雅</a></li><li><a href="https://hotel.qyer.com/kenting/" data-bn-ipg="Hotel-home-seo" target="_blank">
                垦丁</a></li><li><a href="https://hotel.qyer.com/siem-reap/" data-bn-ipg="Hotel-home-seo" target="_blank">
                暹粒</a></li><li><a href="https://hotel.qyer.com/san-francisco/" data-bn-ipg="Hotel-home-seo" target="_blank">
                旧金山</a></li><li><a href="https://hotel.qyer.com/amsterdam/" data-bn-ipg="Hotel-home-seo" target="_blank">
                阿姆斯特丹</a></li><li><a href="https://hotel.qyer.com/tianjinshi/" data-bn-ipg="Hotel-home-seo" target="_blank">
                天津</a></li><li><a href="https://hotel.qyer.com/jinan/" data-bn-ipg="Hotel-home-seo" target="_blank">
                济南</a></li><li><a href="https://hotel.qyer.com/qingdao/" data-bn-ipg="Hotel-home-seo" target="_blank">
                青岛</a></li><li><a href="https://hotel.qyer.com/vatican/" data-bn-ipg="Hotel-home-seo" target="_blank">
                梵蒂冈</a></li><li><a href="https://hotel.qyer.com/prague/" data-bn-ipg="Hotel-home-seo" target="_blank">
                布拉格</a></li><li><a href="https://hotel.qyer.com/lijiang/" data-bn-ipg="Hotel-home-seo" target="_blank">
                丽江</a></li></ul>
        </div>
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
      activeIndex: "1",
      search_color1: "#3EC8AA",
      search_color2: "#A691FF",
      color_change: true,
      value1: "",
      input_value:"",
      udline: "2px solid rgb(255, 255, 255)",
      hotel_mg: [
        {
          img_url: "./img/hotel_img/1.jpg",
          name: "北京饭店诺金",
          price: "878.24",
          mark: 4.6,
        },
        {
          img_url: "./img/hotel_img/2.jpg",
          name: "北京东方君悦大酒店",
          price: "896.15",
          mark: 4.5,
        },
        {
          img_url: "./img/hotel_img/3.jpg",
          name: "北京王府半岛酒店",
          price: "2050.56",
          mark: 4.7,
        },
        {
          img_url: "./img/hotel_img/4.jpg",
          name: "北京日出东方凯宾斯基酒店",
          price: "2045.58",
          mark: 4.6,
        },
        {
          img_url: "./img/hotel_img/5.jpg",
          name: "北京榆社",
          price: "1999.23",
          mark: 4.7,
        },
        {
          img_url: "./img/hotel_img/6.jpg",
          name: "北京雁栖酒店",
          price: "1988.00",
          mark: 4.7,
        },
        {
          img_url: "./img/hotel_img/7.jpg",
          name: "北京长城脚下的公社",
          price: "1605.72",
          mark: 4.3,
        },
        {
          img_url: "./img/hotel_img/8.jpg",
          name: "北京千禧大酒店",
          price: "947.05",
          mark: 4.4,
        },
      ],
      movie_travle: [
        {
          title: "布达佩斯之恋",
          name: "Budapest",
          img_url: "./img/hotel_img/budapest.jpg",
        },
        {
          title: "罗马假日",
          name: "Roma",
          img_url: "./img/hotel_img/roma.jpg",
        },
        {
          title: "午夜巴黎",
          name: "Paris",
          img_url: "./img/hotel_img/paris.jpg",
        },
        {
          title: "旺角卡门",
          name: "Hong Kong",
          img_url: "./img/hotel_img/hongkong.jpg",
        },
        {
          title: "迷失东京",
          name: "Tokyo",
          img_url: "./img/hotel_img/tokyo.jpg",
        },
      ],
      featured_hotel: ["fh1", "fh2", "fh3", "fh4", "fh5", "fh6", "fh7", "fh8"],
    };
  },
  methods: {
    get_color() {
      if (this.color_change == true) {
        return { "background-color": this.search_color1 };
      }
      if (this.color_change == false) {
        return { "background-color": this.search_color2 };
      }
    },
    get_color2() {
      if (this.color_change == true) {
        return { "background-color": this.search_color2 };
      }
      if (this.color_change == false) {
        return { "background-color": this.search_color1 };
      }
    },

    get_underline() {
      if (this.color_change == true) {
        return { "border-bottom": this.udline };
      }
    },

    get_underline2() {
      if (this.color_change == false) {
        return { "border-bottom": this.udline };
      }
    },

    get_click() {
      this.color_change = true;
    },
    get_click2() {
      this.color_change = false;
    },
    c_search(){
      console.log(this.value1[0]+this.input_value)
    },
    search_click(){
      location.href='/searchhotel'
    }
  },
  created: function () {},
  mounted: function () {
    console.log("APP被挂载完毕");
  },
  components: {},
};
</script>

<style>
body {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  margin: 0;
  padding: 0;
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
.head-ul a {
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
  overflow-x: hidden;
  width: 55px;
  margin: auto;
}

.el2 {
  font-size: 18px;
}

.el3 {
  width: auto;
  float: left;
  height: 20px;
  font-size: 18px;
  line-height: 20px;
  margin: auto;
  padding-top: 20px;
  padding-left: 2px;
}
.bodernone input.el-input__inner {
  border: none;
}

#search1 .el-date-editor .el-range-separator {
  line-height: 55px;
}

#search1 .el-range-editor.el-input__inner {
  border-radius: 0%;
}

#osselect {
  width: 220px;
  height: 48px;
  padding-left: 68px;
}

#osselect li {
  float: left;
  margin-right: 5px;
  color: #ffffff;
  font-weight: 500;
  line-height: 38px;
  font-size: 18px;
  cursor: pointer;
}

#osselect ul {
  list-style: none;
}

.abroad ul {
  list-style-type: none;
  margin-left: -40px;
}

.abroad li {
  float: left;
  margin-right: 15px;
  color: #ffffff;
  font-weight: 300;
  line-height: 38px;
  font-size: 16px;
}

.domestic ul {
  list-style-type: none;
  margin-left: -40px;
}

.domestic li {
  float: left;
  margin-right: 15px;
  color: #ffffff;
  font-weight: 300;
  line-height: 38px;
  font-size: 16px;
}

.el-menu--horizontal > .el-menu-item {
  height: 50px;
  line-height: 50px;
}

.fh1 {
  width: 233px;
  height: 280px;

  margin-right: 12px;
  float: left;
  margin-bottom: 20px;
  margin-left: 5px;
}

.fh2 {
  width: 233px;
  height: 280px;

  margin-right: 12px;
  float: left;
  margin-bottom: 20px;
}

.fh3 {
  width: 233px;
  height: 280px;

  margin-right: 12px;
  float: left;
  margin-bottom: 20px;
}

.fh4 {
  width: 233px;
  height: 280px;

  float: left;
  margin-bottom: 20px;
}

.fh5 {
  width: 233px;
  height: 280px;

  margin-right: 12px;
  float: left;
  margin-bottom: 20px;
  margin-left: 5px;
}

.fh6 {
  width: 233px;
  height: 280px;

  margin-right: 12px;
  float: left;
  margin-bottom: 20px;
}

.fh7 {
  width: 233px;
  height: 280px;

  margin-right: 12px;
  float: left;
  margin-bottom: 20px;
}

.fh8 {
  width: 233px;
  height: 280px;

  float: left;
  margin-bottom: 20px;
}

.img_scale {
  cursor: pointer;
}

.img_scale:hover {
  transform: scale(1.05, 1.05);
}

#movie {
  width: 970px;
  height: 177px;
  margin: auto;
  border-left: 7px solid #a3e2f7;
  border-top: 2px solid #a3e2f7;
  border-right: 2px solid #a3e2f7;
  border-bottom: 2px solid #a3e2f7;
}

.mv_p {
  color: #f1f2f1;
  margin: auto;
}

.mv {
  width: 190px;
  height: 300px;
  float: left;
  margin-left: 5px;
  margin-top: 40px;
  background: linear-gradient(to top, #000 15%, #312c2c 15%);
  background-size: contain;
}
.flex {
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  margin-left: -40px;
}
.flex li {
  line-height: 44px;
  font-size: 14px;
  width: 11.1%;
  height: 44px;
  overflow: hidden;
}
</style>
