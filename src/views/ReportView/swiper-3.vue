<script lang="ts" setup></script>

<template>
  <div class="swiper-3 h-full relative">
    <div class="swiper-frame relative">
      <!--  左上角星星  -->
      <div class="left-top-star absolute top-0px left-0px animate__animated animate__slower animate__infinite animate__pulse z-1"></div>
      <!--  右下角星星  -->
      <div class="right-bottom-star absolute bottom-0px right-0px animate__animated animate__slower animate__infinite animate__pulse z-1"></div>
      <!--  右下角猫猫  -->
      <div
        class="right-bottom-cat absolute -bottom-30px -right-10px ani"
        swiper-animate-effect="animate__fadeInDown"
        swiper-animate-duration="0.8s"
        swiper-animate-delay="0.3s"
      ></div>
      <!--  右上角猫猫  -->
      <div class="right-top-cat absolute -top-20px right-0px ani z-1" swiper-animate-effect="animate__fadeInRight" swiper-animate-duration="0.5s" swiper-animate-delay="0s"></div>
      <!--  左边猫猫  -->
      <div class="left-cat absolute top-349px -left-10px ani" swiper-animate-effect="animate__fadeInLeft" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s"></div>
      <!--  标题  -->
      <div class="rank-title-1 absolute top-65px left-50px"></div>
      <!--  排行列表  -->
      <div class="rank-list absolute top-200px left-60px">
        <div
          class="ran-list-item ani flex"
          :class="[`item-${n}`]"
          v-for="n in 5"
          :key="n"
          swiper-animate-effect="animate__fadeInUp"
          swiper-animate-duration="0.8s"
          :swiper-animate-delay="`0.${n + 1}s`"
        >
          <!--   头像     -->
          <div class="item-avatar relative"></div>
          <!--   文字     -->
          <div class="item-word inline-flex justify-between mt-30px">
            <span class="item-word__name max-w-130px inline-block truncate">张三是个王麻子</span>
            <span class="item-word__num">100名主播</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.swiper-3 {
  background: url("../../assets/images/swiper-3-4/swiper-3-4-bg.png") no-repeat center / cover;
}
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
.left-top-star {
  width: 72px;
  height: 79px;
  background: url("../../assets/images/swiper-3-4/swiper-3-4-star.png") no-repeat center / contain;
}
.right-bottom-star {
  width: 317px;
  height: 79px;
  background: url("../../assets/images/swiper-3-4/swiper-3-4-star-2.png") no-repeat center / contain;
}
.right-bottom-cat {
  width: 241px;
  height: 316px;
  background: url("../../assets/images/swiper-3-4/swiper-3-4-cat-2.png") no-repeat center / contain;
}
.right-top-cat {
  width: 159px;
  height: 149px;
  background: url("../../assets/images/swiper-3-4/swiper-3-4-cat-1.png") no-repeat center / contain;
}
.left-cat {
  width: 109px;
  height: 194px;
  background: url("../../assets/images/swiper-3-4/swiper-3-4-cat.png") no-repeat center / contain;
}
.rank-title-1 {
  width: 579px;
  height: 107px;
  background: url("../../assets/images/swiper-3-4/swiper-3-4-title-1.png") no-repeat center / contain;
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
    overflow: hidden;
    margin-left: 115px;
    margin-right: 20px;
    &:before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background: url("../../assets/images/swiper-3-4/swiper-3-4-avatar.png") no-repeat center / contain;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  .item-word {
    color: #fff;
    font-size: 26px;
    width: 306px;
  }
}
</style>
