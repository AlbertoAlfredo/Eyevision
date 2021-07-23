<template>
  <header id="home">
    <div class="banner">
        <img class="banner-img" src="~/assets/images/BannerCortado.png" />
      <nav class="navbar">
        <div class="banner-logo">
          <img class="banner-logo-img" src="~/assets/images/logo_h.png" alt=""/>
        </div>

        <ul class="navbar-list">
          <li class="navbar-link"><a href="#home">HOME</a></li>
          <li class="navbar-link"><a href="#produtos">PRODUTOS</a></li>
          <li class="navbar-link"><a href="#case">CASE</a></li>
          <li class="navbar-link"><a href="#quemsomos">QUEM SOMOS</a></li>
          <li class="navbar-link"><a href="#news">NEWS</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
export default {

}
</script>
<style scoped>
  .banner {
    width: 98vw;
    height: 200vh;
    }
  .banner-img{
    width: 100%;
    position:absolute;
    z-index: -1;
    top: 0;
  }
  .navbar{
    padding: 3.5vw 3.5vw;
    height: 45vw;
    display: flex;
    flex-direction: row;
    max-width: 90%;
  }
  .navbar-list{
    margin-left: 27vw;
    display: inline-flex;

  }
  .navbar-link{
    padding: 0 1vw 0 1vw;
  }
  .navbar-link, .navbar-link > a{
    color: #fff;
    text-align: right;
    font-size: 1.6vw;
    list-style-type: none;
  }
  .navbar-link > a{
    white-space: nowrap;
  }
  .banner-logo{
    width: 30vw;
    height: auto;
  }
  .banner-logo-img{
    width: 100%;
    height: auto;
  }
</style>
