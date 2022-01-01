import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VConsole from "vconsole";
// 导入css
import "windi.css";
import "animate.css";
import "swiper/dist/css/swiper.css";
import "@/assets/style/main.scss";

import { request } from "@/utils/request";
// 全量导入
import awesomeApi from "@blink-live/awesome-api";
import { biliBridge, inBiliApp, initEnv } from "@bilibili/js-bridge";

// 使用前注册原生方法
awesomeApi.initial().then();
//
// const vConsole = new VConsole();
// console.log(vConsole, "vConsole");

const getGuildReport = async () => {
  try {
    const result = await request.get("/xlive/mcn-interface/v1/guild/GuildAnnualReport", {});
    if (result.code === -101 || result.code === 1701999) {
      if (inBiliApp) {
        initEnv();
        biliBridge.callNative({
          method: "auth.login",
          data: { type: "default" },
          callback: () => {
            console.log("调起登陆窗口");
          },
          onLogin: () => {
            window.location.reload();
          },
        });
      }
    } else {
      await store.dispatch("setGuildData", result.data);
    }
  } catch (e) {
    console.log(e);
  }
};

const render = async () => {
  const app = createApp(App);
  app.use(store).use(router).mount("#app");
};

render().then(async () => {
  await getGuildReport();
});
