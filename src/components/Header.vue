<template>
  <header>
    <nav class="uk-navbar-container">
      <div class="uk-container">
        <div class="uk-navbar">
          <div class="uk-navbar-left">
            <a class="uk-navbar-item uk-logo" href="#">Logo</a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Home extends Vue {}
</script>

<style scoped></style>
