<script lang="ts" setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const dm_num = computed(() => store.getters.guildData.dm_num || 0);
const max_dm_num = computed(() => store.getters.guildData.max_dm_num || 0);
const max_dm_num_live_title = computed(() => store.getters.guildData.max_dm_num_live_title || "");
const max_dm_num_live_cover = computed(() => store.getters.guildData.max_dm_num_live_cover || "");
const max_dm_num_live_uname = computed(() => store.getters.guildData.max_dm_num_live_uname || "");

// //  弹幕总数
// "dm_num": "",
//   //  最多的弹幕数（场次）
//   "max_dm_num": "",
//   //  最多弹幕数的直播间标题
//   "max_dm_num_live_title": "",
//   //  最多弹幕数的直播间封面
//   "max_dm_num_live_cover": "",
//   //  最多弹幕数的直播间主播昵称
//   "max_dm_num_live_uname": "",
</script>

<template>
  <div class="swiper-8 h-full relative">
    <div class="swiper-frame relative">
      <!--   气球1   -->
      <div class="top-qiqiu absolute left-15px -top-70px ani" swiper-animate-effect="animate__fadeInDown" swiper-animate-duration="0.8s" swiper-animate-delay="0s"></div>
      <!--   气球2  -->
      <div class="right-qiqiu absolute -right-20px top-565px ani" swiper-animate-effect="animate__fadeInRight" swiper-animate-duration="0.8s" swiper-animate-delay="0s"></div>
      <!--   文字   -->
      <div class="describe-word ml-90px mt-150px">
        <p class="text-47px mb-30px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.1s">这一年旗下主播共收获了</p>
        <p class="text-47px mb-55px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.2s">
          <span class="high-color-text text-76px">{{ dm_num }}</span
          >条弹幕
        </p>

        <p class="text-47px mb-30px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.3s">其中最长的一场直播是</p>
        <div class="mb-220px flex ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.4s">
          <div class="tv-view" :style="{ background: `url(${max_dm_num_live_cover}) no-repeat center / cover` }"></div>
          <div class="tv-word">
            <p class="text-23px mb-25px max-w-200px truncate" style="color: #c1ff98">{{ max_dm_num_live_title }}</p>
            <p class="text-23px mb-25px max-w-200px truncate" style="color: #fffe98">{{ max_dm_num_live_uname }}</p>
          </div>
        </div>

        <p class="text-38px mb-10px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.6s">
          总共产生了<span class="high-color-text">{{ max_dm_num }}条</span>弹幕
        </p>
        <p class="text-38px mb-10px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.7s">前方高能预警</p>
        <p class="text-38px mb-10px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.8s">你我此刻心心相印</p>
      </div>
    </div>
    <!--  底部小电视  -->
    <div class="bottom-zhuozi absolute bottom-0 left-0 ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s"></div>
  </div>
</template>

<style scoped lang="scss">
.swiper-8 {
  background: url("../../assets/images/swiper-6-11/swiper-6-11-bg-1.png") no-repeat center / 100% 100%;
}
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
.top-qiqiu {
  width: 105px;
  height: 267px;
  background: url("../../assets/images/swiper-6-11/swiper-6-11-qiqiu-1.png") no-repeat center / contain;
}
.right-qiqiu {
  width: 209px;
  height: 463px;
  background: url("../../assets/images/swiper-6-11/swiper-6-11-qiqiu-2.png") no-repeat center / contain;
}
.bottom-zhuozi {
  width: 750px;
  height: 252px;
  background: url("../../assets/images/swiper-6-11/swiper-6-11-zhuozi.png") no-repeat center / contain;
}
</style>
