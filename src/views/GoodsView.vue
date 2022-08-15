<template>
<<<<<<< HEAD
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
=======
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
            <el-pagination @current-change="currentChange" @size-change="sizeChange" layout="prev, pager, next"
                :total="selectData.count * 2" />
        </div>
    </div>
</template>

<script lang="ts">
import { throwStatement } from "@babel/types";
import { computed, defineComponent, onMounted, reactive, toRefs, watch } from "vue";
>>>>>>> 37fa64f7cadb860639e24d0768405976b1758b9e
import { getGoodsList } from "../request/api";
import { InitData, ListInt } from "../type/goods";
export default defineComponent({
<<<<<<< HEAD
  setup() {
    const data = reactive(new InitData());
    getGoodsList().then((res) => {
      console.log(res);
    });

    return { ...toRefs(data) };
  },
=======
    setup() {
        const data = reactive(new InitData)
        // getGoodsList().then((res) => {
        //     console.log(res);
        //     //接收后台返回的数据
        //     data.list = res.data
        //     data.selectData.count = res.data.length
        // });
        onMounted(() => {
            getGoods()
        })
        const getGoods = () => {
            getGoodsList().then((res) => {
                console.log(res);
                //接收后台返回的数据
                data.list = res.data
                data.selectData.count = res.data.length
            });
        }

        const dataList = reactive({
            comList: computed(() => {
                //1-10
                return data.list.slice(
                    (data.selectData.page - 1) * data.selectData.pagesize,//0-9 页码1
                    data.selectData.page * data.selectData.pagesize)//页码2 10-19
            })
        })
        const currentChange = (page: number) => {
            data.selectData.page = page

        }
        const sizeChange = (pagesize: number) => {
            data.selectData.pagesize = pagesize
        }
        // 查询
        const onSubmit = () => {
            // console.log(data.selectData.title);
            // console.log(data.selectData.introduce);
            let arr: ListInt[] = []//定义数组，用来接收查询后需要展示的数据
            if (data.selectData.title || data.selectData.introduce) {//判断两个，其中一个是否有值
                if (data.selectData.title) {
                    arr = data.list.filter((value) => {//将过滤出来的数组赋值给arr
                        return value.title.indexOf(data.selectData.title) != -1

                    })
                }
                if (data.selectData.introduce) {
                    arr = data.list.filter((value) => {
                        return value.introduce.indexOf(data.selectData.introduce) != -1
                    })
                }

            } else {
                arr = data.list
            }
            data.selectData.count = arr.length
            data.list = arr
        }
        // 监听输入框的两个属性
        watch([() => data.selectData.title, () => data.selectData.introduce], () => {
            if (data.selectData.title == '' && data.selectData.introduce == '') {
                // getGoodsList().then((res)=>{
                //     data.list=res.data;
                //     data.selectData.count=res.data.length
                // })
                getGoods()
            }
        })
        return { ...toRefs(data), currentChange, sizeChange, dataList, onSubmit };
    },
>>>>>>> 37fa64f7cadb860639e24d0768405976b1758b9e
});
</script>

<style scoped>
</style>