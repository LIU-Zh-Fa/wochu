module.exports = {
    devServer:{
        proxy:{
            "/wochu":{
                "target":"http://api9.wochu.cn",
                "changeOrigin":true,
                "pathRewrite":{
                    "^/wochu":""
                }
<<<<<<< HEAD
            },
            "/wwochu":{
                "target":"http://wmall.wochu.cn",
                "changeOrigin":true,
                "pathRewrite":{
                    "^/wwochu":""
=======
                
            },
            "/logins":{
                "target":"http://localhost:3000",
                "changeOrigin":true,
                "pathRewrite":{
                    "^/logins":""
>>>>>>> 59821c0e505f019c5df2a9718fbf1a1f68d9f3d9
                }
            }
        }
    },
    
}
