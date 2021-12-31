<template>
  <swiper ref="mySwiper" class="h-screen" :options="swiperOptions">
    <swiper-slide v-for="swiper in swiperArr" :key="swiper">
      <component class="swiper-slide-page" :is="`swiper${swiper}`"></component>
    </swiper-slide>
    <!--    <template #pagination>-->
    <!--      <div class="swiper-pagination"></div>-->
    <!--    </template>-->
  </swiper>
</template>

<script lang="ts">
// @ts-ignore
import { swiper, swiperSlide } from "vue-awesome-swiper/src/index.js";
import { options } from "@/views/ReportView/swiper-config";
import { reportEvent } from "@/utils/report";

import { computed, defineComponent, ref, onBeforeUnmount } from "vue";
import { useStore } from "vuex";

import swiper1 from "@/views/ReportView/swiper-1.vue";
import swiper2 from "@/views/ReportView/swiper-2.vue";
import swiper3 from "@/views/ReportView/swiper-3.vue";
import swiper4 from "@/views/ReportView/swiper-4.vue";
import swiper5 from "@/views/ReportView/swiper-5.vue";
import swiper6 from "@/views/ReportView/swiper-6.vue";
import swiper7 from "@/views/ReportView/swiper-7.vue";
import swiper8 from "@/views/ReportView/swiper-8.vue";
import swiper9 from "@/views/ReportView/swiper-9.vue";
import swiper10 from "@/views/ReportView/swiper-10.vue";
import swiper11 from "@/views/ReportView/swiper-11.vue";
// 结束页
import swiper12 from "@/views/ReportView/swiper-12.vue";

export default defineComponent({
  name: "indexPage",
  components: { swiper, swiperSlide, swiper1, swiper2, swiper3, swiper4, swiper5, swiper6, swiper7, swiper8, swiper9, swiper10, swiper11, swiper12 },
  setup() {
    const store = useStore();

    const swiperOptions = computed(() => options);

    const mySwiper = ref<HTMLElement | any>(null);

    // 经纪人页是否展示
    const is_staff_show = computed(() => store.getters.guildData.is_staff_show);
    // 公会是否有数据
    const is_report_show = computed(() => store.getters.guildData.is_report_show);

    // 页数
    const swiperArr = computed(() => {
      let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      // 经纪人页
      const brokerArr = [3, 4];

      // 如果无数据，直接展示最后一页
      if (!is_report_show.value) {
        numArr = numArr.filter((v) => v === 12);
      }
      if (!is_staff_show.value) {
        numArr = numArr.filter((v) => !brokerArr.includes(v));
      }

      return numArr;
    });

    onBeforeUnmount(() => {
      const activeIndex = mySwiper.value && mySwiper.value.swiper.activeIndex;
      // 退出公会报告浏览时上报， 上报当下浏览的页面页数
      reportEvent({ spmId: "444.77.guild-annual-summary.return.click", msg: { page_views: activeIndex + 1 } });
    });

    return { swiperOptions, mySwiper, swiperArr };
  },
});
</script>

<style lang="scss">
.swiper-slide-page {
  width: 100%;
  height: 100%;
}
</style>
