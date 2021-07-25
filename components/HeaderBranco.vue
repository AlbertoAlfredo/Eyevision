<template>
  <header id="home">
    <div class="banner">
      <nav class="navbar">
        <div class="banner-logo">
        <a @click="mostrar = false" href="/Eyevision/">
          <img
            class="banner-logo-img"
            src="~/assets/images/logo_azul.png"
            alt=""
          />
          </a>
        </div>

        <ul class="navbar-list">
          <li class="navbar-link"><a @click="mostrar = false" href="/Eyevision/">HOME</a></li>
          <div class="dropdown-menu">
          <li class="navbar-link dropdown-menu"><a style="cursor: pointer;" @click="fechar()">PRODUTOS</a></li>
          <transition name="fade">
          <div v-if="mostrar" class="dropdown-list">
            <div v-for="(item, index) in items" :key="index">
              <Nuxt-Link :to="item.href"><h2 @click="mostrar = false" class="dropdown-list-text" v-html="item.title"></h2></Nuxt-Link>
            </div>
          </div>
          </transition>
          </div>

          <li class="navbar-link"><a @click="mostrar = false" href="#case">CASE</a></li>
          <li class="navbar-link"><a @click="mostrar = false" href="#quemsomos">QUEM SOMOS</a></li>
          <li class="navbar-link"><a @click="mostrar = false" href="#news">NEWS</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  data: () => ({
    items: [
      { title: "Caixa Holográfica", href: "/Eyevision/produtos/caixaholografica/" },
      { title: "Promotor Holográfico", href: "/Eyevision/produtos/promotorholografico/"  },
      { title: "Analitics", href: "/Eyevision/produtos/analitics/"  },
    ],
    mostrar: false,
  }),
  methods: {
    fechar(){
      this.mostrar = !this.mostrar;
    }
  }
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.banner {
  width: 98vw;
  height: 11vw;
}
.banner-img {
  width: 100%;
  position: absolute;
  z-index: -1;
  top: 0px;
}
.navbar {
  padding: 3.5vw 3.5vw;
  height: 45vw;
  display: flex;
  flex-direction: row;
  max-width: 90%;

}
.navbar-list {
  margin-left: 27vw;
  display: inline-flex;
  position: absolute;
  right: 2vw;
}
.navbar-link {
  padding: 0 1vw 0 1vw;
  text-align: left;
}
.navbar-link > a {
  color: var(--main-color);
  text-align: left;
  font-size: 1.6vw;
  list-style-type: none;
}
.navbar-link > a {
  white-space: nowrap;
}
.dropdown-menu{
  display: flex;
  flex-direction: column;
  justify-content:top;

}
.dropdown-list {
  background-color: #fff;
}
.dropdown-list-text{
  font-size: 1.5vw;
  text-align: left;
  border: 1px solid rgba(0, 0, 0, 0.158);
  color: var(--main-color);

}
.banner-logo-img {
  width: 100%;
  height: auto;
}
</style>
