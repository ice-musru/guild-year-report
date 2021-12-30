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

const getGuildReport = async () => {
  const result = await request.get("/xlive/mcn-interface/v1/guild/GuildAnnualReport", {});
  console.log(result, "result");
  await store.dispatch("setGuildData", result.data);
};

// 开启vConsole
const vConsole = new VConsole();
console.log(vConsole, "vConsole");

const render = async () => {
  await getGuildReport();

  const app = createApp(App);
  app.use(store).use(router).mount("#app");
};

render().then();
