module.exports = {
    // publicPath: '/public/dist', // 根域上下文目录
    publicPath: './', // 根域上下文目录
    outputDir: 'dist', // 构建输出目录
    devServer: {
        proxy: {
            // detail: https://cli.vuejs.org/config/#devserver-proxy
            '/client': {
                target: process.env.VUE_APP_URL,
                changeOrigin: true,
            }
        }
    },


}