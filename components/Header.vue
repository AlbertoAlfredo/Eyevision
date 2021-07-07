<template>
  <header>
    <div class="banner">
      <img class="banner-img" src="~/assets/images/bannerTopo.png" />
      <div class="navbar">
        <img class="banner-logo" src="~/assets/images/logoEyevison.png" alt=""/>
        <div class="navbarLink">sdf</div>
        <div class="navbarLink">adf</div>
        <div class="navbarLink">asf</div>
        <div class="navbarLink">afs</div>
        <div class="navbarLink">asfas</div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
  .banner {
    width: 100vw;
    }
  .banner-img{
    width: 100%;
    position:absolute;
    z-index: -1;
    top: 0;
  }
  .navbar{
    margin: 7vw 7vw;
  }
  .banner-logo{
    width: 30vw;

  }
</style>
