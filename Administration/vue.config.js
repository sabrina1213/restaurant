module.exports = {
    devServer: {
        proxy: {
            // detail: https://cli.vuejs.org/config/#devserver-proxy
            '/manager': {
                target: process.env.VUE_APP_URL,
                changeOrigin: true,
            }
        }
    }
}