<template>
  <header>
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left">
        <a class="uk-navbar-item uk-logo" href="#">LOGO</a>
      </div>
      <div class="uk-navbar-center">
        <div class="uk-navbar-item">
          <form action="javascript:void(0)">
            <div class="uk-inline">
              <span
                class="uk-form-icon uk-form-icon-flip"
                uk-icon="icon: search"
              ></span>
              <input class="uk-input" type="text" placeholder="Pesquisar..." />
            </div>
          </form>
        </div>
      </div>
      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
          <li>
            <a href="#">
              <span class="uk-icon" uk-icon="icon: heart"></span>
            </a>
          </li>
          <li>
            <a href="#" uk-toggle="target: #offcanvas-cart">
              <span class="uk-icon" uk-icon="icon: cart"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <div id="offcanvas-cart" uk-offcanvas="flip: true; overlay: true">
    <div class="uk-offcanvas-bar">
      <Cart />
    </div>
  </div>
</template>

<script lang="ts">
import Cart from "@/components/Cart.vue";
export default {
  components: {
    Cart
  }
};
</script>

<style scoped lang="scss">
.uk-offcanvas-bar {
  padding: 40px 20px;
  @media (min-width: 960px) {
    width: 395px;
  }
}
.uk-navbar-container,
.uk-navbar-nav > li > a,
.uk-navbar-item,
.uk-navbar-toggle {
  min-height: 70px;
}
</style>
