<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Implementación del <i>software</i>

    p(data-aos="fade-left") Este estudio se refiere al análisis técnico y económico que se desarrolla para evaluar la pertinencia de ejecutar un determinado proyecto, es decir, permite establecer el éxito o el fracaso del mismo. Por lo que es necesario tener en cuenta los siguientes aspectos:

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
