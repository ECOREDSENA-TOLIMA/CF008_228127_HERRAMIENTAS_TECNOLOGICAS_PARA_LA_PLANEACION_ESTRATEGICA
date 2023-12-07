<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Implementación del <i>software</i>

    p(data-aos="fade-left") Según #[i ManageEngine] (s.f.), este proceso se refiere a la instalación de un #[i software] de forma remota con varios equipos dentro de una red simultánea desde un servidor central. Normalmente se usa en el contexto de una gran red, que involucra alrededor de 20 equipos. Esta implementación incluye las siguientes actividades:

    .row.justify-content-center 
      .col-lg-10.col-12
        .cajon.color-secundario.p-4.mb-4(style="background-color: #FDFDE3")
          .row.justify-content-center.align-items-center 
            .col-lg-2.col-8
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema2/1.svg' alt='Imagen decorativa')
            .col-lg-9.col-12
              li Creación y mantenimiento de los paquetes de #[i software] actualizados y listos para su instalación.
              li Configuración de los equipos de destino al instalar o desinstalar el paquete.
              li Instalación o desinstalación del #[i software] en los equipos de destino.
              li Configuración de los equipos de destino, luego de la instalación o desinstalación.
              li Actualización del #[i software] existente.

        p(data-aos="fade-left") La implementación del software se puede dividir en gestión de parches y gestión de activos de TI requeridos para realizar la actualización, obtener control y visibilidad total del #[i software] instalado en la red.
        p(data-aos="fade-left") Pero, exactamente, ¿a qué se refieren estos procesos?

        .row.justify-content-center
          .col-lg-6.col-12.mb-3
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema2/2.svg' alt='Imagen decorativa')
            h4.mt-3 Gestión de parches
            p Implica tener una visión general de parches aplicables para los #[i endpoints] (dispositivo informático conectado a una red). De esta manera se logra clasificar los sistemas vulnerables y saludables, detectando así, los sistemas que necesitan atención para tomar las medidas correctivas y adecuadas para proteger la red ante un ataque cibernético.
          .col-lg-6.col-12.mb-3
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema2/3.svg' alt='Imagen decorativa')
            h4.mt-3 Gestión de activos de TI
            p Se refiere al conjunto de prácticas comerciales relacionadas con la identificación, descubrimiento, adquisición, gestión, monitoreo y disposición de activos de TI. Para realizarlas se debe tener una vista centralizada de todos los activos presentes en la red, junto con los detalles de #[i software]. Contar con estos puntos permite la toma de decisiones estratégicas que se respalda con los datos y reduce gastos innecesarios.

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex Prácticas de gestión del servicio TI con ITIL V4
      div.titulo-herramientas.d-block.d-md-none Prácticas de gestión del servicio TI con ITIL V4

    p(data-aos="fade-left") Relacionar ITIL con TI implica un conjunto de mejores prácticas para la gestión de servicios de TI, permitiendo a las organizaciones la gestión rentable de los servicios de TI, que se alinean con estrategias y crecimiento del negocio. Del mismo modo, se enfatiza en la colaboración y visibilidad, provocando la retroalimentación de los clientes y las partes interesadas.
    p(data-aos="fade-left") Las prácticas de gestión del servicio ITIL se encamina al logro de las siguientes actividades: 

    .row.justify-content-center 
      .col-lg-10.col-12
        .tarjeta.tarjeta--gris.p-4.mb-5(style="background-color: #E1F5D6")
          LineaTiempoC.color-acento-botones(text-small)
            .row(titulo="1").col-ipad
              .col-md-6.mb-4.mb-md-0.p-4
                h4 Gestión de la disponibilidad
                p Para que la organización alcance el éxito necesita realizar un acompañamiento de los servicios y productos 24 horas por los 7 días de la semana (24/7).
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema2/4.jpg', alt='Texto que describa la imagen')
            .row(titulo="2").col-ipad
              .col-md-6.mb-4.mb-md-0.p-4
                h4 Gestión de la capacidad y rendimiento
                p Hace referencia a la capacidad organizacional para alcanzar el rendimiento esperado sin superar los costos acordados, contribuyendo a lograr una gestión tecnológica más eficaz.
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema2/5.jpg', alt='Texto que describa la imagen')
            .row(titulo="3").col-ipad
              .col-md-6.mb-4.mb-md-0.p-4
                h4 Control de cambio
                p Centrado en las variaciones de productos y servicios de forma integral.
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema2/6.jpg', alt='Texto que describa la imagen')
            .row(titulo="4").col-ipad
              .col-md-6.mb-4.mb-md-0.p-4
                h4 Gestión de incidentes
                p Garantiza que se mantenga el máximo nivel de calidad posible, con disponibilidad del servicio.
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema2/7.jpg', alt='Texto que describa la imagen')
            .row(titulo="5").col-ipad
              .col-md-6.mb-4.mb-md-0.p-4
                h4 Gestión de activos de TI
                p Permite la planificación y gestión del ciclo de vida de los activos, con lo cual se aumenta el valor y se contribuye en la toma de mejores decisiones de compra.
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema2/8.jpg', alt='Texto que describa la imagen')
            .row(titulo="6").col-ipad
              .col-md-6.mb-4.mb-md-0.p-4
                h4 Gestión de la continuidad del servicio
                p Las organizaciones están expuestas a diferentes imprevistos (por ejemplo, catástrofes), por lo que se debe garantizar la prestación continua de funciones.
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema2/9.jpg', alt='Texto que describa la imagen')
            .row(titulo="7").col-ipad
              .col-md-6.mb-4.mb-md-0.p-4
                h4 Diseño del servicio
                p Referido al diseño de los productos y los servicios que se ajusten al ecosistema de la organización.
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema2/10.jpg', alt='Texto que describa la imagen')
            .row(titulo="8").col-ipad
              .col-md-6.mb-4.mb-md-0.p-4
                h4 Servicio de atención al cliente
                p Actividad conocida como #[i “service desk”], se encarga de gestionar la resolución de incidentes y solicitudes de servicio.
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema2/11.jpg', alt='Texto que describa la imagen')
            .row(titulo="9").col-ipad
              .col-md-6.mb-4.mb-md-0.p-4
                h4 Gestión del nivel de servicio
                p Los servicios deben alcanzar el nivel de calidad acordado, por lo que es necesario contribuir al establecimiento de los objetivos relacionados con el seguimiento, la medición, la evaluación y la gestión de la prestación de servicios mediante acuerdos del nivel de servicio #[i (Service Level Agreement,]  SLA).
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema2/12.jpg', alt='Texto que describa la imagen')
            .row(titulo="10").col-ipad
              .col-md-6.mb-4.mb-md-0.p-4
                h4 Validación y pruebas del servicio
                p Se necesita comprobar que todos los productos y los servicios nuevos o modificados de una organización cumplan con los requisitos definidos, por lo que se aplican pruebas de validación y de servicio.
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema2/13.jpg', alt='Texto que describa la imagen')
    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex Manual técnico de usuario
      div.titulo-herramientas.d-block.d-md-none Manual técnico de usuario
    
    p(data-aos="fade-left") Es un documento técnico de un determinado sistema, que ofrece asistencia a los usuarios, sean principiantes o avanzados, con el objetivo de guiarlos en el uso del sistema y de evitar problemas en la ejecución del mismo. Estos manuales van dirigidos a diferentes tipos de usuarios como la dirección de TI, el administrador del sistema y los desarrolladores de #[i software], de tal forma que puedan proporcionar mantenimiento en determinados casos; contienen toda la información técnica de los recursos utilizados en el proyecto y una descripción detallada de las características físicas y técnicas de cada elemento.

    .row.justify-content-center 
      .col-lg-10.col-12
        .cajon.color-primario.p-4.mb-4(style="background-color: #E1F5D6")
          .row.justify-content-center 
            .col-lg-2.col-6.mb-3
              figure
                img(src='@/assets/curso/temas/tema2/14.svg', alt='Texto que describa la imagen')
            .col-lg-10.col-12.mb-3
              h4 Los manuales técnicos deben contener:
              li El objetivo y alcances del sistema.
              li El manual de normas, políticas y procedimientos de la organización en las que está basado el sistema para la implementación.
              li La descripción de las bases de datos y diagramas de relación.

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex Control de versiones
      div.titulo-herramientas.d-block.d-md-none Control de versiones

    p(data-aos="fade-left") Según Borrell (como se citó en Docunecta, s.f.), el control de versiones se refiere a los métodos y las herramientas disponibles para controlar los cambios de un documento en el tiempo. Como es comprensible, es poco probable que un documento generado quede correcto en su primera producción, por lo tanto, lo más normal es que se realicen correcciones, ampliaciones o ajustes que lo modifiquen en su contenido general. En otras palabras, Docunecta, (s.f.) define una versión como el estado del documento tras una modificación, en el que se parte del elemento original y en cada aporte se efectúa una nueva versión.
    p(data-aos="fade-left") Para evidenciar las versiones se acostumbra a utilizar un sistema de tres números 1.0.0, que se caracteriza así:

    .row.justify-content-center
      .col-lg-10.col-12 
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span #[i Sistema de control de versiones]
        .col-12 
          figure.desktop(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/15.svg' alt='El sistema de control de versiones, explica e identifica las acciones de cada uno de los números ubicados en la primera, segunda o tercera')
        .col-12 
          figure.movil(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/16.svg' alt='El sistema de control de versiones, explica e identifica las acciones de cada uno de los números ubicados en la primera, segunda o tercera')
            
    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex Sistema de Control de Versiones VCS
      div.titulo-herramientas.d-block.d-md-none Sistema de Control de Versiones VCS

    p(data-aos="fade-left") Es una herramienta de #[i software] que monitoriza y gestiona cambios en los sistemas de archivos. Ofrece herramientas de colaboración para compartir e integrar dichos cambios con otros usuarios del sistema. Como se indica monitoriza las adiciones, las eliminaciones y las modificaciones aplicadas a archivos y directorios. Entre las opciones más populares de este sistema de #[i software] se encuentran: Git, Mercurial, SVN, entre otros #[i (Bitbucket], 2022). 
    p(data-aos="fade-left") En la tabla se puede ver algunas de sus características.

    .row
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span #[i Cuadro de características de software]
        .tabla-a.color-acento-contenido.mb-5 
          table
            caption Nota: adaptado de https://bitbucket.org/product/es/version-control-software#:~:text=%C2%BFQu%C3%A9%20es%20un%20sistema%20de,en%20un%20sistema%20de%20archivos.
            thead
              tr
                th #[i Software]
                th Arquitectura de red
                th Resolución de conflictos
                th Estado de desarrollo
            tbody.text-center
              tr
                td Git
                td Distribución
                td Fusión
                td Activo
              tr
                td Mercurial
                td Distribución
                td Fusión
                td Activo
              tr
                td SVN
                td Cliente-servidor
                td Fusión o bloqueo
                td Activo
    p.mb-5(data-aos="fade-left") Es importante contar con herramientas VCS para beneficiar los trabajos colaborativos en software en cualquier tipo de proyecto, que integren más de un desarrollador con sus archivos de código fuente. Los beneficios de utilizar VCS son: 

    .row.justify-content-center.mt-5(data-aos="flip-up")
      .tarjeta--container.row.mb-5
        .col-md.tarjeta.p-5(style="background-color: #E1F5D6")
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/tema2/17.svg', alt='Imagen decorativa')
          h2.text-center Resolución de conflictos
          p  durante el desarrollo o el ciclo de vida del proyecto impulsado por equipos es frecuente que los integrantes del equipo tengan la necesidad de realizar cambios en el mismo archivo del código fuente. La herramienta VCS monitoriza y ayuda a solucionar los conflictos entre los desarrolladores.

        .col-md.tarjeta.p-5(style="background-color: #FDFDE3")
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/tema2/18.svg', alt='Imagen decorativa')
          h2.text-center Revertir y deshacer los cambios en el código fuente
          p Una vez que la herramienta esté monitorizando el sistema de archivos en el código fuente, conserva el historial de cambios y el estado del código durante el historial del proyecto. Por esto, existe la forma de deshacer o revertir un proyecto de código fuente a un estado anterior. Si se detecta un fallo se puede volver a una versión anterior estable.

        .col-md.tarjeta.p-5(style="background-color: #DEE9F0")
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/tema2/19.svg', alt='Imagen decorativa')
          h2.text-center Copia de seguridad externa del código fuente
          p cuando se usa la herramienta VCS de forma colaborativa se crean instancias remotas que comparten los cambios entre desarrolladores. Estas instancias se pueden alojar de forma externa por un tercero y de confianza. Por esto, se vuelve una copia de seguridad externa, y en caso de pérdida de un equipo de computador, la instancia remota del VCS conserva la copia del código fuente.
            

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
