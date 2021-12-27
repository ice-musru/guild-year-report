import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VConsole from "vconsole";
// 导入css
import "windi.css";
import "animate.css";
import "swiper/dist/css/swiper.css";

// 开启vConsole
const vConsole = new VConsole();
console.log(vConsole, "vConsole");

const app = createApp(App);
app.use(store).use(router).mount("#app");
