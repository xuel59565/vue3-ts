<template>
    <div class="login-box">
        <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="70px"
            class="demo-ruleForm">
            <h2>后台管理系统yeyye</h2>
            <el-form-item label="账号：" prop="username">
                <el-input v-model="ruleForm.username" autocomplete="off" />
            </el-form-item>
            <el-form-item label="密码：" prop="password">
                <el-input v-model="ruleForm.password" autocomplete="off" />
            </el-form-item>

            <el-form-item>
                <el-button class="loginBtn" type="primary">登录</el-button>
                <el-button class="loginBtn" >重置</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
    setup() {
        const data = reactive({
            ruleForm: {
                username: "",
                password: "",
            },
            rules: {
                username: [
                    {
                        required: true,
                        message: '请输入账号',
                        trigger: 'blur'
                    },
                    {
                        min: 6,
                        max: 12,
                        message: '账号长度为6-12位',
                        trigger: 'blur'
                    },
                ],
                password: [
                    {
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    },
                    {
                        min: 6,
                        max: 12,
                        message: '账号长度为6-12位',
                        trigger: 'blur'
                    },
                ],

            }
        })
        return { ...toRefs(data) }
    }
})
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
    background-color: rgb(255, 255, 255);
    padding: 30px 40px 30px 40px;
    border-radius: 20px;
}
.loginBtn{
    width: 48%;
}
h2{
    margin-bottom: 20px;
}
</style>