import { swiperAnimateCache, swiperAnimate, clearSwiperAnimate } from "@/lib/swiper.animate";

export const options = {
  speed: 600,
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
    },
    slideChange: function () {
      swiperAnimate(this);
      //  其余屏切换
    },
    transitionEnd: function () {
      swiperAnimate(this);
    },
    beforeDestroy: function () {
      clearSwiperAnimate(this);
      console.log(this, "11");
    },
    progress: function () {
      const swiper = this as any;
      for (let i = 0; i < swiper.slides.length; i++) {
        const slide = swiper.slides[i];
        const progress = slide.progress;
        const translate = (progress * swiper.height) / 4;
        const es = slide.style;
        es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = "translate3d(0," + translate + "px,-" + translate + "px)";
      }
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
