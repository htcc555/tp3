<template>
    <div id="aside">
      <el-row class="tac">
        <el-col :span="24" style="border-right: solid 1px #FFFFFF;">
          <!-- min-height:calc(100vh - 80px); 是通过设置最小高度，100vh代表试图的总高（100%），减去头部视图的高 -->
          <!-- default-active ：默认高亮的按钮 -->
          <el-menu style="min-height: calc(100vh - 80px);" default-active="home" class="el-menu-vertical-demo" 
          >
  
   <!-- index='home' : 表示跳转的组件路由，这里跳转的是主页的组件路由，名字是在 index.js 里面设置的 -->
            <el-menu-item index="home">
              <i class="el-icon-s-home"></i>
              <span slot="title">首页</span>
            </el-menu-item>
  
            <!-- index='home' : 表示跳转的组件路由，这里跳转的是用户的组件路由 -->
            <el-menu-item index="user">
              <i class="el-icon-s-custom"></i>
              <span slot="title">用户管理</span>
            </el-menu-item>
  
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Aside',
    methods: {
    
    }
  }
  </script>
  <style>
  #aside {
    height: 100%;
    border-right: solid 1px rgb(173, 173, 173);
  }
  </style>
  