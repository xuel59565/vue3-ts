<template>
    <div>

        <div class="select-box">
            <el-form :inline="true" :model="selectData" class="demo-form-inline">
                <el-form-item label="姓名">
                    <el-input v-model="selectData.nickName" placeholder="请输入姓名" />
                </el-form-item>
                <el-form-item label="角色">
                    <el-select v-model="selectData.role" class="m-2" placeholder="请选择" size="large">
                        <el-option v-for="item in roleList" :key="item.roleId" :label="item.roleName"
                            :value="item.roleId" />
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div>
            <el-table :data="list" border style="width: 100%">
                <el-table-column prop="id" label="id" width="180" />
                <el-table-column prop="nickName" label="姓名" width="180" />
                <el-table-column prop="role" label="角色">
                    <template #default="scope">
                        <el-button link type="primary" size="small" @click="deleteRow(scope.row)">
                            Remove
                        </el-button>
                    </template>
                </el-table-column>

            </el-table>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRef, toRefs } from 'vue'
import { getUserList, getRoleList } from "../request/api"
import { InitData } from "../type/user"
// import { InitData, ListInt } from "../type/user";
export default defineComponent({
    setup() {
        // 实例化一个对象
        const data = reactive(new InitData())
        onMounted(() => {
            getUser();
            getRole()
        })
        const getUser = () => {
            getUserList().then(res => {
                console.log(res)
                data.list = res.data
            })
        }
        const getRole = () => {
            getRoleList().then(res => {
                console.log(res)
                data.roleList = res.data
            }
            )
        }
        const deleteRow=(row:any)=>{
            console.log(row)
        }
        // 导出实例化对象,进行解构
        return { ...toRefs(data),deleteRow }
    }
})
</script>

<style scoped>
</style>