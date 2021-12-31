<template>
  <router-view />
</template>

<script lang="ts" setup>
// 登录
import { biliBridge, inBiliApp, initEnv } from "@bilibili/js-bridge";
import awesomeApi from "@blink-live/awesome-api";
import store from "@/store";
import { onBeforeMount, onMounted } from "vue";

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
    // biliBridge.callNative({
    //   method: "share.setShareContent",
    //   data: {
    //     type: "web", // 'web'|'image'|'video'
    //     title: "2021年公会年度报告",
    //     text: "2021公会专属年度报告已生成，快来看看吧~",
    //     url: "https://www.bilibili.com/blackboard/live/activity-MYvp70P25D.html",
    //     image_url: "https://i0.hdslb.com/bfs/activity-plat/static/20211230/de8b0fe7cefc13edb9f88e6bf1d5bcf3/leKkzJVEpU.png",
    //   },
    //   callback() {
    //     console.log("成功设置分享");
    //   },
    // });

    biliBridge.callNative({
      method: "share.setShareMpcContent",
      data: {
        // 自定义分享渠道和顺序
        // 客户端对于动态渠道有特殊逻辑, 如果在登录状态下，shareChannelQueue 中有dynamic渠道，会默认展示在第一个位置，如果未登录状态下即使有dynamic渠道也不会展示
        // 支持渠道参数：['generic'，'dynamic'，'weixin'，'weixin_monment'，'qq'，'sina'，'q_zone'，'copy']
        shareChannelQueue: ["generic", "weixin", "weixin_monment", "qq", "q_zone", "sina"],
        share_id: "888.57485.0.0", // 如专栏 read.column-detail.0.0.pv
        generic: {
          type: "text", // (必需，包含'text', 'image')
          title: "2021年公会年度报告", // (必需)
          imageUrl: "https://i0.hdslb.com/bfs/activity-plat/static/20211230/de8b0fe7cefc13edb9f88e6bf1d5bcf3/leKkzJVEpU.png", // (必需)
          text: "2021公会专属年度报告已生成，快来看看吧~", // (必需)
        },
        default: {
          type: "web", // (必需, 包含'text', 'image', 'video', 'audio', 'web')
          title: "2021年公会年度报告", // (必需)
          text: "2021公会专属年度报告已生成，快来看看吧~", // (必需)
          url: "https://www.bilibili.com/blackboard/live/activity-MYvp70P25D.html", // (必需)
          imageUrl: "https://i0.hdslb.com/bfs/activity-plat/static/20211230/de8b0fe7cefc13edb9f88e6bf1d5bcf3/leKkzJVEpU.png", // (type为image类型必需)
        },
      },
      callback: (data: any) => {
        console.log(data, "分享设置!!!");
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

.describe-word {
  font-family: reeji;
  p {
    color: #fff;
  }
  .color-text {
    color: #55fffd;
  }
  .high-color-text {
    color: #ffe263;
  }
}
</style>
