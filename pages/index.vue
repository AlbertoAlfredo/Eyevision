<template>
  <div id="app">
    <section id="produtos" class="container">
      <h1 class="titulo-produtos">PRODUTOS</h1>
      <hr />
      <div class="container-flex-inline">
        <div v-for="(produto, index) in produtos" :key="index" class="fundo-imagem-produtos">
          <a :href="produto.url" alt=""><nuxt-img :src="produto.img" class="imagem-produtos" :alt="produto.nome" /></a>
        </div>

      </div>
    </section>
    <section id="case" class="container container-pf0">
      <h1 class="titulo-produtos">CASE</h1>
      <hr/>
      <div class="container-flex-inline">
        <div class="fundo-imagem-cases">
          <iframe class="iframe-video" src="https://www.youtube.com/embed/8mBdrwqFIi0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <hr/>
          <div class="texto-cases">
            <h2 class="titulo-case">Oeste Plaza Shopping - Andradina/SP</h2>
          </div>
        </div>

        <div class="fundo-imagem-cases">
          <iframe src="https://www.youtube.com/embed/6AZqu5n5S7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <hr/>
          <div class="texto-cases">
            <h2 class="titulo-case">TremBão de Minas - Curitiba/PR</h2>
          </div>
        </div>

        <div class="fundo-imagem-cases">
          <iframe class="iframe-video" src="https://www.youtube.com/embed/1QgE7-pUZaU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <hr/>
          <div class="texto-cases">
            <h2 class="titulo-case">Dia da Tecnologia Vaticano - Curitiba/PR</h2>
          </div>
        </div>

        <div class="fundo-imagem-cases">
          <iframe class="iframe-video" src="https://www.youtube.com/embed/WRvTNfhSFdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <hr/>
          <div class="texto-cases">
            <h2 class="titulo-case">POC  Largo da Ordem  - Curitiba/PR</h2>
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
        <div class="imagem-quemsomos">
          <nuxt-img src="/robo01.png" class="img-imagem-quemsomos" />
        </div>
      </div>
      <hr />
      <div class="center">
        <iframe class="video-iframe" src="https://www.youtube.com/embed/voN9es0TfY8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <hr />

      <div class="container-quemsomos-equipe">
        <div v-for="(indv, index) in equipe" :key="index" class="avatar-quemsomos-container">
        <a :href="indv.linkedin" target="_blank">
          <div class="avatar-quemsomos">
            <div class="img-avatar">
            <nuxt-img class="avatar-img" :src="indv.img" :alt="indv.alt" />
            </div>
            <div class="texto-avatar">
            <h3 class="titulo-avatar" v-html="indv.titulo"></h3>
            <img class="icone-quemsomos" src="~assets/images/logo_in.png" alt="" />
            </div>
          </div>
        </a>
        </div>
      </div>
    </div>
    <div id="contato" class="container">
    <div class="texto-quemsomos">
    <h2 class="">Contato</h2>
    </div>
      <div class="container-quemsomos" style="flex-direction:row-reverse;">

        <div class="texto-quemsomos" style="text-align: left;">
          <!-- <h1 style="font-size: 4vw;">Contato</h1> -->
          <div class="contato">
          <hr />
          <p class="link-contato"><img src="~assets/images/map-solid.svg" class="icon-contato" alt=""> <a href="https://goo.gl/maps/Y1c781b4EfAWRWsQ8" target="_blank">AV. VISC DE GUARAPUAVA, 3263 <br /> - CENTRO, CURITUBA-PR</a></p>
          <hr />
            <p class="link-contato"><img src="~/assets/images/whatsapp.png" class="icon-contato" alt=""><a href="https://api.whatsapp.com/send?phone=554195183964">whatsapp: +55 (41)9518-3964</a></p>
            <hr />
            <p class="link-contato"><img src="~/assets/images/envelope.png" class="icon-contato" alt=""><a href="mailto:eyevision@eyevision.ai">eyevision@eyevision.ai</a></p>
          </div>
        </div>
        <div class="imagem-quemsomos">
          <nuxt-img src="/robo02.png" class="img-imagem-quemsomos" />
        </div>
    </div>
    </div>
    <Popup />
  </div>
</template>

<script>
export default {
  data: ()=> {
    return{
      produtos: [
        {img: "CaixaHolografica.jpeg", name: "Caixa Holográfica", url:"/#/produtos/caixaholografica/"},
        {img: "promotor.jpeg", name: "Promotor Holográfico", url:"/#/produtos/promotorholografico/"},
        {img: "analitics.jpeg", name: "Analitics", url:"/#/produtos/analitics/"},
        ],
      cases: [
        {video: '<iframe class="iframe-video" src="https://www.youtube.com/embed/8mBdrwqFIi0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', alt: "", titulo: "Oeste Plaza Shopping - Andradina/SP"},
        {video: '<iframe class="iframe-video" src="https://www.youtube.com/embed/1QgE7-pUZaU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', alt: "", titulo: "Dia da Tecnologia Vaticano - Curitiba/PR", text: ""},
        {video: '<iframe class="iframe-video" src="https://www.youtube.com/embed/8mBdrwqFIi0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', alt: "", titulo: "TremBão de Minas - Curitiba/PR", text: ""},
        {video: '<iframe class="iframe-video" src="https://www.youtube.com/embed/WRvTNfhSFdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', alt: "", titulo: "POC  Largo da Ordem  - Curitiba/PR", text: ""},
      ],
      equipe: [
        {img: "Fernando.jpg", alt: "", titulo: "FERNANDO,<br/> CEO E FOUNDER", linkedin: "https://www.linkedin.com/in/fernando-eduardo-da-silva-183678a1/"},
        {img: "Flavio.jpg", alt: "", titulo: "FLAVIO,<br/> CTO E <br/>CO-FOUNDER", linkedin: "https://www.linkedin.com/in/flávio-henrique-da-silva-807841ba/"},
        {img: "Giovani.jpeg", alt: "", titulo: "GIOVANI,<br/> CO-FOUNDER", linkedin: "https://www.linkedin.com/in/giovani-bertolla-sampaio-28151131/"},
        {img: "Michel.jpg", alt: "", titulo: "MICHEL,<br/> CFO", linkedin: "https://www.linkedin.com/in/michelsehn/"},
        {img: "Junior.jpg", alt: "", titulo: "JUNIOR,<br/> MARKETING", linkedin: "https://www.linkedin.com/in/junior-odppis-a3561235/"},
        {img: "Alberto.jpg", alt: "", titulo: "ALBERTO,<br/> DESENVOLVEDOR", linkedin: "https://www.linkedin.com/in/alberto-alfredo-774a5397/"},
      ]
    }
  },
}
</script>

<style>
a, a:hover, a:visited {
  color: black;
}
</style>

<style scoped>
.center {
    align-items: center;
    text-align: center;

  }
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
    border-radius: 10%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
  .imagem-produtos {
    width: 87%;
    padding: 1vw;
    border-radius: 10%;
    transition: all 0.3s ease-out;
  }
  .imagem-produtos:hover {
    box-shadow: inset 0 0 0 100px var(--main-color);
    transform: scale(1.1);
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
    border-radius: 10%;
    padding: 0.8vh 1.5vw;

  }
  .imagem-cases{
    border-radius: 10%;
    width: 17vw;
    height: auto;
    transition: all 0.3s ease-out;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
  .imagem-cases:hover {
    transform: scale(1.1);
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
    border-radius: 10%;
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
  .contato{
    display: flex;
    flex-direction: column;
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
    font-size:vw;
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
  .link-contato{
    height: auto;
    display: flex;
    flex-direction: row;
  }
  .video-iframe{
    width: 60vw;
    height: 30vw;
  }
  .container-quemsomos-equipe{
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  .avatar-quemsomos-container{
    margin: 10px;
  }
  .icon-contato{
    width: 3vw;
    height: auto;
    margin-right: 1vw;
  }
  .titulo-avatar{
    font-size: 1.5vw;
    color: var(--main-color);
    word-break: keep-all;
  }
  .avatar-img{
    width: 100%;
    height: auto;
    border-radius: 10%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    background-color:rgba(63, 63, 63, 0.808);
  }
  .img-avatar{
    width: 11vw;
    height: auto;
    transition: all 0.3s ease-out;
    margin-bottom: 1vh;
    filter: grayscale(100%);
  }

  .img-avatar:hover{
  filter: grayscale(0%);
    transform: scale(1.1);
  }
  .texto-avatar{
    display: flex;
    width: 11vw;
  }
  .icone-quemsomos{
    width: 2.3vw;
    height: 2.3vw;
  }
  .case-video > iframe{
    width: 17vw;
  }
  .iframe-video{
    width: 20vw !important;
    height: auto;
  }
  hr{
    height: 4vh;
  }

  @media (max-width: 840px) {
  #case{
    background-image: none;
    background-color: rgb(131, 131, 131);
  }
  }
</style>
