// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/mall': {
        // target: 'http://127.0.0.1:8000/mall', //对应自己的接口
        target:'https://www.lixikeji.cn/mall',
        changeOrigin: true,
        ws: true,    
        pathRewrite: {
          '^/mall': ''
        }
      }
    }
  }
}