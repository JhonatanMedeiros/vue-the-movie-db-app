<template>
  <div class="checkout-wrapper uk-margin-medium-top">
    <div class="uk-card uk-card-default uk-card-body">
      <h4 class="uk-margin-remove">Informações de Contato</h4>
      <p class="uk-text-meta uk-margin-remove">Informe seus dados.</p>
      <form
        class="uk-form-stacked uk-margin-top uk-grid-small"
        uk-grid
        autocomplete="off"
      >
        <!-- Field Full Name -->
        <div class="uk-width-1-1">
          <label class="uk-form-label" for="form-input-fullname"
            >Nome completo:</label
          >
          <div class="uk-form-controls">
            <input
              class="uk-input"
              id="form-input-fullname"
              type="text"
              placeholder="Nome completo"
            />
          </div>
        </div>

        <!-- Field CPF -->
        <div class="uk-width-1-2@s">
          <label class="uk-form-label" for="form-input-cpf">CPF:</label>
          <div class="uk-form-controls">
            <input
              class="uk-input"
              id="form-input-cpf"
              type="text"
              placeholder="CPF"
            />
          </div>
        </div>
        <!-- Field Cell Phone -->
        <div class="uk-width-1-2@s">
          <label class="uk-form-label" for="form-input-cellphone"
            >Celular:</label
          >
          <div class="uk-form-controls">
            <input
              class="uk-input"
              id="form-input-cellphone"
              type="text"
              placeholder="Celular"
            />
          </div>
        </div>

        <!-- Field Email -->
        <div class="uk-width-1-1">
          <label class="uk-form-label" for="form-input-email">Email:</label>
          <div class="uk-form-controls">
            <input
              class="uk-input"
              id="form-input-email"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>

        <!-- Field Zip code -->
        <div class="uk-width-1-4@s">
          <label class="uk-form-label" for="form-input-zipcode">CEP:</label>
          <div class="uk-form-controls">
            <input
              class="uk-input"
              id="form-input-zipcode"
              type="text"
              placeholder="CEP"
            />
          </div>
        </div>
        <!-- Field Address -->
        <div class="uk-width-1-2@s">
          <label class="uk-form-label" for="form-input-address"
            >Endereço:</label
          >
          <div class="uk-form-controls">
            <input
              class="uk-input"
              id="form-input-address"
              type="text"
              placeholder="Endereço"
            />
          </div>
        </div>
        <!-- Field Number -->
        <div class="uk-width-1-4@s">
          <label class="uk-form-label" for="form-input-number">Número:</label>
          <div class="uk-form-controls">
            <input
              class="uk-input"
              id="form-input-number"
              type="text"
              placeholder="Número"
            />
          </div>
        </div>

        <!-- Field City -->
        <div class="uk-width-1-2@s">
          <label class="uk-form-label" for="form-input-city">Cidade:</label>
          <div class="uk-form-controls">
            <input
              class="uk-input"
              id="form-input-city"
              type="text"
              placeholder="Cidade"
            />
          </div>
        </div>

        <!-- Field State -->
        <div class="uk-width-1-2@s">
          <label class="uk-form-label" for="form-input-state">Estado:</label>
          <div class="uk-form-controls">
            <input
              class="uk-input"
              id="form-input-state"
              type="text"
              placeholder="Estado"
            />
          </div>
        </div>
      </form>
    </div>
    <div class="uk-card uk-card-default uk-card-body uk-flex uk-flex-column">
      <h4 class="uk-margin-remove">Resusmo</h4>
      <p class="uk-text-meta uk-margin-remove">
        Custo total, incluindo frete e produtos
      </p>
      <hr />
      <div class="uk-flex uk-flex-between">
        <span>Produtos</span>
        <span>R$ 5,99</span>
      </div>
      <div class="uk-flex uk-flex-between uk-margin-small-top">
        <span>Frete</span>
        <span>R$ 5,99</span>
      </div>
      <hr />
      <div class="uk-flex uk-flex-between">
        <span class="uk-text-success">Cupom de desconto</span>
        <h4 class="uk-text-success uk-margin-remove">R$ 80,00</h4>
      </div>
      <button
        class="uk-button uk-button-primary uk-width-1-1 uk-margin-auto-top"
      >
        Pagamento
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Checkout"
});
</script>

<style scoped lang="scss">
.checkout-wrapper {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto 380px;
}
</style>
