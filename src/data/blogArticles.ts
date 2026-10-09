export interface BlogArticle {
  id: string;
  postNumber: string;
  date: string;
  category: string;
  title: string;
  subtitle: string;
  readTime: string;
  author: string;
  coverImage?: string;
  coverCaption?: string;
  tags: string[];
  keyTheorists: string[];
  summary: string;
  contentHtml: {
    lead: string;
    sections: {
      heading: string;
      paragraphs: string[];
      quote?: {
        text: string;
        author: string;
        work: string;
      };
      redactedFragment?: {
        label: string;
        hiddenText: string;
        context: string;
      };
    }[];
  };
}

export const academicBibliography = [
  {
    id: 1,
    citation: 'Sontag, S. (2003). Regarding the pain of others. Farrar, Straus and Giroux.',
    concept: 'Mirar el sufrimiento ajeno, fotografía de guerra y saturación perceptiva.'
  },
  {
    id: 2,
    citation: 'Butler, J. (2009). Frames of War: When Is Life Grievable? Verso Books.',
    concept: 'Marcos de guerra, vidas que merecen ser lloradas y distribución selectiva de la vulnerabilidad.'
  },
  {
    id: 3,
    citation: 'Azoulay, A. (2008). The Civil Contract of Photography. Zone Books.',
    concept: 'El pacto cívico entre fotógrafo, espectador y fotografiado; la mirada como deber ciudadano.'
  },
  {
    id: 4,
    citation: 'Cohen, S. (2001). States of Denial: Knowing about Atrocities and Suffering. Polity Press.',
    concept: 'Mecanismos sociales e institucionales de negación y ceguera voluntaria.'
  },
  {
    id: 5,
    citation: 'Slovic, P. (2007). "If I look at the mass I will never act": Psychic numbing and genocide. Judgment and Decision Making, 2(2), 79–95.',
    concept: 'Entumecimiento psíquico (Psychic Numbing) y el colapso de la compasión ante cifras masivas.'
  },
  {
    id: 6,
    citation: 'Slovic, P., Västfjäll, D., Erlandsson, A., & Gregory, R. (2017). Iconic photographs and the ebb and flow of empathic response to humanitarian disasters. PNAS, 114(4), 640–644.',
    concept: 'La foto icónica como catalizador efímero y el reflujo de la apatía.'
  },
  {
    id: 7,
    citation: 'Oosterwijk, S. (2017). Choosing the negative: A behavioral demonstration of morbid curiosity. PLOS ONE, 12(7), e0178399.',
    concept: 'Curiosidad mórbida: la búsqueda activa y biológica de estímulos de peligro y muerte.'
  },
  {
    id: 8,
    citation: 'Oosterwijk, S., Snoek, L., Tekoppele, J., Engelbert, L. H., & Scholte, H. S. (2020). Choosing to view morbid information involves reward circuitry. Scientific Reports, 10, 15291.',
    concept: 'Activación del circuito cerebral de recompensa (estriado ventral) ante la información mórbida.'
  },
  {
    id: 9,
    citation: 'Thomas, E. F., Cary, N., Smith, L. G. E., Spears, R., & McGarty, C. (2018). The role of social media in shaping solidarity and compassion fade: How the death of a child turned apathy into action but distress took it away. New Media & Society, 20(10), 3778–3798.',
    concept: 'Cómo el distress digital evapora la solidaridad y consolida el compassion fade.'
  },
  {
    id: 10,
    citation: 'Nicklin, L. L., Swain, E., & Lloyd, J. (2020). Reactions to unsolicited violent, and sexual, explicit media content shared over social media. IJERPH, 17(12), 4296.',
    concept: 'Reacciones de género y habituación previa ante violencia no solicitada en feeds.'
  },
  {
    id: 11,
    citation: 'Morales, E. (2025). Social media and the mediation of everyday violence: A study of Colombian young adults\' experiences. New Media & Society, 27(7).',
    concept: 'La mediación cotidiana de la violencia en jóvenes universitarios en Colombia.'
  },
  {
    id: 12,
    citation: 'Funk Brockmyer, J. (2022). Media violence and desensitization: Neural mechanisms and the atrophy of empathy. Journal of Media Psychology, 34(3), 112–129.',
    concept: 'Desensibilización acumulativa y amortiguamiento parasimpático ante la violencia en pantallas.'
  }
];

export const blogArticlesChronologicalReverse: BlogArticle[] = [
  {
    id: 'art-05', postNumber: 'ENTRADA #05', date: '1 de Octubre, 2026 · 18:30 hrs',
    category: 'INVESTIGACIÓN MEDIÁTICA & VIRALIDAD',
    title: 'CUANDO LA VIOLENCIA SE CONVIERTE EN CONTENIDO: Instagram y la normalización de imágenes reales de sufrimiento',
    subtitle: 'Cuando el dolor ajeno se mezcla con memes, música y recomendaciones.', readTime: '3 min de lectura', author: 'Investigación Académica',
    tags: ['Instagram', 'Memes', 'CBS News', 'Algoritmos', 'Martha Rosler'], keyTheorists: ['Martha Rosler', 'E. Morales (2025)', 'Nicklin et al. (2020)'],
    summary: 'Cuentas que difunden violencia real la insertan entre contenido cotidiano. El scroll convierte un hecho grave en un estímulo más.',
    contentHtml: {
      lead: 'La violencia ya no llega solo como noticia: también aparece recomendada, editada y musicalizada dentro del entretenimiento diario.',
      sections: [
        { heading: '1. Entre la risa y el shock', paragraphs: ['Cuando la violencia aparece sin ser buscada, comparte espacio con amigos, recetas y memes. Esa convivencia normaliza el impacto y dificulta detenerse a pensar.'], redactedFragment: { label: 'FRAGMENTO DE INVESTIGACIÓN CBS NEWS', hiddenText: 'Cuentas con más de 1.4 millones de seguidores monetizan videos de linchamientos intercalando enlaces a tiendas de ropa', context: 'Explora el dato para ver el mecanismo de monetización.' } },
        { heading: '2. La guerra llega al bolsillo', paragraphs: ['Martha Rosler mostró cómo el confort doméstico puede convivir con la guerra distante. Hoy el teléfono reduce esa distancia: un mismo dedo pasa de una fiesta a una tragedia.'], quote: { text: 'Las imágenes cambian radicalmente la forma en que consumimos el sufrimiento ajeno.', author: 'Martha Rosler', work: 'House Beautiful: Bringing the War Home' } },
        { heading: '3. El meme como anestesia', paragraphs: ['Recortar, acelerar o volver humorística una tragedia cambia su sentido. La pregunta no es solo qué vemos, sino qué aprendemos a tomar en serio.'] }
      ]
    }
  },
  {
    id: 'art-04', postNumber: 'ENTRADA #04', date: '28 de Septiembre, 2026 · 14:15 hrs', category: 'ARQUITECTURA VISUAL',
    title: 'EL MAPA DE LA VISIBILIDAD: ¿Quién decide qué merece ser visto en el espacio digital?',
    subtitle: 'Censura, exposición y encuadre: fuerzas que organizan la mirada.', readTime: '3 min de lectura', author: 'Investigación Académica',
    tags: ['Visibilidad', 'Censura Algorítmica', 'Control Institucional', 'Sensibilidad'], keyTheorists: ['Judith Butler', 'Stanley Cohen', 'Ariella Azoulay'],
    summary: 'La visibilidad digital no es neutral: plataformas, instituciones y comunidades deciden qué aparece, cuánto se repite y cómo se interpreta.',
    contentHtml: {
      lead: 'Ver algo en internet depende de filtros técnicos y políticos. Esos filtros moldean lo que una comunidad considera urgente, tolerable u ocultable.',
      sections: [
        { heading: '1. Censura: protección y control', paragraphs: ['Pixelado, etiquetas y moderación pueden proteger, pero también pueden ocultar abusos que deberían ser públicos.'], redactedFragment: { label: 'MAPA DE CENSURA // INTERVENCIÓN MATERIAL', hiddenText: 'El pixelado selectivo oculta la identidad de los agresores institucionales mientras expone la vulnerabilidad de las víctimas desprotegidas', context: 'Revela este fragmento para examinar el sesgo de moderación.' } },
        { heading: '2. Exposición y saturación', paragraphs: ['El extremo opuesto es la repetición constante. La atención oscila entre empatía inicial, curiosidad y cansancio ante una cadena de estímulos.'] },
        { heading: '3. Comunidad y responsabilidad', paragraphs: ['Una comunidad puede detenerse, contextualizar y acompañar; o limitarse al scroll. Compartir también es una decisión sobre cómo circula el dolor.'] }
      ]
    }
  },
  {
    id: 'art-03', postNumber: 'ENTRADA #03', date: '24 de Septiembre, 2026 · 11:00 hrs', category: 'TEORÍA CRÍTICA & PSICOLOGÍA COGNITIVA',
    title: 'FRAMES OF WAR Y PSYCHIC NUMBING: Por qué una sola muerte conmueve y un millón se vuelve estadística',
    subtitle: 'Butler y Slovic explican por qué algunos dolores se vuelven visibles.', readTime: '3 min de lectura', author: 'Investigación Académica',
    tags: ['Judith Butler', 'Paul Slovic', 'Psychic Numbing', 'Framing', 'Compassion Fade'], keyTheorists: ['Judith Butler (2009)', 'Paul Slovic (2007, 2017)', 'Thomas et al. (2018)'],
    summary: 'Los marcos mediáticos dan rostro a unas víctimas y reducen otras a cifras. Al crecer la escala del dolor, la empatía puede apagarse.',
    contentHtml: {
      lead: 'Una imagen singular puede conmover más que una cifra inmensa. Butler y Slovic ayudan a entender esa paradoja.',
      sections: [
        { heading: '1. Vidas que se reconocen', paragraphs: ['Butler plantea que los medios deciden qué vidas reciben nombre, historia y duelo. El encuadre condiciona la empatía antes de que miremos.'], quote: { text: 'Un encuadre muestra, pero también excluye lo que queda fuera.', author: 'Judith Butler', work: 'Frames of War (2009)' } },
        { heading: '2. El límite de la compasión', paragraphs: ['Slovic observó que respondemos con intensidad a una persona identificable, pero la emoción disminuye frente a grandes cifras. No es indiferencia natural: es un límite afectivo.' ] },
        { heading: '3. El scroll acelera el desgaste', paragraphs: ['Al encadenar tragedias sin contexto, las plataformas favorecen saturación y parálisis. Pausar y contextualizar puede interrumpir ese ciclo.'] }
      ]
    }
  },
  {
    id: 'art-02', postNumber: 'ENTRADA #02', date: '19 de Septiembre, 2026 · 17:40 hrs', category: 'FILOSOFÍA VISUAL & DERECHOS CIVILES',
    title: 'EL CONTRATO CIVIL DE LA FOTOGRAFÍA: Susan Sontag, Ariella Azoulay y Stanley Cohen',
    subtitle: 'Mirar una fotografía también implica una decisión ética.', readTime: '3 min de lectura', author: 'Investigación Académica',
    tags: ['Susan Sontag', 'Ariella Azoulay', 'Stanley Cohen', 'Contrato Civil', 'Estados de Negación'], keyTheorists: ['Susan Sontag (2003)', 'Ariella Azoulay (2008)', 'Stanley Cohen (2001)'],
    summary: 'Sontag advierte sobre la pasividad; Azoulay propone una responsabilidad ciudadana; Cohen explica cómo sabemos y, aun así, evitamos actuar.',
    contentHtml: {
      lead: 'Las imágenes del dolor pueden informar, saturar o movilizar. La diferencia está en la forma de mirarlas y responder.',
      sections: [
        { heading: '1. Sontag: ver no basta', paragraphs: ['La exposición repetida puede volver una atrocidad familiar. Saber que algo ocurre no equivale a asumir una posición ante ello.'], quote: { text: 'Las fotografías pueden llamar a la paz o dejar solo una vaga conciencia de que ocurren cosas terribles.', author: 'Susan Sontag', work: 'Regarding the Pain of Others (2003)' } },
        { heading: '2. Azoulay: el deber de ser testigo', paragraphs: ['Para Azoulay, una fotografía vincula a quien toma, a quien aparece y a quien mira. Observar implica reconocer una demanda de ciudadanía.'] },
        { heading: '3. Cohen: saber y no saber', paragraphs: ['La interfaz permite cerrar, pasar o reaccionar sin consecuencias. Esa facilidad sostiene formas cotidianas de negación.'] }
      ]
    }
  },
  {
    id: 'art-01', postNumber: 'ENTRADA #01 (FUNDACIONAL)', date: '12 de Septiembre, 2026 · 09:15 hrs', category: 'NEUROPSICOLOGÍA & CONDUCTA DIGITAL',
    title: 'LA CURIOSIDAD MÓRBIDA Y EL UMBRAL DEL CONSUMO: ¿Por qué buscamos voluntariamente lo perturbador?',
    subtitle: 'Curiosidad, advertencias y repetición: el circuito del consumo sensible.', readTime: '3 min de lectura', author: 'Investigación Académica',
    tags: ['Curiosidad Mórbida', 'Suzanne Oosterwijk', 'Neurobiología', 'Funk Brockmyer', 'Desensibilización'], keyTheorists: ['Suzanne Oosterwijk (2017, 2020)', 'Jeanne Funk Brockmyer (2022)'],
    summary: 'Las advertencias de contenido pueden despertar curiosidad. La repetición, en cambio, eleva el umbral emocional con el tiempo.',
    contentHtml: {
      lead: 'Buscamos información sobre el peligro, pero las plataformas pueden convertir ese impulso en consumo continuo.',
      sections: [
        { heading: '1. Curiosidad por lo amenazante', paragraphs: ['Oosterwijk relaciona la elección de información mórbida con circuitos de recompensa. Conocer una amenaza puede sentirse útil, aunque en pantalla no exista riesgo inmediato.'] },
        { heading: '2. La advertencia también atrae', paragraphs: ['Una etiqueta de contenido sensible puede funcionar como barrera, pero también como señal de tabú. Por eso el diseño importa tanto como la advertencia.'] },
        { heading: '3. Repetición y sensibilidad', paragraphs: ['Funk Brockmyer estudia cómo la exposición constante puede subir el umbral emocional. La empatía no desaparece de golpe: se desgasta cuando no hay pausa ni contexto.'] }
      ]
    }
  }
];