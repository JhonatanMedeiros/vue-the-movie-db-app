<template>
  <div class="movie-item uk-box-shadow-small uk-box-shadow-hover-large">
    <span class="uk-icon favorite-movie" uk-icon="icon: heart"></span>
    <img
      src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/BbNvKCuEF4SRzFXR16aK6ISFtR.jpg"
      alt=""
    />
    <div class="movie-info">
      <h4 class="movie-name uk-margin-remove">{{ movie.name }}</h4>
      <div class="movie-rate uk-flex uk-flex-center">
        <span class="uk-icon" uk-icon="icon: star"></span>
        <span>{{ movie.note }}</span>
      </div>
      <div class="movie-genre">
        <ul class="uk-list uk-margin-remove uk-flex">
          <li v-for="(item, index) in movie.genre" v-bind:key="index">
            <span> {{ item }} </span>
            <template v-if="index + 1 < movie.genre.length">, </template>
          </li>
        </ul>
      </div>
      <p class="movie-price">{{ movie.price }}</p>
    </div>
    <button class="uk-button uk-button-primary uk-width-1-1">Adicionar</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MovieItem",
  props: {
    movie: {
      required: true
    }
  }
});
</script>

<style scoped lang="scss">
$border-radius: 5px;
.movie-item {
  min-width: 100%;
  border-radius: $border-radius;
  position: relative;
  background-color: white;

  .favorite-movie {
    position: absolute;
    top: 15px;
    right: 15px;
    color: white;
    cursor: pointer;
  }

  img {
    min-height: 300px;
    width: 100%;
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
  }

  .movie-info {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 15px 0 10px 0;

    .movie-name {
      font-weight: bold;
    }

    .movie-rate .uk-icon {
      margin-right: 3px;
    }

    .movie-genre li {
      margin: 0 0 0 5px;
    }

    .movie-price {
      margin: 5px 0 0 0;
      font-weight: bold;
    }
  }
  button {
    border-bottom-left-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
  }
}
</style>
