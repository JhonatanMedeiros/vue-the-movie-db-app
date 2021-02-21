<template>
  <div id="home">
    <MovieList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MovieList from "@/components/MovieList/MovieList.vue";

export default defineComponent({
  name: "Home",
  components: { MovieList }
});
</script>
