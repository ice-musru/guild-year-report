<script lang="ts" setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const anchor_guard_rank = computed(() => {
  const arr = store.getters.guildData.anchor_guard_rank || [];
  if (arr.length < 5) {
    arr.push(...[...Array(5 - arr.length).fill({ rank: -1, score: "", uface: "", uname: "虚位以待" })]);
  }
  return arr;
});
</script>

<template>
  <div class="swiper-11 h-full relative">
    <div class="swiper-frame relative">
      <div class="swiper-frame-bg relative">
        <!--   大航海    -->
        <div class="big-hanghai absolute -top-65px left-70px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.4s"></div>
        <!--    星星    -->
        <div class="big-star absolute -bottom-10px right-0 ani z-1" swiper-animate-effect="animate__fadeInDown" swiper-animate-duration="0.8s" swiper-animate-delay="0.4s"></div>
        <!--   标题   -->
        <div class="rank-title-4 absolute left-52px top-70px z-1"></div>
        <!--  排行列表  -->
        <div class="rank-list absolute top-200px left-60px">
          <div
            class="ran-list-item ani flex"
            :class="[`item-${index + 1}`]"
            v-for="(item, index) in anchor_guard_rank"
            :key="index"
            swiper-animate-effect="animate__fadeInUp"
            swiper-animate-duration="0.8s"
            :swiper-animate-delay="`0.${index + 1}s`"
          >
            <!--   头像     -->
            <img :src="item.uface" class="item-avatar relative" />
            <!--   文字     -->
            <div class="item-word inline-flex justify-between items-center h-88px">
              <span class="item-word__name max-w-130px inline-block max-h-88px text-multi-over">{{ item.uname }}</span>
              <span class="item-word__num" v-if="item.rank !== -1">{{ item.score }}个大航海</span>
            </div>
          </div>
        </div>
        <!--   文字描述     -->
        <div class="rank-word absolute bottom-90px left-80px z-10">
          <p class="text-28px mb-10px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.8s">友谊的小船变成了巨轮</p>
          <p class="text-28px mb-10px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.9s">祝愿往后和船员们继续在</p>
          <p class="text-28px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="1s">bilibili星球的海洋上乘风破浪</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.swiper-11 {
  background: url("../../assets/images/swiper-6-11/swiper-6-11-bg-2.png") no-repeat center / 100% 100%;

  .swiper-frame {
    width: 686px;
    height: 1086px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    .swiper-frame-bg {
      width: 100%;
      height: 100%;
      background: url("../../assets/images/swiper-6-11/swiper-6-11-frame-2.png") no-repeat center / contain;
      position: absolute;
      left: 0;
      top: 0;
    }
    &:after {
      content: "";
      display: block;
      width: 652px;
      height: 322px;
      background: url("../../assets/images/swiper-6-11/swiper-6-11-piaodai-1.png") no-repeat center / contain;
      position: absolute;
      right: -35px;
      bottom: -27px;
    }
    &:before {
      content: "";
      display: block;
      width: 750px;
      height: 322px;
      background: url("../../assets/images/swiper-6-11/swiper-6-11-piaodai.png") no-repeat center / 100% 100%;
      position: absolute;
      left: -32px;
      right: 0;
      bottom: -23px;
      z-index: -1;
    }
  }
}

.rank-title-4 {
  width: 578px;
  height: 107px;
  background: url("../../assets/images/swiper-6-11/swiper-6-11-title-3.png") no-repeat center / contain;
}

.rank-list {
  width: 536px;
  @for $i from 1 to 6 {
    .item-#{$i} {
      width: 536px;
      height: 116px;
      margin-bottom: 23px;
      background: url("../../assets/images/swiper-3-4/swiper-3-4-rank-#{$i}.png") no-repeat center / contain;
      @if ($i >1) {
        background-position-x: 8px;
      }
      @if ($i >=4) {
        background-position-x: 16px;
      }
    }
  }

  .item-avatar {
    width: 88px;
    height: 88px;
    border-radius: 8px;
    border: 3px solid #ffd8fd;
    overflow: hidden;
    margin-left: 115px;
    margin-right: 20px;
    //&:before {
    //  content: "";
    //  display: block;
    //  width: 100%;
    //  height: 100%;
    //  background: url("../../assets/images/swiper-6-11/swiper-6-11-avatar.png") no-repeat center / contain;
    //  position: absolute;
    //  left: 0;
    //  top: 0;
    //}
  }
  .item-word {
    color: #fff;
    font-size: 26px;
    width: 306px;
  }
}
.rank-word {
  font-family: reeji;
  p {
    color: #666dff;
  }
}

.big-hanghai {
  width: 143px;
  height: 140px;
  background: url("../../assets/images/swiper-6-11/swiper-6-11-buy-1.png") no-repeat center / contain;
}

.big-star {
  width: 194px;
  height: 194px;
  background: url("../../assets/images/swiper-6-11/swiper-6-11-star.png") no-repeat center / contain;
}
</style>
