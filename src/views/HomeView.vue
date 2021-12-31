<template>
  <div class="home-view h-full relative">
    <!--  标题文字  -->
    <div class="home-title absolute top-65px left-1/2 -ml-250px animate__animated animate__bounceInDown">
      <div class="home-title_star absolute animate__animated animate__slower animate__pulse animate__infinite"></div>
      <div class="home-title_under absolute animate__animated animate__delay-1s animate__bounceInRight"></div>
    </div>
    <!--  logo  -->
    <div class="home-logo absolute left-0 top-0 animate__animated animate__rotateInDownLeft"></div>
    <!--  人物背景  -->
    <div class="home-person absolute bottom-0 left-0 animate__animated animate__fadeInUp"></div>
    <!--  发光背景  -->
    <!--    <div class="home-flight"></div>-->
    <!--  不是公会成员的引导提示  -->
    <div v-if="!canEntry" class="not-allow-tip absolute left-1/2 bottom-253px -ml-351px animate__animated animate__fadeInDown"></div>
    <!--  底部按钮  -->
    <HomeButton :canEntry="canEntry" class="home-button bottom-60px left-1/2 -ml-233px" @click="handleClick"></HomeButton>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import HomeButton from "@/components/home-button.vue";
import { reportEvent } from "@/utils/report";
import { isDev } from "@/utils/env";
import { isPink } from "@/utils/oa";
import awesomeApi from "@blink-live/awesome-api";
// @ts-ignore
import { openApp as openAppByH5 } from "@bilibili/h5-utils";
import { biliBridge, inBiliApp, initEnv } from "@bilibili/js-bridge";

export default defineComponent({
  name: "HomeView",
  components: { HomeButton },
  setup() {
    const store = useStore();
    // 是否可以进入下一步, 否则是申请入驻
    const canEntry = computed(() => store.getters.guildData.guild_id > 0);

    // 公会id
    const guild_id = computed(() => store.getters.guildData.guild_id);

    const userInfo = computed(() => store.getters.userInfo);

    const router = useRouter();

    // 点击跳转
    const handleClick = () => {
      // 未登录，则弹出登录
      if (inBiliApp) {
        initEnv();
        if (+userInfo.value.state === 0) {
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
          return false;
        }
      }
      if (isDev) {
        router.push("/report");
      } else {
        // 跳转至app
        if (isPink && canEntry.value) {
          awesomeApi.openView({ url: "https://www.bilibili.com/blackboard/live/activity-MYvp70P25D.html/#/report/?-Abrowser=live&is_live_webview=1" });
        } else if (!isPink) {
          const url = "https://www.bilibili.com/blackboard/live/activity-MYvp70P25D.html/#/?-Abrowser=live&is_live_webview=1";
          openAppByH5({ schema: url, universalLink: window.location.href });
        }
        if (!canEntry.value) {
          window.location.href = "https://live.bilibili.com/galaxy/";
        }
      }
    };

    onMounted(() => {
      //is_administrator: 是否是公会管理人员 1、是, 2、不是
      reportEvent({ spmId: "444.77.guild-annual-summary.0.show", msg: { guild_id: guild_id.value, is_administrator: canEntry.value ? 1 : 2 } });
      reportEvent({ spmId: "444.77.guild-annual-cover.0.show", msg: { guild_id: guild_id.value } });
    });

    return { handleClick, canEntry };
  },
});
</script>

<style scoped lang="scss">
.home-view {
  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: url("../assets/images/homeView/home-bg.png") no-repeat center / 100% 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
  .home-flight {
    width: 750px;
    height: 981px;
    background: url("../assets/images/homeView/flow-light.png") no-repeat center / 100% 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    opacity: 0.3;
  }
  // 人物
  .home-person {
    width: 100%;
    height: 1028px;
    background: url("../assets/images/homeView/22-33.png") no-repeat center/100% 100%;
  }
  // 标题
  .home-title {
    width: 547px;
    height: 249px;
    background: url("../assets/images/homeView/title.png") no-repeat center/100% 100%;
    animation-delay: 0.5s;
    .home-title_star {
      width: 679px;
      height: 196px;
      background: url("../assets/images/homeView/star.png") no-repeat center/100% 100%;
      left: -32px;
      top: -40px;
    }
    .home-title_under {
      width: 559px;
      height: 83px;
      background: url("../assets/images/homeView/title-under.png") no-repeat center/100% 100%;
      bottom: -70px;
      left: -55px;
    }
  }
  // logo
  .home-logo {
    width: 192px;
    height: 86px;
    background: url("../assets/images/homeView/logo.png") no-repeat center/100% 100%;
  }
  // 引导提示
  .not-allow-tip {
    width: 702px;
    height: 69px;
    z-index: 10;
    background: url("../assets/images/homeView/not-allow-tip.png") no-repeat center/contain;
  }
  //  按钮
  .home-button {
    position: absolute !important;
    animation-delay: 0.8s;
  }
}
</style>
