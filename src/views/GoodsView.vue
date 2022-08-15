<template>
  <div>
    <div class="select-box">
      <el-form :inline="true" :model="selectData" class="demo-form-inline">
        <el-form-item label="标题">
          <el-input v-model="selectData.title" placeholder="请输入关键字" />
        </el-form-item>
        <el-form-item label="详情">
          <el-input v-model="selectData.introduce" placeholder="请输入关键字" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" >查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
    </div>
  </div>
</template>

<script lang="ts">
// import { throwStatement } from "@babel/types";
import { defineComponent, reactive, toRefs } from "vue";
import { getGoodsList } from "../request/api";
import { InitData } from "../type/goods";
export default defineComponent({
  setup() {
    const data = reactive(new InitData());
    getGoodsList().then((res) => {
      console.log(res);
    });

    return { ...toRefs(data) };
  },
});
</script>

<style scoped>
</style>