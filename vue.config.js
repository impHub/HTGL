// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'localhost:8000/mall', //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}