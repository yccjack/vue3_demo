const {defineConfig} = require('@vue/cli-service')
const name = process.env.VUE_APP_TITLE || '若依管理系统' // 网页标题
const port = process.env.port || process.env.npm_config_port || 9987 // 端口
module.exports = defineConfig({
    publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
    outputDir: 'dist',
    assetsDir: 'static',
    productionSourceMap: false,
    transpileDependencies: true,
    lintOnSave: false,
    pluginOptions: {
        vuetify: {
            // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
        }
    }
})
