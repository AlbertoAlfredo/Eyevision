<template>
  <div id="app">
    <section id="produtos" class="container">
      <h1 class="titulo-produtos">Produtos</h1>
      <div class="container-flex-inline">
        <div v-for="(produto, index) in produtos" :key="index" class="fundo-imagem-produtos">
          {{produto}}
        </div>

      </div>
    </section>
    <div id="case" class="container">
      <h1>Produtos</h1>
    </div>
    <div id="quemsomos" class="container">
      <h1>Produtos</h1>
    </div>
    <div id="news" class="container">
      <h1>Produtos</h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: function () {

    return {
      produtos: [ "01", "02", "03", "04" ]
    }
  }
});

</script>

<style>
</style>

<style scoped>
  .container-flex-inline {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
  }
  .titulo-produtos {
    text-align: center;
    color: var(--main-color);
  }
  .fundo-imagem-produtos {
    background-color: var(--main-color);
    width: 15vw;
    height: 20vw;
    border-radius: 10px;
    border: 3px solid #fff;
  }
</style>
