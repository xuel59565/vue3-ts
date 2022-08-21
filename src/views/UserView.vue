<template>
  <div>
    <div class="select-box">
      <el-form :inline="true" :model="selectData" class="demo-form-inline">
        <el-form-item label="姓名">
          <el-input v-model="selectData.nickName" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="角色">
          <el-select v-model="selectData.role" class="m-2" placeholder="请选择" size="large">
          <!-- 前面设置了为0，如果等于0就是系那是全部 -->
            <el-option label="全部" :value="0" />
            <el-option v-for="item in roleList" :key="item.roleId" :label="item.roleName" :value="item.roleId" />
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

            <el-button v-for="item in scope.row.role" :key="item.role" link size="small">
              {{ item.roleName }}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRef, toRefs , watch } from "vue";
import { getUserList, getRoleList } from "../request/api";
// import { InitData } from "../type/user"
import { InitData, ListInt } from "../type/user";
export default defineComponent({
  setup() {
    // 实例化一个对象
    const data = reactive(new InitData());
    onMounted(() => {
      getUser();
      getRole();
    });
    const getUser = () => {
      getUserList().then((res) => {
        console.log(res);
        data.list = res.data;
      });
    };
    const getRole = () => {
      getRoleList().then((res) => {
        console.log(res);
        data.roleList = res.data;
      });
    };
    const deleteRow = (row) => {
      console.log(row);
    };
    const onSubmit=()=>{
       let arr: ListInt[] = []//定义数组，用来接收查询后需要展示的数据
            if (data.selectData.nickName || data.selectData.role) {//判断两个，其中一个是否有值
                if (data.selectData.nickName) {
                    arr = data.list.filter((value) => {//将过滤出来的数组赋值给arr
                        return value.nickName.indexOf(data.selectData.nickName) != -1
                    })
                }
                if (data.selectData.role) {
                    arr = (data.selectData.nickName ? arr :data.list).filter((value) => {
                        return value.role.find((item)=>item.role===data.selectData.role)
                    })
                }
            } else {
                arr = data.list
            }
            data.list = arr
    }
    // 监听输入框的两个属性
        watch([() => data.selectData.nickName, () => data.selectData.role], () => {
            if (data.selectData.nickName == '' || data.selectData.role == 0) {
                getUser()
            }
        })
    // 导出实例化对象,进行解构
    return { ...toRefs(data), deleteRow ,onSubmit};
  },
});
</script>

<style scoped>
</style>