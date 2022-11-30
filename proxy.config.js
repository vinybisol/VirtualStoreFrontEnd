const proxy = [
  {
    context: "/api",
    target: "https://virtual-store-backend.azurewebsites.net",
    pathRewrite: { "^/api": "/api" },
    secure: false,
    logLevel: "debug",
    changeOrigin: true,
  },
];
module.exports = proxy;
