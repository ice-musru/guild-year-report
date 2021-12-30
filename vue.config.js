const { defineConfig } = require("@vue/cli-service");

const activityId = "55335";
const publicPath = `//activity.hdslb.com/blackboard/activity${activityId}/`;

module.exports = defineConfig({
  transpileDependencies: true,
  assetsDir: "static",
  publicPath: process.env.NODE_ENV === "production" ? publicPath : "/",
  pluginOptions: { windicss: {} },
  devServer: {
    port: 80,
    allowedHosts: "all",
    proxy: {
      "/xlive": {
        target: "http://api.live.bilibili.com", //API服务器的地址
        ws: true, //代理websockets
        changeOrigin: true, // 是否跨域，虚拟的站点需要更管origin
      },
      "/x": {
        target: "http://api.bilibili.com", //API服务器的地址
        ws: true, //代理websockets
        changeOrigin: true, // 是否跨域，虚拟的站点需要更管origin
      },
    },
  },
});
