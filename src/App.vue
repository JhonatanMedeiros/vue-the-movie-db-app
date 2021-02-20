<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
// Custom variables and variable overwrites.
$global-link-color: #da7d02;

// Import default variables and available mixins.
@import "~uikit/src/scss/variables-theme.scss";
@import "~uikit/src/scss/mixins-theme.scss";

// Import UIkit.
@import "~uikit/src/scss/uikit-theme.scss";

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
</style>
