module.exports = {
    devServer:{
        proxy:{
            "/wochu":{
                "target":"http://api9.wochu.cn",
                "changeOrigin":true,
                "pathRewrite":{
                    "^/wochu":""
                }
                
            },
            "/logins":{
                "target":"http://localhost:3000",
                "changeOrigin":true,
                "pathRewrite":{
                    "^/logins":""
                }
            }
        }
    },
    
}
