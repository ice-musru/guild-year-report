<template>
  <router-view />
</template>

<script lang="ts" setup>
// import { isPink } from "@/utils/oa";
// import awesomeApi from "@blink-live/awesome-api";
// import { isDev } from "@/utils/env";
import { onMounted } from "vue";
// import { initEnv, biliBridge, isSupport, inBiliApp } from "@bilibili/js-bridge";
// onBeforeMount(() => {
//   awesomeApi.initial();
// });
//
// const handleJumpToPinkApp = () => {
//   const url = "https://www.bilibili.com/blackboard/live/activity-MYvp70P25D.html";
//   if (isPink) {
//     awesomeApi.openView({ url });
//   } else if (!isDev) {
//     const preUrl = encodeURIComponent(window.location.href);
//     window.location.href = `http://d.bilibili.com/download_app.html?preUrl=${preUrl}&schema=${encodeURIComponent(url)}`;
//   }
// };

onMounted(() => {
  // handleJumpToPinkApp();
});
</script>

<style lang="scss">
* {
  touch-action: none;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
