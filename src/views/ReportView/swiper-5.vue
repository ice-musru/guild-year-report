<script lang="ts" setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const gifts_num = computed(() => store.getters.guildData.gifts_num || 0);
const gifts_value = computed(() => store.getters.guildData.gifts_value || 0);
</script>

<template>
  <div class="swiper-5 h-full relative">
    <div class="swiper-frame">
      <!--  电池  -->
      <div class="charge-cell absolute -top-5px left-25px ani" swiper-animate-effect="animate__fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0s"></div>
      <!--  闪电  -->
      <div class="charge-light absolute top-1/2 -right-10px ani" swiper-animate-effect="animate__slideInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s"></div>
      <!--  文字  -->
      <div class="describe-word absolute top-120px left-55px w-550px text-right z-5">
        <p class="text-47px mb-36px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.1s">这一年公会共获得</p>
        <p class="text-47px mb-50px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.2s">
          <span class="high-color-text text-76px">{{ gifts_num }}</span
          >个礼物
        </p>
        <p class="text-47px mb-36px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.4s">价值</p>
        <p class="text-47px mb-235px ani" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.6s">
          <span class="high-color-text text-76px"> {{ gifts_value }} </span>电池
        </p>
        <p class="text-47px mb-22px ani green-color-text" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.7s">
          这是观众姥爷们的认可
        </p>
        <p class="text-47px ani green-color-text" swiper-animate-effect="animate__fadeInUp" swiper-animate-duration="0.9s" swiper-animate-delay="0.8s">也是公会实力最好的见证</p>
      </div>
    </div>

    <!--  起航  -->
    <div class="start-sail absolute bottom-0 right-0 ani" swiper-animate-effect="animate__slideInRight" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s"></div>
  </div>
</template>

<style scoped lang="scss">
.swiper-5 {
  background: url("../../assets/images/swiper-3-4/swiper-3-4-bg.png") no-repeat center / 100% 100%;
}
.swiper-frame {
  width: 686px;
  height: 1086px;
  background: url("../../assets/images/swiper-3-4/swiper-3-4-bg-frame.png") no-repeat center / contain;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.charge-cell {
  width: 168px;
  height: 186px;
  background: url("../../assets/images/swiper-3-4/swiper-3-4-cell.png") no-repeat center / contain;
}
.charge-light {
  width: 116px;
  height: 166px;
  background: url("../../assets/images/swiper-3-4/swiper-3-4-light.png") no-repeat center / contain;
}
.start-sail {
  width: 744px;
  height: 370px;
  background: url("../../assets/images/swiper-3-4/swiper-3-4-sail.png") no-repeat center / contain;
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
  .green-color-text {
    color: #82ffc4;
  }
}
</style>
