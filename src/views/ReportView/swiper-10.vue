<script lang="ts" setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const guard_incr_num = computed(() => store.getters.guildData.guard_incr_num || 0);
const max_guard_incr_num = computed(() => store.getters.guildData.max_guard_incr_num || 0);
const max_guard_incr_num_conversion = computed(() => store.getters.guildData.max_guard_incr_num_conversion || 0);
const max_guard_incr_live_title = computed(() => store.getters.guildData.max_guard_incr_live_title || "");
const max_guard_incr_live_cover = computed(() => store.getters.guildData.max_guard_incr_live_cover || "");
const max_guard_incr_live_uname = computed(() => store.getters.guildData.guard_incr_num || "");
// //  新增大航海总数
// "guard_incr_num": 0,
//   //  新增大航海最多的人数（场次）
//   "max_guard_incr_num": 0,
//   //  新增大航海最多的人数折算为xx游轮/游船的数量
//   "max_guard_incr_num_conversion": "",
//   //  新增大航海人数最多的直播间标题
//   "max_guard_incr_live_title": "",
//   //  新增大航海人数最多的直播间封面
//   "max_guard_incr_live_cover": "",
//   //  新增大航海人数最多的直播间主播昵称
//   "max_guard_incr_live_uname": "",
</script>

<template>
  <div class="swiper-10 h-full relative">
    <div class="swiper-frame relative">
      <!--   大航海   -->
      <div class="top-zongdu absolute right-0 -top-50px ani" swiper-animate-effect="animate__fadeInDown" swiper-animate-duration="0.8s" swiper-animate-delay="0s"></div>
      <!--   文字   -->
      <div class="describe-word ml-90px mt-150px">
        <p class="text-47px mb-30px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.1s">这一年共有</p>
        <p class="text-47px mb-30px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.2s">
          <span class="high-color-text text-76px">{{ guard_incr_num }}</span
          >名观众
        </p>
        <p class="text-47px mb-138px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.3s">成为了该公会的大航海</p>

        <p class="text-47px mb-30px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.3s">其中最长的一场直播是</p>
        <div class="mb-50px flex ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.4s">
          <div class="tv-view" :style="{ background: `url(${max_guard_incr_live_cover}) no-repeat center / cover` }"></div>
          <div class="tv-word">
            <p class="text-23px mb-25px max-w-200px truncate" style="color: #c1ff98">{{ max_guard_incr_live_title }}</p>
            <p class="text-23px mb-25px max-w-200px truncate" style="color: #fffe98">{{ max_guard_incr_live_uname }}</p>
          </div>
        </div>

        <p class="text-38px mb-10px ani max-w-520px" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.6s">
          <span class="high-color-text">{{ max_guard_incr_num }}名</span>观众成为了主播的大航海
        </p>
        <p class="text-38px mb-10px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.7s">
          相当于<span class="high-color-text">{{ max_guard_incr_num_conversion }}</span
          >的水平
        </p>
      </div>
    </div>
    <!--   船  -->
    <div class="bottom-chuan absolute bottom-0 right-0 ani" swiper-animate-effect="animate__slideInRight" swiper-animate-duration="0.6s" swiper-animate-delay="0.6s"></div>
  </div>
</template>

<style lang="scss">
.swiper-10 {
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
  .top-zongdu {
    width: 226px;
    height: 218px;
    background: url("../../assets/images/swiper-6-11/swiper-6-11-buy-2.png") no-repeat center / contain;
  }
  .bottom-chuan {
    width: 397px;
    height: 307px;
    background: url("../../assets/images/swiper-6-11/swiper-6-11-chuan.png") no-repeat center / contain;
  }
}
</style>
