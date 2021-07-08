<template>
  <div>
    <section id="produtos" class="container">
      <h1 class="titulo-produtos">Produtos</h1>
      <div class="container-flex-inline">
        <div class="fundo-imagem-produtos">

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

export default Vue.extend({});
</script>

<style>
</style>

<style scoped>
  .container-flex-inline {
    display: flex;
    flex-direction: row;
  }
  .titulo-produtos {
    text-align: center;
    color: var(--main-color);
  }
  .fundo-imagem-produtos {
    background-color: var(--main-color);
    width: 10vw;
    height: 10vw;
    border-radius: 10px;
    border: 3px solid #fff;
  }
</style>
