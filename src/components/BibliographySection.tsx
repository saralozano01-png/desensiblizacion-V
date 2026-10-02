import { BookOpen } from 'lucide-react';
import { academicBibliography } from '../data/blogArticles';

export function BibliographySection() {
  return (
    <section id="bibliografia" className="max-w-4xl mx-auto px-4 sm:px-6 my-20 scroll-mt-20">
      <div className="border-b border-[#3D4750] pb-4 mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-[#8B191F] mb-2 uppercase font-bold tracking-widest">
          <BookOpen className="w-4 h-4" />
          <span>APARATO CRÍTICO // FUENTES ACADÉMICAS</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-['Bebas_Neue'] tracking-wide text-[#DFE4EA] leading-none">
          BIBLIOGRAFÍA & MARCO TEÓRICO
        </h2>
        <p className="text-xs font-mono text-[#7D878F] mt-2">
          Fuentes fundamentales sobre la construcción social de la sensibilidad ante la violencia.
        </p>
      </div>

      <div className="space-y-4">
        {academicBibliography.map((item) => (
          <div
            key={item.id}
            className="p-4 border border-[#3D4750] bg-[#1C2228] hover:border-[#7D878F] transition-colors font-mono text-xs space-y-1.5"
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
              <strong className="text-[#DFE4EA]">Aporte conceptual:</strong> {item.concept}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
