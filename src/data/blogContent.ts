import { FeedItem } from '../types';

export const feedItemsData: FeedItem[] = [
  {
    id: 'feed-1',
    type: 'violence',
    tag: 'URGENTE // EN VIVO',
    source: 'Red de Monitoreo Urbano @alerta_continua',
    timeAgo: 'hace 4 min',
    headline: 'Nuevo enfrentamiento armado registrado en el sector periférico 4',
    bodyText: 'Fuerzas de seguridad acordonan 6 manzanas tras intercambios de disparos. Se reportan múltiples detonaciones continuas. Vecinos transmiten desde sus ventanas.',
    censored: true,
    censoredLabel: '[CONTENIDO CENSURADO // RESTRINGIDO POR PROTOCOLO JUDICIAL]',
    imageSrc: '/src/assets/images/feed_police_perimeter_1790905676177.jpg',
    censorLevel: 'heavy',
    likes: 1248,
    commentsCount: 324,
    shares: 871,
    comments: [
      { user: '@carlos_m', text: 'Esto ya pasa todas las semanas... nada cambia.', time: '2m' },
      { user: '@valeria99', text: '¿Alguien sabe si el metro de esa línea sigue abierto?', time: '1m' },
      { user: '@observador_x', text: 'Qué horror, pero ya ni miedo da, es la rutina.', time: 'ahora' }
    ]
  },
  {
    id: 'feed-2',
    type: 'banal',
    tag: 'CULTURA & OCIO',
    source: 'Agenda Metropolitana @ciudad_viva',
    timeAgo: 'hace 11 min',
    headline: 'Festival universitario de primavera comienza este viernes con entrada libre',
    bodyText: 'Más de 40 bandas independientes, feria gastronómica artesanal y talleres al aire libre. Revisa los horarios oficiales y ven con tus amigos.',
    censored: false,
    likes: 438,
    commentsCount: 21,
    shares: 49,
    comments: [
      { user: '@sofia_art', text: '¿A qué hora toca la banda principal?', time: '5m' },
      { user: '@danigomez', text: '¡Allá nos vemos!', time: '3m' }
    ]
  },
  {
    id: 'feed-3',
    type: 'meme',
    tag: 'TENDENCIA VIRAL',
    source: 'Humor Postmoderno @existencial_memes',
    timeAgo: 'hace 18 min',
    headline: 'POV: Cuando tu cerebro procesa una catástrofe global y tu entrega de las 4 PM en el mismo minuto',
    bodyText: 'Simplemente sonríe y sigue scrolleando hasta que se te olvide el colapso civilizatorio. Video en bucle (0:07s).',
    censored: false,
    likes: 14205,
    commentsCount: 1840,
    shares: 6120,
    comments: [
      { user: '@lucia_k', text: 'Literalmente yo viendo noticias mientras como cereal jajaja', time: '12m' },
      { user: '@marcos_r', text: 'El meme cura la ansiedad hasta el próximo post', time: '8m' }
    ]
  },
  {
    id: 'feed-4',
    type: 'violence',
    tag: 'ÚLTIMA HORA // TRANSMISIÓN INTERRUMPIDA',
    source: 'Archivo Forense Digital @registro_cero',
    timeAgo: 'hace 26 min',
    headline: 'Hallazgo en predio baldío: ███████████████████████████',
    bodyText: 'Peritos forenses retiran evidencias no divulgadas. Testigos afirman haber visto vehículos oficiales desde la madrugada. La zona permanece en silencio sepulcral.',
    censored: true,
    censoredLabel: '[IMAGEN RETIRADA // SENSIBILIDAD EXTREMA]',
    imageSrc: '/src/assets/images/feed_forensic_cordon_1790905691157.jpg',
    censorLevel: 'heavy',
    likes: 3821,
    commentsCount: 942,
    shares: 1403,
    comments: [
      { user: '@anonimo_94', text: 'Censuran esto pero dejan circular videos peores.', time: '19m' },
      { user: '@periodismo_indep', text: 'Exigimos el esclarecimiento inmediato de los hechos.', time: '14m' },
      { user: '@esteban_v', text: 'Un número más para las estadísticas anuales.', time: '4m' }
    ]
  },
  {
    id: 'feed-5',
    type: 'ad',
    tag: 'PUBLICIDAD PATROCINADA',
    source: 'GlowSkin Lab @skincare_future',
    timeAgo: 'Promocionado',
    headline: 'Sérum Rejuvenecedor con Niacinamida al 10% — Envío gratis hoy',
    bodyText: 'Revitaliza tu piel del estrés ambiental y la luz azul de las pantallas. 30% de descuento usando el código NOSTRESS.',
    censored: false,
    likes: 890,
    commentsCount: 15,
    shares: 22,
    comments: [
      { user: '@beauty_clara', text: '¿Funciona para piel mixta?', time: '30m' }
    ]
  },
  {
    id: 'feed-6',
    type: 'tragedy',
    tag: 'DESAPARICIÓN // SERVICIO SOCIAL',
    source: 'Colectivo Búsqueda y Memoria @rastreadoras_unidas',
    timeAgo: 'hace 42 min',
    headline: 'Buscamos a Mariana R. (23 años) — Vista por última vez cerca del paradero norte',
    bodyText: 'Vestía pantalón oscuro y chaqueta gris. Cualquier dato puede comunicarse anónimamente al enlace verificado. Ayúdanos compartiendo.',
    censored: true,
    censoredLabel: '[FOTOGRAFÍA SUJETA A VERIFICACIÓN FORENSE]',
    imageSrc: '/src/assets/images/feed_missing_bulletin_1790905702690.jpg',
    censorLevel: 'medium',
    likes: 9540,
    commentsCount: 1102,
    shares: 7200,
    comments: [
      { user: '@esperanza_l', text: 'Compartido en 5 grupos. Que vuelva con bien 🙏', time: '35m' },
      { user: '@jorge_t', text: 'Qué angustia vivir en esta ciudad.', time: '20m' }
    ]
  }
];

export const progressiveWarningsPool = [
  '⚠ CONTENIDO SENSIBLE',
  '⚠ ADVERTENCIA DE CRITERIO',
  '⚠ REGISTRO NO EDITADO',
  '⚠ SE RECOMIENDA DISCRECIÓN',
  '⚠ ¿DESEA CONTINUAR?',
  '⚠ HA SIDO ADVERTIDO',
  '⚠ PROTOCOLO DE SATURACIÓN ACTIVO',
  '⚠ RESTRICCIÓN DE AUDIENCIA',
  '⚠ UMBRAL DE SENSIBILIDAD COMPROMETIDO',
  '⚠ IMAGEN CENSURADA POR NORMATIVA',
  '⚠ AVISO REPETIDO: ¿ESTÁ PRESTANDO ATENCIÓN?',
  '⚠ ANOMALÍA COGNITIVA DETECTADA',
  '⚠ CONSUMO ININTERRUMPIDO REGISTRADO',
  '⚠ NIVEL DE HABITUACIÓN: CRÍTICO',
  '⚠ REACCIÓN FISIOLÓGICA DESCENDENTE'
];
