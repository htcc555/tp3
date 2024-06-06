<template>
  <div id="searchhotel">
    <div
      style="
        width: 980px;
        height: 50px;
        text-align: center;
        margin: auto;
        font-size: 30px;
        line-height: 45px;
      "
    >
      酒店查询结果

    
    </div>

    <div style="width: 900px;height: auto;margin: auto">
        <el-table
      :data="data"
      style="width: 100%">
      <el-table-column
        prop="tag"
        label="酒店地点"
        width="180">
      </el-table-column>
      <el-table-column
        prop="hotelName"
        label="酒店名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="startTime"
        label="起始日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="endTime"
        label="结束日期">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格">
      </el-table-column>
      <el-table-column label="操作">
      <template>

        <el-button
          size="mini"
          @click="buy()">点击购买</el-button>
      </template>
    </el-table-column>
    </el-table>

    </div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "searchhotel",
  //导入相应组件后注册组件
  data() {
    return {
      data: [],
    };
  },
  methods: {
    buy(){
        alert("购买成功")
    }

  },
  created: function () {
    console.log(this.data);

    axios.get("http://localhost:8088/hotel/find").then((response) => {
      this.data = response.data;
      console.log(this.data);
    });
  },
};
</script>

<style></style>
