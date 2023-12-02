<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p(data-aos="fade-left") Cordial bienvenida a este componente formativo relacionado con la implementación de los servicios tecnológicos en las organizaciones, teniendo en cuenta las estrategias de gobierno, riesgo y cumplimiento; se analizará la exploración de las herramientas esenciales para llevar a cabo estudios de viabilidad tecnológica.
    p.mb-5(data-aos="fade-left") En el mundo de la tecnología, la evaluación y la implementación de proyectos son pasos críticos para lograr la excelencia en la entrega de productos y servicios, para saber más sobre este importante tema se invita a observar el siguiente video:

    figure(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/fMXAufX5sRI?si=X6-bra6qTDhek2OS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
