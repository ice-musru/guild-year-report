<script lang="ts" setup></script>

<template>
  <div class="swiper-2 h-full relative">
    <div class="swiper-frame relative">
      <!--  闪动星星  -->
      <div class="light-star absolute top-30px -left-30px animate__animated animate__slower animate__infinite animate__pulse"></div>
      <!--  文字  -->
      <div class="describe-word absolute top-120px left-85px">
        <p class="text-47px mb-35px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.1s">
          <span class="high-color-text text-76px">XX</span>点 <span class="high-color-text text-76px">XX</span>分
        </p>
        <p class="text-47px mb-56px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.2s">这个时间点还有同学</p>
        <p class="text-47px mb-135px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.4s">登陆了公会后台</p>
        <p class="color-text text-47px mb-22px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.6s">小伙伴辛苦了</p>
        <p class="color-text text-47px mb-22px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.7s">修仙收获难得</p>
        <p class="color-text text-47px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.8s">也要劳逸结合</p>
      </div>
    </div>
    <div class="moon-area absolute right-10px top-0 ani" swiper-animate-effect="animate__slideInDown" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
    <!--  底部星星  -->
    <div class="bottom-star absolute bottom-150px left-25px animate__animated animate__slower animate__infinite animate__pulse animate__delay-1s"></div>
    <!--  云  -->
    <div class="cloud-bg absolute bottom-0 left-0"></div>
  </div>
</template>

<style scoped lang="scss">
.swiper-2 {
  background: url("../../assets/images/swiper-1-2/swiper-1-2-bg-2.png") no-repeat center / 100% 100%;
}
.swiper-frame {
  width: 686px;
  height: 1086px;
  margin: 0 auto;
  background: url("../../assets/images/swiper-1-2/swiper-1-2-bg-frame.png") no-repeat center / contain;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.cloud-bg {
  width: 750px;
  height: 537px;
  background: url("../../assets/images/swiper-1-2/cloud-2.png") no-repeat center / contain;
  z-index: 2;
}
.light-star {
  width: 750px;
  height: 684px;
  background: url("../../assets/images/swiper-1-2/swiper-1-2-light-star.png") no-repeat center / contain;
}
.bottom-star {
  width: 599px;
  height: 252px;
  background: url("../../assets/images/swiper-1-2/swiper-1-2-bottom-star.png") no-repeat center / contain;
}
.moon-area {
  width: 325px;
  height: 744px;
  background: url("../../assets/images/swiper-1-2/swiper-1-2-moon.png") no-repeat center / contain;
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
