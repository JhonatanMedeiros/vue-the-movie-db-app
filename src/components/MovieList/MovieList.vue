<template>
  <div class="movie-list-wrapper uk-margin-medium-top">
    <MovieItem
      v-for="(movie, index) in movieList"
      v-bind:key="index"
      :movie="movie"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import MovieItem from "@/components/MovieList/MovieItem.vue";
export default defineComponent({
  name: "MovieList",
  components: { MovieItem },
  setup() {
    const movieList = ref([
      {
        id: 1,
        name: "Nome do filme",
        releasedAt: new Date().toISOString(),
        genre: ["Ação", "Aventura"],
        price: "R$ 80,99",
        note: 8,
        isFav: false
      },
      {
        id: 2,
        name: "Nome do filme 2",
        releasedAt: new Date().toISOString(),
        genre: ["Ação", "Aventura"],
        price: "R$ 80,99",
        note: 8,
        isFav: false
      },
      {
        id: 3,
        name: "Nome do filme 3",
        releasedAt: new Date().toISOString(),
        genre: ["Ação", "Aventura"],
        price: "R$ 80,99",
        note: 8,
        isFav: false
      },
      {
        id: 4,
        name: "Nome do filme 4",
        releasedAt: new Date().toISOString(),
        genre: ["Ação", "Aventura"],
        price: "R$ 80,99",
        note: 8,
        isFav: false
      }
    ]);

    return {
      movieList
    };
  }
});
</script>

<style scoped lang="scss">
.movie-list-wrapper {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto;

  @media (min-width: 540px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 720px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1140px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
