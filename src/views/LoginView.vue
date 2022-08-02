<template>
  <div class="login-box">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="70px"
      class="demo-ruleForm"
    >
      <h2>后台管理系统</h2>
      <el-form-item label="账号:" prop="username">
        <el-input v-model="ruleForm.username" autocomplete="off" />
      </el-form-item>

      <el-form-item label="密码:" prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
        />
      </el-form-item>

      <!-- <el-form-item>
                <el-button class="loginBtn" type="primary">登录</el-button>
                <el-button class="loginBtn">重置</el-button>
            </el-form-item> -->

      <el-form-item>
        <el-button
          class="loginBtn"
          type="primary"
          @click="submitForm(ruleFormRef)"
          >登录</el-button
        >
        <el-button class="loginBtn" @click="resetForm(ruleFormRef)"
          >重置</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from "vue";
import { LoginData } from "../type/login";
import type { FormInstance } from "element-plus";
import { login } from "../request/api";
export default defineComponent({
  setup() {
    // 通过new实例化对象，赋值给data
    const data = reactive(new LoginData());
    const rules = {
      username: [
        {
          required: true,
          message: "请输入账号",
          trigger: "blur",
        },
        {
          min: 6,
          max: 12,
          message: "账号长度为6-12位",
          trigger: "blur",
        },
      ],
      password: [
        {
          required: true,
          message: "请输入密码",
          trigger: "blur",
        },
        {
          min: 6,
          max: 12,
          message: "账号长度为6-12位",
          trigger: "blur",
        },
      ],
    };
    // 登录
    const ruleFormRef = ref<FormInstance>();
    const submitForm = (formEl: FormInstance | undefined) => {
    //     // 如果没有那就返回
    //   if (!formEl) return;
    //   //validate对表单内容的验证；valid属于布尔类型，true则正确
    //   formEl.validate((valid) => {
    //     if (valid) {
    //       console.log("提交!");

    //       login(data.ruleForm).then((res) => {
    //         console.log(res);
    //       });
    //     } else {
    //       console.log("error submit!");
    //       return false;
    //     }
    //   });
    console.log(formEl);
    };

    // 重置
    const resetForm = () => {
      data.ruleForm.username = "";
      data.ruleForm.password = "";
    };
    return { ...toRefs(data), rules, ruleFormRef, submitForm };
  },
});
</script>

<style lang="scss" scoped>
.login-box {
  width: 100%;
  height: 100%;
  background: url(../assets/bg.jpg);
  padding: 1px;
  text-align: center;
}

.demo-ruleForm {
  width: 500px;
  margin: 200px auto;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 30px 40px 30px 40px;
  border-radius: 20px;
}

.loginBtn {
  // margin-top: 10px;
  width: 48%;
}

h2 {
  margin-bottom: 30px;
}
</style>