<template>
  <footer class="container-fluid">
  <div class="container">
    <div class="imagens">
      <div class="logo">
      <img src="~/assets/images/logoEyevison.png" alt="">
      </div>
      <hr />
      <div class="midias">
      <hr />
      <a target="_blank" href="https://business.facebook.com/eyevision.midias/"><img class="socialmidia" src="~/assets/images/facebook_white.png" alt=""></a><a href="https://www.instagram.com/eyevision.ai/" target="_blank"><img class="socialmidia" src="~/assets/images/instagram_white.png" alt=""></a><a target="_blank" href="https://www.linkedin.com/company/eyevision-m%C3%ADdias-interativas/"><img class="socialmidia" src="~/assets/images/linkedin_white.png" alt=""></a>
      </div>
    </div>
    <div class="texto">
      <p>AV. VISC DE GUARAPUAVA, 3263 - CENTRO, CURITUBA-PR</p>
    </div>
    </div>
  </footer>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>
<style scoped>
  footer {
    padding-top:40vh;
    background-image: url("~assets/images/fundo_rodape.png");
    width: 100%;
    min-height: 400px;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
  }
  .imagens {
    display: flex;
    flex-direction: row;
}
.midias {
  margin-right: 7vw;
}
.midias img{
  margin-left:1vw;
  border-radius: 10%;
}
.socialmidia{
  width: 2.5vw;
  height:auto;
}
.texto{
  padding-top:5vh;
  width: 100%;
  align-items: left;
  text-align: left;
  color: #fff;
}
.texto p{
  font-size: 1.3vw;
  font-family: var(--secondary-font);
  font-weight: 550;
  }
  @media (max-width: 840px) {
  footer{
    background-image: none;
    background-color: var(--main-color);
    max-height: 10vh;
    min-height: 10vh;
    padding-bottom: 30vh;
    margin-bottom: 0px;
    background-size: auto;
  }
  .container{
    padding-bottom: 0px;
    margin-bottom: 0px;
    }
  }
</style>
