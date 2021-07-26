<template>
  <div>
    <div>
      <img class="banner" src="~assets/images/promotorholografico.png" alt="" />
    </div>
    <div class="container-flex-row">
      <div class="texto-produto">
        <h1>Promotor Holográfico Virtual</h1>

        <p>
          O Promotor Holográfico Virtual tem a cara de cada empresa. É uma
          projeção holográfica de alta resolução que interage com o público
          através da fala, recepcionando, tirando dúvidas, apresentando o
          produto ou serviço e coletando informações preciosas do seu cliente
          para o seu negócio. Os avatares em 3D podem ser com imagens e pessoas
          reais, ícones, mascotes, etc, animados e interativos com técnicas
          avançadas de Inteligência Artificial, conforme a necessidade do
          cliente.
        </p>
        <hr />
        <h3>Iteração Multicanal</h3>
        <div class="container-imagens">
          <div class="container-imagem">
            <div>
              <img
                class="imagem-icones"
                src="~assets/images/icones/6-DeteccaoodePresenca.png"
                alt=""
              />
            </div>
            <div class="texto-icones"><h4>Sensor de Presença</h4></div>
          </div>

          <div class="container-imagem">
            <div>
              <img
                class="imagem-icones"
                src="~assets/images/icones/5-DeteccaoFacial.png"
                alt=""
              />
            </div>
            <div class="texto-icones"><h4>Detecção Facial</h4></div>
          </div>

          <div class="container-imagem">
            <div>
              <img
                class="imagem-icones"
                src="~assets/images/icones/9-Chatbot.png"
                alt=""
              />
            </div>
            <div class="texto-icones"><h4>Chatbot</h4></div>
          </div>

          <div class="container-imagem">
            <div>
              <img
                class="imagem-icones"
                src="~assets/images/icones/8-Voz.png"
                alt=""
              />
            </div>
            <div class="texto-icones"><h4>Voz</h4></div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <img
            class="imagens-produto"
            src="~assets/images/promotorholo1.jpg"
            alt=""
          />
        </div>
        <hr />
        <div>
          <img
            class="imagens-produto"
            src="~assets/images/promotorholo2.jpg"
            alt=""
          />
        </div>
        <hr />
        <div>
          <img
            class="imagens-produto"
            src="~assets/images/promotorholo3.jpg"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="container">
      <h3>Beneficios</h3>
      <div class="container-imagens">
        <div class="container-imagem">
          <div>
            <img
              class="imagem-icones container-imagem-beneficios"
              src="~assets/images/icones/2-Conectividade.png"
              alt=""
            />
          </div>
          <div class="texto-icones">
            <h4>Conectividade com <br />outras plataformas</h4>
          </div>
        </div>

        <div class="container-imagem">
          <div>
            <img
              class="imagem-icones container-imagem-beneficios"
              src="~assets/images/icones/1-ConteudoPersonalizado.png"
              alt=""
            />
          </div>
          <div class="texto-icones">
            <h4>
              Conteúdo<br />
              Personalizado
            </h4>
          </div>
        </div>

        <div class="container-imagem">
          <div>
            <img
              class="imagem-icones container-imagem-beneficios"
              src="~assets/images/icones/18-Cameras.png"
              alt=""
            />
          </div>
          <div class="texto-icones">
            <h4>Integração com <br />câmeras</h4>
          </div>
        </div>
      </div>
      <div class="container-imagens">
        <div class="container-imagem">
          <div>
            <img
              class="imagem-icones container-imagem-beneficios"
              src="~assets/images/icones/20-ExtracaodeInformacoes.png"
              alt=""
            />
          </div>
          <div class="texto-icones"><h4>Extração de informações por meio de imagens</h4></div>
        </div>

        <div class="container-imagem">
          <div>
            <img
              class="imagem-icones container-imagem-beneficios"
              src="~assets/images/icones/23-Dashboard.png"
              alt=""
            />
          </div>
          <div class="texto-icones"><h4>Dashboard dinâmico</h4></div>
        </div>

        <div class="container-imagem">
          <div>
            <img
              class="imagem-icones container-imagem-beneficios"
              src="~assets/images/icones/24-ContagemdePessoaseCarros.png"
              alt=""
            />
          </div>
          <div class="texto-icones"><h4>Verificação de fluxo</h4></div>
        </div>
      </div>
      <hr />
      <h3>Aplicação</h3>
      <ul>
        <li>
          Campanhas de publicitárias divulgando produtos, serviços, promovendo as marcas das empresas de forma inovadora e inteligente.
        </li>
        <li>Orientando o público em Shoppings, Aeroportos, Repartições Públicas e Privadas, Zoológicos, Parques de Diversão, Aquáticos e entre outros.</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  layout: "produtos",
};
</script>
<style scoped>
.banner {
  width: 100%;
}
.container-flex-row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 8vh 0;
}
.imagens-produto {
  width: 20vw;
}
.texto-produto {
  width: 50vw;
  padding-right: 5vw;
  text-align: justify;
}
.texto-produto > h1 {
  color: var(--main-color);
}
.texto-produto > h2 {
  color: var(--main-color);
}
h3 {
  color: var(--main-color);
}

.texto-produto > ul {
  list-style-type: circle;
}
.container-imagens {
  padding-top: 2vw;
  display: flex;
  flex-direction: row;
}
.container-imagem {
  display: flex;
  flex-direction: column;
  margin-right: 2vw;
}
.container-imagem-beneficios {
  margin: 0 4vw;
}
.imagem-icones {
  width: 12vw;
}
.texto-icones h4 {
  text-align: center;
}
.container {
  padding: 10vw 15vw;
}
.container > h3 {
  padding-left: 5vw;
}
ul {
  list-style-type: circle;
  padding-left: 5vw;
}
</style>
