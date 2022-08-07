// 规范接口(登录  )
export interface LoginFormInt {
    username: string
    password: string
}
// 定义一个类，通过这个类实例化一个对象，将这个实例化对象赋值给data
// export是导出
export class LoginData {
    // 是一个属性，这个属性是一个对象，其中他的类型是LoginFormInt
    ruleForm: LoginFormInt = {
        username: '',
        password: '',
    }
}