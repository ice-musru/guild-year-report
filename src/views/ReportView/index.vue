<template>
  <router-link to="/">home</router-link>
  <swiper ref="mySwiper" class="h-screen" :options="swiperOptions">
    <swiper-slide v-for="n in 4" :key="n">
      <component class="swiper-slide-page" :is="`swiper${n}`"></component>
    </swiper-slide>
    <template #pagination>
      <div class="swiper-pagination"></div>
    </template>
  </swiper>
</template>

<script lang="ts">
// @ts-ignore
import { swiper, swiperSlide } from "vue-awesome-swiper/src/index.js";
import { options } from "@/views/ReportView/swiper-config";
import { reportEvent } from "@/utils/report";

import { computed, defineComponent, ref, onBeforeUnmount } from "vue";
import swiper1 from "@/views/ReportView/swiper-1.vue";
import swiper2 from "@/views/ReportView/swiper-2.vue";
import swiper3 from "@/views/ReportView/swiper-3.vue";
import swiper4 from "@/views/ReportView/swiper-4.vue";

export default defineComponent({
  name: "indexPage",
  components: { swiper, swiperSlide, swiper1, swiper2, swiper3, swiper4 },
  setup() {
    const swiperOptions = computed(() => options);

    const mySwiper = ref<HTMLElement | any>(null);

    onBeforeUnmount(() => {
      const activeIndex = mySwiper.value && mySwiper.value.swiper.activeIndex;
      // 退出公会报告浏览时上报， 上报当下浏览的页面页数
      reportEvent({ spmId: "444.77.guild-annual-summary.return.click", msg: { page_views: activeIndex + 1 } });
    });

    return { swiperOptions, mySwiper };
  },
});
</script>

<style scoped lang="scss">
.swiper-slide-page {
  width: 100%;
  height: 100%;
  background: url("../../assets/images/upload/bg.jpg") no-repeat left top;
  background-size: 100% 100%;
  margin-top: -1px;
}
</style>
