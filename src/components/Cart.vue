<template>
  <div class="cart-container">
    <header class="uk-flex uk-flex-between uk-margin-bottom">
      <h4 class="uk-margin-remove">Meu Carrinho</h4>
      <button class="uk-button uk-button-small uk-button-text">Esvaziar</button>
    </header>
    <div class="cart-list">
      <ul>
        <li
          class="cart-item"
          v-for="(item, index) in cartList"
          v-bind:key="index"
        >
          <div class="cart-item-name-wrapper uk-text-truncate">
            <div class="cart-item-name-image">
              <span uk-icon="icon: image; ratio: 0.8"></span>
            </div>
            <span class="cart-item-name uk-text-truncate">{{ item }}</span>
          </div>
          <div class="uk-flex uk-flex-center">1</div>
          <div class="uk-flex uk-flex-center">R$ 9.99</div>
          <div class="uk-text-center">
            <a href="#" class="uk-icon-link" uk-icon="trash"></a>
          </div>
        </li>
      </ul>
    </div>
    <footer class="uk-margin-auto-top">
      <div class="uk-flex uk-flex-between">
        <p class="uk-margin-remove">Total:</p>
        <strong>R$ 19,98</strong>
      </div>
      <button class="uk-button uk-button-primary uk-width-1-1 uk-margin-top">
        Finalizar Compra
      </button>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  setup() {
    const cartList = ref(["Filme 1", "Filme 2", "Filme 3"]);
    return {
      cartList
    };
  }
});
</script>

<style scoped lang="scss">
.cart-container {
  display: flex;
  flex-direction: column;
  height: 100%;

  header {
    align-items: baseline;
  }

  .cart-list ul {
    list-style: none;
    padding: 0;
    margin: 0;
    .cart-item {
      display: grid;
      vertical-align: middle;
      grid-gap: 3px;
      grid-template-columns: auto 40px 80px 40px;

      .cart-item-name-wrapper {
        display: flex;
        align-items: center;
        .cart-item-name-image {
          height: 25px;
          width: 25px;
          min-width: 25px;
          border-radius: 1px;
          background-color: #cccccc;
          text-align: center;
        }
        .cart-item-name {
          margin-left: 5px;
        }
      }
    }

    .cart-item + .cart-item {
      margin-top: 10px;
    }
  }

  footer {
    border-top: solid 1px #353136;
    padding-top: 20px;
  }
}
</style>
