export default {
  global: {
    componenteFormativo:
      'Implementación de servicios tecnológicos, según las estrategias de gobierno, riesgo y cumplimiento',
    descripcionCurso:
      'Conocer las herramientas para realizar los estudios de viabilidad tecnológica es fundamental para la evaluación e implementación de proyectos tecnológicos, que se encaminen a realizar buenas prácticas de productos y servicios de tecnologías de la información, aplicando el modelo de referencia ITIL.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Estudio de viabilidad tecnológica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Técnicas de evaluación de proyectos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Prácticas de gestión de servicios ITIL',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Planeación de la implementación',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Implementación del <i>software</i>',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Técnicas de evaluación de proyectos',
      referencia:
        'AulaDeEconomia. (2021). Técnicas de evaluación de proyectos (TIR, VAN) [video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=gmttXoLfS1c&ab_channel=AulaDeEconomia',
    },
    {
      tema: 'Prácticas de gestión de servicios ITIL ',
      referencia:
        'ManageEngine LATAM. (2021). Webinar: Mejores prácticas para la gestión de servicios (ITSM) en 2021 [video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=G0MFhXNf4jA&t=769s&ab_channel=ManageEngineLATAM',
    },
  ],
  glosario: [
    {
      termino: 'Práctica',
      significado: 'Ejecución de una actividad de forma continua.',
    },
    {
      termino: '<em>Stakeholders</em>',
      significado:
        'Término tomado del inglés que se refiere al público de interés para una empresa.',
    },
    {
      termino: 'Técnica',
      significado:
        'Destreza o habilidad que utiliza recursos para el aprendizaje o experiencia.',
    },
    {
      termino: 'Viabilidad',
      significado:
        'Conducción de un buen camino, predice el éxito o el fracaso.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asana. (2022). ¿Qué es un plan de implementación? Descubre cómo crear uno en tan solo 6 pasos. Asana.',
      link: 'https://asana.com/es/resources/implementation-plan',
    },
    {
      referencia:
        'AulaDeEconomia. (2021). Técnicas de evaluación de proyectos (TIR, VAN) [video]. YouTube.',
      link:
        'https://www.youtube.com/watch?v=gmttXoLfS1c&ab_channel=AulaDeEconomia',
    },
    {
      referencia:
        'Bitbucket. (2022). Software de control de versiones: descripción general. Bitbucket.',
      link: 'https://bitbucket.org/product/es/version-control-software',
    },
    {
      referencia:
        'Docunecta. (2022). Control de versiones de documentos: sistema y software. Docunecta.',
      link: 'https://www.docunecta.com/blog/control-de-versiones-de-documentos',
    },
    {
      referencia:
        'Finanzas para dummies. (2020). VAN & TIR (qué son, para qué sirven, cómo se usan, ejemplos) [video]. YouTube.',
      link:
        'https://www.youtube.com/watch?v=2pCjSRHYHaM&ab_channel=FinanzasParaDummies',
    },
    {
      referencia:
        'InGenio Learning. (s.f.). ¿Qué es la IT governance en ITIL V4? InGenio Learning.',
      link: 'https://ingenio.edu.pe/blog/que-es-la-it-governance-en-itil-v4',
    },
    {
      referencia: 'ITIL. (s.f.). Componentes principales de ITlL4. ITIL.',
      link: 'https://www.itil.com.mx/Componentes/#SVS',
    },
    {
      referencia:
        'ITIL. (s.f.). ITIL 4 ¡Los nuevos conceptos de ITIL están aquí! ITIL.',
      link: 'https://www.itil.com.mx/#Principios-Guia',
    },
    {
      referencia:
        'ManageEngine. (2022). Implementación de software con Endpoint Central. ManageEngine.',
      link:
        'https://www.manageengine.com/latam/desktop-central/implementacion-de-software.html?network=g&device=c&keyword=implementacion%20de%20software&campaignid=9501449910&creative=421129816452&matchtype=e&adposition=&placement=&adgroup=105158100228&targetid=aud-418599509473:kwd-339487873339&gclid=Cj0KCQjwteOaBhDuARIsADBqRejsFMXUvowpncoKjGZcHvYSMj_roLOCpCQ9prJRTYqI61BOZk-FQbUaAqIfEALw_wcB',
    },
    {
      referencia:
        'Robinson, I. (2021). 7 Principios guía de ITIL para llevar a tu empresa al siguiente nivel. Icorp.',
      link:
        'http://www.icorp.com.mx/blog/7-principios-guia-de-itil-para-llevar-a-tu-empresa-al-siguiente-nivel/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Luis Eyder Ortiz',
          cargo: 'Experto Temático',
          centro:
            'Regional Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'María Fernanda Chacón Castro',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Guillermo Zuluaga Saavedra',
          cargo: 'Expero Temático',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Humberto Arias Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Yobani Penagos Mora',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Producctor y Animador Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producctor y Animador Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Producctor y Animador Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
