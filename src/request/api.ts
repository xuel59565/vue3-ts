// 对api做一下处理

import service from ".";

// 对发送请求再做一个处理

// 这是一个接口,用loginData给data做一个规范
interface loginData{
    username:string,
    password:string
}

// 导出一个函数，需要传参所以login后有括号
// loginData是给data做一下类型规范
export function login(data:loginData){
    return service({
        url:"/login",
        // 方式
        method:"post",
        // 数据
        data
    })
}