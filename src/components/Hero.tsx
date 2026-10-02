import { useState } from 'react';
import { AlertTriangle, ArrowDown, Eye, GraduationCap, Users, HelpCircle } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface HeroProps {
  onScrollDown: () => void;
  onInitialWarningDismissed: () => void;
}

export function Hero({ onScrollDown, onInitialWarningDismissed }: HeroProps) {
  const [initialWarningOpen, setInitialWarningOpen] = useState(true);

  const handleDismissWarning = () => {
    soundFx.playClick();
    setInitialWarningOpen(false);
    onInitialWarningDismissed();
  };

  return (
    <section id="inicio" className="relative min-h-[95vh] flex flex-col justify-between border-b border-[#3D4750] overflow-hidden bg-[#161B20]">
      {/* Background with Censored Imagery, Scrim, Scanlines and Redaction Blocks */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <img
          src="/src/assets/images/crowd_protest_night_1790902285273.jpg"
          alt="Siluetas de multitud en tensión nocturna"
          className="w-full h-full object-cover opacity-20 filter grayscale contrast-150 blur-[2px] scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Dark Scrim using palette deep charcoal */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#161B20] via-[#161B20]/90 to-[#161B20]/80" />
        <div className="absolute inset-0 scanlines opacity-50" />
        <div className="absolute inset-0 grain-overlay" />

        {/* Floating Heavy Censorship Bars in Background */}
        <div className="absolute top-16 right-8 md:right-24 bg-[#1C2228] border border-[#3D4750] px-4 py-1.5 flex items-center gap-3 rotate-[-1deg] opacity-85">
          <span className="w-2 h-2 bg-[#8B191F] animate-ping" />
          <span className="font-mono text-xs text-[#BDC6CE] tracking-widest font-bold">
            [IMAGEN RETIRADA // FOLIO 881-B]
          </span>
        </div>

        <div className="absolute bottom-28 left-6 md:left-16 bg-[#1C2228] border border-[#3D4750] px-3 py-1 hidden sm:flex items-center gap-2 rotate-[2deg] opacity-75">
          <span className="font-mono text-[11px] text-[#8B191F] tracking-wider font-bold">
            [CONTENIDO CENSURADO POR DISPOSICIÓN DE RED]
          </span>
        </div>
      </div>

      {/* Top Academic Metadata Header Line */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 pt-6 flex flex-wrap items-center justify-between text-xs font-mono text-[#7D878F] gap-2 border-b border-[#2F3339] pb-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[#8B191F] font-bold flex items-center gap-1">
            <GraduationCap className="w-3.5 h-3.5" />
            INVESTIGACIÓN ACADÉMICA
          </span>
        </div>

        <div className="flex items-center gap-3">
        </div>
      </div>

      {/* Centerpiece: Headline & Narrative Thesis */}
      <div className="relative z-10 max-w-5xl mx-auto w-full px-4 sm:px-6 py-10 md:py-16 text-center flex flex-col items-center">
        {/* Sole Initial Warning (Level 1: High Salience) */}
        {initialWarningOpen ? (
          <div className="w-full max-w-2xl mb-8 border-2 border-[#8B191F] bg-[#421115]/90 p-4 md:p-5 shadow-[0_0_30px_rgba(139,25,31,0.35)] flex flex-col sm:flex-row items-center justify-between gap-4 animate-alert-pulse">
            <div className="flex items-center gap-3 text-left">
              <div className="p-2 bg-[#8B191F] text-[#DFE4EA] shrink-0">
                <AlertTriangle className="w-6 h-6 animate-warning-fast" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-[#DFE4EA] tracking-widest uppercase">
                  ADVERTENCIA PRIMARIA (1/1)
                </div>
                <p className="text-xs md:text-sm font-mono text-[#DFE4EA] mt-0.5">
                  Estás ingresando a un espacio sobre la construcción social de la sensibilidad frente a la violencia. Tu atención está siendo monitoreada.
                </p>
              </div>
            </div>
            <button
              onClick={handleDismissWarning}
              className="w-full sm:w-auto shrink-0 py-2 px-4 bg-[#8B191F] hover:bg-[#9E1B23] text-white font-mono text-xs font-bold tracking-wider transition-colors cursor-pointer border border-[#8B191F]"
            >
              [ ENTERADO ]
            </button>
          </div>
        ) : (
          <div className="mb-8 font-mono text-[11px] text-[#7D878F] tracking-widest uppercase flex items-center gap-2">
            <span className="text-[#8B191F] font-bold">✓</span>
            <span>ADVERTENCIA 01 LEÍDA Y DESCARTADA POR EL ESPECTADOR</span>
          </div>
        )}

        {/* Academic Subject Kicker */}
        <div className="text-xs sm:text-sm font-mono tracking-widest text-[#8B191F] uppercase font-bold mb-3">
          TEMA: LA CONSTRUCCIÓN SOCIAL DE LA SENSIBILIDAD FRENTE A LA VIOLENCIA
        </div>

        {/* Main Striking Title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-['Bebas_Neue'] tracking-tight text-[#DFE4EA] leading-none mb-6 drop-shadow-[0_10px_20px_rgba(22,27,32,0.9)] animate-glitch">
          ¿TODAVÍA TE SENSIBILIZA?
        </h1>

        {/* Censor bar graphic below headline */}
        <div className="w-full max-w-xl mx-auto flex items-center justify-center gap-1 mb-6 opacity-90">
          <div className="h-2 w-16 bg-[#8B191F]" />
          <div className="h-2 flex-1 bg-[#1C2228] border border-[#3D4750]" />
          <div className="h-2 w-28 bg-[#DFE4EA]" />
          <div className="h-2 flex-1 bg-[#1C2228] border border-[#3D4750]" />
          <div className="h-2 w-12 bg-[#8B191F]" />
        </div>

        {/* Core Problem Question from PDF */}
        <div className="border border-[#3D4750] bg-[#1C2228] p-4 sm:p-5 max-w-3xl mx-auto mb-6 text-left sm:text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#8B191F] font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            PREGUNTA PROBLEMA CENTRAL:
          </div>
          <p className="font-['Bebas_Neue'] text-xl sm:text-2xl md:text-3xl text-[#DFE4EA] tracking-wide leading-snug">
            "¿CÓMO LOS MECANISMOS DE SELECCIÓN, CENSURA Y CIRCULACIÓN DE IMÁGENES DE VIOLENCIA INFLUYEN EN AQUELLO QUE UNA COMUNIDAD CONSIDERA DIGNO DE MIRAR, SENTIR Y RECORDAR?"
          </p>
        </div>

        {/* Crucial Thesis Statement */}
        <p className="font-mono text-xs sm:text-sm text-[#BDC6CE] max-w-2xl mx-auto leading-relaxed border-l-2 border-[#8B191F] pl-4 text-left">
          <strong className="text-[#DFE4EA] block mb-1">
            "La censura puede ocultar una imagen. La sobreexposición puede ocultar su significado."
          </strong>
          En la contemporaneidad, nuestra relación con la violencia no depende únicamente de cuánto sufrimiento vemos, sino de qué sufrimiento se nos permite ver, cómo se representa, quién lo protagoniza, cuánto tiempo permanece frente a nosotros y qué nos impulsa a mirarlo.
        </p>

        {/* Redacted Quote Snippet */}
        <div className="mt-8 border border-[#3D4750] bg-[#1C2228] px-4 py-2.5 max-w-xl font-mono text-xs text-[#BDC6CE] flex items-center gap-3">
          <span className="text-[#8B191F] font-bold">REGISTRO:</span>
          <span>"LA IMAGEN FUE <span className="bg-[#161B20] text-[#7D878F] px-1 font-bold">███████████</span> EL 14 DE AGOSTO."</span>
        </div>
      </div>

      {/* Bottom Bar: Indicator & Scroll Trigger */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 pb-6 flex items-center justify-between text-xs font-mono text-[#7D878F]">
        <div className="flex items-center gap-2">
          <Eye className="w-3.5 h-3.5 text-[#8B191F]" />
          <span className="hidden sm:inline">DISPOSITIVO VISUAL:</span>
          <span className="text-[#DFE4EA]">BLOG CRÍTICO EN ORDEN CRONOLÓGICO INVERSO</span>
        </div>

        <button
          onClick={onScrollDown}
          className="flex items-center gap-2 text-[#BDC6CE] hover:text-[#DFE4EA] transition-colors cursor-pointer group"
        >
          <span className="tracking-widest">INGRESAR A LOS ARTÍCULOS</span>
          <ArrowDown className="w-4 h-4 text-[#8B191F] group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
