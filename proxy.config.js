const proxy = [
  {
    context: "/api",
    target: "http://localhost:5159",
    pathRewrite: { "^/api": "api" },
  },
];
module.exports = proxy;
