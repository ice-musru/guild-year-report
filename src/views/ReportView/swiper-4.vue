<script lang="ts" setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const staff_anchors_income_rank = computed(() => {
  const arr = store.getters.guildData.staff_anchors_income_rank || [];
  if (arr.length < 5) {
    arr.push(
      ...[
        ...Array(5 - arr.length).fill({
          rank: -1,
          score: "",
          uface: "https://i0.hdslb.com/bfs/activity-plat/static/20211231/de8b0fe7cefc13edb9f88e6bf1d5bcf3/I7BRtiweBt.png",
          uname: "虚位以待",
        }),
      ]
    );
  }
  return arr;
});
</script>

<template>
  <div class="swiper-4 h-full">
    <div class="swiper-frame relative">
      <!--  顶部猫猫  -->
      <div class="top-cat absolute right-154px -top-55px animate__animated animate__shakeX animate__infinite animate__slower"></div>
      <!--  底部仓鼠  -->
      <div
        class="right-bottom-cs absolute -right-22px -bottom-20px ani"
        swiper-animate-effect="animate__fadeInDown"
        swiper-animate-duration="0.8s"
        swiper-animate-delay="0.3s"
      ></div>
      <!--  瓜子  -->
      <div class="left-guazi absolute left-15px -bottom-30px ani" swiper-animate-effect="animate__fadeInLeft" swiper-animate-duration="0.5s" swiper-animate-delay="0.8s"></div>
      <!--  标题  -->
      <div class="rank-title-2 absolute top-65px left-50px"></div>
      <!--  排行列表  -->
      <div class="rank-list absolute top-200px left-60px">
        <div
          class="ran-list-item ani flex"
          :class="[`item-${index + 1}`]"
          v-for="(item, index) in staff_anchors_income_rank"
          :key="index"
          swiper-animate-effect="animate__fadeInUp"
          swiper-animate-duration="0.8s"
          :swiper-animate-delay="`0.${index + 1}s`"
        >
          <!--   头像     -->
          <img :src="item.uface || ''" class="item-avatar relative" />
          <!--   文字     -->
          <div class="item-word inline-flex justify-between items-center h-88px">
            <span class="item-word__name max-w-130px inline-block max-h-88px text-multi-over">{{ item.uname }}</span>
            <span class="item-word__num" v-if="item.rank !== -1">{{ item.score }}名主播</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.swiper-4 {
  background: url("../../assets/images/swiper-3-4/swiper-3-4-bg.png") no-repeat center / 100% 100%;
  .swiper-frame {
    width: 686px;
    height: 1086px;
    margin: 0 auto;
    background: url("../../assets/images/swiper-3-4/swiper-3-4-bg-frame.png") no-repeat center / contain;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .top-cat {
    width: 320px;
    height: 95px;
    background: url("../../assets/images/swiper-3-4/swiper-3-4-cat-3.png") no-repeat center / contain;
    animation-duration: calc(var(--animate-duration) * 10);
  }
  .right-bottom-cs {
    width: 242px;
    height: 246px;
    background: url("../../assets/images/swiper-3-4/swiper-3-4-cangshu.png") no-repeat center / contain;
  }

  .left-guazi {
    width: 142px;
    height: 130px;
    background: url("../../assets/images/swiper-3-4/swiper-3-4-guazi.png") no-repeat center / contain;
  }

  .rank-title-2 {
    width: 579px;
    height: 107px;
    background: url("../../assets/images/swiper-3-4/swiper-3-4-title-2.png") no-repeat center / contain;
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
      border: 2px solid #25cdbf;
      overflow: hidden;
      margin-left: 115px;
      margin-right: 20px;
      //&:before {
      //  content: "";
      //  display: block;
      //  width: 100%;
      //  height: 100%;
      //  background: url("../../assets/images/swiper-3-4/swiper-3-4-avatar.png") no-repeat center / contain;
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
}
</style>
