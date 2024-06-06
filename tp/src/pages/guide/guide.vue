<template>
  <div id="app">
    <div id="total">
      <el-container>
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
        <el-container
          id="first_part"
          style="
            height: 360px;
            width: 1140px;
            position: relative;
            margin-top: 10px;
          "
        >
          <el-aside width="300px" style="padding: 0">
            <div
              class="recommand_des"
              @mouseover="mouseEnter1()"
              @mouseout="mouseOut1()"
            >
              <p style="display: inline-block">海外冬季目的地精选</p>
              <i class="el-icon-arrow-right" style="margin-left: 80px"></i>
            </div>
            <div
              class="recommand_des"
              @mouseover="mouseEnter2()"
              @mouseout="mouseOut2()"
            >
              <p style="display: inline-block">国内冬季目的地精选</p>
              <i class="el-icon-arrow-right" style="margin-left: 80px"></i>
            </div>
            <div
              class="recommand_des"
              @mouseover="mouseEnter3()"
              @mouseout="mouseOut3()"
            >
              <p style="display: inline-block">奔向海岛</p>
              <i class="el-icon-arrow-right" style="margin-left: 170px"></i>
            </div>
            <div
              class="recommand_des"
              @mouseover="mouseEnter4()"
              @mouseout="mouseOut4()"
              @click="printisA()"
            >
              <p style="display: inline-block">主题推荐</p>
              <i class="el-icon-arrow-right" style="margin-left: 170px"></i>
            </div>

            <!-- 搜索框 -->
            <div
              style="
                width: 293px;
                height: 48px;
                margin-top: 10px;
                position: relative;
                border: 3px solid rgb(255, 168, 0);
                border-radius: 5px;
              "
            >
              <input
                id="search_input"
                type="text"
                placeholder="请输入想去的地方,如重庆"
                style="
                  width: 230px;
                  height: 45px;
                  margin-left: 40px;
                  border: none;
                "
              />
              <i
                class="el-icon-search"
                style="
                  position: absolute;
                  left: 5px;
                  top: 10px;
                  font-size: 25px;
                "
              ></i>
            </div>
            <!-- logo app下载 -->
            <div
              style="
                width: 296px;
                height: 77px;
                background-color: rgb(255, 168, 0);
                margin-top: 10px;
              "
            ></div>
          </el-aside>
          <el-main
            style="
              position: relative;
              margin-left: 50px;
              z-index: 1;
              padding: 0;
            "
          >
            <!-- 走马灯 -->
            <template>
              <el-carousel
                :interval="4000"
                height="360px"
                style="margin: auto; width: 700px"
              >
                <el-carousel-item v-for="item in hpicture" :key="item">
                  <img
                    :src="item.url"
                    alt=""
                    style="width: 100%; height: 100%"
                  />
                </el-carousel-item>
              </el-carousel>
            </template>
          </el-main>
          <!-- 推荐弹出窗口 -->
          <div
            v-show="isActive1"
            @mouseover="mouseEnter1()"
            @mouseout="mouseOut1()"
            style="
              position: absolute;
              left: 297px;
              height: 330px;
              width: 400px;
              z-index: 2;
              background-color: rgb(255, 255, 255);
              box-shadow: 1px 5px 5px grey;
              border: rgb(221, 221, 221) solid 1px;
            "
          >
            <ol style="padding: 0">
              <li class="recommand_li">
                <a href=""
                  ><span
                    style="
                      font-style: italic;
                      font-size: 30px;
                      font-weight: bold;
                      color: rgb(255, 153, 0);
                    "
                    >1</span
                  ></a
                >
                <a class="recommand_li_title" href=""
                  ><span style="color: rgb(255, 153, 0)">北海道</span></a
                >
                <a href="" style="margin-left: 15px"
                  ><span style="font-size: 14px">在皑皑白雪中泡温泉</span></a
                >
              </li>
              <li class="recommand_li">
                <a href=""
                  ><span
                    style="
                      font-style: italic;
                      font-size: 30px;
                      font-weight: bold;
                      color: rgb(255, 153, 0);
                    "
                    >2</span
                  ></a
                >
                <a class="recommand_li_title" href=""
                  ><span style="color: rgb(255, 153, 0)">冰岛</span></a
                >
                <a href="" style="margin-left: 15px"
                  ><span style="font-size: 14px"
                    >亲近极北之地的莫测极光</span
                  ></a
                >
              </li>
              <li class="recommand_li">
                <a href=""
                  ><span
                    style="
                      font-style: italic;
                      font-size: 30px;
                      font-weight: bold;
                      color: rgb(255, 153, 0);
                    "
                    >3</span
                  ></a
                >
                <a class="recommand_li_title" href=""
                  ><span style="color: rgb(255, 153, 0)">洛杉矶</span></a
                >
                <a href="" style="margin-left: 15px"
                  ><span style="font-size: 14px">阳光加州，避寒圣地</span></a
                >
              </li>
              <li class="recommand_li">
                <a href=""
                  ><span
                    style="
                      font-style: italic;
                      font-size: 30px;
                      font-weight: bold;
                    "
                    >4</span
                  ></a
                >
                <a class="recommand_li_title" href=""><span>澳大利亚</span></a>
                <a href="" style="margin-left: 15px"
                  ><span style="font-size: 14px"
                    >在南半球过个暖洋洋的圣诞节</span
                  ></a
                >
              </li>
              <li class="recommand_li">
                <a href=""
                  ><span
                    style="
                      font-style: italic;
                      font-size: 30px;
                      font-weight: bold;
                    "
                    >5</span
                  ></a
                >
                <a class="recommand_li_title" href=""><span>新加坡</span></a>
                <a href="" style="margin-left: 15px"
                  ><span style="font-size: 14px">活力四射的花园之城</span></a
                >
              </li>
              <li class="recommand_li">
                <a href=""
                  ><span
                    style="
                      font-style: italic;
                      font-size: 30px;
                      font-weight: bold;
                    "
                    >6</span
                  ></a
                >
                <a class="recommand_li_title" href=""><span>北海道</span></a>
                <a href="" style="margin-left: 15px"
                  ><span style="font-size: 14px">在皑皑白雪中泡温泉</span></a
                >
              </li>
              <li class="recommand_li">
                <a href=""
                  ><span
                    style="
                      font-style: italic;
                      font-size: 30px;
                      font-weight: bold;
                    "
                    >7</span
                  ></a
                >
                <a class="recommand_li_title" href=""><span>斯里兰卡</span></a>
                <a href="" style="margin-left: 15px"
                  ><span style="font-size: 14px">便利签证，异域风情</span></a
                >
              </li>
              <li class="recommand_li">
                <a href=""
                  ><span
                    style="
                      font-style: italic;
                      font-size: 30px;
                      font-weight: bold;
                    "
                    >8</span
                  ></a
                >
                <a class="recommand_li_title" href=""><span>帕劳</span></a>
                <a href="" style="margin-left: 15px"
                  ><span style="font-size: 14px">潜水者的朝圣地</span></a
                >
              </li>
              <li class="recommand_li">
                <a href=""
                  ><span
                    style="
                      font-style: italic;
                      font-size: 30px;
                      font-weight: bold;
                    "
                    >9</span
                  ></a
                >
                <a class="recommand_li_title" href=""><span>缅甸</span></a>
                <a href="" style="margin-left: 15px"
                  ><span style="font-size: 14px">踏上佛国净化之旅</span></a
                >
              </li>
              <li class="recommand_li">
                <a href=""
                  ><span
                    style="
                      font-style: italic;
                      font-size: 30px;
                      font-weight: bold;
                    "
                    >10</span
                  ></a
                >
                <a class="recommand_li_title" href=""><span>菲律宾</span></a>
                <a href="" style="margin-left: 15px"
                  ><span style="font-size: 14px"
                    >徜徉海岛间，潜入深海中</span
                  ></a
                >
              </li>
            </ol>
          </div>
          <div
            v-show="isActive2"
            @mouseover="mouseEnter2()"
            @mouseout="mouseOut2()"
            style="
              position: absolute;
              left: 297px;
              height: 330px;
              width: 400px;
              z-index: 2;
              background-color: rgb(255, 255, 255);
              box-shadow: 1px 5px 5px grey;
              border: rgb(221, 221, 221) solid 1px;
            "
          >
            <ol style="padding: 0">
              <li class="recommand_li">
                <a href=""
                  ><span
                    style="
                      font-style: italic;
                      font-size: 30px;
                      font-weight: bold;
                      color: rgb(255, 153, 0);
                    "
                    >1</span
                  ></a
                >
                <a class="recommand_li_title" href=""
                  ><span style="color: rgb(255, 153, 0)">漠河</span></a
                >
                <a href="" style="margin-left: 15px"
                  ><span style="font-size: 14px">至寒圣地的极光约会</span></a
                >
              </li>
              <li class="recommand_li">
                <a href=""
                  ><span
                    style="
                      font-style: italic;
                      font-size: 30px;
                      font-weight: bold;
                      color: rgb(255, 153, 0);
                    "
                    >2</span
                  ></a
                >
                <a class="recommand_li_title" href=""
                  ><span style="color: rgb(255, 153, 0)">黄山</span></a
                >
                <a href="" style="margin-left: 15px"
                  ><span style="font-size: 14px">银装素裹秒杀菲林季</span></a
                >
              </li>
              <li class="recommand_li">
                <a href=""
                  ><span
                    style="
                      font-style: italic;
                      font-size: 30px;
                      font-weight: bold;
                      color: rgb(255, 153, 0);
                    "
                    >3</span
                  ></a
                >
                <a class="recommand_li_title" href=""
                  ><span style="color: rgb(255, 153, 0)">海螺沟</span></a
                >
                <a href="" style="margin-left: 15px"
                  ><span style="font-size: 14px">冰川温泉的童话世界</span></a
                >
              </li>
              <li class="recommand_li">
                <a href=""
                  ><span
                    style="
                      font-style: italic;
                      font-size: 30px;
                      font-weight: bold;
                    "
                    >4</span
                  ></a
                >
                <a class="recommand_li_title" href=""><span>壶口瀑布</span></a>
                <a href="" style="margin-left: 15px"
                  ><span style="font-size: 14px">绝美的冰瀑玉壶奇观</span></a
                >
              </li>
              <li class="recommand_li">
                <a href=""
                  ><span
                    style="
                      font-style: italic;
                      font-size: 30px;
                      font-weight: bold;
                    "
                    >5</span
                  ></a
                >
                <a class="recommand_li_title" href=""><span>西岭雪山</span></a>
                <a href="" style="margin-left: 15px"
                  ><span style="font-size: 14px">成都周边最大滑雪场</span></a
                >
              </li>
              <li class="recommand_li">
                <a href=""
                  ><span
                    style="
                      font-style: italic;
                      font-size: 30px;
                      font-weight: bold;
                    "
                    >6</span
                  ></a
                >
                <a class="recommand_li_title" href=""><span>西双版纳</span></a>
                <a href="" style="margin-left: 15px"
                  ><span style="font-size: 14px">聆听欣赏原生态歌舞</span></a
                >
              </li>
              <li class="recommand_li">
                <a href=""
                  ><span
                    style="
                      font-style: italic;
                      font-size: 30px;
                      font-weight: bold;
                    "
                    >7</span
                  ></a
                >
                <a class="recommand_li_title" href=""><span>霞浦</span></a>
                <a href="" style="margin-left: 15px"
                  ><span style="font-size: 14px">红枫白荻的交相辉映</span></a
                >
              </li>
              <li class="recommand_li">
                <a href=""
                  ><span
                    style="
                      font-style: italic;
                      font-size: 30px;
                      font-weight: bold;
                    "
                    >8</span
                  ></a
                >
                <a class="recommand_li_title" href=""><span>广州</span></a>
                <a href="" style="margin-left: 15px"
                  ><span style="font-size: 14px">相约一起喝粤式早茶</span></a
                >
              </li>
              <li class="recommand_li">
                <a href=""
                  ><span
                    style="
                      font-style: italic;
                      font-size: 30px;
                      font-weight: bold;
                    "
                    >9</span
                  ></a
                >
                <a class="recommand_li_title" href=""><span>高雄</span></a>
                <a href="" style="margin-left: 15px"
                  ><span style="font-size: 14px">暖冬初阳遇最美台湾</span></a
                >
              </li>
              <li class="recommand_li">
                <a href=""
                  ><span
                    style="
                      font-style: italic;
                      font-size: 30px;
                      font-weight: bold;
                    "
                    >10</span
                  ></a
                >
                <a class="recommand_li_title" href=""><span>三亚</span></a>
                <a href="" style="margin-left: 15px"
                  ><span style="font-size: 14px">去热带海滩逃离寒冬</span></a
                >
              </li>
            </ol>
          </div>
          <div
            v-show="isActive3"
            @mouseover="mouseEnter3()"
            @mouseout="mouseOut3()"
            style="
              position: absolute;
              left: 297px;
              height: 330px;
              width: 400px;
              z-index: 2;
              background-color: rgb(255, 255, 255);
              box-shadow: 1px 5px 5px grey;
              border: rgb(221, 221, 221) solid 1px;
            "
          >
            <ol style="padding: 0">
              <li class="recommand_li">
                <a href=""
                  ><span
                    style="
                      font-style: italic;
                      font-size: 30px;
                      font-weight: bold;
                      color: rgb(255, 153, 0);
                    "
                    >1</span
                  ></a
                >
                <a class="recommand_li_title" href=""
                  ><span style="color: rgb(255, 153, 0)">象岛</span></a
                >
                <a href="" style="margin-left: 15px"
                  ><span style="font-size: 14px"
                    >腻了普吉，来象岛玩个深度</span
                  ></a
                >
              </li>
              <li class="recommand_li">
                <a href=""
                  ><span
                    style="
                      font-style: italic;
                      font-size: 30px;
                      font-weight: bold;
                      color: rgb(255, 153, 0);
                    "
                    >2</span
                  ></a
                >
                <a class="recommand_li_title" href=""
                  ><span style="color: rgb(255, 153, 0)">巴厘岛</span></a
                >
                <a href="" style="margin-left: 15px"
                  ><span style="font-size: 14px">巴厘岛免签啦</span></a
                >
              </li>
              <li class="recommand_li">
                <a href=""
                  ><span
                    style="
                      font-style: italic;
                      font-size: 30px;
                      font-weight: bold;
                      color: rgb(255, 153, 0);
                    "
                    >3</span
                  ></a
                >
                <a class="recommand_li_title" href=""
                  ><span style="color: rgb(255, 153, 0)">毛里求斯</span></a
                >
                <a href="" style="margin-left: 15px"
                  ><span style="font-size: 14px">印度洋上的海上明珠</span></a
                >
              </li>
              <li class="recommand_li">
                <a href=""
                  ><span
                    style="
                      font-style: italic;
                      font-size: 30px;
                      font-weight: bold;
                    "
                    >4</span
                  ></a
                >
                <a class="recommand_li_title" href=""><span>塞班岛</span></a>
                <a href="" style="margin-left: 15px"
                  ><span style="font-size: 14px">错“季”出行，也有惊喜</span></a
                >
              </li>
              <li class="recommand_li">
                <a href=""
                  ><span
                    style="
                      font-style: italic;
                      font-size: 30px;
                      font-weight: bold;
                    "
                    >5</span
                  ></a
                >
                <a class="recommand_li_title" href=""><span>长滩岛</span></a>
                <a href="" style="margin-left: 15px"
                  ><span style="font-size: 14px">潜水与蜜月的天堂</span></a
                >
              </li>
              <li class="recommand_li">
                <a href=""
                  ><span
                    style="
                      font-style: italic;
                      font-size: 30px;
                      font-weight: bold;
                    "
                    >6</span
                  ></a
                >
                <a class="recommand_li_title" href=""><span>圣托里尼</span></a>
                <a href="" style="margin-left: 15px"
                  ><span style="font-size: 14px"
                    >蓝白之城映衬着海风吹拂</span
                  ></a
                >
              </li>
              <li class="recommand_li">
                <a href=""
                  ><span
                    style="
                      font-style: italic;
                      font-size: 30px;
                      font-weight: bold;
                    "
                    >7</span
                  ></a
                >
                <a class="recommand_li_title" href=""><span>沙美岛</span></a>
                <a href="" style="margin-left: 15px"
                  ><span style="font-size: 14px">如果你厌倦了芭提雅</span></a
                >
              </li>
              <li class="recommand_li">
                <a href=""
                  ><span
                    style="
                      font-style: italic;
                      font-size: 30px;
                      font-weight: bold;
                    "
                    >8</span
                  ></a
                >
                <a class="recommand_li_title" href=""><span>杜马盖地</span></a>
                <a href="" style="margin-left: 15px"
                  ><span style="font-size: 14px">找小丑鱼做客去！</span></a
                >
              </li>
              <li class="recommand_li">
                <a href=""
                  ><span
                    style="
                      font-style: italic;
                      font-size: 30px;
                      font-weight: bold;
                    "
                    >9</span
                  ></a
                >
                <a class="recommand_li_title" href=""><span>兰卡威</span></a>
                <a href="" style="margin-left: 15px"
                  ><span style="font-size: 14px">海钓、潜水，看蓝天</span></a
                >
              </li>
              <li class="recommand_li">
                <a href=""
                  ><span
                    style="
                      font-style: italic;
                      font-size: 30px;
                      font-weight: bold;
                    "
                    >10</span
                  ></a
                >
                <a class="recommand_li_title" href=""><span>沙巴</span></a>
                <a href="" style="margin-left: 15px"
                  ><span style="font-size: 14px"
                    >这里有世界上最美的落日</span
                  ></a
                >
              </li>
            </ol>
          </div>
          <div
            v-show="isActive4"
            @mouseover="mouseEnter4()"
            @mouseout="mouseOut4()"
            style="
              position: absolute;
              left: 297px;
              height: 330px;
              width: 470px;
              z-index: 2;
              background-color: rgb(255, 255, 255);
              box-shadow: 1px 5px 5px grey;
              border: rgb(221, 221, 221) solid 1px;
            "
          >
            <dl style="width: 410px; height: 70px">
              <dt>骑行</dt>
              <dd>
                <a title="海南" href="/gonglve/zt-359.html" target="_blank"
                  >海南</a
                >
              </dd>
              <dd>
                <a title="青海湖" href="/gonglve/zt-381.html" target="_blank"
                  >青海湖</a
                >
              </dd>
              <dd>
                <a title="敦煌" href="/gonglve/mdd-10240.html" target="_blank"
                  >敦煌</a
                >
              </dd>
              <dd>
                <a title="漠河" href="/gonglve/mdd-10427.html" target="_blank"
                  >漠河</a
                >
              </dd>
              <dd>
                <a title="台湾" href="/gonglve/mdd-12684.html" target="_blank"
                  >台湾</a
                >
              </dd>
              <dd>
                <a title="北京" href="/gonglve/zt-425.html" target="_blank"
                  >北京</a
                >
              </dd>
              <dd>
                <a title="杭州" href="/gonglve/mdd-10156.html" target="_blank"
                  >杭州</a
                >
              </dd>
              <dd>
                <a title="双廊" href="/gonglve/mdd-15950.html" target="_blank"
                  >双廊</a
                >
              </dd>
              <dd>
                <a title="婺源" href="/gonglve/mdd-10045.html" target="_blank"
                  >婺源</a
                >
              </dd>
              <dd>
                <a title="阿尔山" href="/gonglve/mdd-10390.html" target="_blank"
                  >阿尔山</a
                >
              </dd>
              <dd>
                <a title="法国" href="/gonglve/mdd-10171.html" target="_blank"
                  >法国</a
                >
              </dd>
              <dd>
                <a title="厦门" href="/gonglve/mdd-10132.html" target="_blank"
                  >厦门</a
                >
              </dd>
              <dd>
                <a title="阳朔" href="/gonglve/mdd-10027.html" target="_blank"
                  >阳朔</a
                >
              </dd>
              <dd>
                <a
                  title="香格里拉"
                  href="/gonglve/mdd-10482.html"
                  target="_blank"
                  >香格里拉</a
                >
              </dd>
              <dd>
                <a title="太湖" href="/gonglve/mdd-10140.html" target="_blank"
                  >太湖</a
                >
              </dd>
              <dd>
                <a title="西藏" href="/gonglve/mdd-12700.html" target="_blank"
                  >西藏</a
                >
              </dd>
              <dd>
                <a title="大理" href="/gonglve/mdd-10487.html" target="_blank"
                  >大理</a
                >
              </dd>
              <dd>
                <a title="成都" href="/gonglve/mdd-10035.html" target="_blank"
                  >成都</a
                >
              </dd>
            </dl>

            <dl style="width: 410px; height: 70px">
              <dt>潜水</dt>
              <dd>
                <a title="沙巴" href="/gonglve/mdd-10760.html" target="_blank"
                  >沙巴</a
                >
              </dd>
              <dd>
                <a title="三亚" href="/gonglve/mdd-10030.html" target="_blank"
                  >三亚</a
                >
              </dd>
              <dd>
                <a title="斐济" href="/gonglve/mdd-11044.html" target="_blank"
                  >斐济</a
                >
              </dd>
              <dd>
                <a title="巴厘岛" href="/gonglve/mdd-10460.html" target="_blank"
                  >巴厘岛</a
                >
              </dd>
              <dd>
                <a title="长滩岛" href="/gonglve/mdd-10737.html" target="_blank"
                  >长滩岛</a
                >
              </dd>
              <dd>
                <a
                  title="马尔代夫"
                  href="/gonglve/mdd-10101.html"
                  target="_blank"
                  >马尔代夫</a
                >
              </dd>
              <dd>
                <a title="苏梅岛" href="/gonglve/mdd-14210.html" target="_blank"
                  >苏梅岛</a
                >
              </dd>
              <dd>
                <a title="普吉岛" href="/gonglve/mdd-11047.html" target="_blank"
                  >普吉岛</a
                >
              </dd>
              <dd>
                <a title="夏威夷" href="/gonglve/mdd-10927.html" target="_blank"
                  >夏威夷</a
                >
              </dd>
              <dd>
                <a title="巴拉望" href="/gonglve/mdd-16116.html" target="_blank"
                  >巴拉望</a
                >
              </dd>
              <dd>
                <a
                  title="马来西亚"
                  href="/gonglve/mdd-10097.html"
                  target="_blank"
                  >马来西亚</a
                >
              </dd>
              <dd>
                <a title="兰卡威" href="/gonglve/mdd-11051.html" target="_blank"
                  >兰卡威</a
                >
              </dd>
              <dd>
                <a title="埃及" href="/gonglve/mdd-10178.html" target="_blank"
                  >埃及</a
                >
              </dd>
              <dd>
                <a
                  title="印度尼西亚"
                  href="/gonglve/mdd-10181.html"
                  target="_blank"
                  >印度尼西亚</a
                >
              </dd>
              <dd>
                <a title="泰国" href="/gonglve/mdd-10083.html" target="_blank"
                  >泰国</a
                >
              </dd>
            </dl>
            <dl style="width: 410px; height: 70px">
              <dt>徒步</dt>
              <dd>
                <a title="尼泊尔" href="/gonglve/zt-329.html" target="_blank"
                  >尼泊尔</a
                >
              </dd>
              <dd>
                <a title="虎跳峡" href="/gonglve/zt-398.html" target="_blank"
                  >虎跳峡</a
                >
              </dd>
              <dd>
                <a title="喀纳斯" href="/gonglve/mdd-10732.html" target="_blank"
                  >喀纳斯</a
                >
              </dd>
              <dd>
                <a title="墨脱" href="/gonglve/mdd-10079.html" target="_blank"
                  >墨脱</a
                >
              </dd>
              <dd>
                <a title="小五台" href="/gonglve/mdd-10230.html" target="_blank"
                  >小五台</a
                >
              </dd>
              <dd>
                <a
                  title="贡嘎雪山"
                  href="/gonglve/mdd-10347.html"
                  target="_blank"
                  >贡嘎雪山</a
                >
              </dd>
              <dd>
                <a title="海陀山" href="/gonglve/mdd-10713.html" target="_blank"
                  >海陀山</a
                >
              </dd>
              <dd>
                <a title="海螺沟" href="/gonglve/mdd-11327.html" target="_blank"
                  >海螺沟</a
                >
              </dd>
              <dd>
                <a title="雨崩" href="/gonglve/mdd-12141.html" target="_blank"
                  >雨崩</a
                >
              </dd>
              <dd>
                <a title="三峡" href="/gonglve/mdd-10705.html" target="_blank"
                  >三峡</a
                >
              </dd>
              <dd>
                <a title="阳朔" href="/gonglve/mdd-10027.html" target="_blank"
                  >阳朔</a
                >
              </dd>
              <dd>
                <a title="新都桥" href="/gonglve/mdd-14727.html" target="_blank"
                  >新都桥</a
                >
              </dd>
              <dd>
                <a title="楠溪江" href="/gonglve/mdd-10090.html" target="_blank"
                  >楠溪江</a
                >
              </dd>
              <dd>
                <a
                  title="梅里雪山"
                  href="/gonglve/mdd-10806.html"
                  target="_blank"
                  >梅里雪山</a
                >
              </dd>
              <dd>
                <a title="野三坡" href="/gonglve/mdd-11262.html" target="_blank"
                  >野三坡</a
                >
              </dd>
              <dd>
                <a
                  title="西双版纳"
                  href="/gonglve/mdd-10809.html"
                  target="_blank"
                  >西双版纳</a
                >
              </dd>
            </dl>
            <dl style="width: 410px; height: 80px">
              <dt>登山</dt>
              <dd>
                <a
                  title="珠穆朗玛峰"
                  href="/gonglve/mdd-10811.html"
                  target="_blank"
                  >珠穆朗玛峰</a
                >
              </dd>
              <dd>
                <a
                  title="乞力马扎罗"
                  href="/gonglve/zt-321.html"
                  target="_blank"
                  >乞力马扎罗</a
                >
              </dd>
              <dd>
                <a title="牛背山" href="/gonglve/mdd-17315.html" target="_blank"
                  >牛背山</a
                >
              </dd>
              <dd>
                <a title="太白山" href="/gonglve/mdd-10531.html" target="_blank"
                  >太白山</a
                >
              </dd>
              <dd>
                <a
                  title="四姑娘山"
                  href="/gonglve/mdd-10134.html"
                  target="_blank"
                  >四姑娘山</a
                >
              </dd>
              <dd>
                <a title="雁荡山" href="/gonglve/mdd-11746.html" target="_blank"
                  >雁荡山</a
                >
              </dd>
              <dd>
                <a title="云台山" href="/gonglve/mdd-11527.html" target="_blank"
                  >云台山</a
                >
              </dd>
              <dd>
                <a title="三清山" href="/gonglve/mdd-11465.html" target="_blank"
                  >三清山</a
                >
              </dd>
              <dd>
                <a title="普陀山" href="/gonglve/mdd-11534.html" target="_blank"
                  >普陀山</a
                >
              </dd>
              <dd>
                <a title="庐山" href="/gonglve/mdd-10244.html" target="_blank"
                  >庐山</a
                >
              </dd>
              <dd>
                <a title="海陀山" href="/gonglve/mdd-10713.html" target="_blank"
                  >海陀山</a
                >
              </dd>
              <dd>
                <a title="小五台" href="/gonglve/mdd-10230.html" target="_blank"
                  >小五台</a
                >
              </dd>
              <dd>
                <a title="华山" href="/gonglve/mdd-10577.html" target="_blank"
                  >华山</a
                >
              </dd>
              <dd>
                <a title="泰山" href="/gonglve/mdd-10284.html" target="_blank"
                  >泰山</a
                >
              </dd>
              <dd>
                <a title="黄山 " href="/gonglve/mdd-10440.html" target="_blank"
                  >黄山
                </a>
              </dd>
              <dd>
                <a title="武功山" href="/gonglve/mdd-12702.html" target="_blank"
                  >武功山</a
                >
              </dd>
            </dl>
          </div>
        </el-container>
        <el-container style="margin-top: 20px; height: auto">
          <el-aside width="250px">
            <!-- 旅游导航攻略 -->
            <div style="width: auto; line-height: 25px; text-align: center">
              旅游攻略导航
            </div>
            <hr />
            <div
              tabindex="10"
              class="navigation"
              style="
                margin-left: 15px;
                width: 73px;
                float: left;
                font-size: 22px;
                font-weight: 100;
              "
            >
              国内<i class="el-icon-caret-bottom"></i>
            </div>
            <div
              style="
                height: 28px;
                width: 1px;
                background-color: #8b8a8a;
                float: left;
              "
            ></div>
            <div
              tabindex="10"
              class="navigation"
              style="
                margin-left: 5px;
                width: 73px;
                float: left;
                font-size: 22px;
                font-weight: 100;
              "
            >
              国外<i class="el-icon-caret-bottom"></i>
            </div>
            <div
              style="
                height: 28px;
                width: 1px;
                background-color: #8b8a8a;
                float: left;
              "
            ></div>
            <div
              tabindex="10"
              class="navigation"
              style="
                margin-left: 5px;
                width: 73px;
                float: left;
                font-size: 22px;
                font-weight: 100;
              "
            >
              主题<i class="el-icon-caret-bottom"></i>
            </div>
            <hr style="width: auto; margin-top: 50px" />
            <div
              style="
                height: auto;
                width: auto;
                text-align: center;
                border-bottom: 1px solid rgb(238, 238, 238);
              "
            >
              <img
                src="../../assets/img/guide_pic/dali.jpeg"
                alt=""
                style="width: auto"
              />
              <p class="small_letter">更新日期:2024.3.13</p>
            </div>
            <div class="rank_b">
              <span class="rank_num">2</span>
              <a class="rank_a" href="">广州</a>
            </div>
            <div class="rank_b">
              <span class="rank_num">3</span>
              <a class="rank_a" href="">云南</a>
            </div>
            <div class="rank_b">
              <span class="rank_num">4</span>
              <a class="rank_a" href="">日本</a>
            </div>
            <div class="rank_b">
              <span class="rank_num">5</span>
              <a class="rank_a" href="">新加坡</a>
            </div>
            <div class="rank_b">
              <span class="rank_num">6</span>
              <a class="rank_a" href="">成都</a>
            </div>
            <div class="rank_b">
              <span class="rank_num">7</span>
              <a class="rank_a" href="">东京</a>
            </div>
            <div class="rank_b">
              <span class="rank_num">8</span>
              <a class="rank_a" href="">重庆</a>
            </div>
            <div class="rank_b">
              <span class="rank_num">9</span>
              <a class="rank_a" href="">昆明</a>
            </div>
            <div class="rank_b">
              <span class="rank_num">10</span>
              <a class="rank_a" href="" style="margin-left: 16px">丽江</a>
            </div>
          </el-aside>
          <!-- 点击加载更多内容 -->
          <el-main style="padding: 0; height: auto">
            <div
              class="title"
              style="height: 30px; width: 730px; margin: 0 0 5px 80px"
            >
              <span>推荐攻略</span>
            </div>
            <div id="total_guideline">
              <div class="guideline_recommend" @click="click_replace('')">
                <div class="guideline_recommend_type">
                  <i class="el-icon-ship"></i>&nbsp;来自&nbsp;<strong
                    >游记</strong
                  >
                </div>
                <div class="guideline_recommend_title">
                  赴一场迟到两年的约会 | 去贵州邂逅一百种绿色！
                </div>
                <div class="guideline_recommend_intro">
                  <img
                    src="../../assets/img/guide_guideline_pic/贵州.jpeg"
                    alt=""
                  />
                  <div
                    class="guideline_recommend_info"
                    style="width: 500px; margin-top: 15px"
                  >
                    回溯 | 和贵州失之交臂的过去
                    最早想去贵州，还要追溯到2021年疫情期间，宅家数月，对远方山水的渴望积攒到了前所未有的高度，已经到了哪怕需要各种戳鼻子戳喉咙也要顶风出门的程度。
                    说干就干，社畜挤出5天年假，连上前后2个周末，凑够9天，机票、酒店、...
                  </div>
                </div>
              </div>

              <div
                class="guideline_recommend"
                @click="click_replace('')"
                style="height: 230px"
              >
                <div class="guideline_recommend_type">
                  <i class="el-icon-bicycle"></i>&nbsp;来自&nbsp;<strong
                    >自由行</strong
                  >
                </div>
                <div class="guideline_recommend_title">
                  舟山小众打卡地|世界最后一个绿野仙踪
                </div>
                <div class="guideline_recommend_intro">
                  <img
                    src="../../assets/img/guide_guideline_pic/舟山1.jpeg"
                    alt=""
                  /><img
                    src="../../assets/img/guide_guideline_pic/舟山2.jpg"
                    alt=""
                  /><img
                    src="../../assets/img/guide_guideline_pic/舟山3.jpg"
                    alt=""
                  />
                </div>
              </div>

              <div class="guideline_recommend" @click="click_replace('')">
                <div class="guideline_recommend_type">
                  <i class="el-icon-bicycle"></i>&nbsp;来自&nbsp;<strong
                    >自由行</strong
                  >
                </div>
                <div class="guideline_recommend_title">
                  打卡广州增城新晋的最美花园亲子民宿，180°景观落地窗
                </div>
                <div class="guideline_recommend_intro">
                  <div class="guideline_recommend_info" style="width: 750px">
                    带着孩子去原野里撒欢吧 这里有最贴近自然的户外田园
                    白天带娃插秧钓鱼 夜晚数星星，听蛙叫蝉鸣
                  </div>
                  <img
                    src="../../assets/img/guide_guideline_pic/广州1.jpeg"
                    alt=""
                  /><img
                    src="../../assets/img/guide_guideline_pic/广州2.jpeg"
                    alt=""
                  /><img
                    src="../../assets/img/guide_guideline_pic/广州3.jpeg"
                    alt=""
                  />
                </div>
              </div>

              <div class="guideline_recommend" style="height: 230px">
                <div class="guideline_recommend_type">
                  <i class="el-icon-bicycle"></i>&nbsp;来自&nbsp;<strong
                    >自由行</strong
                  >
                </div>
                <div class="guideline_recommend_title">
                  来古北水镇必玩司马台长城：登古城、赏夜景
                </div>
                <div class="guideline_recommend_intro">
                  <img
                    src="../../assets/img/guide_guideline_pic/古北水镇1.jpeg"
                    alt=""
                  /><img
                    src="../../assets/img/guide_guideline_pic/古北水镇2.jpg"
                    alt=""
                  /><img
                    src="../../assets/img/guide_guideline_pic/古北水镇3.jpeg"
                    alt=""
                  />
                </div>
              </div>

              <div class="guideline_recommend" style="display: none">
                <div class="guideline_recommend_type">
                  <i class="el-icon-ship"></i>&nbsp;来自&nbsp;<strong
                    >游记</strong
                  >
                </div>
                <div class="guideline_recommend_title">
                  带爸妈一起旅行变逃难，武汉家庭越南富国岛泰国华欣70天流浪记！
                </div>
                <div class="guideline_recommend_intro">
                  <img
                    src="../../assets/img/guide_guideline_pic/越南.jpg"
                    alt=""
                  />
                  <div
                    class="guideline_recommend_info"
                    style="width: 500px; margin-top: 15px"
                  >
                    旅行？不过是逃难罢了
                    写这篇滞留日记，我的内心非常复杂，每天心里都有几种情绪在抗争，所以文章也反复修改，从3.19号包机回到武汉，4.3酒店隔离完回家，现在回武汉有一个多月了，刚开始的情绪特别负面委屈到现在趋于平静，只是我该从角度来定角色和基调...
                  </div>
                </div>
              </div>

              <div class="guideline_recommend" style="display: none">
                <div class="guideline_recommend_type">
                  <i class="el-icon-ship"></i>&nbsp;来自&nbsp;<strong
                    >游记</strong
                  >
                </div>
                <div class="guideline_recommend_title">
                  2019年夏自驾青海七日游
                </div>
                <div class="guideline_recommend_intro">
                  <img
                    src="../../assets/img/guide_guideline_pic/青海.jpg"
                    alt=""
                  />
                  <div
                    class="guideline_recommend_info"
                    style="width: 500px; margin-top: 15px"
                  >
                    回溯 | 前言
                    忙忙碌碌的2019，感觉没时间疯也没时间记，2020这个不一样的春节，难得有了这么一段清静的日子，刷新闻、写游记、做美食，盼望着春暖花开时，相约武汉看樱花!
                    武汉，加油！
                    2019年8月中旬，我们一家三口从黄骅出发，途径中卫、张掖、卓尔山、青海湖、...
                  </div>
                </div>
              </div>

              <div class="guideline_recommend" style="display: none">
                <div class="guideline_recommend_type">
                  <i class="el-icon-ship"></i>&nbsp;来自&nbsp;<strong
                    >游记</strong
                  >
                </div>
                <div class="guideline_recommend_title">
                  苍穹之下，国庆去撒野阿尔山，邂逅那一片漫天繁星
                </div>
                <div class="guideline_recommend_intro">
                  <img
                    src="../../assets/img/guide_guideline_pic/阿尔山.jpg"
                    alt=""
                  />
                  <div
                    class="guideline_recommend_info"
                    style="width: 500px; margin-top: 15px"
                  >
                    回溯 | 曾听人说，秋冬里的阿尔山 ，才是阿尔山真正的模样。
                    2019年里，决定最后完成这个心愿：一路自驾北上，探访这个边境小城。
                    也有人说一到秋天阿尔山就和旅游没什么关系了
                    旅程回来后，我想对那些人说 那是你不懂它的秋 前话
                    每年一快到国庆，那颗躁...
                  </div>
                </div>
              </div>

              <div class="guideline_recommend" style="display: none">
                <div class="guideline_recommend_type">
                  <i class="el-icon-ship"></i>&nbsp;来自&nbsp;<strong
                    >游记</strong
                  >
                </div>
                <div class="guideline_recommend_title">
                  【2019夏】回首又见他 | 马尔代夫 薇拉瓦鲁 8日亲子游
                </div>
                <div class="guideline_recommend_intro">
                  <img
                    src="../../assets/img/guide_guideline_pic/马尔代夫.jpg"
                    alt=""
                  />
                  <div
                    class="guideline_recommend_info"
                    style="width: 500px; margin-top: 15px"
                  >
                    题外话：
                    重拾写游记，是因为这实在是记录旅行中美好时光的利器。虽然我一直深知这一点，然而除了头两次出国认认真真有记录外，其余都未成型，至今还有3篇仅有个开头就躺在草稿箱中。有记录的至今仍可回味，无记录的许多记忆都已模糊不清。未完成我归结是...
                  </div>
                </div>
              </div>

              <div class="guideline_recommend" style="display: none">
                <div class="guideline_recommend_type">
                  <i class="el-icon-ship"></i>&nbsp;来自&nbsp;<strong
                    >游记</strong
                  >
                </div>
                <div class="guideline_recommend_title">
                  首次进藏，勇闯阿里朝觐神山圣湖；再度入疆，远赴喀什品味异...
                </div>
                <div class="guideline_recommend_intro">
                  <img
                    src="../../assets/img/guide_guideline_pic/藏.jpg"
                    width="220px"
                    height="130px"
                    alt=""
                  />
                  <div
                    class="guideline_recommend_info"
                    style="width: 500px; margin-top: 15px"
                  >
                    回溯 | 出发时间：2019年6月7日 出行天数：26天 出行方式：自驾
                    人员组成：一家三口 旅行目的地：成都、拉萨、喀什...
                    行驶里程：15000公里 全部费用：30000RMB 序
                    清晨，我们驾车远行。 驶向那个令我魂牵梦绕的地方。
                    日行千里，风雨兼程。 只为在途中能与你相...
                  </div>
                </div>
              </div>

              <div class="guideline_recommend" style="display: none">
                <div class="guideline_recommend_type">
                  <i class="el-icon-bicycle"></i>&nbsp;来自&nbsp;<strong
                    >自由行</strong
                  >
                </div>
                <div class="guideline_recommend_title">
                  在东京如何选择适合自己的酒店
                </div>
                <div class="guideline_recommend_intro">
                  <img
                    src="../../assets/img/guide_guideline_pic/东京.jpeg"
                    alt=""
                  /><img
                    src="../../assets/img/guide_guideline_pic/东京2.jpeg"
                    alt=""
                  /><img
                    src="../../assets/img/guide_guideline_pic/东京3.jpg"
                    alt=""
                  />
                </div>
              </div>

              <div id="click_load" @click="a_click">
                {{ c_text }}<i class="el-icon-loading"></i>
              </div>
            </div>
          </el-main>
        </el-container>
      </el-container>
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
      <div
        style="
          color: white;
          font-size: 20px;
          width: 130px;
          height: 40px;
          padding-top: 20px;
          margin: auto;
          line-height: 25px;
        "
      >
        制作人:谢广峰
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
      hpicture: [
        { id: 1, url: require("../../assets/img/carousel/p1.jpg") },
        { id: 2, url: require("../../assets/img/carousel/p2.jpg") },
        { id: 3, url: require("../../assets/img/carousel/p3.jpg") },
        { id: 4, url: require("../../assets/img/carousel/p4.jpg") },
      ],
      isActive1: false,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      dp: document.getElementsByClassName("guideline_recommend"),
      i: 4,
      c_text: "点击加载更多",
    };
  },
  methods: {
    mouseEnter1() {
      this.isActive1 = true;
    },
    mouseOut1() {
      this.isActive1 = false;
    },
    mouseEnter2() {
      this.isActive2 = true;
    },
    mouseOut2() {
      this.isActive2 = false;
    },
    mouseEnter3() {
      this.isActive3 = true;
    },
    mouseOut3() {
      this.isActive3 = false;
    },
    mouseEnter4() {
      this.isActive4 = true;
    },
    mouseOut4() {
      this.isActive4 = false;
    },
    a_click() {
      setTimeout(() => {
        this.dp[this.i].style.display = "block";
        this.dp[this.i + 1].style.display = "block";
        if (this.i == 8) {
          this.c_text = "暂无更多";
        }
        if (this.i <= 6) {
          this.i += 2;
        }
      }, 500);
    },
    click_replace(loca) {
      location.href = loca;
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
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

a {
  text-decoration: none;
  display: inline-block;
  color: rgb(153, 153, 153);
}

ol {
  list-style-type: none;
}

#total {
  margin: auto;
  width: 1140px;
  height: auto;
  overflow-x: hidden;
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

.recommand_des {
  border: rgb(221, 221, 221) solid 1px;
  padding: 0 15px;
  height: 45px;
  width: auto;
  line-height: 10px;
  font-size: 18px;
  color: #666;
  font-weight: 250;
  cursor: default;
}

.recommand_des:hover {
  color: rgb(255, 153, 0);
}

.recommand_li {
  padding-left: 10px;
  color: rgb(153, 153, 153);
  height: 30px;
}

.recommand_li_title {
  margin-left: 20px;
  font-size: 20px;
  color: rgb(122, 102, 122);
  font-weight: 200;
}

#first_part dl {
  margin: 0 0 0 20px;
  padding-left: 50px;
  border: 0;
  font-size: 12px;
  line-height: 20px;
}

#first_part dt {
  float: left;
  display: inline;
  width: 60px;
  height: 20px;
  background: none;
  margin: 5px 0px 5px -60px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  line-height: 20px;
  font-size: 12px;
  cursor: default;
  color: #666;
}

#first_part dd {
  display: inline;
  position: static;
  border: 0;
  width: auto;
  padding: 0;
  float: left;
  margin: 5px 15px 5px 0;
  height: 20px;
  overflow: hidden;
  white-space: nowrap;
}

#search_input:focus {
  outline: none;
}

.navigation {
  cursor: pointer;
  width: auto;
}

.navigation:focus {
  color: rgb(255, 157, 0);
  border-bottom: 3px solid rgb(255, 157, 0);
}

.small_letter {
  font-size: small;
  font-weight: 100;
}

.rank_num {
  font-size: large;
  font-weight: 200;
  color: rgb(255, 168, 0);
  font-size: 25px;
  line-height: 45px;
}

.rank_a {
  line-height: 45px;
  margin-left: 30px;
  font-size: 20px;
  width: auto;
}

.rank_b {
  height: auto;
  width: auto;
  text-align: left;
  border-bottom: 1px solid rgb(238, 238, 238);
}

.rank_a:hover {
  color: rgb(255, 168, 0);
  text-decoration-line: underline;
}

.title,
.guide_title {
  font-size: 20px;
}

.guideline_recommend {
  height: 250px;
  width: 780px;
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 4px;
  background-color: white;
  margin-left: 80px;
  cursor: pointer;
}

.guideline_recommend:hover {
  background-color: #f8f8f8;
}

.total_guideline {
  height: auto;
  width: 780px;
  padding: 0;
  margin-left: 80px;
  padding: 0;
}

#click_load {
  text-align: center;
  height: 40px;
  width: 750px;
  background-color: #fff5e5;
  margin-left: 100px;
  line-height: 40px;
  cursor: pointer;
}

#click_load:hover {
  background-color: #efefef;
}

.guideline_recommend_type {
  display: inline-block;
  line-height: 25px;
  font-size: 14px;
  color: #666;
  margin-left: 20px;
}

.guideline_recommend_type strong {
  color: #f18541;
}

.guideline_recommend_title {
  margin-bottom: 15px;
  font-size: 20px;
  color: #333;
  margin-left: 20px;
}

.guideline_recommend:hover .guideline_recommend_title {
  color: #ff9d48;
}

.guideline_recommend_title {
  margin-bottom: 12px;
  font-size: 20px;
  color: #333;
}

.guideline_recommend_intro {
  width: 750px;
  height: auto;
  margin-left: 20px;
}

.guideline_recommend_intro img {
  margin-right: 5px;
  float: left;
}

.guideline_recommend_info {
  color: #666;
  font-size: 15px;
  line-height: 26px;
  float: left;
}
</style>
