<script lang="ts" setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { reportEvent } from "@/utils/report";

const store = useStore();
// 公会是否有数据
const is_report_show = computed(() => store.getters.guildData.is_report_show);
// int型 1是 0-3个月，2是3-12个月，3是大于12个月
const entryTime = computed(() => store.getters.guildData.guild_entry_time);

const guild_id = computed(() => store.getters.guildData.guild_id);

onMounted(() => {
  if (!is_report_show.value) {
    reportEvent({ spmId: "444.77.guild-annual-cover.0.show", msg: { guild_id: guild_id.value } });
  }
});
</script>

<template>
  <div class="swiper-12 h-full relative overflow-hidden" :class="{ 'not-show': !is_report_show }">
    <!--  有数据展示  -->
    <template v-if="is_report_show">
      <!--   标题   -->
      <div class="last-title ani" swiper-animate-effect="animate__bounceInDown" swiper-animate-duration="0.8s" swiper-animate-delay="0s"></div>
      <!--   0-3个月   -->
      <template v-if="entryTime === 1">
        <div
          class="main-word page-1-1 relative mt-87px ml-130px mb-21px ani"
          swiper-animate-effect="animate__slideInRight"
          swiper-animate-duration="0.8s"
          swiper-animate-delay="0.2s"
        ></div>
        <div
          class="main-word page-1-2 relative ml-130px ani animate__swing"
          swiper-animate-effect="animate__slideInRight"
          swiper-animate-duration="0.8s"
          swiper-animate-delay="0.3s"
        ></div>

        <div class="intro-word page-1-1 mt-60px ml-132px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.3s"></div>
        <div class="intro-word page-1-2 mt-10px ml-132px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.5s"></div>
      </template>
      <!--   3-12个月   -->
      <template v-if="entryTime === 2">
        <div
          class="main-word page-2-1 relative mt-87px ml-130px mb-21px ani"
          swiper-animate-effect="animate__slideInRight"
          swiper-animate-duration="0.6s"
          swiper-animate-delay="0.2s"
        ></div>
        <div
          class="main-word page-2-2 relative ml-130px ani animate__swing"
          swiper-animate-effect="animate__slideInRight"
          swiper-animate-duration="0.5s"
          swiper-animate-delay="0.3s"
        ></div>

        <div class="intro-word page-2-1 mt-60px ml-132px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.3s"></div>
        <div class="intro-word page-2-2 mt-10px ml-132px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.5s"></div>
      </template>
      <!--   大于12个月   -->
      <template v-if="entryTime === 3">
        <div
          class="main-word page-3-1 relative mt-87px ml-130px ani"
          swiper-animate-effect="animate__slideInRight"
          swiper-animate-duration="0.6s"
          swiper-animate-delay="0.2s"
        ></div>

        <div class="intro-word page-3-1 mt-60px ml-132px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.3s"></div>
        <div class="intro-word page-3-2 mt-10px ml-132px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.3s"></div>
      </template>
    </template>
    <!--  无数据展示  -->
    <template v-else>
      <!--  标题文字  -->
      <div class="home-title absolute top-65px left-1/2 -ml-250px animate__animated animate__bounceInDown">
        <div class="home-title_star absolute animate__animated animate__slower animate__pulse animate__infinite"></div>
        <div class="home-title_under absolute animate__animated animate__delay-1s animate__bounceInRight"></div>
      </div>
      <!--   文字   -->
      <div class="last-word-1 ani absolute top-410px left-84px" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.3s"></div>
      <div class="last-word-2 ani absolute top-490px left-84px" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.5s"></div>
      <!--   朱姐   -->
      <div class="last-explay ani absolute top-635px left-1/2 -ml-277px" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.6s"></div>

      <!--   2233   -->
      <div class="last-2233 absolute bottom-85px left-1/2 -ml-318.5px ani" swiper-animate-effect="animate__tada" swiper-animate-duration="0.5s" swiper-animate-delay="0.7s"></div>
    </template>
  </div>
</template>

<style lang="scss">
.swiper-12 {
  background: url("../../assets/images/swiper-12/swiper-12-bg.png") no-repeat center / 100% 100%;
  &:after {
    width: 750px;
    height: 799px;
    display: block;
    content: "";
    background: url("../../assets/images/swiper-12/swiper-12-start-bg.png") no-repeat center / 100% 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  &.not-show {
    background: url("../../assets/images/swiper-12/swiper-12-bg-no-show.png") no-repeat center / 100% 100%;
    &:after {
      display: none;
    }
  }
  .last-title {
    width: 750px;
    height: 228px;
    background: url("../../assets/images/swiper-12/swiper-12-title.png") no-repeat center / contain;
  }
  .main-word {
    width: 515px;
    height: 87px;
    background: linear-gradient(to right, #3abef5, transparent);
    border-radius: 10px;
    border-left: 1px solid #75f0ff;
    &.page-1-1 {
      &:before {
        content: "";
        display: block;
        width: 363px;
        height: 64px;
        background: url("../../assets/images/swiper-12/swiper-12-word-1-1.png") no-repeat center/ contain;
        position: absolute;
        left: 20px;
        top: 12px;
      }
    }
    &.page-1-2 {
      &:before {
        content: "";
        display: block;
        width: 363px;
        height: 64px;
        background: url("../../assets/images/swiper-12/swiper-12-word-1-2.png") no-repeat center/ contain;
        position: absolute;
        left: 20px;
        top: 12px;
      }
    }
    &.page-2-1 {
      &:before {
        content: "";
        display: block;
        width: 363px;
        height: 64px;
        background: url("../../assets/images/swiper-12/swiper-12-word-2-1.png") no-repeat center/ contain;
        position: absolute;
        left: 20px;
        top: 12px;
      }
    }
    &.page-2-2 {
      &:before {
        content: "";
        display: block;
        width: 363px;
        height: 64px;
        background: url("../../assets/images/swiper-12/swiper-12-word-2-2.png") no-repeat center/ contain;
        position: absolute;
        left: 20px;
        top: 12px;
      }
    }

    &.page-3-1 {
      &:before {
        content: "";
        display: block;
        width: 363px;
        height: 64px;
        background: url("../../assets/images/swiper-12/swiper-12-word-3-1.png") no-repeat center/ contain;
        position: absolute;
        left: 20px;
        top: 12px;
      }
    }
  }

  .intro-word {
    width: 497px;
    &.page-1-1 {
      height: 68px;
      background: url("../../assets/images/swiper-12/swiper-12-intro-1-1.png") no-repeat center / contain;
    }
    &.page-1-2 {
      height: 76px;
      background: url("../../assets/images/swiper-12/swiper-12-intro-1-2.png") no-repeat center / contain;
    }
    &.page-2-1 {
      height: 66px;
      background: url("../../assets/images/swiper-12/swiper-12-intro-2-1.png") no-repeat center / contain;
    }
    &.page-2-2 {
      height: 67px;
      background: url("../../assets/images/swiper-12/swiper-12-intro-2-2.png") no-repeat center / contain;
    }
    &.page-3-1 {
      height: 67px;
      background: url("../../assets/images/swiper-12/swiper-12-intro-3-1.png") no-repeat center / contain;
    }
    &.page-3-2 {
      height: 72px;
      background: url("../../assets/images/swiper-12/swiper-12-intro-3-2.png") no-repeat center / contain;
    }
  }
  // 标题
  .home-title {
    width: 547px;
    height: 249px;
    background: url("../../assets/images/homeView/title.png") no-repeat center/100% 100%;
    animation-delay: 0.5s;
    .home-title_star {
      width: 679px;
      height: 196px;
      background: url("../../assets/images/homeView/star.png") no-repeat center/100% 100%;
      left: -32px;
      top: -40px;
    }
    .home-title_under {
      width: 559px;
      height: 83px;
      background: url("../../assets/images/homeView/title-under.png") no-repeat center/100% 100%;
      bottom: -70px;
      left: -55px;
    }
  }
  .last-word-1 {
    width: 597px;
    height: 61px;
    background: url("../../assets/images/swiper-12/swiper-12-last-word-1.png") no-repeat center/100% 100%;
  }
  .last-word-2 {
    width: 597px;
    height: 61px;
    background: url("../../assets/images/swiper-12/swiper-12-last-word-2.png") no-repeat center/100% 100%;
  }

  .last-explay {
    width: 554px;
    height: 38px;
    background: url("../../assets/images/swiper-12/swiper-12-intro-zhu.png") no-repeat center/100% 100%;
  }

  .last-2233 {
    width: 657px;
    height: 526px;
    background: url("../../assets/images/swiper-12/swiper-12-intro-2233.png") no-repeat center/100% 100%;
  }
}
</style>
