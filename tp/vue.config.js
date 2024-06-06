const { defineConfig } = require("@vue/cli-service");


module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    // 配置主页
    index: {
      entry: "./src/main.js", // 页面入口文件
      template: "./public/index.html", // 页面主组件挂载的html文件
      title: "首页", // 页面标题
    },
    // 配置其他页面
    guide: {
      entry: "./src/pages/guide/guide.js",
      template: "./public/guide.html",
      title: "攻略",
    },
    personal: {
      entry: "./src/pages/personal/personal.js",
      template: "./public/personal.html",
      title: "个人中心",
    },
    hotel: {
      entry: "./src/pages/hotel/hotel.js",
      template: "./public/hotel.html",
      title: "酒店名宿",
    },
    test: {
      entry: "./src/pages/test1/test.js",
      template: "./public/test.html",
      title: "测试",
    },
    login: {
      entry: "./src/pages/login/login.js",
      template: "./public/login.html",
      title: "登录",
    },
    searchhotel: {
      entry: "./src/pages/searchhotel/searchhotel.js",
      template: "./public/searchhotel.html",
      title: "查询",
    },
    wtguide: {
      entry: "./src/pages/wtguide/wtguide.js",
      template: "./public/wtguide.html",
      title: "写攻略",
    },
  },
});
