import http from "../utils/request"

export const loginApi = (loginModel) => {
    return http({
        url: "/api/login",
        method: "get",
        data:loginModel
    })    
}
export const shopListApi=(shopInfo)=>{
    return http({
        url:"/shopmanage/shoplist",
        method:"get",
        data:shopInfo
    })
}

export const userList=(userInfo)=>{
    return http({
        url:"/user/userlist",
        method:"get",
        data:userInfo
    })
}
export const echartData=()=>{
    return http({
        url:"/home/echartData",
        method:"get"
    })
}
export const getDataList=()=>{
    return http({
        url:'/home/datalist',
        method:"get"
    })
}

export const getOrderlist=(orderInfo)=>{
    return http({
        url:"/order/orderlist",
        method:"get",
        data:orderInfo
    })
}