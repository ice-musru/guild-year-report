<script lang="ts" setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const valid_live_time = computed(() => store.getters.guildData.valid_live_time || 0);
const avg_valid_live_time = computed(() => store.getters.guildData.avg_valid_live_time || 0);

const max_live_time_conversion = computed(() => store.getters.guildData.max_live_time_conversion || 0);
const max_live_time_title = computed(() => store.getters.guildData.max_live_time_title || 0);
const max_live_time_cover = computed(() => store.getters.guildData.max_live_time_cover || "");
const max_live_time_uname = computed(() => store.getters.guildData.max_live_time_uname || "");
const max_live_time = computed(() => store.getters.guildData.max_live_time || 0);

// "max_live_time": 0,
//   //  最长的开播时长折算为xx个跨年晚会
//   "max_live_time_conversion": 0.1,
//   //  最长开播时长的直播间标题
//   "max_live_time_title": "",
//   //  最长开播时长的直播间封面
//   "max_live_time_cover": "",
//   //  最长开播时长的直播间主播昵称
//   "max_live_time_uname": "",
</script>

<template>
  <div class="swiper-6 h-full relative">
    <div class="swiper-frame relative">
      <!--   top标记   -->
      <div class="top-one absolute -right-10px -top-45px ani" swiper-animate-effect="animate__fadeInDown" swiper-animate-duration="0.6s" swiper-animate-delay="0s"></div>
      <!--   电池   -->
      <div class="left-cell absolute -left-10px top-1/4 ani" swiper-animate-effect="animate__fadeInLeft" swiper-animate-duration="0.8s" swiper-animate-delay="0s"></div>
      <!--   文字   -->
      <div class="describe-word ml-90px mt-150px relative z-10">
        <p class="text-47px mb-30px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.1s">这一年旗下主播共开播了</p>
        <p class="text-47px mb-55px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.2s">
          <span class="high-color-text text-56px">{{ valid_live_time }}</span
          >小时
        </p>
        <p class="text-47px mb-30px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.3s">平均每个主播每天开播</p>
        <p class="text-47px mb-50px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.4s">
          <span class="high-color-text text-56px">{{ avg_valid_live_time }}</span
          >小时
        </p>
        <p class="text-47px mb-30px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.5s">其中最长的一场直播是</p>
        <div class="mb-50px flex ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.6s">
          <div class="tv-view" :style="{ background: `url(${max_live_time_cover}) no-repeat center / cover` }"></div>
          <div class="tv-word">
            <p class="text-24px mb-25px max-w-200px truncate" style="color: #c1ff98">{{ max_live_time_title }}</p>
            <p class="text-24px mb-25px max-w-200px truncate" style="color: #fffe98">{{ max_live_time_uname }}</p>
          </div>
        </div>
        <p class="text-38px mb-10px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.8s">直播持续了{{ max_live_time }}小时</p>
        <p class="text-38px mb-10px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.9s">
          相当于{{ max_live_time_conversion }}个
        </p>
        <p class="text-38px mb-10px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="1s">bilibili跨年晚会的时长</p>
      </div>
    </div>
    <!--  底部小电视  -->
    <div class="bottom-tv absolute bottom-0 left-0 ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s"></div>
  </div>
</template>

<style lang="scss">
.swiper-6 {
  background: url("../../assets/images/swiper-6-11/swiper-6-11-bg-1.png") no-repeat center / 100% 100%;
  .swiper-frame {
    width: 686px;
    height: 1086px;
    background: url("../../assets/images/swiper-6-11/swiper-6-11-frame-1.png") no-repeat center / contain;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .top-one {
    width: 165px;
    height: 168px;
    background: url("../../assets/images/swiper-6-11/swiper-6-11-top1.png") no-repeat center / contain;
  }
  .left-cell {
    width: 106px;
    height: 124px;
    background: url("../../assets/images/swiper-6-11/swiper-6-11-cell.png") no-repeat center / contain;
  }
  .bottom-tv {
    width: 750px;
    height: 293px;
    background: url("../../assets/images/swiper-6-11/swiper-6-11-little-tv.png") no-repeat center / contain;
  }
  .tv-view {
    width: 256px;
    height: 152px;
    border: 3px solid #ffe263;
    border-radius: 10px;
    overflow: hidden;
    margin-right: 15px;
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
}
</style>
