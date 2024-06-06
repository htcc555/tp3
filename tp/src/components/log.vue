<template>
  <el-form class="login-container">
    <h1 class="title">用户登录</h1>
    <el-form-item label="">
      <el-input
        type="text"
        v-model="username"
        placeholder="登录账号"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item label="">
      <el-input
        type="password"
        v-model="password"
        placeholder="登录密码"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" style="width: 100%" @click="dosubmit()"
        >提交</el-button
      >
    </el-form-item>
    <el-row style="text-align: center; margin-top: -10px">
      <el-link type="primary">忘记密码</el-link>
    </el-row>
  </el-form>
</template>

<script>
export default {
  name: "log",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    dosubmit(){
      window.location.href='/personal'
    }
  },
};
</script>

<style scoped>
.login-container {
  border-radius: 10px;
  margin: 0px auto;
  width: 350px;
  padding: 30px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  text-align: left;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
}

.title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
</style>
