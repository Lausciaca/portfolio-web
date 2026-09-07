export interface Proyecto {
  slug: string;
  titulo: string;
  cliente: string;
  resumen: string;
  stack: string[];
  problema: string;
  solucion: string;
  impacto: string;
  metrica: string;
}

export const proyectos: Proyecto[] = [
  {
    slug: 'bolsa-empleo-municipal',
    titulo: 'Bolsa de Empleo Municipal',
    cliente: 'Municipio de Villa Constitución',
    resumen:
      'Plataforma municipal que digitalizó la búsqueda laboral. Más de 1800 postulantes gestionados sin filas ni papeles.',
    stack: ['Django', 'Python', 'PostgreSQL'],
    problema:
      'Los vecinos debían llevar el CV en papel y anotarse en persona. La gestión era manual, lenta y difícil de ordenar para el municipio.',
    solucion:
      'Desarrollé una plataforma web donde cada persona carga su CV una sola vez y se postula a las búsquedas con un clic. El municipio publica ofertas y administra todo desde un panel simple.',
    impacto:
      'Más de 1800 personas se postularon de forma online y ordenada. El municipio ahorra tiempo operativo y tiene toda la información centralizada.',
    metrica: '+1800 postulantes',
  },
  {
    slug: 'club-pescadores-gestion',
    titulo: 'Sistema de Gestión y Carnets',
    cliente: 'Club de Pescadores',
    resumen:
      'Digitalización de socios, carnets y control de acceso. Toda la información del club en un solo sistema.',
    stack: ['Laravel', 'PHP', 'MySQL'],
    problema:
      'Los registros de socios, carnets y grupos familiares se llevaban en planillas sueltas, con errores y sin control de acceso.',
    solucion:
      'Unifiqué todo en un sistema a medida: socios, carnets digitales, grupos familiares, pagos y reportes desde un panel administrativo.',
    impacto:
      'El club eliminó las planillas manuales, agilizó la atención al socio y cuenta con información confiable siempre disponible.',
    metrica: 'Gestión unificada',
  },
  {
    slug: 'sistema-turnos-ifvc',
    titulo: 'Sistema de Turnos IFVC',
    cliente: 'Instituto de Formación de Villa Constitución',
    resumen:
      'Sistema de turnos online para la institución. Reservas ordenadas y sin gestión manual por teléfono.',
    stack: ['Laravel', 'React', 'MySQL'],
    problema:
      'La asignación de turnos se hacía de forma manual, con llamadas, mensajes sueltos y superposiciones de horarios.',
    solucion:
      'Construí un sistema de turnos con agenda disponible online y panel administrativo para gestionar horarios, cupos y asistencias.',
    impacto:
      'Se eliminaron los choques de horarios y el trabajo manual repetitivo. La institución atiende de forma ordenada y previsible.',
    metrica: 'Turnos sin fricción',
  },
  {
    slug: 'pagina-institucional-ifvc',
    titulo: 'Página Institucional IFVC',
    cliente: 'Instituto de Formación de Villa Constitución',
    resumen:
      'Plataforma pública institucional. Información clara de cursos y contacto directo que convierte visitas en alumnos.',
    stack: ['React', 'Node.js'],
    problema:
      'El instituto necesitaba dar a conocer sus cursos y recibir consultas todos los días desde un canal propio y confiable.',
    solucion:
      'Diseñé una página institucional clara, rápida y pensada para celular, con información de cursos y contacto directo.',
    impacto:
      'El instituto recibe visitas diarias de forma constante y convierte ese tráfico en consultas e inscripciones.',
    metrica: 'Tráfico diario constante',
  },
  {
    slug: 'sistema-gestion-vadhora',
    titulo: 'Sistema de Gestión Vadhora',
    cliente: 'Estudio profesional Vadhora',
    resumen:
      'Sistema de administración interna para el estudio. Clientes, trabajos y documentos organizados en un solo lugar.',
    stack: ['Laravel', 'PHP', 'MySQL'],
    problema:
      'La administración del estudio dependía de archivos dispersos y seguimiento manual de clientes y trabajos.',
    solucion:
      'Desarrollé un sistema de gestión a medida con clientes, trabajos, documentos y reportes centralizados en una oficina digital.',
    impacto:
      'El estudio trabaja con información ordenada y disponible 24/7, con menos errores y mejor atención al cliente.',
    metrica: 'Oficina digital 24/7',
  },
  {
    slug: 'sistema-prode-copa',
    titulo: 'Sistema Prode CoPA',
    cliente: 'Colegio de Profesionales de Agrimensura (CoPA)',
    resumen:
      'Plataforma interactiva de pronósticos para el Mundial 2026. Rankings en vivo y gestión automática de premios.',
    stack: ['Laravel', 'React', 'MySQL'],
    problema:
      'El colegio buscaba una actividad para unir a los matriculados durante el Mundial 2026, con premios y participación simple.',
    solucion:
      'Desarrollé un sistema de Prode donde cada profesional carga sus pronósticos, suma puntos y participa por premios de forma automática.',
    impacto:
      'Alta participación de los colegiados con rankings en vivo y entrega de premios sin carga administrativa manual.',
    metrica: 'Mundial 2026',
  },
];
