const { defineConfig } = require("@vue/cli-service");

const activityId = "55335";
const publicPath = `//activity.hdslb.com/blackboard/activity${activityId}/`;

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? publicPath : "/",
  pluginOptions: { windicss: {} },
});
