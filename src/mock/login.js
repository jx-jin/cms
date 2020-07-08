import Mock from "mockjs"
import {splitString} from "../utils/utils"


Mock.mock(/\/api\/login/,"get",(options)=>{
    let data=splitString(options.url);
    if(data.username="admin" && data.password=="admin"){
        return{
            code:200,
            data:{
                authToken:"auhl1j21941k23k"
            }
        }
    }else{
        return{
            code:500,
            data:{
                info:"用户名或密码错误"
            }
        }
    }
   
   
})