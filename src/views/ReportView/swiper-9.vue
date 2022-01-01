<script lang="ts" setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const anchor_dm_rank = computed(() => {
  const arr = store.getters.guildData.anchor_dm_rank || [];
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
  <div class="swiper-9 h-full relative">
    <div class="swiper-frame relative">
      <div class="swiper-frame-bg relative">
        <!--    顶部跑跑    -->
        <div class="top-paopao absolute right-0 -top-120px ani z-1" swiper-animate-effect="animate__fadeInDown" swiper-animate-duration="0.6s" swiper-animate-delay="0.2s"></div>
        <!--    左侧跑跑    -->
        <div
          class="left-paopao absolute -left-50px top-1/3 mt-30px ani z-1"
          swiper-animate-effect="animate__fadeInLeft"
          swiper-animate-duration="0.6s"
          swiper-animate-delay="0.3s"
        ></div>
        <!--    右侧跑跑    -->
        <div
          class="right-paopao absolute -right-35px bottom-300px ani z-1"
          swiper-animate-effect="animate__fadeInRight"
          swiper-animate-duration="0.6s"
          swiper-animate-delay="0.3s"
        ></div>
        <!--    底部跑跑    -->
        <div
          class="bottom-paopao absolute left-1/3 -bottom-80px ani z-1"
          swiper-animate-effect="animate__fadeInUp"
          swiper-animate-duration="0.6s"
          swiper-animate-delay="0.4s"
        ></div>
        <!--    泡泡机    -->
        <div class="paopao-ji absolute right-0 -bottom-50px ani z-1" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.4s"></div>
        <!--   标题   -->
        <div class="rank-title-3 absolute left-52px top-70px"></div>
        <!--  排行列表  -->
        <div class="rank-list absolute top-200px left-60px">
          <div
            class="ran-list-item ani flex"
            :class="[`item-${index + 1}`]"
            v-for="(item, index) in anchor_dm_rank"
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
              <span class="item-word__num" v-if="item.rank !== -1">{{ item.score }}条弹幕</span>
            </div>
          </div>
        </div>
        <!--   文字描述     -->
        <div class="rank-word absolute bottom-120px left-80px">
          <p class="text-28px mb-10px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.8s">相隔屏幕两端</p>
          <p class="text-28px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.9s">也不缺少你们的沟通与陪伴</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.swiper-9 {
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
  .rank-title-3 {
    width: 578px;
    height: 107px;
    background: url("../../assets/images/swiper-6-11/swiper-6-11-title-2.png") no-repeat center / contain;
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
    z-index: 10;
    p {
      color: #666dff;
    }
  }
  .top-paopao {
    width: 182px;
    height: 184px;
    background: url("../../assets/images/swiper-6-11/swiper-6-11-paopao-3.png") no-repeat center / contain;
  }
  .left-paopao {
    width: 126px;
    height: 126px;
    background: url("../../assets/images/swiper-6-11/swiper-6-11-paopao-1.png") no-repeat center / contain;
  }
  .right-paopao {
    width: 80px;
    height: 81px;
    background: url("../../assets/images/swiper-6-11/swiper-6-11-paopao-2.png") no-repeat center / contain;
  }
  .bottom-paopao {
    width: 100px;
    height: 100px;
    background: url("../../assets/images/swiper-6-11/swiper-6-11-paopao-1.png") no-repeat center / contain;
  }
  .paopao-ji {
    width: 265px;
    height: 254px;
    background: url("../../assets/images/swiper-6-11/swiper-6-11-paopaoji.png") no-repeat center / contain;
  }
}
</style>
