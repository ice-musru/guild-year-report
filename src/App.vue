<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
// 登录
import { biliBridge, inBiliApp, initEnv } from "@bilibili/js-bridge";
import biliShare from "@bilibili/share-h5-next";
import "@bilibili/share-h5-next/dist/share-h5.css";
import { computed, onMounted } from "vue";
import { isPreview } from "@/utils/env";
import { reportEvent } from "@/utils/report";
import { useStore } from "vuex";

// 公会id
const store = useStore();
const guild_id = computed(() => store.getters.guildData.guild_id);

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

const initShare = () => {
  const options = {
    title: "2021年公会年度报告",
    desc: "2021公会专属年度报告已生成，快来看看吧~",
    link: `https://www.bilibili.com/blackboard/${isPreview ? "preview/" : ""}live/activity-MYvp70P25D.html/#/?-Abrowser=live&is_live_webview=1`, // 必传，请传一个可以访问的url
    pics: "https://i0.hdslb.com/bfs/activity-plat/static/20211230/de8b0fe7cefc13edb9f88e6bf1d5bcf3/leKkzJVEpU.png",
    // 非必填 动态预设文案
    edit_content: "2021公会专属年度报告已生成，快来看看吧~",
    share_id: "888.57485.0.0",
    isMpc: false,
    success: (info: any) => {
      console.log("分享 success: ", info);
      if (info.status === 0) {
        // 444.77.guild-annual-summary.share.click
        // 成功的时候报一次
        reportEvent({ spmId: "444.77.guild-annual-summary.share.click", msg: { guild_id: guild_id.value } });
      }
    },
    cancel: (info: any) => {
      // 失败也报
      reportEvent({ spmId: "444.77.guild-annual-summary.share.click", msg: { guild_id: guild_id.value } });
      console.log("分享cancel: ", info);
    },
  };

  // 进入页面调用一次即可 设置右上角...的分享
  biliShare.setContent(options);
};

// 获取用户信息
const getUserInfo = () => {
  if (inBiliApp) {
    initEnv();
    initShare();
    // 设置分享
    // biliBridge.callNative({
    //   method: "share.setShareContent",
    //   data: {
    //     share_id: "888.57485.0.0", // 如专栏 read.column-detail.0.0.pv
    //     type: "web", // 'web'|'image'|'video'
    //     title: "2021年公会年度报告",
    //     text: "2021公会专属年度报告已生成，快来看看吧~",
    //     url: "https://www.bilibili.com/blackboard/live/activity-MYvp70P25D.html/#/?-Abrowser=live&is_live_webview=1",
    //     image_url: "https://i0.hdslb.com/bfs/activity-plat/static/20211230/de8b0fe7cefc13edb9f88e6bf1d5bcf3/leKkzJVEpU.png",
    //   },
    //   callback() {
    //     console.log("成功设置分享");
    //   },
    // });

    // biliBridge.callNative({
    //   method: "share.setShareMpcContent",
    //   data: {
    //     onShareCallbackId: "guild_year_report_callback",
    //     // 自定义分享渠道和顺序
    //     // 客户端对于动态渠道有特殊逻辑, 如果在登录状态下，shareChannelQueue 中有dynamic渠道，会默认展示在第一个位置，如果未登录状态下即使有dynamic渠道也不会展示
    //     // 支持渠道参数：['generic'，'dynamic'，'weixin'，'weixin_monment'，'qq'，'sina'，'q_zone'，'copy']
    //     shareChannelQueue: ["weixin", "q_zone", "weixin_monment", "dynamic"],
    //     share_id: "888.57485.0.0", // 如专栏 read.column-detail.0.0.pv
    //     default: {
    //       type: "web", // (必需, 包含'text', 'image', 'video', 'audio', 'web')
    //       title: "2021年公会年度报告", // (必需)
    //       text: "2021公会专属年度报告已生成，快来看看吧~", // (必需)
    //       url: "https://www.bilibili.com/blackboard/live/activity-MYvp70P25D.html", // (必需)
    //       imageUrl: "https://i0.hdslb.com/bfs/activity-plat/static/20211230/de8b0fe7cefc13edb9f88e6bf1d5bcf3/leKkzJVEpU.png", // (type为image类型必需)
    //     },
    //     dynamic: {
    //       title: "2021年公会年度报告", // (必需)
    //       content_type: isIos ? 4009 : 18, // (必需)
    //       cover_url: "https://i0.hdslb.com/bfs/activity-plat/static/20211230/de8b0fe7cefc13edb9f88e6bf1d5bcf3/leKkzJVEpU.png", // (必需)
    //       description: "2021公会专属年度报告已生成，快来看看吧~", // (必需)
    //     },
    //   },
    //   callback: (data: any) => {
    //     console.log(data, "分享设置!!!");
    //   },
    // });
    // 获取登录信息
    biliBridge.callNative({
      method: "auth.getUserInfo",
      data: { type: "default" },
      callback: async (userInfo) => {
        await store.dispatch("setUserInfo", userInfo);
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
