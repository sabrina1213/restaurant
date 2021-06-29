module.exports = {
    devServer: {
        proxy: {
            // detail: https://cli.vuejs.org/config/#devserver-proxy
            '/client': {
                target: process.env.VUE_APP_URL,
                changeOrigin: true,
            }
        }
    }
}