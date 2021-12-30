<template>
  <div class="entry-button relative animate__animated animate__bounceIn" :class="[props.canEntry ? 'canEntry' : 'noCanEntry']">
    <div class="word absolute"></div>
    <div class="arrow absolute"></div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults } from "vue";
interface Props {
  canEntry: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  canEntry: true,
});
</script>

<style lang="scss">
.entry-button {
  width: 466px;
  height: 214px;
  > .word {
    width: 204px;
    height: 51px;
    left: 120px;
    top: 85px;
  }
  > .arrow {
    width: 21px;
    height: 29px;
    right: 95px;
    top: 95px;
    animation-duration: 6s;
  }
  // 点击查看按钮
  &.canEntry {
    background: url("../assets/images/homeView/button-bg.png") no-repeat center / contain;
    .word {
      background: url("../assets/images/homeView/button-word.png") no-repeat center / contain;
    }
    .arrow {
      background: url("../assets/images/homeView/button-arrow.png") no-repeat center / contain;
    }
  }
  // 申请入驻的按钮
  &.noCanEntry {
    background: url("../assets/images/homeView/button-entry-bg.png") no-repeat center / contain;
    > .word {
      background: url("../assets/images/homeView/button-entry-word.png") no-repeat center / contain;
    }
    > .arrow {
      background: url("../assets/images/homeView/button-entry-arrow.png") no-repeat center / contain;
    }
  }
}
</style>
