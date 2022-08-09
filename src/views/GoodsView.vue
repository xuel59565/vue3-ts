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
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div>
            <el-table :data="dataList.comList" border style="width: 100%">
                <el-table-column prop="id" label="id" width="180" />
                <el-table-column prop="title" label="标题" width="180" />
                <el-table-column prop="introduce" label="详情" />
            </el-table>
            <el-pagination @current-change="currentChange" @size-change="sizeChange" layout="prev, pager, next" :total="selectData.count" />
        </div>
    </div>
</template>

<script lang="ts">
import { throwStatement } from "@babel/types";
import { cp } from "fs";
import { computed,defineComponent, reactive, toRefs } from "vue";
import { getGoodsList } from "../request/api";
import { InitData } from "../type/goods";
export default defineComponent({
    setup() {
        const data = reactive(new InitData)
        getGoodsList().then((res) => {
            console.log(res);
            //接收后台返回的数据
            data.list=res.data
            data.selectData.count=res.data.length
        });
        const dataList=reactive({
            comList:computed(()=>{
                //1-10
                return data.list.slice(
                    (data.selectData.page-1)*data.selectData.pagesize,//0-9 页码1
                    data.selectData.page*data.selectData.pagesize)//页码2 10-19
            })
        })
        const currentChange=(page:number)=>{
            data.selectData.page=page

        }
        const sizeChange=(pagesize:number)=>{
            data.selectData.pagesize=pagesize
        }
        return { ...toRefs(data),currentChange,sizeChange, dataList};
    },
});
</script>

<style scoped>
</style>