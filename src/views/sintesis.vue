<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 Las herramientas digitales en las organizaciones fortalecen los productos y los servicios, favoreciendo la competitividad empresarial; es fundamental conocer cómo se articula este desarrollo con los demás niveles de la organización, por lo cual se requiere hacer una buena planeación, verificando los estudios de viabilidad tecnológica de un proyecto, las prácticas de servicios ITIL y relacionando estas buenas prácticas con la correcta implementación del #[i software] a utilizar.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la  síntesis se tienen las herramientas digitales para la planeación estratégica, riesgo y cumplimiento, que contiene el estudio de viabilidad tecnológica que se divide en técnicas de evaluación de proyectos, prácticas de Gestión de Servicios ITIL, planeación de la implementación, integrada por la viabilidad técnica, viabilidad operativa y viabilidad financiera. Igualmente se tiene la implementación del Software que contiene gestión de parches, gestión de activos de TI, prácticas de gestión del servicio ITIL V4 con TI, manual técnico de usuario, y control de versiones.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
