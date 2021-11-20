module.exports = {
    publicPath: './', // 根域上下文目录
    devServer: {
        proxy: {
            // detail: https://cli.vuejs.org/config/#devserver-proxy
            '/manager': {
                target: process.env.NODE_ENV === 'production'?'http://101.34.51.116:3000':"http://localhost:3000",
                //是否允许跨域
                changeOrigin: true,
                
            }
        }
    },
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
          less: {
            globalVars: {
              'theme-color': '#421466'
            }
          }
        }
      }
    
}