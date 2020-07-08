import Mock from "mockjs"

let userData=Mock.mock({
    "data|100":[
        {
            "id|+1":9001,
            "status":()=>{
                if(Math.random()>0.5){
                    return true;
                }else{
                    return false
                }
            },
            "username":"@email()",
            "fullname":"@cname",
            "auth":()=>{
                var arr=["超级管理员","管理员","普通用户","部门主管"];
                var n=Math.random()*arr.length+1;
                return arr[n];
            },
            "firsttime":"@date(yyy-MM-dd hh:mm:ss)",
            "email":"@email()",
            "lasttime":"@date(yyy-MM-dd hh:mm:ssW)"
        }
    ]
})

Mock.mock(/\/user\/userlist/,"get",(options)=>{
    let {limit,page}=JSON.parse(options.body)
    var arr=[];
    for(var i=limit*(page-1);i<(limit*page);i++){
        arr.push(userData.data[i])
    }
    return {
        
        arr,
        total:userData.data.length
    }
})