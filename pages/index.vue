<template>
  <div id="app">
    <section id="produtos" class="container">
      <h1 class="titulo-produtos">PRODUTOS</h1>
      <hr />
      <div class="container-flex-inline">
        <div v-for="(produto, index) in produtos" :key="index" class="fundo-imagem-produtos">
          <nuxt-img :src="produto.img" class="imagem-produtos" :alt="produto.nome" />
        </div>

      </div>
    </section>
    <section id="case" class="container container-pf0">
      <h1 class="titulo-produtos">CASE</h1>
      <hr/>
      <div v-if="cases[0].img !== ''" class="container-flex-inline">
        <div v-for="(caso, index) in cases" :key="index" class="fundo-imagem-cases">
          <nuxt-img :src="caso.img" class="imagem-cases" alt="" />
          <hr/>
          <div class="texto-cases">
            <h2 class="titulo-case">{{caso.titulo}}</h2>
            <p class="paragrafo-case">{{caso.text}}</p>
          </div>
        </div>
      </div>
      <div v-if="cases[0].img == ''" class="container-flex-inline">
        <div v-for="n in 4" :key="n" class="fundo-imagem-cases">
          <div class="quadrado-branco"></div>
          <hr/>
          <div class="texto-cases">
            <h2 class="titulo-case">Lorem ipsum dolor sit amet</h2>
            <p class="paragrafo-case">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </section>
    <div id="quemsomos" class="container container-pt0">
      <div class="container-quemsomos">
        <div class="texto-quemsomos">
          <h1>QUEM SOMOS</h1>
          <h2>A INOVAÇÃO EM<br/>UM SIMPLES<br/>PISCAR DE OLHOS</h2>
          <p>
          A EYEVISION Midias interativas é uma empresa que desenvolve soluções interativas e inovadoras que utilizam Inteligência Artificial e Visão Computacional para inovar a experiência de compra do consumidor. Nossas soluções ajudam empresas a divulgar produtos, marcas e serviços de forma inovadora, criativa imteligente e impactante.<br/>
          Além disso conseguimos mensurar o fluxo de pessoas e o nivel de satisfação dos clientes através da análise das expressões faciais entre outros.
          </p>
        </div>
        <Carousel />
        <div class="imagem-quemsomos">
          <nuxt-img src="/robo01.png" class="img-imagem-quemsomos" />
        </div>
      </div>
      <hr />

      <div class="container-quemsomos-equipe">
        <div v-for="(indv, index) in equipe" :key="index" class="avatar-quemsomos-container">
        <a :href="indv.linkedin">
          <div class="avatar-quemsomos">
            <div class="img-avatar">
            <nuxt-img class="avatar-img" :src="indv.img" :alt="indv.alt" />
            </div>
            <div class="texto-avatar">
            <h3 class="titulo-avatar">{{indv.titulo}}</h3>
            <img class="icone-quemsomos" src="~assets/images/logo_in.png" alt="" />
            </div>
          </div>
        </a>
        </div>
      </div>
    </div>
    <div id="contato" class="container">
      <div class="container-quemsomos" style="flex-direction:row-reverse;">
        <div class="texto-quemsomos" style="text-align: left;">
          <!-- <h1 style="font-size: 4vw;">Contato</h1> -->
          <iframe style="width: 40vw; height: 60vw;" src="https://docs.google.com/forms/d/e/1FAIpQLSf76vHwaygqk-fbpnyQVlSHdAegrj_3ATpd6QoWBOxTAtuNjQ/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
        </div>
        <div class="imagem-quemsomos">
          <nuxt-img src="/robo02.png" class="img-imagem-quemsomos" />
        </div>
    </div>
    </div>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: function () {

    return {
      produtos: [
        {img: "CaixaHolografica.jpeg", name: "Caixa Holográfica"},
        {img: "projecao.jpeg", name: "Projeção Holográfica"},
        {img: "promotor.jpeg", name: "Promotor Hologrgáfico"},
        {img: "analitics.jpeg", name: "Analitics"},
        ],
      cases: [
        {img: "", alt: "", titulo: "", text: ""},
      ],
      equipe: [
        {img: "fernando.png", alt: "", titulo: "FERNANDO EDUARDO DA SILVA", linkedin: "#"},
        {img: "flavio.png", alt: "", titulo: "FLAVIO HENRIQUE DA SILVA", linkedin: "#"},
        {img: "giovani.png", alt: "", titulo: "GIOVANI BERTOLLA SAMPAIO", linkedin: "#"},
        {img: "michel.png", alt: "", titulo: "MICHEL SEHN", linkedin: "#"},
        {img: "junior.png", alt: "", titulo: "JUNIOR ODPPIS", linkedin: "#"},
        {img: "AlbertoPeB.jpeg", alt: "", titulo: "Alberto Alfredo", linkedin: "#"},
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
    align-items: center;
    text-align: center;
    margin: 0 1vw 0 1vw;
    width: 17vw;
    height: 19.7vw;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
  .imagem-produtos {
    width: 87%;
    padding: 1vw;
    border-radius: 20px;
    transition: all 0.3s ease-out;
  }
  .imagem-produtos:hover {
    transform: scale(1.2, 1.2);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
  #case {
    background-image: url("~assets/images/fundoMeio.png");
    background-repeat: no-repeat;
    background-size: 100%;
    height: 58vw;
  }
  .container-pf0{
    padding-bottom: 0px;
  }
  .fundo-imagem-cases{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 18vw;
    height: 25vw;
    border-radius: 10px;
    padding: 0.8vh 1.5vw;

  }
  .imagem-cases{
    border-radius: 10px;
    width: 17vw;
    height: auto;
    transition: all 0.3s ease-out;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
  .imagem-cases:hover {
    transform: scale(1.2, 1.2);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
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
  .quadrado-branco{
    width: 17vw;
    height: 18vw;
    background-color: #fff;
    border-radius: 20px;
  }
  .paragrafo-case{
    padding: 0px;
    margin: 0px;
  }
  .container-quemsomos{
    display: flex;
    flex-direction: row;
  }
  .container-pt0 {
    padding-top: 0;
  }
  .texto-quemsomos{
    display: flex;
    flex-direction:column;
    width: 40vw;
    padding-right: 2vw;
    padding-top: 4vh;
    text-align: right;
  }
  .texto-quemsomos h1 {
    font-size:2vw;
    color: var(--main-color);
  }
  .texto-quemsomos h2 {
    font-size:5vw;
    color: var(--main-color)
  }
  .texto-quemsomos p {
    font-size:2vw;
    font-family: var(--thirdy-font);
  }
  .imagem-quemsomos{
    width: 20vw;
    margin-right: 10vw;
  }
  .img-imagem-quemsomos{
    width: 100%;
    height: auto;
  }
  .container-quemsomos-equipe{
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  .avatar-quemsomos-container{
    margin: 10px;
  }
  .titulo-avatar{
    font-size: 2.1vw;
    color: var(--main-color);
  }
  .avatar-img{
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
  .img-avatar{
    width: 11vw;
    height: auto;
    transition: all 0.3s ease-out;
    margin-bottom: 1vh;
  }

  .img-avatar:hover{
    transform: scale(1.2, 1.2);
  }
  .texto-avatar{
    display: flex;
    width: 11vw;
  }
  .icone-quemsomos{
    width: 2.3vw;
    height: 2.3vw;
  }
  hr{
    height: 4vh;
  }
</style>
