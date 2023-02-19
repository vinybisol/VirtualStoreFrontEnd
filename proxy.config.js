const proxy = [
  {
    context: "/api",
    target: "https://virtualstorefunctions.azurewebsites.net",
    pathRewrite: { "^/api": "/api" },
    secure: false,
    logLevel: "debug",
    changeOrigin: true,
  },
];
module.exports = proxy;
