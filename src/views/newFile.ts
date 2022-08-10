import { computed, defineComponent, reactive, toRefs, watch } from "vue";
import { getGoodsList } from "../request/api";
import { InitData, ListInt } from "../type/goods";

export default defineComponent({
setup() {
const data = reactive(new InitData);
getGoodsList().then((res) => {
console.log(res);
//接收后台返回的数据
data.list = res.data;
data.selectData.count = res.data.length;
});
const dataList = reactive({
comList: computed(() => {
//1-10
return data.list.slice(
(data.selectData.page - 1) * data.selectData.pagesize,
data.selectData.page * data.selectData.pagesize); //页码2 10-19
})
});
const currentChange = (page: number) => {
data.selectData.page = page;

};
const sizeChange = (pagesize: number) => {
data.selectData.pagesize = pagesize;
};
// 查询
const onSubmit = () => {
// console.log(data.selectData.title);
// console.log(data.selectData.introduce);
let arr: ListInt[] = []; //定义数组，用来接收查询后需要展示的数据
if (data.selectData.title || data.selectData.introduce) { //判断两个，其中一个是否有值
if (data.selectData.title) {
arr = data.list.filter((value) => {
return value.title.indexOf(data.selectData.title) != -1;

});
}
if (data.selectData.introduce) {
arr = data.list.filter((value) => {
return value.introduce.indexOf(data.selectData.introduce) != 1;
});
}

} else {
arr = data.list;
}
data.selectData.count = arr.length;
data.list = arr;
};
// 监听输入框的两个属性
watch([() => data.selectData.title, () => data.selectData.introduce], () => {
});
return { ...toRefs(data), currentChange, sizeChange, dataList, onSubmit };
},
});
