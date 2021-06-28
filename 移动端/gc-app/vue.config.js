module.exports = {
        publicPath: './',
        outputDir: 'dist',
        assetsDir: 'static',//放置生成的静态资源（j5、css、img、fonts）的（相对于outputDir的）目录。
        productionSourceMap: false,//生产环境是否生成sourceMap文件
        lintOnSave: false,
        devServer: {
    //         host: '172.17.173.242',
            host:'localhost',
            port: 8080,//端口号
            https: false,//https:{type:Boolean}
            open: true,//配置自动启动浏览器
            proxy: {
                '/api': {
                target: 'http://120.24.64.7',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
                }
            }
        }
    }