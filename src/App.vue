<template>
  <Header />
  <div class="uk-container">
    <router-view />
  </div>
  <!--  <Footer />-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
// import Footer from "@/components/Footer.vue";
export default defineComponent({
  name: "App",
  components: {
    Header
  }
});
</script>

<style lang="scss">
@import "assets/scss/main";
</style>
