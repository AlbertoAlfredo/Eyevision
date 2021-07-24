<template>
<div>
  <div>
    <img class="banner" src="~assets/images/caixa_holografica.png" alt="">
  </div>
  <div class="container-flex-row">
  <div class="texto-produto">
  <h1>CAIXA HOLOGRÁFICA</h1>

  <p>A caixa holográfica é totalmente construída com acrílico de cristal em diversos tamanhos conforme a necessidade do cliente. Em seu centro é anexado um ventilador holográfico que exibe imagens 3D que variam de 30 centímetros a 2 metros, ideal para pontos de vendas e para pequenos e médios espaços.</p>
  <hr />
  <h3>Aplicação</h3>
  <ul>
  <li>Solução ideal para ativação de marcas, lançamento de marcas ou serviços.</li>
  <li>Recomendado para feiras, congressos, exposições e ventos.</li>
  <li>Construção de vitrines holográficas.</li>
  </ul>
  </div>
  <div>
  <div><img class="imagens-produto" src="~assets/images/CaixaHolografica.png" alt=""></div>
  <div><img class="imagens-produto" src="~assets/images/CaixaHamburger.png" alt=""></div>
  <div><img class="imagens-produto" src="~assets/images/CaixaRemedio.png" alt=""></div>
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
    font-size: 8vw;
    color: var(--main-color);
  }
  .texto-produto > h2{
    color: var(--main-color);
  }
  .texto-produto > h3{
    font-size: 4vw;
    color: var(--main-color);
  }
  .texto-produto > p{
    font-size: 2vw;
  }
  .texto-produto > ul{
    font-size: 2vw;
    list-style-type: circle;
  }
</style>
