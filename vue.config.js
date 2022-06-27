const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    lintOnSave: false,
    devServer: {
        host: 'localhost',
        port: 8080,
        https: false,
        hot: false,
        //代理跨域
        proxy: {
            "api": {
                target: "http://gmall-h5-api.atguigu.cn"
            },
        },
    },
})
