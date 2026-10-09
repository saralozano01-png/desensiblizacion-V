import { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { academicBibliography } from '../data/blogArticles';
import { soundFx } from '../utils/audio';

export function BibliographySection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleBibliography = () => {
    soundFx.playClick();
    setIsExpanded((current) => !current);
  };

  return (
    <section id="bibliografia" className="max-w-4xl mx-auto px-4 sm:px-6 my-20 scroll-mt-20">
      <div className="border-b border-[#3D4750] pb-4 mb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-[#8B191F] mb-2 uppercase font-bold tracking-widest">
          <BookOpen className="w-4 h-4" />
          <span>APARATO CRÍTICO // FUENTES ACADÉMICAS</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-['Bebas_Neue'] tracking-wide text-[#DFE4EA] leading-none">
          BIBLIOGRAFÍA & MARCO TEÓRICO
        </h2>
        <p className="text-xs font-mono text-[#7D878F] mt-2">
          {academicBibliography.length} fuentes sobre visibilidad, empatía y consumo digital.
        </p>
      </div>

      <div className="border border-[#3D4750] bg-[#1C2228]">
        <button
          type="button"
          onClick={toggleBibliography}
          aria-expanded={isExpanded}
          className="w-full p-4 flex items-center justify-between gap-4 text-left hover:bg-[#222830] transition-colors"
        >
          <div>
            <p className="font-mono text-xs text-[#DFE4EA] font-bold uppercase tracking-wider">
              {isExpanded ? 'Ocultar referencias completas' : 'Ver referencias completas'}
            </p>
            <p className="text-xs text-[#7D878F] mt-1">
              Síntesis: Sontag, Butler, Azoulay, Slovic y estudios sobre redes sociales.
            </p>
          </div>
          <span className="shrink-0 flex items-center gap-2 font-mono text-xs text-[#8B191F] font-bold">
            {isExpanded ? 'COMPRIMIR' : 'DESPLEGAR'}
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </span>
        </button>

        {isExpanded && (
          <div className="border-t border-[#3D4750] p-4 space-y-3">
            {academicBibliography.map((item) => (
              <div
                key={item.id}
                className="p-3 border border-[#3D4750] bg-[#161B20] hover:border-[#7D878F] transition-colors font-mono text-xs space-y-1.5"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[#DFE4EA] font-bold leading-relaxed">
                    [{item.id}] {item.citation}
                  </span>
                  <span className="text-[10px] text-[#DFE4EA] font-bold bg-[#421115] px-2 py-0.5 border border-[#8B191F]/50 shrink-0">
                    REF #{item.id}
                  </span>
                </div>
                <p className="text-[#BDC6CE] text-[11px] font-sans">
                  <strong className="text-[#DFE4EA]">Aporte:</strong> {item.concept}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}