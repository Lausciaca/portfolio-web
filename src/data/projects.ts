export interface Proyecto {
  id: string;
  titulo: string;
  cliente: string;
  problema: string;
  solucion: string;
  resultado: string;
  resultadoDestacado: string;
  stack: string[];
  imagen?: string;
  /** cover = relleno total, contain = imagen completa (default) */
  ajuste?: 'cover' | 'contain';
  /** clase de aspecto del contenedor, ej: 'aspect-video' */
  aspecto?: string;
}

// Orden: destacado con imagen primero, luego con imagen, luego solo texto.
export const proyectos: Proyecto[] = [
  {
    id: 'saas-agrimensores',
    titulo: 'Sistema para Estudios de Agrimensura (SaaS)',
    cliente: 'Estudios profesionales de agrimensura',
    problema: 'Cada estudio guardaba planos y documentos en carpetas dispersas, difícil de compartir.',
    solucion:
      'Creé una plataforma online donde cada estudio tiene su espacio privado para organizar documentos, clientes y trabajos.',
    resultado:
      'Oficina digital disponible 24/7: menos papeles perdidos, más orden y mejor atención al cliente.',
    resultadoDestacado: 'Tu estudio ordenado y online 24/7',
    stack: ['Laravel', 'PHP', 'React'],
    imagen: '/images/proyecto-agrimensores.png',
    ajuste: 'cover',
    aspecto: 'aspect-[1896/902]',
  },
  {
    id: 'gestion-clubes',
    titulo: 'Sistema de Gestión de Clubes',
    cliente: 'Clubes deportivos y náuticos',
    problema: 'Socios, carnets, grupos familiares y embarcaciones se llevaban en planillas sueltas.',
    solucion:
      'Unificé todo en un solo sistema: socios, carnets digitales, grupos familiares, embarcaciones, pagos y reportes.',
    resultado:
      'El club trabaja más rápido, sin errores de planillas y con la información siempre a mano.',
    resultadoDestacado: 'Socios, carnets y embarcaciones en un lugar',
    stack: ['Laravel', 'PHP'],
    imagen: '/images/proyecto-clubes.jpg',
  },
  {
    id: 'ifvc',
    titulo: 'Sitio Web IFVC',
    cliente: 'Instituto de Formación de Villa Constitución',
    problema: 'El instituto necesitaba dar a conocer sus cursos y recibir consultas todos los días.',
    solucion:
      'Diseñé una página publicitaria clara, rápida y pensada para el celular, con información de cursos y contacto directo.',
    resultado:
      'Recibe un gran caudal de visitas diariamente y convierte esas visitas en alumnos e inscripciones.',
    resultadoDestacado: 'Alto tráfico diario de futuros alumnos',
    stack: ['React'],
    imagen: '/images/proyecto-ifvc.jpg',
  },
  {
    id: 'bolsa-empleo',
    titulo: 'Bolsa de Empleo Municipal',
    cliente: 'Municipio',
    problema: 'Los vecinos tenían que llevar el CV en papel y anotarse en persona.',
    solucion:
      'Creé una plataforma online donde cada persona carga su CV una sola vez y se postula a las búsquedas con un clic. El municipio publica ofertas y gestiona todo desde un panel simple.',
    resultado:
      'Más de 1800 personas ya se postularon sin filas ni papeles. El municipio ahorra tiempo y tiene todo ordenado.',
    resultadoDestacado: '+1800 usuarios que postularon',
    stack: ['Django', 'Python'],
  },
  {
    id: 'prode-copa',
    titulo: 'Prode CoPA - Mundial 2026',
    cliente: 'Colegio de Profesionales de Agrimensura (CoPA)',
    problema: 'Querían una actividad para unir a los matriculados durante el Mundial, con premios.',
    solucion:
      'Desarrollé un sistema de Prode donde cada profesional carga sus pronósticos, suma puntos y participa por premios, todo automático.',
    resultado:
      'Participación masiva de los colegiados, con rankings en vivo y entrega de premios sin complicaciones.',
    resultadoDestacado: 'Sistema con premios para el Mundial 2026',
    stack: ['Laravel', 'PHP'],
  },
];
