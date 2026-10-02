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
    id: 'art-05',
    postNumber: 'ENTRADA #05',
    date: '1 de Octubre, 2026 · 18:30 hrs',
    category: 'INVESTIGACIÓN MEDIÁTICA & VIRALIDAD',
    title: 'CUANDO LA VIOLENCIA SE CONVIERTE EN CONTENIDO: Instagram y la normalización de imágenes reales de sufrimiento',
    subtitle: 'La violencia no desaparece cuando se censura: también cambia cuando se convierte en entretenimiento algorítmico y meme.',
    readTime: '6 min de lectura',
    author: 'Investigación Académica',
    coverImage: '/src/assets/images/feed_police_perimeter_1790905676177.jpg',
    coverCaption: 'Evidencia documental de operativo policial en redes sociales: el dolor humano indexado como mercancía de dwell time.',
    tags: ['Instagram', 'Memes', 'CBS News', 'Algoritmos', 'Martha Rosler'],
    keyTheorists: ['Martha Rosler', 'E. Morales (2025)', 'Nicklin et al. (2020)'],
    summary: 'Una investigación de CBS News reveló cientos de cuentas en Instagram dedicadas a compartir peleas, agresiones, accidentes y muertes reales combinadas con canciones de moda, audios cómicos y formato de meme. ¿Qué ocurre cuando el dolor ajeno se consume en la misma franja de scroll que una receta de cocina?',
    contentHtml: {
      lead: 'Una investigación de CBS News reveló la existencia de cientos de cuentas en Instagram dedicadas a compartir imágenes de violencia real mediante videos cortos y publicaciones en formato de meme. El contenido incluye peleas callejeras, agresiones policiales, accidentes vehiculares fatales y homicidios, alcanzando a millones de usuarios jóvenes dentro de una plataforma diseñada originariamente para la estética personal y la interacción social.',
      sections: [
        {
          heading: '1. La violencia no solicitada: entre la risa y el shock',
          paragraphs: [
            'La investigación evidenció que este material violento aparece como contenido recomendado, incluso para usuarios que jamás lo han buscado activamente. De esta manera, las imágenes violentas dejan de estar limitadas a espacios informativos o noticiosos y comienzan a mezclarse con música viral, memes de gatos y publicaciones cotidianas de amigos.',
            'Como explica Morales (2025) en su estudio sobre jóvenes universitarios colombianos, la violencia en redes ha dejado de ser un acontecimiento extraordinario para convertirse en la textura ambiental del feed. El usuario ya no va en busca de la noticia; la catástrofe lo asalta entre dos historias de amigos comiendo helado.'
          ],
          redactedFragment: {
            label: 'FRAGMENTO DE INVESTIGACIÓN CBS NEWS',
            hiddenText: 'Cuentas con más de 1.4 millones de seguidores monetizan videos de linchamientos intercalando enlaces a tiendas de ropa',
            context: 'Auditoría sobre el modelo de negocio detrás de las cuentas de clips de impacto.'
          }
        },
        {
          heading: '2. Martha Rosler: Traer la guerra a la sala de estar',
          paragraphs: [
            'Este fenómeno actualiza de forma brutal la obra pionera de la artista Martha Rosler en su serie "House Beautiful: Bringing the War Home" (1967-1972, retomada en 2008 con The Gray Drape). Rosler combinaba imágenes de la guerra de Vietnam con fotografías de salas de estar de revistas de lujo norteamericanas, cuestionando la distancia obscena entre quienes sufren las bombas y quienes las observan mientras acomodan los cojines de su sofá.',
            'Hoy, el teléfono inteligente es la sala de estar portátil de Martha Rosler. La distancia entre el campo de batalla y el dormitorio universitario se ha reducido a cero centímetros: el mismo dedo pulgar que da "me gusta" a la foto de una fiesta desliza el cuerpo sin vida de una víctima de conflicto armado.'
          ],
          quote: {
            text: 'Mediante estos contrastes, Rosler cuestiona la distancia entre quienes experimentan la violencia y quienes la observan a través de los medios. Las imágenes transforman radicalmente cómo consumimos el sufrimiento ajeno.',
            author: 'Martha Rosler',
            work: 'House Beautiful: Bringing the War Home (1967-2008)'
          }
        },
        {
          heading: '3. El meme como analgésico social',
          paragraphs: [
            'A esto se suma la reutilización de las imágenes: algunos usuarios editan las tragedias, las aceleran, añaden efectos de sonido ridículos o las convierten en plantillas humorísticas. Esto despoja al suceso de cualquier rastro de luto o gravedad ética.',
            'Cuando una situación violenta es seleccionada, recortada, censurada con una barra negra y musicalizada, no solo cambia lo que se ve: cambia el marco desde el cual la comunidad aprende qué dolores merecen ser tomados en serio y cuáles pueden ser ignorados entre risas.'
          ]
        }
      ]
    }
  },
  {
    id: 'art-04',
    postNumber: 'ENTRADA #04',
    date: '28 de Septiembre, 2026 · 14:15 hrs',
    category: 'MAPA CONCEPTUAL & ARQUITECTURA VISUAL',
    title: 'EL MAPA DE LA VISIBILIDAD: ¿Quién decide qué merece ser visto en el espacio digital?',
    subtitle: 'Censura algorítmica vs. control institucional: la intervención material sobre la mirada.',
    readTime: '7 min de lectura',
    author: 'Investigación Académica',
    coverImage: '/src/assets/images/censored_crt_monitors_1790905711966.jpg',
    coverCaption: 'Pared de monitores de control: la visibilidad es siempre el resultado de una disputa de poder.',
    tags: ['Mapa Conceptual', 'Visibilidad', 'Censura Algorítmica', 'Control Institucional', 'Sensibilidad'],
    keyTheorists: ['Judith Butler', 'Stanley Cohen', 'Ariella Azoulay'],
    summary: 'A través de nuestro mapa conceptual analizamos los cuatro ejes que definen la visibilidad contemporánea: Censura (material y algorítmica), Exposición (repetición y viralidad), Representación (framing de la víctima) y Comunidad (consumo activo vs. pasivo).',
    contentHtml: {
      lead: '¿Quién decide qué merece ser visto? La visibilidad no es un estado natural de las cosas: es el resultado de un filtro político y tecnológico continuo. En nuestro mapa conceptual de investigación, estructuramos cómo la sensibilidad comunitaria es moldeada en la encrucijada entre censura, exposición masiva y encuadre mediático.',
      sections: [
        {
          heading: '1. El Doble Filo de la Censura: Protección vs. Control',
          paragraphs: [
            'La censura se manifiesta en dos dimensiones principales: la institucional (estados, tribunales, códigos penales) y la algorítmica (normas comunitarias de plataformas como Meta, TikTok o X).',
            'La intervención material se traduce en pixelado, desenfoque y etiquetas de "Contenido Sensible". Bajo el discurso de "proteger la sensibilidad del usuario", las plataformas ejercen un control estricto sobre qué crímenes de estado o abusos policiales pueden ser presenciados y cuáles son expulsados de la circulación pública.'
          ],
          redactedFragment: {
            label: 'MAPA DE CENSURA // INTERVENCIÓN MATERIAL',
            hiddenText: 'El pixelado selectivo oculta la identidad de los agresores institucionales mientras expone la vulnerabilidad de las víctimas desprotegidas',
            context: 'Análisis del sesgo en la moderación automática de contenido.'
          }
        },
        {
          heading: '2. Exposición: El Triángulo entre Repetición, Saturación e Inmediatez',
          paragraphs: [
            'En el extremo opuesto a la censura encontramos la sobreexposición. Géneros enteros de la red —como el True Crime, las páginas de muertes accidentales, los canales de telegram con filtraciones y los videos de catástrofes— se alimentan de la inmediatez permanente.',
            'Esta sobreexposición detona una respuesta psicológica dividida en tres vertientes: la empatía inicial (rápida y fugaz), el morbo (curiosidad por la transgresión corporal) y la desensibilización sistemática.'
          ]
        },
        {
          heading: '3. Comunidad Consumidora: De la proximidad al voyeurismo pasivo',
          paragraphs: [
            'Una comunidad puede relacionarse con la violencia por proximidad directa (física, social, cultural o emocional, como vivir en una ciudad con conflicto) o por mediación indirecta a través de pantallas.',
            'En los jóvenes universitarios, la comunidad consumidora suele oscilar entre la pasividad (el scroll indolente que se acostumbra al horror) y la actividad (compartir en stories, comentar, republicar o viralizar memes). La pregunta clave persiste: ¿qué comunidad estamos construyendo cuando nuestra única respuesta ante la herida es el retweet?'
          ]
        }
      ]
    }
  },
  {
    id: 'art-03',
    postNumber: 'ENTRADA #03',
    date: '24 de Septiembre, 2026 · 11:00 hrs',
    category: 'TEORÍA CRÍTICA & PSICOLOGÍA COGNITIVA',
    title: 'FRAMES OF WAR Y PSYCHIC NUMBING: Por qué una sola muerte conmueve y un millón se vuelve estadística',
    subtitle: 'Judith Butler, Paul Slovic y los marcos que determinan qué vidas son dignas de duelo.',
    readTime: '8 min de lectura',
    author: 'Investigación Académica',
    coverImage: '/src/assets/images/commuters_screen_glow_1790902305889.jpg',
    coverCaption: 'Miradas desvinculadas: la estadística satura la mente y apaga la capacidad de llorar la pérdida ajena.',
    tags: ['Judith Butler', 'Paul Slovic', 'Psychic Numbing', 'Framing', 'Compassion Fade'],
    keyTheorists: ['Judith Butler (2009)', 'Paul Slovic (2007, 2017)', 'Thomas et al. (2018)'],
    summary: 'Analizamos cómo los marcos mediáticos definen quién es una víctima con rostro y quién es un número anónimo, y cómo el fenómeno del entumecimiento psíquico (Psychic Numbing) estudiado por Slovic demuestra que el corazón humano colapsa cuando se multiplican los cuerpos.',
    contentHtml: {
      lead: '¿Por qué la fotografía de un niño pequeño en una playa puede movilizar a parlamentos enteros durante 72 horas, mientras que el reporte de 50.000 muertos en un bombardeo es recibido con un bostezo en la fila del supermercado? La respuesta se encuentra en el cruce entre la filosofía política de Judith Butler y la psicología cognitiva de Paul Slovic.',
      sections: [
        {
          heading: '1. Judith Butler: Vidas reconocibles y marcos de guerra',
          paragraphs: [
            'En "Frames of War: When Is Life Grievable?" (2009), Judith Butler sostiene que para que una vida sea llorada públicamente (grievable), primero debe ser aprehendida como una vida viva. Los "marcos" (frames) de los medios y los discursos hegemónicos delimitan quién califica como un ser humano digno de protección y quién es presentado como una pérdida colateral inevitable.',
            'Cuando los medios muestran a víctimas occidentales, presentan sus nombres, sus carreras, fotos familiares y testimonios de sus allegados: son vidas identificables. Cuando la violencia golpea a periferias del sur global, los muertos aparecen como siluetas sin nombre, amontonados bajo cifras abstractas. El encuadre decide de antemano el luto permitido.'
          ],
          quote: {
            text: 'Un encuadre no solo muestra lo que encierra; excluye activamente lo que queda fuera. La producción de la persona llorable es una operación política de primer orden.',
            author: 'Judith Butler',
            work: 'Frames of War (2009)'
          }
        },
        {
          heading: '2. Paul Slovic: El colapso del afecto y el entumecimiento psíquico',
          paragraphs: [
            'El psicólogo Paul Slovic (2007) acuñó la famosa sentencia: "If I look at the mass I will never act" (Si miro a la masa, nunca actuaré). A través de rigurosos experimentos de laboratorio, Slovic demostró que nuestra respuesta afectiva no es lineal: somos capaces de sentir una empatía intensa ante un solo individuo en peligro, pero ante dos individuos la empatía decae, y ante cientos se precipita a un entumecimiento casi total (Psychic Numbing).',
            'En su estudio de 2017 sobre fotografías icónicas (como la de Aylan Kurdi en 2015), Slovic, Västfjäll y Gregory demostraron que el impacto de una imagen icónica produce un pico de compasión que se evapora en cuestión de semanas, siendo reemplazado por el "compassion fade": el agotamiento del espectador que se siente impotente ante la inmensidad del dolor.'
          ]
        },
        {
          heading: '3. El diseño del scroll contemporáneo como máquina de numbing',
          paragraphs: [
            'Las plataformas de redes sociales están diseñadas para maximizar el entumecimiento psíquico. Al agrupar tragedias masivas en hilos de Twitter o resúmenes de titulares de 15 segundos en TikTok, convierten la experiencia moral en una catarata abstracta de dolor sin rostros identificables.',
            'Como señalan Thomas et al. (2018), el distress digital generado por el exceso de tragedia no moviliza: genera parálisis de acción y repliegue cínico.'
          ]
        }
      ]
    }
  },
  {
    id: 'art-02',
    postNumber: 'ENTRADA #02',
    date: '19 de Septiembre, 2026 · 17:40 hrs',
    category: 'FILOSOFÍA VISUAL & DERECHOS CIVILES',
    title: 'EL CONTRATO CIVIL DE LA FOTOGRAFÍA: Susan Sontag, Ariella Azoulay y Stanley Cohen',
    subtitle: 'Entre la mirada que exige justicia y los estados colectivos de negación cotidiana.',
    readTime: '7 min de lectura',
    author: 'Investigación Académica',
    coverImage: '/src/assets/images/redacted_archive_dossier_1790902318303.jpg',
    coverCaption: 'Expediente desclasificado: mirar no es un acto inocente; es un compromiso ético entre ciudadanos.',
    tags: ['Susan Sontag', 'Ariella Azoulay', 'Stanley Cohen', 'Contrato Civil', 'Estados de Negación'],
    keyTheorists: ['Susan Sontag (2003)', 'Ariella Azoulay (2008)', 'Stanley Cohen (2001)'],
    summary: 'Examinamos el debate entre la advertencia de Sontag sobre la pasividad del espectador, la propuesta de Azoulay de la fotografía como un contrato ciudadano vinculante, y los mecanismos de negación analizados por Cohen (saber y no saber al mismo tiempo).',
    contentHtml: {
      lead: 'Mirar el dolor de los demás es un acto cargado de tensión ontológica. ¿Somos testigos comprometidos o simplemente mirones protegidos por el cristal de la pantalla? Tres pensadores fundamentales desentrañan las trampas morales de la mirada occidental.',
      sections: [
        {
          heading: '1. Susan Sontag: La sobreexposición que devora el sentido',
          paragraphs: [
            'En "Regarding the Pain of Others" (2003), Susan Sontag revisó sus ideas juveniles de "Sobre la fotografía" para advertir sobre el riesgo de la habituación. Sontag subraya que la censura puede ocultar una imagen, pero la sobreexposición puede lograr algo peor: ocultar su significado.',
            'Cuando las fotografías de guerra circulan como productos de consumo rápido, el espectador adquiere la ilusión de que ya "sabe lo que pasa", eximiéndose de cualquier esfuerzo ético o político. La imagen del dolor ajeno se convierte en un fetiche visual que confirma nuestra seguridad personal.'
          ],
          quote: {
            text: 'Las fotografías de una atrocidad pueden suscitar reacciones opuestas: una llamada a la paz o un grito de venganza. O simplemente la vaga conciencia, alentada por la continua difusión de imágenes de dolor, de que suceden cosas terribles.',
            author: 'Susan Sontag',
            work: 'Regarding the Pain of Others (2003)'
          }
        },
        {
          heading: '2. Ariella Azoulay: El contrato civil de la fotografía',
          paragraphs: [
            'Frente a la melancolía de Sontag, la filósofa Ariella Azoulay propone en "The Civil Contract of Photography" (2008) una lectura radical: la fotografía es un contrato ciudadano no firmado entre tres partes: quien toma la foto, quien es fotografiado y quien la contempla.',
            'Para Azoulay, la persona fotografiada en situación de opresión o despojo no es una víctima pasiva: mediante la imagen, está emitiendo una queja pública y una demanda de ciudadanía ante el espectador. Mirar esa fotografía no es un privilegio estético: es asumir la responsabilidad cívica de ser testigo.'
          ]
        },
        {
          heading: '3. Stanley Cohen: Saber y no saber (Los estados de negación)',
          paragraphs: [
            'Sin embargo, ¿qué hacemos habitualmente con esa demanda? Stanley Cohen, en "States of Denial" (2001), describe los mecanismos de negación implicatoria: el ciudadano contemporáneo sabe perfectamente que se cometen atrocidades a diario, pero se comporta psicológicamente como si no lo supiera.',
            'La interfaz digital facilita esta negación: ante un video de linchamiento o bombardeo, cerramos la pestaña con un clic o reaccionamos con un emoji triste. Sabemos el hecho, pero negamos sus implicaciones éticas en nuestra conducta.'
          ]
        }
      ]
    }
  },
  {
    id: 'art-01',
    postNumber: 'ENTRADA #01 (FUNDACIONAL)',
    date: '12 de Septiembre, 2026 · 09:15 hrs',
    category: 'NEUROPSICOLOGÍA & CONDUCTA DIGITAL',
    title: 'LA CURIOSIDAD MÓRBIDA Y EL UMBRAL DEL CONSUMO: ¿Por qué buscamos voluntariamente lo perturbador?',
    subtitle: 'Suzanne Oosterwijk, Jeanne Funk Brockmyer y los circuitos de recompensa del dolor.',
    readTime: '6 min de lectura',
    author: 'Investigación Académica',
    coverImage: '/src/assets/images/cctv_empty_intersection_1790902296575.jpg',
    coverCaption: 'La pantalla como mirilla: la atracción por lo prohibido responde a un mecanismo biológico ancestral.',
    tags: ['Curiosidad Mórbida', 'Suzanne Oosterwijk', 'Neurobiología', 'Funk Brockmyer', 'Desensibilización'],
    keyTheorists: ['Suzanne Oosterwijk (2017, 2020)', 'Jeanne Funk Brockmyer (2022)'],
    summary: '¿Por qué cuando hay una advertencia de "Contenido Sensible", el impulso inmediato de millones de jóvenes es presionar "Ver ahora"? Oosterwijk demuestra que la curiosidad mórbida activa los circuitos de recompensa del cerebro, mientras Funk Brockmyer describe la atrofia empática por repetición.',
    contentHtml: {
      lead: 'Existe una contradicción flagrante en el consumo contemporáneo de internet: decimos querer un entorno seguro y pacífico, pero los videos de peleas, accidentes letales y ejecuciones acumulan cientos de millones de reproducciones. ¿Es simple maldad o un dispositivo neuroevolutivo hackeado por las interfaces de usuario?',
      sections: [
        {
          heading: '1. Suzanne Oosterwijk: La neurobiología de la curiosidad mórbida',
          paragraphs: [
            'En sus investigaciones de 2017 y 2020 en Scientific Reports, la neuropsicóloga Suzanne Oosterwijk demostró que la elección voluntaria de visualizar información mórbida activa el estriado ventral, una región cerebral íntimamente ligada al sistema dopaminérgico de recompensa.',
            'Los seres humanos han evolucionado para recopilar información sobre amenazas letales: saber cómo mata un depredador o cómo ocurre un accidente ayuda biológicamente a evitarlo en el mundo físico. Sin embargo, en el entorno digital, este impulso evolutivo se desquicia: la interfaz ofrece miles de peligros sin costo físico inmediato, atrapando al cerebro en un ciclo compulsivo de clickbait sangriento.'
          ]
        },
        {
          heading: '2. El botón de advertencia como acelerador del morbo',
          paragraphs: [
            'La etiqueta de "Sensitive Content" o "Contenido Sensible" con el ojo tachado opera, irónicamente, como un catalizador del morbo. Al colocar una barrera visual entre el usuario y la imagen, la plataforma no disminuye el interés: lo inflama mediante el tabú.',
            'El usuario que pulsa "Ver ahora" cree estar tomando una decisión libre y audaz, cuando en realidad está respondiendo al estímulo más predecible del diseño de interacción.'
          ]
        },
        {
          heading: '3. Jeanne Funk Brockmyer: De la sobreestimulación a la atrofia empática',
          paragraphs: [
            'La investigadora Jeanne Funk Brockmyer ha estudiado durante décadas los efectos de la exposición repetida a la violencia en pantallas en jóvenes. Su trabajo describe cómo el sistema parasimpático eleva progresivamente su umbral de tolerancia: para sentir la misma estimulación, el joven necesita consumir imágenes cada vez más explícitas y grotescas.',
            'La empatía no desaparece de golpe; se atrofia por desuso, transformando a una generación en espectadores imperturbables capaces de presenciar la agonía de un semejante mientras sostienen un emparedado.'
          ]
        }
      ]
    }
  }
];
