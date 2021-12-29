<script lang="ts" setup></script>

<template>
  <div class="h-full relative swiper-1">
    <div class="swiper-frame relative">
      <!--  文字  -->
      <div class="describe-word absolute top-120px left-85px">
        <p class="text-47px mb-35px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.1s">这一年公会共新增</p>
        <p class="text-47px mb-56px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.2s">
          <span class="high-color-text text-76px">xxxx</span>个主播
        </p>
        <p class="text-47px mb-35px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.3s">超过</p>
        <p class="text-47px mb-135px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.4s">
          <span class="high-color-text text-76px">xxxx</span>公会
        </p>
        <p class="color-text text-47px mb-22px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.6s">变多的是同行的小伙伴</p>
        <p class="color-text text-47px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.7s">不变的是一路向前的心</p>
      </div>
      <!--  右侧星球  -->
      <div class="right-star absolute -right-65px top-170px ani" swiper-animate-effect="animate__fadeInRight" swiper-animate-duration="0.8s" swiper-animate-delay="0s"></div>
      <!--  左侧星球    -->
      <div class="left-star absolute -left-20px bottom-185px ani" swiper-animate-effect="animate__fadeInLeft" swiper-animate-duration="0.8s" swiper-animate-delay="0s"></div>
      <!--  下方小电视  -->
      <div class="bottom-xds absolute right-0px bottom-0px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0s"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.swiper-1 {
  background: url("../../assets/images/swiper-1-2/swiper-1-2-bg.png") no-repeat center / 100% 100%;
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
.right-star {
  width: 220px;
  height: 185px;
  background: url("../../assets/images/swiper-1-2/swiper-1-2-star.png") no-repeat center / contain;
}
.left-star {
  width: 126px;
  height: 121px;
  background: url("../../assets/images/swiper-1-2/swiper-1-2-star-2.png") no-repeat center / contain;
}
.bottom-xds {
  width: 183px;
  height: 166px;
  background: url("../../assets/images/swiper-1-2/swiper-1-2-ds.png") no-repeat center / contain;
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
