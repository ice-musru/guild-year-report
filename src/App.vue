<template>
  <router-view />
</template>

<script lang="ts" setup>
// 登录
import { biliBridge, inBiliApp, initEnv } from "@bilibili/js-bridge";

import store from "@/store";
import { onMounted } from "vue";

const biliLogin = () => {
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
};
// 获取用户信息
const getUserInfo = () => {
  if (inBiliApp) {
    initEnv();
    // 设置分享
    biliBridge.callNative({
      method: "share.setShareContent",
      data: {
        type: "web", // 'web'|'image'|'video'
        title: "2021年公会年度报告",
        text: "2021公会专属年度报告已生成，快来看看吧~",
        url: "https://www.bilibili.com/blackboard/live/activity-MYvp70P25D.html",
        image_url: "https://i0.hdslb.com/bfs/activity-plat/static/20211230/de8b0fe7cefc13edb9f88e6bf1d5bcf3/leKkzJVEpU.png",
      },
      callback() {
        console.log("成功设置分享");
      },
    });
    // 获取登录信息
    biliBridge.callNative({
      method: "auth.getUserInfo",
      data: { type: "default" },
      callback: async (userInfo) => {
        await store.dispatch("setUserInfo", userInfo);
        console.log(userInfo, "个人登录信息");
        if (+userInfo.state === 0) {
          biliLogin();
        }
      },
    });
  }
};

onMounted(() => {
  getUserInfo();
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
