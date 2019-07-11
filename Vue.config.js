module.exports = {
    devServer:{
        proxy:{
            "/wochu":{
                "target":"http://api9.wochu.cn",
                "changeOrigin":true,
                "pathRewrite":{
                    "^/wochu":""
                }
            }
        }
    }
}