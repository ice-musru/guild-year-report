<template>
  <div class="home">
    <router-link to="/report">report</router-link>

    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import { reportEvent } from "@/utils/report";
export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },
  setup() {
    onMounted(() => {
      //is_administrator: 是否是公会管理人员 1、是, 2、不是
      reportEvent({ spmId: "444.77.guild-annual-summary.0.show", msg: { guild_id: 0, is_administrator: 1 } });
      reportEvent({ spmId: "444.77.guild-annual-cover.0.show", msg: { guild_id: 0 } });
    });
  },
});
</script>
