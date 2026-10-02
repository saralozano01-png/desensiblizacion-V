import { useState } from 'react';
import { Palette } from 'lucide-react';
import { soundFx } from '../utils/audio';

export function ArtReferentsSection() {
  const [selectedCase, setSelectedCase] = useState<number>(0);

  const referents = [
    {
      title: 'Martha Rosler: The Gray Drape (2008)',
      series: 'House Beautiful: Bringing the War Home',
      author: 'Martha Rosler (Artista conceptual & activista estadounidense)',
      description:
        'Rosler combina fotografías del horror de la guerra con imágenes de espacios domésticos y salas de estar tomadas de revistas de diseño y arquitectura. Mediante estos violentos contrastes, Rosler cuestiona la distancia obscena entre quienes experimentan la metralla y quienes la observan a través de los medios en la comodidad de su hogar.',
      keyConcept: 'Desmitificación del consumo burgués del dolor ajeno.',
      quote: '¿Cómo podemos seguir decorando la sala mientras el mundo arde al otro lado de la cortina?'
    },
    {
      title: 'Ángel Boligán: "Sociedad Moderna"',
      series: 'Caricatura Editorial · Diario El Universal',
      author: 'Ángel Boligán (Caricaturista editorial internacional)',
      description:
        'En la orilla de una playa, una persona levanta la mano ahogándose en el agua pidiendo auxilio desesperadamente. Frente a ella, un grupo de turistas y transeúntes apunta sus teléfonos móviles para grabarlo en video en lugar de tenderle la mano. El auxilio humano ha sido reemplazado por la producción de contenido viral.',
      keyConcept: 'El espectador como camarógrafo desvinculado de la compasión.',
      quote: 'Si no lo filmo con mi teléfono, la tragedia no existe; pero si lo filmo, eludo la obligación de salvarlo.'
    },
    {
      title: 'Carlos Villalón: Infancia y Conflicto Urbano',
      series: 'Fotoperiodismo indexado · Getty Images',
      author: 'Carlos Villalón (Fotógrafo documental en zonas de conflicto)',
      description:
        'Un niño pequeño con mochila escolar camina hacia su casa mientras en el tejado de ladrillo militares fuertemente armados vigilan el barrio con fusiles de asalto. La violencia armada se convierte en el paisaje cotidiano de la infancia: cuando la guerra es el entorno basal, deja de percibirse como una anomalía.',
      keyConcept: 'La habituación ecológica de la violencia en la cotidianidad colombiana.',
      quote: 'El niño no corre ni se asusta: caminar junto a fusiles de asalto es simplemente su camino a la escuela.'
    },
    {
      title: 'El Sillón de las Pantallas Múltiples',
      series: 'Sátira Gráfica · Revista Puntos',
      author: 'Ilustración editorial satírica contemporánea',
      description:
        'Un hombre sentado en un sillón come palomitas de maíz con expresión vacía mientras está rodeado de 5 pantallas flotantes (tablets, teléfonos, televisores) que transmiten incendios, desastres naturales y catástrofes en tiempo real. La saciedad del espectador no proviene de la comida, sino de la estimulación ininterrumpida de desgracias.',
      keyConcept: 'El voyeurismo pasivo y la saturación sensorial como dieta digital.',
      quote: 'Consumir el fin del mundo como si fuera una serie de televisión de bajo presupuesto.'
    }
  ];

  return (
    <section id="referentes" className="max-w-4xl mx-auto px-4 sm:px-6 my-20 scroll-mt-20">
      <div className="border-b border-[#3D4750] pb-4 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#8B191F] mb-2 uppercase font-bold tracking-widest">
            <Palette className="w-4 h-4" />
            <span>ESTÉTICA CRÍTICA // REFERENTES ARTÍSTICOS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-['Bebas_Neue'] tracking-wide text-[#DFE4EA] leading-none">
            EL ARTE ANTE EL CONSUMO DEL DOLOR
          </h2>
        </div>
        <span className="text-xs font-mono text-[#7D878F]">
          DOCUMENTACIÓN DE INVESTIGACIÓN ACADÉMICA
        </span>
      </div>

      {/* Referents selector tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
        {referents.map((item, idx) => (
          <button
            key={idx}
            onClick={() => {
              soundFx.playClick();
              setSelectedCase(idx);
            }}
            className={`p-3 text-left border transition-all cursor-pointer font-mono text-xs ${
              selectedCase === idx
                ? 'bg-[#421115]/60 border-[#8B191F] text-[#DFE4EA] font-bold'
                : 'bg-[#1C2228] border-[#3D4750] hover:border-[#7D878F] text-[#7D878F]'
            }`}
          >
            <div className="text-[10px] text-[#8B191F] font-bold">CASO 0{idx + 1}</div>
            <div className="truncate mt-1 text-[11px]">{item.title.split(':')[0]}</div>
          </button>
        ))}
      </div>

      {/* Active Case Detail Canvas */}
      <div className="border border-[#3D4750] bg-[#1C2228] p-6 md:p-8 relative overflow-hidden space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#2F3339] pb-3 gap-2">
          <div>
            <span className="text-[11px] font-mono text-[#8B191F] font-bold uppercase tracking-wider">
              {referents[selectedCase].series}
            </span>
            <h3 className="font-['Bebas_Neue'] text-3xl text-[#DFE4EA] tracking-wide mt-0.5">
              {referents[selectedCase].title}
            </h3>
          </div>
          <span className="text-xs font-mono text-[#BDC6CE] bg-[#161B20] px-2.5 py-1 border border-[#3D4750]">
            {referents[selectedCase].author}
          </span>
        </div>

        <p className="font-sans text-sm sm:text-base text-[#BDC6CE] leading-relaxed">
          {referents[selectedCase].description}
        </p>

        <div className="border-l-2 border-[#8B191F] bg-[#222830] p-4 font-mono text-xs sm:text-sm text-[#DFE4EA] italic">
          "{referents[selectedCase].quote}"
        </div>

        <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#7D878F]">
          <div>
            <strong className="text-[#DFE4EA]">CONCEPTO CENTRAL:</strong> {referents[selectedCase].keyConcept}
          </div>
          <span className="text-[10px] text-[#41474F] uppercase hidden sm:inline">ANÁLISIS TEÓRICO-VISUAL</span>
        </div>
      </div>
    </section>
  );
}
