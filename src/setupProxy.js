const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/**",
    createProxyMiddleware({
      target: "https://find-me-slot.herokuapp.com",
      changeOrigin: true,
    })
  );
};
