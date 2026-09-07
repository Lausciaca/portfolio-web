// Datos de contacto centralizados + copy de ventas
export const site = {
  nombre: 'Laureano Sciacaluga',
  rol: 'Desarrollador full-stack',
  heroHeadline: 'Sistemas a medida que ordenan tu operación y te hacen vender más.',
  heroHeadlineAccent: 'ordenan tu operación',
  heroSubtitle:
    'Construyo plataformas web, paneles administrativos y herramientas digitales para municipios, clubes, institutos y estudios profesionales. Sin plantillas genéricas: software diseñado alrededor de tu proceso real.',
  heroMicrocopy:
    'Villa Constitución, Santa Fe · Trabajo para todo el país · Respuesta en 24 hs',
  email: 'laureanosciacaluga@gmail.com',
  linkedin: 'https://www.linkedin.com/in/laureanosciacaluga/',
  whatsappNumero: '5493364006452',
  whatsappLink:
    'https://wa.me/5493364006452?text=Hola%20Laureano%2C%20quiero%20un%20presupuesto%20para%20un%20sistema',
  ubicacion: 'Villa Constitución, Santa Fe, Argentina',
  // Access Key de Web3Forms para el formulario. Pegá tu key real acá.
  // Vacía = el formulario deriva a WhatsApp (no se rompe).
  web3formsKey: 'b93c5c63-0d60-41b7-9430-c45c9e8a5b74',
};

export interface Servicio {
  numero: string;
  titulo: string;
  descripcion: string;
}

export const servicios: Servicio[] = [
  {
    numero: '01',
    titulo: 'Sistemas de gestión internos',
    descripcion:
      'Paneles administrativos a medida para ordenar socios, turnos, clientes y documentos. Menos planillas, menos errores, todo en un solo lugar.',
  },
  {
    numero: '02',
    titulo: 'Páginas institucionales y publicitarias',
    descripcion:
      'Sitios rápidos y claros, pensados para el celular, que convierten visitas en consultas, alumnos o clientes.',
  },
];

export interface Cliente {
  nombre: string;
  logo: string;
  slug: string;
  chipOscuro?: boolean;
  /** Logos cuadrados/circulares: se renderizan más altos para igualar peso visual */
  alto?: boolean;
}

export const clientes: Cliente[] = [
  {
    nombre: 'Municipio de Villa Constitución',
    logo: '/logo-mvc.png',
    slug: 'bolsa-empleo-municipal',
    alto: true,
  },
  {
    nombre: 'Club de Pescadores',
    logo: '/logo-cpvc.png',
    slug: 'club-pescadores-gestion',
    alto: true,
  },
  {
    nombre: 'Instituto de Formación de Villa Constitución',
    logo: '/logo-ifvc.png',
    slug: 'pagina-institucional-ifvc',
  },
  {
    nombre: 'Vadhora',
    logo: '/logo-vadhora.png',
    slug: 'sistema-gestion-vadhora',
  },
  {
    nombre: 'Colegio de Profesionales de Agrimensura',
    logo: '/logo-copa.png',
    slug: 'sistema-prode-copa',
    chipOscuro: true,
  },
];
