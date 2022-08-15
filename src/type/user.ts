// 定义接口
export interface ListInt {
    id: number
    nickName: string
    role: RoleInt[]
    userName: string
}
interface RoleInt {
    role: number,
    roleName: string
}
// 定义一个接口，搜索的
interface SelectDataInt {
    //需要查询的东西
    role: number,
    nickName: string
}
interface RoleListInt {
    authority: string[]
    roleId: number
    roleName: string
}
export class InitData {
    salectData: SelectDataInt = {
        nickName: "",
        role: 0
    }
    list: ListInt[] = []//用来接收用户信息的列表
    roleList: RoleListInt[] = []//用来接收角色信息的列表
}