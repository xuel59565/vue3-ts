import axios from "axios";
//创建axios实例
const service = axios.create({
    baseURL: 'https://www.fastmock.site/mock/bf1fcb3c2e2945669c2c8d0ecb8009b8/api',
    timeout: 5000,
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    }
})
// 请求拦截
service.interceptors.request.use((config) => {
    // 判空
    config.headers = config.headers || {}
    if (localStorage.getItem("token")) {
        config.headers.token = localStorage.getItem("tplem") || ""
    }
    // 加东西以后要还回去
    return config
})
// 响应拦截，成功或者失败，用code判断，成功还是失败
service.interceptors.response.use((res) => {
    // 获得code，类型定义，data为返回数据
    const code: number = res.data.code
    // 不等于200就是,失败
    if (code != 200){
        return Promise.reject(res.data)
    }
    // 返回成功
    return res.data
},(err)=>{
    // 错误信息处理
    console.log(err);
})
// 想要发送到外面去，要返回实例，暴露出去
export default service

