import Mock from "mockjs"

let echartData=Mock.mock({
    "data":[
        {
            "id":1001,
            "name":"当日数据",
            "nowAdd":parseInt(20+Math.random()*10),
            "nowAddAdmin":parseInt(40+Math.random()*10)
        },
        
    ],
    "dataTwo":[
        {
            "id":2001,
            "name":"总数据",
            "registerAdmin":parseInt(100+Math.random()*100),
            "totalAdmin":parseInt(1000+Math.random()*100)
        }
    ]

})
Mock.mock(/\/home\/echartData/,"get",()=>{
    return{
        data:echartData.data,
        dataTwo:echartData.dataTwo
    }
})