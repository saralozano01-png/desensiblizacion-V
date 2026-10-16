import { FileText } from 'lucide-react';
import { InteractiveRedaction } from './InteractiveRedaction';
import { HabituationChart } from './HabituationChart';
import { SimulatedSocialFeed } from './SimulatedSocialFeed';
import { soundFx } from '../utils/audio';
import desensitizationAcademic from '../assets/images/desensitization_academic.png';
import repetitionAcademic from '../assets/images/repetition_academic.png';
import violenceAsContentAcademic from '../assets/images/violence_as_content_academic.png';
import lookingWithoutSeeingAcademic from '../assets/images/looking_without_seeing_academic.jpeg';

interface BlogSectionsProps {
  onRedactionClick: () => void;
  onFeedInteraction: () => void;
}

function AcademicFigure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="mx-auto my-6 w-full max-w-2xl overflow-hidden border border-[#3D4750] bg-[#0d1013]">
      <div className="flex w-full items-center justify-center">
        <img src={src} alt={alt} className="block h-auto w-full object-contain" />
      </div>
      <figcaption className="border-t border-[#2F3339] bg-[#1C2228] px-3 py-2 text-xs font-mono italic text-[#BDC6CE]">
        {caption}
      </figcaption>
    </figure>
  );
}

export function BlogSections({ onRedactionClick, onFeedInteraction }: BlogSectionsProps) {
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
            <span>LECTURA: 2 MIN</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Bebas_Neue'] tracking-wide text-[#DFE4EA]">
            ¿QUÉ ES LA DESENSIBILIZACIÓN?
          </h2>
          <p className="font-sans text-sm text-[#BDC6CE] mt-3 max-w-2xl leading-relaxed">
            La exposición repetida puede bajar la intensidad con la que respondemos al sufrimiento que vemos en pantalla.
          </p>
        </div>

        <AcademicFigure
          src={desensitizationAcademic}
          alt="Ilustración de una mujer rodeada de teléfonos que muestran imágenes violentas"
          caption="¿Qué es desensibilización? — Javier Hirschfeld / Getty Images."
        />

        <div className="space-y-6 font-sans text-base sm:text-lg text-[#BDC6CE] leading-relaxed mt-6">
          <p className="first-letter:text-5xl first-letter:font-['Bebas_Neue'] first-letter:float-left first-letter:mr-3 first-letter:text-[#8B191F]">
            La desensibilización no es dejar de ver: es dejar de sentir la misma perturbación. Con la repetición, una imagen que antes inquietaba puede volverse familiar.
          </p>

          <p>
            Al encontrarnos con violencia, es común sentir alerta, incomodidad o empatía. Esa reacción nos recuerda que detrás de la imagen hay una persona y una situación real.
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
            En un flujo continuo de noticias e imágenes, la atención se protege reduciendo la respuesta. La conmoción puede convertirse en costumbre; por eso la pausa y el contexto son necesarios.
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
            <span>LECTURA: 2 MIN</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Bebas_Neue'] tracking-wide text-[#DFE4EA]">
            LA REPETICIÓN
          </h2>
          <p className="font-sans text-sm text-[#BDC6CE] mt-3 max-w-2xl leading-relaxed">
            Repetir una imagen puede cambiar la forma en que la percibimos y disminuir su impacto inicial.
          </p>
        </div>

        <div className="space-y-6 font-sans text-base sm:text-lg text-[#BDC6CE] leading-relaxed mb-8">
          <p>
            Nuestro sistema perceptivo detecta con mayor fuerza lo que rompe la rutina. Cuando el mismo estímulo vuelve una y otra vez, suele perder novedad.
          </p>

          <p>
            En redes, una tragedia puede quedar rodeada de publicaciones similares. La repetición no elimina el daño, pero puede hacerlo parecer cotidiano.
          </p>
        </div>

        {/* Curva de habituación sensorial interactiva */}
        <HabituationChart />

        <div className="my-8">
          <AcademicFigure
            src={repetitionAcademic}
            alt="Ilustración de un televisor entre objetos sobre un fondo rojo"
            caption="Repetición — Ric Stultz, Drawing on Violence (2006)."
          />
        </div>

        <div className="mt-8 space-y-4 font-sans text-base sm:text-lg text-[#BDC6CE] leading-relaxed">
          <p>
            Cuando la atención depende del impacto, los medios y las plataformas pueden privilegiar lo más urgente o llamativo. El riesgo es que el dolor termine compitiendo por clics.
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
            <span>LECTURA: 2 MIN</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Bebas_Neue'] tracking-wide text-[#DFE4EA]">
            LA VIOLENCIA COMO CONTENIDO
          </h2>
          <p className="font-sans text-sm text-[#BDC6CE] mt-3 max-w-2xl leading-relaxed">
            En las plataformas, una tragedia puede transformarse en una publicación diseñada para captar atención.
          </p>
        </div>

        <AcademicFigure
          src={violenceAsContentAcademic}
          alt="Ilustración de publicaciones violentas circulando en teléfonos móviles"
          caption="La violencia como contenido — Kathryn Aurelio / Daily Trojan (2022)."
        />

        <div className="space-y-6 font-sans text-base sm:text-lg text-[#BDC6CE] leading-relaxed mt-6">
          <p>
            Una tragedia se vuelve <strong className="text-[#DFE4EA]">contenido</strong> cuando aparece como una pieza más del feed, junto a entretenimiento, publicidad y conversaciones cotidianas.
          </p>

          <p>
            Los sistemas de recomendación toman las interacciones como señales. Un clic, una reproducción o un comentario pueden hacer más visible un tipo de contenido, aunque cada plataforma opera de forma distinta.
          </p>

          <div className="border border-[#3D4750] bg-[#1C2228] p-6 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono border-b border-[#2F3339] pb-2">
              <span className="text-[#8B191F] font-bold uppercase tracking-wider">
                MEMORÁNDUM INTERNO: PLATAFORMA DE DISTRIBUCIÓN
              </span>
              <span className="text-[#7D878F]">CONFIDENCIAL // REV-09</span>
            </div>
            <p className="font-mono text-xs sm:text-sm text-[#DFE4EA] leading-relaxed">
              "La publicación aumentó la <InteractiveRedaction hiddenText="retención de audiencia" onReveal={handleInspect} /> durante sus primeras horas. El sistema insertó <InteractiveRedaction hiddenText="publicidad entre las reproducciones" onReveal={handleInspect} />, convirtiendo la atención en una métrica comercial."
            </p>
          </div>

          <p>
            Titulares, miniaturas y avisos pueden aumentar la curiosidad. La pregunta es si ayudan a comprender lo ocurrido o si solo convierten el sufrimiento en tráfico de datos.
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
            <span>LECTURA: 2 MIN</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Bebas_Neue'] tracking-wide text-[#DFE4EA]">
            MIRAR SIN VER
          </h2>
          <p className="font-sans text-sm text-[#BDC6CE] mt-3 max-w-2xl leading-relaxed">
            Mirar no siempre significa comprender: la responsabilidad aparece cuando reconocemos a quienes están detrás de una imagen.
          </p>
        </div>

        <AcademicFigure
          src={lookingWithoutSeeingAcademic}
          alt="Ilustración de una persona frente a una pantalla con los ojos cubiertos"
          caption={'Mirar sin ver — Chris Madden, "Morbid Curiosity" (2013), The Guardian.'}
        />

        <div className="space-y-6 font-sans text-base sm:text-lg text-[#BDC6CE] leading-relaxed mt-6">
          <p>
            Hay una diferencia entre <strong className="text-[#DFE4EA]">mirar</strong> una imagen y <strong className="text-[#8B191F]">ver</strong> a la persona que aparece en ella.
          </p>

          <p>
            Mirar puede ser automático: deslizamos, abrimos y pasamos a la siguiente publicación. Ver exige detenerse, buscar contexto y reconocer la dignidad de quien vive el hecho.
          </p>

          <div className="border-l-4 border-[#DFE4EA] bg-[#222830] p-6 my-6 space-y-2">
            <h4 className="font-['Bebas_Neue'] text-2xl text-[#DFE4EA] tracking-wide">
              LA CONDICIÓN DEL VOYEUR DIGITAL
            </h4>
            <p className="font-mono text-sm text-[#BDC6CE] leading-relaxed">
              La pantalla crea distancia: el daño no ocurre en nuestro cuerpo, pero sí afecta a alguien. Esa distancia puede facilitar que una situación dolorosa se perciba como espectáculo.
            </p>
          </div>

          <p>
            Ver implica preguntarse qué necesita la situación: ¿más difusión, contexto, una denuncia o simplemente no amplificar una imagen que vulnera a alguien?
          </p>

          <p className="text-[#DFE4EA] font-semibold">
            Una pausa breve puede cambiar la forma en que respondemos ante el sufrimiento ajeno.
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

      </section>

    </div>
  );
}
