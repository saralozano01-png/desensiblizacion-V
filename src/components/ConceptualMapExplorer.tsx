import { useState } from 'react';
import { ShieldAlert, Radio, Users, GitBranch, Zap, Layers } from 'lucide-react';
import { soundFx } from '../utils/audio';

export function ConceptualMapExplorer() {
  const [activeNode, setActiveNode] = useState<'censura' | 'exposicion' | 'representacion' | 'comunidad'>('censura');

  const handleSelectNode = (node: 'censura' | 'exposicion' | 'representacion' | 'comunidad') => {
    soundFx.playClick();
    setActiveNode(node);
  };

  const nodeData = {
    censura: {
      title: '1. CENSURA // PROTECCIÓN VS. CONTROL',
      subtitle: '¿Quién decide qué es demasiado perturbador para los ojos del público?',
      theorists: 'Judith Butler · Stanley Cohen',
      tags: ['Algorítmica', 'Institucional', 'Pixelado', 'Desenfoque', 'Advertencia'],
      description:
        'La censura nunca es un acto puramente técnico o neutral. Opera en dos niveles: institucional (códigos penales, leyes estatales y secretismo oficial) y algorítmico (las normas comunitarias automatizadas de Meta, TikTok y X). Su intervención material —a través de pixelados, blur y pantallas de "Contenido Sensible"— ejerce una tutela moral sobre la comunidad consumidora, decidiendo qué crímenes se vuelven materia de debate público y cuáles son arrojados al silencio o desclasificados selectivamente.',
      questions: [
        '¿A quién protege realmente el desenfoque: a la dignidad de la víctima o a la tranquilidad del espectador?',
        '¿Cómo la censura selectiva produce una ceguera voluntaria en la comunidad?',
        '¿Por qué las advertencias de contenido terminan operando como amplificadores del morbo?'
      ]
    },
    exposicion: {
      title: '2. EXPOSICIÓN // REPETICIÓN & VIRALIDAD',
      subtitle: 'La economía de la atención alimentada por la inmediatez y el horror cotidiano',
      theorists: 'Suzanne Oosterwijk · Jeanne Funk Brockmyer · Susan Sontag',
      tags: ['True Crime', 'Accidentes', 'Viralidad', 'Saturación', 'Morbo', 'Desensibilización'],
      description:
        'En el polo opuesto de la censura está la sobreexposición ininterrumpida. Géneros enteros de la red (True Crime, hilos de accidentes, filtraciones de peleas callejeras y canales de Telegram) circulan a gran velocidad. La respuesta psicológica del usuario ante este flujo es triple: una empatía fugaz que colapsa ante la saturación, una curiosidad mórbida biológicamente recompensada por el estriado ventral (Oosterwijk) y una desensibilización progresiva del sistema nervioso (Funk Brockmyer).',
      questions: [
        '¿En qué momento la saturación de imágenes de dolor deja de informar y comienza a anestesiar?',
        '¿Por qué la mente busca voluntariamente ver escenas de peligro letal?',
        '¿Cómo la inmediatez del feed elimina el tiempo necesario para el duelo colectivo?'
      ]
    },
    representacion: {
      title: '3. REPRESENTACIÓN // FRAMING (ENCUADRE)',
      subtitle: '¿Quién tiene rostro y quién es reducido a un dato estadístico?',
      theorists: 'Judith Butler (Frames of War) · Paul Slovic (Psychic Numbing)',
      tags: ['Víctima Identificable', 'No Identificable', 'Psychic Numbing', 'Titulares', 'Encuadre'],
      description:
        'La forma en que se encuadra un hecho violento determina si la audiencia sentirá indignación o indiferencia. Cuando los medios presentan a la víctima con nombre, historia familiar y rostro reconocible, activan la empatía individual. Pero cuando se presentan masas abstractas o números impersonales, ocurre el entumecimiento psíquico ("Psychic Numbing" de Paul Slovic): la respuesta afectiva se desploma a cero. El "frame" (Butler) decide qué vida es digna de ser llorada (grievable) y cuál es descartada como daño colateral.',
      questions: [
        '¿Por qué nos conmueve la muerte de una persona concreta pero ignoramos 10.000 muertos en un titular?',
        '¿Cómo los titulares sensacionalistas manipulan la escala de gravedad del suceso?',
        '¿Qué rostros tienen derecho al primer plano y cuáles quedan relegados al fondo borroso?'
      ]
    },
    comunidad: {
      title: '4. COMUNIDAD // CONSUMO ACTIVO VS. PASIVO',
      subtitle: 'Jóvenes universitarios entre la proximidad social y el distanciamiento del scroll',
      theorists: 'E. Morales (2025) · Thomas et al. (2018) · Ariella Azoulay',
      tags: ['Proximidad Física', 'Proximidad Cultural', 'Consumo Pasivo', 'Circulación Activa', 'Memes'],
      description:
        'Nuestra relación con la violencia depende de la proximidad: física, social, cultural y emocional. En el caso de los jóvenes universitarios frecuentes en redes sociales, la comunidad consumidora oscila entre el consumo pasivo (el swipe distraído que tolera cualquier atrocidad en pantalla) y la circulación activa (compartir en stories, comentar, republicar o convertir la tragedia en memes de humor negro). Esta mediación cotidiana redefine los lazos éticos y el pacto de ciudadanía visual (Azoulay).',
      questions: [
        '¿Cómo influye la proximidad geográfica o cultural en la intensidad de nuestra respuesta afectiva?',
        '¿El acto de compartir una tragedia en redes sociales genera solidaridad real o simple alivio de culpa digital?',
        '¿Qué tipo de memoria colectiva están construyendo las generaciones formadas en el scroll continuo?'
      ]
    }
  };

  const current = nodeData[activeNode];

  return (
    <section id="mapa-conceptual" className="max-w-5xl mx-auto px-4 sm:px-6 my-20 scroll-mt-20">
      {/* Section Header */}
      <div className="border-b border-[#3D4750] pb-4 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#8B191F] mb-2 uppercase font-bold tracking-widest">
            <GitBranch className="w-4 h-4" />
            <span>DISPOSITIVO TEÓRICO // MAPA CONCEPTUAL</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-['Bebas_Neue'] tracking-wide text-[#DFE4EA] leading-tight">
            LA ARQUITECTURA DE LA VISIBILIDAD
          </h2>
          <p className="text-sm font-sans text-[#BDC6CE] max-w-xl mt-1">
            Basado en la investigación académica sobre desensibilización a la violencia en medios digitales.
            Explora cómo se construye socialmente la sensibilidad frente a la violencia a través de 4 ejes interconectados.
          </p>
        </div>

        <div className="bg-[#1C2228] border border-[#3D4750] p-3 text-xs font-mono text-[#7D878F] shrink-0">
          <span className="text-[#8B191F] font-bold block mb-0.5">EJE CENTRAL:</span>
          <span className="text-[#DFE4EA] font-bold">¿Quién decide qué merece ser visto?</span>
        </div>
      </div>

      {/* Interactive Core Diagram / Navigation Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <button
          onClick={() => handleSelectNode('censura')}
          className={`p-4 text-left border transition-all cursor-pointer flex flex-col justify-between min-h-[110px] ${
            activeNode === 'censura'
              ? 'bg-[#421115]/60 border-[#8B191F] shadow-[0_0_15px_rgba(139,25,31,0.3)]'
              : 'bg-[#1C2228] border-[#3D4750] hover:border-[#7D878F] text-[#7D878F]'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-[10px] text-[#8B191F] font-bold">NODO 01</span>
            <ShieldAlert className={`w-4 h-4 ${activeNode === 'censura' ? 'text-[#8B191F]' : 'text-[#7D878F]'}`} />
          </div>
          <div>
            <div className="font-['Bebas_Neue'] text-xl text-[#DFE4EA] tracking-wide">CENSURA</div>
            <div className="text-[10px] font-mono text-[#BDC6CE]">Protección vs. Control</div>
          </div>
        </button>

        <button
          onClick={() => handleSelectNode('exposicion')}
          className={`p-4 text-left border transition-all cursor-pointer flex flex-col justify-between min-h-[110px] ${
            activeNode === 'exposicion'
              ? 'bg-[#421115]/60 border-[#8B191F] shadow-[0_0_15px_rgba(139,25,31,0.3)]'
              : 'bg-[#1C2228] border-[#3D4750] hover:border-[#7D878F] text-[#7D878F]'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-[10px] text-[#8B191F] font-bold">NODO 02</span>
            <Radio className={`w-4 h-4 ${activeNode === 'exposicion' ? 'text-[#8B191F]' : 'text-[#7D878F]'}`} />
          </div>
          <div>
            <div className="font-['Bebas_Neue'] text-xl text-[#DFE4EA] tracking-wide">EXPOSICIÓN</div>
            <div className="text-[10px] font-mono text-[#BDC6CE]">Repetición & Viralidad</div>
          </div>
        </button>

        <button
          onClick={() => handleSelectNode('representacion')}
          className={`p-4 text-left border transition-all cursor-pointer flex flex-col justify-between min-h-[110px] ${
            activeNode === 'representacion'
              ? 'bg-[#421115]/60 border-[#8B191F] shadow-[0_0_15px_rgba(139,25,31,0.3)]'
              : 'bg-[#1C2228] border-[#3D4750] hover:border-[#7D878F] text-[#7D878F]'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-[10px] text-[#8B191F] font-bold">NODO 03</span>
            <Layers className={`w-4 h-4 ${activeNode === 'representacion' ? 'text-[#8B191F]' : 'text-[#7D878F]'}`} />
          </div>
          <div>
            <div className="font-['Bebas_Neue'] text-xl text-[#DFE4EA] tracking-wide">REPRESENTACIÓN</div>
            <div className="text-[10px] font-mono text-[#BDC6CE]">Framing de la víctima</div>
          </div>
        </button>

        <button
          onClick={() => handleSelectNode('comunidad')}
          className={`p-4 text-left border transition-all cursor-pointer flex flex-col justify-between min-h-[110px] ${
            activeNode === 'comunidad'
              ? 'bg-[#421115]/60 border-[#8B191F] shadow-[0_0_15px_rgba(139,25,31,0.3)]'
              : 'bg-[#1C2228] border-[#3D4750] hover:border-[#7D878F] text-[#7D878F]'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-[10px] text-[#8B191F] font-bold">NODO 04</span>
            <Users className={`w-4 h-4 ${activeNode === 'comunidad' ? 'text-[#8B191F]' : 'text-[#7D878F]'}`} />
          </div>
          <div>
            <div className="font-['Bebas_Neue'] text-xl text-[#DFE4EA] tracking-wide">COMUNIDAD</div>
            <div className="text-[10px] font-mono text-[#BDC6CE]">Consumo activo / pasivo</div>
          </div>
        </button>
      </div>

      {/* Expanded Node Detail Canvas */}
      <div className="border border-[#3D4750] bg-[#1C2228] p-6 md:p-8 relative overflow-hidden">
        <div className="absolute inset-0 scanlines opacity-20 pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#2F3339] pb-4">
            <div>
              <span className="text-xs font-mono text-[#8B191F] font-bold tracking-widest uppercase">
                {current.title}
              </span>
              <h3 className="font-['Bebas_Neue'] text-2xl sm:text-3xl text-[#DFE4EA] tracking-wide mt-1">
                {current.subtitle}
              </h3>
            </div>
            <div className="text-xs font-mono text-[#7D878F]">
              <span className="text-[#DFE4EA] font-bold">AUTORES CLAVE:</span> {current.theorists}
            </div>
          </div>

          {/* Tags cloud */}
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {current.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 bg-[#161B20] border border-[#3D4750] text-[#BDC6CE]"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="font-sans text-sm sm:text-base text-[#DFE4EA]/90 leading-relaxed">
            {current.description}
          </p>

          {/* Key problem questions */}
          <div className="bg-[#222830] border-l-2 border-[#8B191F] p-4 space-y-2">
            <div className="text-xs font-mono font-bold text-[#8B191F] uppercase flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              PREGUNTAS CONDUCTUALES DERIVADAS:
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm font-mono text-[#BDC6CE]">
              {current.questions.map((q, qIdx) => (
                <li key={qIdx} className="flex items-start gap-2">
                  <span className="text-[#8B191F] font-bold">→</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
