const path =require("path")
module.exports={
    publicPath: "./",
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "@components":path.join(__dirname,"./src/components"),
                "@pages":path.join(__dirname,"./src/pages"),
                "@router":path.join(__dirname,"./src/router"),
                "@store":path.join(__dirname,"./src/store"),
                "@mock":path.join(__dirname,"./src/mock"),
            }
        }
    },
    devServer:{
        proxy:{
            "/api":{
                target:"http://101.37.79.80:8089",
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
                
            }
        }
       
    }
}