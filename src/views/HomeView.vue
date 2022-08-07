<template>
  <div class="home">
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="4"
            ><img src="../assets/logo.png" class="logo"
          /></el-col>
          <el-col :span="16"><h2>管理系统</h2></el-col>
          <el-col :span="4"><span class="quit-login">退出登录</span></el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            default-active="2"
            text-color="#fff"
          >
            <el-menu-item index="2">
              <span>商品列表</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { defineComponent } from "vue";
// 引入路由
import { useRouter } from "vue-router";
export default defineComponent({
  name: "HomeView",
  // 设置筛选
  setup(){
    const router=useRouter()
    console.log(router.getRoutes());
  },
  components: {},
});
</script>
<style lang="scss" scoped>
.el-header {
  height: 80px;
  background-color: #545c64e7;

  .logo {
    height: 80px;
  }
  h2,
  .quit-login {
    text-align: center;
    height: 80xp;
    line-height: 80px;
    color: white;
  }
  
}
.el-aside {
  .el-menu{
     height: calc(100vh - 80px);
  }
   
  }
</style>