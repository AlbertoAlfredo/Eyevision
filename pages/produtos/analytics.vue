<template>
<div>
  <div>
    <img class="banner" src="~assets/images/BannerCortado.png" alt="">
  </div>
  <div class="container-flex-row">
  <div class="texto-produto">
  <h1>EYEVISION ANALYTICS</h1>

  <p>A plataforma EYEVISION ANALITICS permite integração com câmeras de monitoramento e por meio de inteligência artificial possibilita a contagem de pessoas e de carros em locais públicos e privados. Além disso, possui um módulo dedicado ao monitoramento do distanciamento social e o uso correto da máscara fácil que auxilia no combate da COVID 19.</p>
  <p>A EYEVISION ANALYTICS oferece ao usuário o processamento dos vídeos de forma on-line (real time) e off-line, onde é necessário apenas realizar o upload de arquivo de vídeo para que as imagens sejam analisadas e os dados extraídos.</p>
  <hr />
  </div>
  <div>
  <div><img class="imagens-produto" src="~assets/images/analyticsimg1.png" alt=""></div>
  <hr />
  <div><img class="imagens-produto" src="~assets/images/analyticsimg2.png" alt=""></div>
  <hr />
  <div><img class="imagens-produto" src="~assets/images/analyticsimg3.png" alt=""></div>
  </div>
  </div>
</div>

</template>
<script>
export default {
  layout: 'produtos',
}
</script>
<style scoped>
  .banner{
    width: 100%;
  }
  .container-flex-row{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 8vh 0;
  }
  .imagens-produto{
    width: 20vw;
  }
  .texto-produto{
    width: 50vw;
    padding-right: 5vw;
    text-align: justify;
  }
  .texto-produto > h1{
    color: var(--main-color);
  }
  .texto-produto > h2{
    color: var(--main-color);
  }
  .texto-produto > h3{
    color: var(--main-color);
  }
  .texto-produto > ul{
    list-style-type: circle;
  }
</style>
