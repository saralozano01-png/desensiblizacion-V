import { useState } from 'react';
import { FileText, Image as ImageIcon } from 'lucide-react';
import { InteractiveRedaction } from './InteractiveRedaction';
import { HabituationChart } from './HabituationChart';
import { SimulatedSocialFeed } from './SimulatedSocialFeed';
import { CensoredMediaCard } from './CensoredMediaCard';
import { soundFx } from '../utils/audio';
import sectionDesensitization from '../assets/images/section_desensitization.jpg';
import sectionRepetition from '../assets/images/section_repetition.jpg';
import sectionViolenceContent from '../assets/images/section_violence_content.jpg';
import sectionLookingWithoutSeeing from '../assets/images/section_looking_without_seeing.jpg';
import archiveNight from '../assets/images/archive_night.jpg';
import archivePerimeter from '../assets/images/archive_perimeter.jpg';
import archiveForensic from '../assets/images/archive_forensic.jpg';
import archiveMemory from '../assets/images/archive_memory.jpg';

interface BlogSectionsProps {
  onRedactionClick: () => void;
  onFeedInteraction: () => void;
}

export function BlogSections({ onRedactionClick, onFeedInteraction }: BlogSectionsProps) {
  const [cctvTimestamp] = useState('03:42:18:09');

  const handleInspect = () => {
    soundFx.playClick();
    onRedactionClick();
  };

  return (
    <div className="space-y-24 py-16">

      {/* ============================================================== */}
      {/* CAPÍTULO 01: ¿QUÉ ES LA DESENSIBILIZACIÓN?                      */}
      {/* Base conceptual — definición y mecanismo neurobiológico          */}
      {/* ============================================================== */}
      <article id="desensibilizacion" className="max-w-4xl mx-auto px-4 sm:px-6 scroll-mt-20">
        <div className="border-b border-[#3D4750] pb-4 mb-8">
          <div className="flex items-center justify-between text-xs font-mono text-[#7D878F] mb-2">
            <span className="text-[#8B191F] font-bold">CAPÍTULO 01 // DEFINICIÓN & MECANISMO</span>
            <span>LECTURA: 4 MIN</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Bebas_Neue'] tracking-wide text-[#DFE4EA]">
            ¿QUÉ ES LA DESENSIBILIZACIÓN?
          </h2>
          <p className="font-sans text-sm text-[#BDC6CE] mt-3 max-w-2xl leading-relaxed">
            Antes de analizar cómo los medios la producen, es necesario entender qué ocurre en el sistema nervioso cuando la alarma empática se apaga.
          </p>
        </div>

        <CensoredMediaCard
          imageSrc={sectionDesensitization}
          altText="Pasajeros consumiendo noticias en dispositivos móviles en la penumbra"
          caseCode="REGISTRO-01 // UMBRAL URBANO"
          title="Consumo de violencia en tránsito cotidiano"
          censorBarText="██████████ [IDENTIDAD DE TESTIGOS PROTEGIDA]"
          caption="Fig. 1.1 — La textura del consumo repetido convierte lo sensible en una superficie cotidiana."
          aspectRatio="16:9"
          initialCensored={false}
        />

        <div className="space-y-6 font-sans text-base sm:text-lg text-[#BDC6CE] leading-relaxed mt-6">
          <p className="first-letter:text-5xl first-letter:font-['Bebas_Neue'] first-letter:float-left first-letter:mr-3 first-letter:text-[#8B191F]">
            La desensibilización no es la pérdida de la vista, sino la extinción de la perturbación.
            En términos psicológicos y neurofisiológicos, se define como la reducción progresiva de la respuesta emocional, cognitiva y motora ante un estímulo que, en circunstancias iniciales, habría provocado una alarma instintiva de supervivencia o un doloroso shock empático.
          </p>

          <p>
            Cuando un ser humano ve por primera vez la imagen de un cuerpo mutilado o una ciudad en ruinas, el hipotálamo dispara una descarga inmediata de adrenalina y cortisol. El ritmo cardíaco se dispara; la pupila se dilata; el estómago se comprime. Nuestro cuerpo interpreta el sufrimiento ajeno como una amenaza inminente para la especie: <span className="text-[#DFE4EA] font-bold">hay dolor aquí, por lo tanto debo protegerme o socorrer</span>.
          </p>

          <div className="border border-[#3D4750] bg-[#1C2228] p-5 my-6 font-mono text-sm space-y-3">
            <div className="text-xs text-[#8B191F] font-bold uppercase tracking-wider flex items-center gap-2">
              <FileText className="w-4 h-4" />
              FRAGMENTO CENSURADO DEL EXPEDIENTE MÉDICO:
            </div>
            <p className="text-[#DFE4EA] leading-relaxed">
              "El paciente reporta haber visto más de <InteractiveRedaction hiddenText="400 ejecuciones sumarias" onReveal={handleInspect} /> a través de canales de mensajería cifrada. Al someterse a monitoreo de pulso ante nuevas grabaciones, su frecuencia se mantuvo en <InteractiveRedaction hiddenText="62 latidos por minuto (reposo vegetativo)" onReveal={handleInspect} />. Diagnóstico: saturación del sistema de alarma afectiva."
            </p>
            <div className="text-[10px] text-[#7D878F]">
              * Haz clic sobre las barras negras para inspeccionar los términos clasificados.
            </div>
          </div>

          <p>
            Sin embargo, el cerebro humano no fue diseñado para ser testigo del dolor global ininterrumpido. Al vivir conectados a servidores que transmiten masacres, linchamientos y catástrofes en tiempo real las 24 horas del día, el sistema nervioso opta por la única estrategia de supervivencia biológica disponible: <span className="text-[#DFE4EA] font-semibold">apagar el receptor</span>. La conmoción se degrada en curiosidad morbosa, la curiosidad en costumbre, y la costumbre, finalmente, en una total e imperceptible indiferencia.
          </p>

          <blockquote className="border-l-2 border-[#8B191F] pl-6 py-2 my-8 font-mono text-base italic text-[#DFE4EA] bg-[#222830]">
            "Hacerse insensible ante lo que se muestra es inevitable si uno se pasa la vida mirando imágenes de dolor. Las imágenes que circulan sin cesar no permiten la pausa; y sin pausa, el horror se vuelve simplemente otra imagen más."
            <footer className="text-xs not-italic text-[#7D878F] mt-2 font-bold uppercase tracking-wider">
              — Susan Sontag, Ante el dolor de los demás (2003)
            </footer>
          </blockquote>
        </div>
      </article>

      {/* ============================================================== */}
      {/* CAPÍTULO 02: LA REPETICIÓN                                       */}
      {/* La física de la habituación — cómo la frecuencia anestesia       */}
      {/* Antes de hablar de mercantilización, hay que entender la ley     */}
      {/* biológica que la hace posible.                                   */}
      {/* ============================================================== */}
      <article id="repeticion" className="max-w-4xl mx-auto px-4 sm:px-6 scroll-mt-20">
        <div className="border-b border-[#3D4750] pb-4 mb-8">
          <div className="flex items-center justify-between text-xs font-mono text-[#7D878F] mb-2">
            <span className="text-[#8B191F] font-bold">CAPÍTULO 02 // HABITUACIÓN & RENDIMIENTO DECRECIENTE</span>
            <span>LECTURA: 4 MIN</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Bebas_Neue'] tracking-wide text-[#DFE4EA]">
            LA REPETICIÓN
          </h2>
          <p className="font-sans text-sm text-[#BDC6CE] mt-3 max-w-2xl leading-relaxed">
            Comprender la habituación perceptual es el paso previo para entender por qué la industria mediática puede monetizar el horror de forma sistemática.
          </p>
        </div>

        <div className="space-y-6 font-sans text-base sm:text-lg text-[#BDC6CE] leading-relaxed mb-8">
          <p>
            ¿Por qué la repetición altera nuestra capacidad de conmovernos? La respuesta reside en la ley biológica de los rendimientos decrecientes. El sistema perceptual de los mamíferos funciona mediante el contraste: solo detecta aquello que difiere del entorno basal.
          </p>

          <p>
            Si un trueno estalla en una noche de calma, todo el cuerpo se estremece. Si el trueno retumba cada cuatro segundos durante diez años, los habitantes de la casa terminan durmiendo plácidamente con la ventana abierta. La violencia digital opera bajo la misma física.
          </p>
        </div>

        {/* Curva de habituación sensorial interactiva */}
        <HabituationChart />

        <div className="my-8">
          <CensoredMediaCard
            imageSrc={sectionRepetition}
            altText="Muro de pantallas y monitores de vigilancia analógica con estática y señales bloqueadas"
            caseCode="SISTEMA-CCTV // CABINA 04"
            title="Saturación de canales en simultáneo"
            censorBarText="██████████ [TRANSMISIÓN INTERRUMPIDA POR SEÑAL DE ALERTA]"
            caption="Fig. 2.1 — Repetición visual: señales que persisten hasta volverse parte del fondo."
            aspectRatio="16:9"
            initialCensored={false}
          />
        </div>

        <div className="mt-8 space-y-4 font-sans text-base sm:text-lg text-[#BDC6CE] leading-relaxed">
          <p>
            Cada nueva catástrofe televisada debe subir la apuesta estética para lograr la misma atención que la catástrofe anterior. Cuando el reporte de diez muertos ya no sacude el café de la mañana, el noticiero necesita transmitir la persecución en vivo; cuando la persecución aburre, se requiere el ángulo de la cámara corporal policial en primera persona, idéntico a un videojuego bélico.
          </p>
          <p className="font-mono text-sm text-[#7D878F] border-l-2 border-[#41474F] pl-4">
            "La repetición no limpia la herida; anestesia la piel para que el cirujano pueda seguir cobrando la entrada."
          </p>
        </div>
      </article>

      {/* ============================================================== */}
      {/* CAPÍTULO 03: LA VIOLENCIA COMO CONTENIDO                         */}
      {/* La industria aprovecha la habituación ya explicada:              */}
      {/* mercantilización, algoritmo y economía de la atención.           */}
      {/* ============================================================== */}
      <article id="violencia" className="max-w-4xl mx-auto px-4 sm:px-6 scroll-mt-20">
        <div className="border-b border-[#3D4750] pb-4 mb-8">
          <div className="flex items-center justify-between text-xs font-mono text-[#7D878F] mb-2">
            <span className="text-[#8B191F] font-bold">CAPÍTULO 03 // MERCANTILIZACIÓN & ALGORITMO</span>
            <span>LECTURA: 5 MIN</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Bebas_Neue'] tracking-wide text-[#DFE4EA]">
            LA VIOLENCIA COMO CONTENIDO
          </h2>
          <p className="font-sans text-sm text-[#BDC6CE] mt-3 max-w-2xl leading-relaxed">
            Una vez que la habituación garantiza que el umbral de alarma del espectador puede ser recalibrado indefinidamente, la industria mediática convierte ese mecanismo en un modelo de negocio.
          </p>
        </div>

        <CensoredMediaCard
          imageSrc={sectionViolenceContent}
          altText="Dossier de periódicos y expedientes fuertemente tachados con tinta negra"
          caseCode="EXP-FORENSE // DOSSIER 802"
          title="Tragedia comercializada como métrica de retención"
          censorBarText="████████████████ [DOCUMENTO JUDICIAL CLASIFICADO]"
          caption="Fig. 3.1 — La violencia como contenido: una imagen simbólica que evita mostrar daño explícito."
          aspectRatio="16:9"
          initialCensored={false}
        />

        <div className="space-y-6 font-sans text-base sm:text-lg text-[#BDC6CE] leading-relaxed mt-6">
          <p>
            Para que una tragedia humana pueda consumirse en una pantalla de 6 pulgadas mientras esperamos el autobús, primero debe sufrir una metamorfosis radical: debe dejar de ser una catástrofe y transformarse en <strong className="text-[#DFE4EA]">contenido</strong>.
          </p>

          <p>
            El contenido no exige responsabilidades morales ni convoca a la movilización colectiva; el contenido exige únicamente <span className="text-[#8B191F] font-bold">tiempo de permanencia (dwell time)</span> y clics. Los motores de recomendación algorítmica descubrieron hace más de una década que las emociones de valencia negativa de alta excitación —especialmente la indignación, el pavor y el morbo— retienen la mirada humana hasta cuatro veces más tiempo que la serenidad o la alegría.
          </p>

          <div className="border border-[#3D4750] bg-[#1C2228] p-6 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono border-b border-[#2F3339] pb-2">
              <span className="text-[#8B191F] font-bold uppercase tracking-wider">
                MEMORÁNDUM INTERNO: PLATAFORMA DE DISTRIBUCIÓN
              </span>
              <span className="text-[#7D878F]">CONFIDENCIAL // REV-09</span>
            </div>
            <p className="font-mono text-xs sm:text-sm text-[#DFE4EA] leading-relaxed">
              "El video del tiroteo en el centro comercial generó un incremento del <InteractiveRedaction hiddenText="+312% de retención publicitaria" onReveal={handleInspect} /> durante las primeras tres horas posteriores al suceso. Los anunciantes de retail y telefonía no retiraron sus pautas debido a que el algoritmo intercaló <InteractiveRedaction hiddenText="marcas de bebidas energéticas" onReveal={handleInspect} /> entre cada repetición del impacto. El espectador promedio reprodujo la escena 4.2 veces."
            </p>
          </div>

          <p>
            La violencia, por lo tanto, no se propaga a pesar de su horror, sino <em className="text-[#DFE4EA]">gracias a él</em>. Se empaca con miniaturas de alto contraste, círculos rojos trazados sobre siluetas caídas, y titulares sensacionalistas diseñados para hackear el reflejo de alerta. Cuando todo es sangre en la portada, la sangre deja de significar muerte: pasa a significar tráfico de datos.
          </p>
        </div>
      </article>

      {/* ============================================================== */}
      {/* CAPÍTULO 04: MIRAR SIN VER                                       */}
      {/* La consecuencia ética de lo anterior: la escisión entre el       */}
      {/* acto óptico y el acto moral. Cierra el arco teórico antes        */}
      {/* de la demostración práctica del feed.                            */}
      {/* ============================================================== */}
      <article id="mirar" className="max-w-4xl mx-auto px-4 sm:px-6 scroll-mt-20">
        <div className="border-b border-[#3D4750] pb-4 mb-8">
          <div className="flex items-center justify-between text-xs font-mono text-[#7D878F] mb-2">
            <span className="text-[#8B191F] font-bold">CAPÍTULO 04 // ÉTICA DE LA MIRADA</span>
            <span>LECTURA: 4 MIN</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Bebas_Neue'] tracking-wide text-[#DFE4EA]">
            MIRAR SIN VER
          </h2>
          <p className="font-sans text-sm text-[#BDC6CE] mt-3 max-w-2xl leading-relaxed">
            La desensibilización no es solo un fenómeno neurológico ni económico: es, sobre todo, una crisis de la responsabilidad moral del espectador.
          </p>
        </div>

        <CensoredMediaCard
          imageSrc={sectionLookingWithoutSeeing}
          altText="Cámara de vigilancia registrando una encrucijada urbana desierta bajo la lluvia"
          caseCode={`CCTV-CAM-08 // ${cctvTimestamp}`}
          title="Encrucijada bajo vigilancia automatizada"
          censorBarText="██████████ [UBICACIÓN GEOGRÁFICA RESERVADA]"
          caption="Mirar sin ver: la imagen permanece, pero la atención puede desplazarse."
          aspectRatio="16:9"
          initialCensored={false}
        />

        <div className="space-y-6 font-sans text-base sm:text-lg text-[#BDC6CE] leading-relaxed mt-6">
          <p>
            Existe una grieta profunda e insalvable entre el acto óptico de <strong className="text-[#DFE4EA]">mirar</strong> y el acto moral de <strong className="text-[#8B191F]">ver</strong>.
          </p>

          <p>
            Mirar es una operación mecánica del cristalino y la retina: los fotones inciden sobre las células fotosensibles, se codifican en impulsos bioeléctricos y se almacenan temporalmente en la corteza occipital. Las cámaras de vigilancia miran todo el tiempo; graban accidentes, homicidios y abrazos con la misma indiferencia de cuarzo y silicio. El espectador moderno se ha convertido, gradualmente, en una extensión biológica de esa cámara de seguridad.
          </p>

          <div className="border-l-4 border-[#DFE4EA] bg-[#222830] p-6 my-6 space-y-2">
            <h4 className="font-['Bebas_Neue'] text-2xl text-[#DFE4EA] tracking-wide">
              LA CONDICIÓN DEL VOYEUR DIGITAL
            </h4>
            <p className="font-mono text-sm text-[#BDC6CE] leading-relaxed">
              Consumimos la violencia a través de una pantalla de cristal líquido que nos otorga la ilusión de omnisciencia con la garantía absoluta de inmunidad física. Sabemos que el proyectil no atravesará el display; por tanto, el sufrimiento ajeno se convierte en un espectáculo sin consecuencias para el observador.
            </p>
          </div>

          <p>
            Ver, por el contrario, implica ser interpelado. Ver significa detener el scroll, admitir que el cuerpo que yace sobre el pavimento era un individuo con memoria, madre, temores y proyectos, y experimentar la vergüenza cósmica de seguir vivos e ilesos ante su aniquilación.
          </p>

          <p className="text-[#DFE4EA] font-semibold">
            ¿Cuántas veces al día somos testigos de una tragedia sin dedicarle siquiera los cuatro segundos que tarda una respiración profunda?
          </p>
        </div>
      </article>

      {/* ============================================================== */}
      {/* CAPÍTULO 05: EL FEED — DEMOSTRACIÓN PRÁCTICA                     */}
      {/* El feed es donde los tres capítulos anteriores convergen.        */}
      {/* Habituación + mercantilización + mirada ética = el scroll diario.*/}
      {/* ============================================================== */}
      <section id="feed" className="max-w-4xl mx-auto px-4 sm:px-6 scroll-mt-20">
        <div className="border-b border-[#3D4750] pb-4 mb-8 text-center sm:text-left">
          <div className="flex items-center justify-between text-xs font-mono text-[#7D878F] mb-2">
            <span className="text-[#8B191F] font-bold">CAPÍTULO 05 // EL DISPOSITIVO EN ACCIÓN</span>
            <span>INTERACCIÓN CONTINUA</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Bebas_Neue'] tracking-wide text-[#DFE4EA]">
            REDES SOCIALES: LA YUXTAPOSICIÓN MONSTRUOSA
          </h2>
          <p className="font-sans text-sm text-[#BDC6CE] mt-3 max-w-2xl leading-relaxed">
            Lo que acabas de leer no es teoría abstracta: ocurre exactamente en este feed, en este momento. Desliza e interactúa. Observa qué coexiste con qué.
          </p>
        </div>

        <SimulatedSocialFeed onInteraction={onFeedInteraction} />

        {/* Galería de registro visual — integrada como extensión del feed,  */}
        {/* no como sección separada                                          */}
        <div className="mt-16 border-t border-[#3D4750] pt-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
            <div>
              <div className="text-[11px] font-mono text-[#8B191F] font-bold tracking-widest uppercase flex items-center gap-1.5">
                <ImageIcon className="w-3.5 h-3.5" />
                ARCHIVO VISUAL COMPLEMENTARIO
              </div>
              <h3 className="font-['Bebas_Neue'] text-3xl sm:text-4xl tracking-wide text-[#DFE4EA] mt-1">
                REGISTRO FOTOGRÁFICO BAJO CENSURA
              </h3>
              <p className="text-xs font-mono text-[#7D878F] mt-1 max-w-md">
                Las fotografías que no llegaron al feed. Haz clic en "Ver ahora" o en "MODO" para alternar los niveles de censura.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CensoredMediaCard
              imageSrc={archiveNight}
              altText="Multitud silueteada en disturbio nocturno bajo la niebla"
              caseCode="CASO-01 // NOCHE PERIFÉRICA"
              title="Disturbios y siluetas anónimas"
              censorBarText="██████████ [ROSTROS CENSURADOS]"
              caption="Archivo visual 01 — Flor seca como señal de memoria y deterioro."
              aspectRatio="4:3"
              initialCensored={false}
            />

            <CensoredMediaCard
              imageSrc={archivePerimeter}
              altText="Perímetro policial nocturno con luces de emergencia"
              caseCode="CASO-02 // PERÍMETRO POLICIAL"
              title="Zona de balacera acordonada"
              censorBarText="██████████ [NÚMERO DE PATRULLA RESERVADO]"
              caption="Archivo visual 02 — Fruta intervenida como metáfora de un perímetro sensible."
              aspectRatio="4:3"
              initialCensored={false}
            />

            <CensoredMediaCard
              imageSrc={archiveForensic}
              altText="Inspección forense al amanecer en predio baldío"
              caseCode="CASO-03 // CORDÓN FORENSE"
              title="Levantamiento en predio industrial"
              censorBarText="██████████ [EVIDENCIA OCULTA AL PÚBLICO]"
              caption="Archivo visual 03 — Granada en sombra: registro simbólico de lo que se oculta."
              aspectRatio="4:3"
              initialCensored={false}
            />

            <CensoredMediaCard
              imageSrc={archiveMemory}
              altText="Muro callejero con afiches de personas desaparecidas"
              caseCode="CASO-04 // MEMORIA CALLEJERA"
              title="Fichas de búsqueda deterioradas"
              censorBarText="██████████ [DATOS PERSONALES PROTEGIDOS]"
              caption="Archivo visual 04 — Composición abstracta de memoria, exposición y censura."
              aspectRatio="4:3"
              initialCensored={false}
            />
          </div>
        </div>
      </section>

    </div>
  );
}
