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
            "/wwochu":{
                "target":"http://wmall.wochu.cn",
                "changeOrigin":true,
                "pathRewrite":{
                    "^/wwochu":""
                }
            },
            "/logins":{
                "target":"http://10.9.26.132:3000",
                "changeOrigin":true,
                "pathRewrite":{
                    "^/logins":""
                }
            }
        }
    }

}
