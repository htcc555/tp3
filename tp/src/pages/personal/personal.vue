<template>
    <div id="app" style="position: relative;">
        <!-- 导航栏 -->
        <div id="topbar">
            <div id="top">
                <i class="el-icon-user" style="font-size:45px ;"></i>
                <el-menu class="el-menu-demo" mode="horizontal" background-color="rgb(34, 35, 36)" text-color="#FFFFFF"
                    style="display: inline-block;height: 46px;opacity: 0.6;">
                    <el-menu-item index="1"><a class="head_a" href="/">首页</a></el-menu-item>
                    <el-menu-item index="3"><a class="head_a" >问答</a></el-menu-item>
                    <el-menu-item index="4"><a class="head_a" href="/hotel">酒店</a></el-menu-item>
                    <el-menu-item index="5"><a class="head_a" href="/guide">攻略</a></el-menu-item>
                    <el-menu-item index="6"><a class="head_a">豌豆尖俱乐部</a></el-menu-item>
                    <el-submenu index="7">
                        <template slot="title">更多</template>
                        <el-menu-item index="2-1">豌豆尖高校</el-menu-item>
                        <el-menu-item index="2-2">照片PK</el-menu-item>
                        <el-menu-item index="2-3">豌豆尖拍卖行</el-menu-item>
                        <el-menu-item index="2-4">道具商店</el-menu-item>
                        <el-menu-item index="2-5">VIP</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="8">AI咨询</el-menu-item>
                    <el-submenu index="9">
                        <template slot="title">
                            <div><el-avatar
                                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                            </div>
                        </template>
                        <el-menu-item index="2-1">我的豌豆尖</el-menu-item>
                        <el-menu-item index="2-2"><a class="head_a" href="/wtguide" style="color: #ffffff">写游记</a></el-menu-item>
                        <el-menu-item index="2-3">我的足迹</el-menu-item>
                        <el-menu-item index="2-4">我的好友</el-menu-item>
                        <el-menu-item index="2-5">我的收藏</el-menu-item>
                        <el-menu-item index="2-6">我的路线</el-menu-item>
                        <el-menu-item index="2-7">我的订单</el-menu-item>
                    </el-submenu>
                    <el-submenu index="10"><template slot="title">消息</template>
                        <el-menu-item index="2-1">私信</el-menu-item>
                        <el-menu-item index="2-2">小组消息</el-menu-item>
                        <el-menu-item index="2-3">系统消息</el-menu-item>
                        <el-menu-item index="2-4">问答消息</el-menu-item>
                        <el-menu-item index="2-5">回复消息</el-menu-item>
                    </el-submenu>

                </el-menu>
            </div>
        </div>

          <!-- 背景图 -->
          <div id="bc_img"></div>

          <!-- 内容 -->
        <div style="width: 100%;height: auto;background-color:#EFEFEF;">
            <!-- head -->
            <div id="head1">
                <div style="width: 980px;height: 58px;margin: auto;">
                    <el-row>
                        <el-col :span="6">
                            <div style="width: auto;height: 58px;"></div>
                        </el-col>
                        <el-col :span="18">
                            <div style="width: auto;height: 58px;">
                                <ul style="margin: 0;">
                                    <li class="head_li" style="width: 89px;">我的窝</li>
                                    <li class="head_li" @click="f1()">我的游记</li>
                                    <li class="head_li"  @click="f2()">我的问答</li>
                                    <li class="head_li"  @click="f3()">我的足迹</li>
                                    <li class="head_li">我的点评</li>
                                    <li class="head_li">我的结伴</li>
                                </ul>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <el-container style="width: 980px;height: auto;margin: auto; background-color: #EFEFEF;overflow: visible; ">
                <!-- 个人简介部分 -->
                <el-aside width="266px"
                    style="height:500px;background-color: rgb(255, 255, 255);position: relative;overflow: visible; ">
                    <el-avatar :size="140" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                        style="position: absolute;top: -55px;left: 62px;z-index: 10;">
                    </el-avatar>
                    <div style="height: 24px;width: auto;text-align: center;margin-top: 100px;">用户001</div>
                    <hr>
                    <div style="height: 19px;width: auto;">
                        <el-row>
                            <el-col :span="9">
                                <div class="myinfo">年龄:<strong>21</strong></div>
                            </el-col>
                            <el-col :span="11">
                                <div class="myinfo">现居地:重庆</div>
                            </el-col>
                            <el-col :span="4">
                                <div style="height: 19px;width: auto;text-align: center;"><i class="
                                    el-icon-s-tools"></i></div>
                            </el-col>
                        </el-row>
                    </div>
                    <div style="width: 266px;height: 16px;position: relative;">
                        <div id="sig">世界这么大我想去看看</div>
                    </div>

                    <!-- 关注 -->
                    <div style="width: auto;height: 55px;border-top: 1px solid #D6D6D6;
                    border-bottom: 1px solid #D6D6D6;margin-top: 22px;">
                        <el-col :span="8">
                            <div class="follower">
                                <p>0</p><strong>关注</strong>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="follower">
                                <p>0</p><strong>粉丝</strong>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div
                                style="height: 55px;width: auto;text-align: center;text-align: center;line-height: 25px;">
                                <p>0</p><strong>点赞</strong>
                            </div>
                        </el-col>
                    </div>

                    <!-- 留言板 -->
                    <div
                        style="height: 35px;width: auto;text-align: center;margin-top: 20px;line-height: 35px;color:grey;">
                        留言版</div>
                    <div style="width: 238px;height: 132px;margin: auto;"><el-input
                        type="textarea"
                        :rows="5"
                        placeholder="说点什么..."
                        v-model="textarea">
                      </el-input>
                    </div>  
                </el-aside>
                <!-- 内容部分 -->
                <el-main>
                    <!-- 我的游记 -->
                    <div v-show="ac1" id="travel_note" style="width: 674px;height:auto;margin-top: 20px;">
                    <div style="width: 674px;height: 500px;background-color: #ffffff;position: relative;">
                        <div style="width: 674px;height: 45px;"><h2 style="font-size: 20px;
                            color: #444;
                            font-weight: normal;
                            position: absolute;
                            left: 26px;">我的游记</h2></div>
                        
                    </div>
                    </div>

                    <!-- 我的问答 -->
                    <div v-show="ac2" id="answer" style="width: 674px;height:auto;margin-top:20px;">
                        <div style="width: 674px;height: 500px;background-color: #ffffff;position: relative;">
                            <div style="width: 674px;height: 45px;"><h2 style="font-size: 20px;
                                color: #444;
                                font-weight: normal;
                                position: absolute;
                                left: 26px;">我的问答</h2></div>
                            
                        </div>
                        </div>

                    <!-- 我的足迹 -->
                        <div v-show="ac3" id="footmark" style="width: 674px;height:auto;margin-top:20px;">
                            <div style="width: 674px;height: 500px;background-color: #ffffff;position: relative;">
                                <div style="width: 674px;height: 45px;"><h2 style="font-size: 20px;
                                    color: #444;
                                    font-weight: normal;
                                    position: absolute;
                                    left: 26px;">我的足迹</h2></div>
                                
                            </div>
                            </div>
                </el-main>
            </el-container>
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
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data: function () {
    return {
      textarea: " ",
      ac1: true,
      ac2: true,
      ac3: true,
    };
  },
  methods: {
    f1() {
      this.ac1 = true;
      this.ac2 = false;
      this.ac3 = false;
    },
    f2() {
      this.ac2 = true;
      this.ac1 = false;
      this.ac3 = false;
    },
    f3() {
      this.ac3 = true;
      this.ac2 = false;
      this.ac1 = false;
    },
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
        min-width: 980px;
        font-family: Arial, verdana, "Lucida Grande", "Microsoft Yahei", "Hiragino Sans GB", "Hiragino Sans GB W3", SimSun, STHeiti;
    }

    body,
    div,
    p {
        padding: 0;
        margin: 0;
    }

    #topbar {
        height: 60px;
        width: 100%;
        background-color: rgb(34, 35, 36);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        font-family: "Microsoft Yahei";
        opacity: 0.6;
    }

    #top {
        margin: auto;
        width: 837px;
        height: auto;
    }

    #bc_img {
        position: fixed;
        top: 0;
        z-index: -1;
        width: 100%;
        height: 65vh;
        background-image: url(../../assets/img/personal/1.jpg);
        background-size: cover;
        background-position: 50%;
        background-repeat: no-repeat
    }

    .head_a{
        text-decoration: none
    }

    .head_li {
        display: inline-block;
        list-style: none;
        width: 100px;
        height: 54px;
        text-align: center;
        font-size: 20px;
        line-height: 54px;
        margin-right: 7px;
        cursor: pointer;
    }

    #head1 {
        width: 100%;
        height: 58px;
        background-color: #ffffff;
        margin: 57.4vh 0 0 0;
        box-shadow: 0px 1px 15px 1px rgba(78, 74, 74, 0.75);
        opacity: 0.95;
        position: relative;
        z-index: 1;
    }

    .myinfo {
        height: 19px;
        width: auto;
        text-align: center;
        border-right: 1px solid #D6D6D6;

    }

    #sig {
        margin: auto;
        margin-top: 20px;
        height: 15px;
        text-align: center;
        color: grey;
        width: 220px;
        position: relative;
    }

    #sig:after {
        content: "\"";
    }

    #sig:before {
        content: "\"";

    }

    .follower {
        height: 55px;
        width: auto;
        border-right: 2px solid #D6D6D6;
        text-align: center;
        line-height: 25px;
    }

    

</style>