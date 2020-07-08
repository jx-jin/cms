import Mock from "mockjs"

let echartsbar = Mock.mock({
    "data": 
        {
            "month": () => {
                var monthlist = [];
                for (var i = 1; i <= 12; i++) {
                    monthlist.push(`${i}月`)
                }
                return monthlist
            },
            "addUser": ()=>{
                var addUser=[]
                for (var i = 1; i <= 12; i++) {
                    addUser.push(parseInt(100 + Math.random() * 100))
                }

                return addUser
            },
            "order":()=>{
                var order=[]
                for (var i = 1; i <= 12; i++) {
                    order.push(parseInt(150 + Math.random() * 100))
                }

                return order
            },
            "admin":()=>{
                var admin=[]
                for (var i = 1; i <= 12; i++) {
                    admin.push(parseInt(50 + Math.random() * 100))
                }

                return admin
            }
        }
    
})
Mock.mock(/\/home\/datalist/, "get", () => {
    return {
        data: echartsbar.data
    }
})