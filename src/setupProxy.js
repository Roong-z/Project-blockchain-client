const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,
    }),
  ),
    app.use(
      '/v1',
      createProxyMiddleware({
        target: 'https://api.upbit.com',
        changeOrigin: true,
      }),
    );
};
