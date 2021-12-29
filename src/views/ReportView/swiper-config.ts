import { swiperAnimateCache, swiperAnimate, clearSwiperAnimate } from "@/lib/swiper.animate";

export const options = {
  speed: 500,
  initialSlide: 0,
  direction: "vertical", // 垂直切换选项
  watchSlidesProgress: true,
  pagination: {
    el: ".swiper-pagination", //与slot="pagination"处 class 一致
    clickable: true, //轮播按钮支持点击
  },
  on: {
    init: function () {
      swiperAnimateCache(this);
      swiperAnimate(this);
      //  首屏加载
      const swiper = this as any;
      console.log(swiper.activeIndex, "activeIndex");
    },
    slideChange: function () {
      swiperAnimate(this);
      //  其余屏切换
      const swiper = this as any;
      console.log(swiper.activeIndex, "activeIndex");
    },
    transitionEnd: function () {
      swiperAnimate(this);
    },
    beforeDestroy: function () {
      clearSwiperAnimate(this);
    },
    setTransition: function (speed: number) {
      const swiper = this as any;
      for (let i = 0; i < swiper.slides.length; i++) {
        const es = swiper.slides[i].style;
        es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + "ms";
      }
    },
  },
};
