export type Choice = { id: string; text: string; score: number; feedback: string; reflection: string };
export type Scene = { id: string; label: string; title: string; story: string; choices: Choice[] };

export const experienceScenes: Scene[] = [
  {
    id: 'video', label: 'Primer relato', title: 'Un video en el feed',
    story: 'Mientras revisas tus redes sociales, aparece un video de una agresión en la calle. Muchas personas lo están compartiendo y los comentarios convierten lo ocurrido en un espectáculo.',
    choices: [
      { id: 'a', text: 'Lo veo completo por curiosidad.', score: -1, feedback: 'La curiosidad es comprensible, pero detenerse a pensar en la exposición y en las personas afectadas puede cambiar la forma de relacionarnos con este contenido.', reflection: '¿Qué información necesitas realmente y qué puede implicar seguir viendo el video?' },
      { id: 'b', text: 'Lo comparto para que otros también lo vean.', score: -2, feedback: 'Compartir puede ampliar el daño y convertir un hecho doloroso en circulación sin contexto. Vale la pena considerar la privacidad y la dignidad de las personas involucradas.', reflection: '¿La difusión aporta contexto, cuidado o solo aumenta la exposición?' },
      { id: 'c', text: 'Evito difundirlo y lo reporto.', score: 2, feedback: 'Evitar amplificar el contenido y usar las herramientas de reporte puede ayudar a no convertir el sufrimiento ajeno en espectáculo.', reflection: '¿Cómo puedes actuar sin perder de vista a quienes aparecen en el contenido?' }
    ]
  },
  {
    id: 'chat', label: 'Segundo relato', title: 'Una imagen en el chat',
    story: 'Un amigo envía a un grupo una imagen gráfica de un accidente. Algunos integrantes reaccionan con burlas y otros la reenvían.',
    choices: [
      { id: 'a', text: 'Abro la imagen para ver qué pasó.', score: -1, feedback: 'Antes de abrir, una pausa puede ayudar a reconocer que detrás de una imagen hay personas y posibles consecuencias para ellas y para ti.', reflection: '¿Qué cambia cuando el contenido deja de ser solo algo para mirar?' },
      { id: 'b', text: 'La reenvío a otro grupo.', score: -2, feedback: 'Reenviar una imagen sensible puede extender una exposición que nadie involucrado consintió. El contexto y el cuidado importan.', reflection: '¿Quiénes podrían verse afectados por una nueva difusión?' },
      { id: 'c', text: 'Pido que no la compartan y explico por qué.', score: 2, feedback: 'Poner un límite abre espacio para recordar el consentimiento, el respeto y la dignidad de las personas afectadas.', reflection: '¿Cómo podrías plantearlo sin convertir la conversación en un juicio?' }
    ]
  },
  {
    id: 'viral', label: 'Tercer relato', title: 'La violencia como entretenimiento',
    story: 'Una publicación viral muestra una agresión. Los comentarios se burlan de la víctima y acumulan reacciones.',
    choices: [
      { id: 'a', text: 'Me río y dejo un comentario.', score: -2, feedback: 'Sumarse a la burla puede normalizar que el sufrimiento sea entretenimiento y reforzar una dinámica colectiva de daño.', reflection: '¿Qué efecto tiene una reacción individual dentro de una conversación masiva?' },
      { id: 'b', text: 'Me sumo a las reacciones de los demás.', score: -1, feedback: 'La presión social puede hacer que una reacción parezca menor. Aun así, cada interacción participa en la visibilidad de la publicación.', reflection: '¿Qué te invita a hacer la reacción de otras personas?' },
      { id: 'c', text: 'Cuestiono la publicación y evito contribuir a su difusión.', score: 2, feedback: 'Cuestionar la dinámica sin amplificarla es una forma de interrumpir la banalización y mantener una mirada crítica.', reflection: '¿Cómo expresar desacuerdo cuidando también a la persona afectada?' }
    ]
  },
  {
    id: 'algorithm', label: 'Cuarto relato', title: 'Lo que vuelve a aparecer',
    story: 'Después de interactuar con varias publicaciones violentas, la plataforma empieza a recomendarte contenidos similares.',
    choices: [
      { id: 'a', text: 'Sigo viendo las recomendaciones.', score: -1, feedback: 'Las plataformas pueden tomar las interacciones como señales. Seguir mirando puede hacer más frecuente este tipo de contenido, aunque cada plataforma funciona de forma distinta.', reflection: '¿Qué señales estás dando con tu tiempo y tus interacciones?' },
      { id: 'b', text: 'Interactúo para ver más contenido.', score: -2, feedback: 'Interactuar suele reforzar la visibilidad de contenidos similares. Ajustar los hábitos de consumo puede devolver parte del control sobre el feed.', reflection: '¿Qué alternativas podrían cambiar la clase de contenido que recibes?' },
      { id: 'c', text: 'Ajusto mis preferencias y dejo de interactuar con ese contenido.', score: 2, feedback: 'Usar preferencias, silenciamientos y reportes puede ser una respuesta práctica para cuidar lo que aparece en el feed.', reflection: '¿Qué herramienta concreta podrías configurar hoy?' }
    ]
  },
  {
    id: 'indifference', label: 'Quinto relato', title: 'Cuando algo deja de sorprender',
    story: 'Después de encontrarte repetidamente con imágenes de agresiones y sufrimiento, notas que algunas publicaciones ya no te generan la misma reacción que antes.',
    choices: [
      { id: 'a', text: 'Sigo consumiendo contenido porque ya me parece normal.', score: -2, feedback: 'La exposición repetida puede influir en cómo interpretamos lo que vemos, aunque no afecta a todas las personas igual ni es un diagnóstico.', reflection: '¿Qué pausa o límite podría ayudarte a recuperar una mirada más consciente?' },
      { id: 'b', text: 'Pienso que es parte de la realidad y que no puedo hacer nada.', score: -1, feedback: 'Reconocer una realidad difícil no implica que no existan acciones posibles: informarse, no difundir y cuidar el propio bienestar también cuentan.', reflection: '¿Cuál sería una acción pequeña y realista que sí está a tu alcance?' },
      { id: 'c', text: 'Reflexiono sobre mis hábitos y decido cambiar mi forma de consumir contenido.', score: 2, feedback: 'Reflexionar sobre los hábitos es una forma de recuperar agencia. Cuidar lo que consumes no significa ignorar la realidad.', reflection: '¿Qué cambio quieres mantener en tu relación cotidiana con las redes?' }
    ]
  }
];

export function emotionalState(score: number) { return score >= 6 ? 0 : score >= 2 ? 1 : score >= -2 ? 2 : score >= -6 ? 3 : 4; }
