export interface ListInt {
    userId: number,
    id: number,
    title: string,
    introduce: string

}
interface selectDataInt {
    title: string,
    introduce: string,
    page: number,//页码
    count: number, //总条数
    pagesize: number,//默认一页显示几条

}
//定义一个接收角色的接口
interface RoleListInt {
    authority: number[]
    roleId: number
    roleName: string
}
export class InitData {
    selectData: selectDataInt = {
        title: "",
        introduce: "",
        page: 1,
        count: 0,
        pagesize: 5,
    }
    list: ListInt[] = [] //展示的内容的数据,接受从后台返回的数据
    roleList: RoleListInt[] = []  //接收角色信息的列表
}