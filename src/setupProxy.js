const { createProxyMiddleware } = require('http-proxy-middleware');

// 创建代理
module.exports = function(app) {
  app.use(
    createProxyMiddleware('/pathWay', {
      target: 'http://localhost:8080',
      changeOrigin: true,
      pathRewrite: {'^/pathWay': ''}
    })
  )
}