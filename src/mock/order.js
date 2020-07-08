import Mock from "mockjs"

let orderData=Mock.mock({
    "data|50":[
        {
            "id|+1":6001,
            "data":"@date(yyy-MM-dd hh:mm:ss)",
            "order":()=>{
                var num="";
                for(var i=0;i<10;i++){
                    num+=Math.floor(Math.random()*10)
                }
                return num
            }
        }
    ]
})

Mock.mock(/\/order\/orderlist/,"get",(options)=>{
    let {limit,page}=JSON.parse(options.body)
    var arr=[]
    for(var i=limit*(page-1);i<(limit*page);i++){
        arr.push(orderData.data[i])
    }
    return {
        arr,
        total:orderData.data.length,
        data:orderData.data
    }
})