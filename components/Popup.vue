<template>
  <a v-if="this.mostrar" v-on:click="fechar()"><img src="~/assets/images/Emconstrucao.jpg" alt=""></a>
</template>
<script>
export default {
  data: function() {
    return {
      mostrar: true
    }
  },
  methods: {
    fechar(){
      this.mostrar = false
    }
  }
}
</script>
<style scoped>
img {
  width: 30vw;
  position: fixed;
  top: 10vh;
  left:40vw;
}

</style>
