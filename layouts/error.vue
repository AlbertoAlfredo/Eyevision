<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Pagina encontrada</h1>
    <h1 v-else>Aconteceu algum erro, entre em contato conosco</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>
