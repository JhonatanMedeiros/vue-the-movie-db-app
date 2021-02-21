<template>
  <Checkout />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Checkout from "@/components/Checkout/Checkout.vue";

export default defineComponent({
  name: "CheckoutPage",
  components: { Checkout }
});
</script>

<style scoped></style>
