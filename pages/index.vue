<template>
  <div id="app">
    <section id="produtos" class="container">
      <h1 class="titulo-produtos">Produtos</h1>
      <div class="container-flex-inline">
        <div v-for="(produto, index) in produtos" :key="index" class="fundo-imagem-produtos">
          {{produto.name}}
        </div>

      </div>
    </section>
    <section id="case" class="container">
      <h1 class="titulo-produtos">Cases</h1>
      <hr/>
      <div class="container-flex-inline">
        <div v-for="(caso, index) in cases" :key="index" class="fundo-imagem-cases">
          <nuxt-img :src="caso.img" class="imagem-cases" sizes="md:17vw" alt="" />
          <hr/>
          <div class="texto-cases">
            <h2 class="titulo-case">{{caso.titulo}}</h2>
            <p class="paragrafo-case">{{caso.text}}</p>
          </div>
        </div>
      </div>
    </section>
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
      produtos: [
        {img: "01", name: "01"},
        {img: "02", name: "02"},
        {img: "03", name: "03"},
        {img: "04", name: "04"},
        ],
      cases: [
        {img: "teste.png", alt: "", titulo: "Mussum Ipsum, cacilds vidis litro abertis.", text: "Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor."},
        {img: "teste.png", alt: "", titulo: "Mussum Ipsum, cacilds vidis litro abertis.", text: "Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor."},
        {img: "teste.png", alt: "", titulo: "Mussum Ipsum, cacilds vidis litro abertis.", text: "Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor."},
        {img: "teste.png", alt: "", titulo: "Mussum Ipsum, cacilds vidis litro abertis.", text: "Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor."},
      ]
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
  #case {
    background-image: url("~assets/images/fundoMeio.png");
    background-repeat: no-repeat;
    background-size: 100%;
    height: 58vw;
  }
  .fundo-imagem-cases{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 18vw;
    height: 20vw;
    border-radius: 10px;
    padding: 0.8vh 1.5vw;
  }
  .imagem-cases{
    border-radius: 10px;
  }
  .texto-cases{
    padding: 0 0.8vw;
  }
  .titulo-case{
    font-size: 1.6vw;
    text-align: justify;
    padding: 0;
    margin: 0px;
    font-weight: normal;
    color: var(--main-color);
  }
  .paragrafo-case{
    padding: 0px;
    margin: 0px;
  }
  hr{
    height: 4vh;
  }
</style>
