import { useState } from 'react';
import { Eye, EyeOff, ShieldAlert, Sliders } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface CensoredMediaCardProps {
  imageSrc: string;
  altText: string;
  title?: string;
  caption?: string;
  caseCode?: string;
  initialCensored?: boolean;
  censorBarText?: string;
  aspectRatio?: '16:9' | '4:3' | 'wide';
}

export function CensoredMediaCard({
  imageSrc,
  altText,
  title,
  caption,
  caseCode = 'EXP-CENSURA-09',
  initialCensored = true,
  censorBarText = '██████████ [CONTENIDO CENSURADO]',
  aspectRatio = '16:9'
}: CensoredMediaCardProps) {
  // 0: Full Blackout (Crossed Eye "Contenido Sensible")
  // 1: Censored Photograph (Visible photo with heavy black bars, stamps, noise)
  // 2: Attenuated / Partially Desensitized (Translucent bars)
  const [censorMode, setCensorMode] = useState<0 | 1 | 2>(initialCensored ? 0 : 1);

  const cycleCensorship = () => {
    soundFx.playWarningBeep();
    setCensorMode((prev) => (prev === 0 ? 1 : prev === 1 ? 2 : 0));
  };

  const handleReveal = () => {
    soundFx.playWarningBeep();
    setCensorMode(1);
  };

  const handleHide = () => {
    soundFx.playClick();
    setCensorMode(0);
  };

  const aspectClass =
    aspectRatio === '4:3' ? 'aspect-4/3' : aspectRatio === 'wide' ? 'aspect-21/9' : 'aspect-16/9';

  return (
    <div className="relative border border-[#3D4750] bg-[#161B20] overflow-hidden my-4 group select-none">
      {/* Header bar of the censored media file */}
      <div className="p-2.5 bg-[#1C2228] border-b border-[#2F3339] flex items-center justify-between text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#8B191F] animate-ping" />
          <span className="text-[#BDC6CE] font-bold">{caseCode}</span>
          {title && <span className="text-[#DFE4EA] hidden sm:inline">· {title}</span>}
        </div>
        <div className="flex items-center gap-3">
          <span
            className={`px-2 py-0.5 text-[10px] font-bold uppercase ${
              censorMode === 0
                ? 'bg-[#421115] text-[#DFE4EA] border border-[#8B191F]/60'
                : censorMode === 1
                ? 'bg-[#222830] text-[#BDC6CE] border border-[#3D4750]'
                : 'bg-[#161B20] text-[#7D878F]'
            }`}
          >
            {censorMode === 0
              ? 'FILTRO TOTAL'
              : censorMode === 1
              ? 'FOTO CENSURADA'
              : 'ATENUACIÓN BAJA'}
          </span>
          <button
            onClick={cycleCensorship}
            className="flex items-center gap-1 text-[10px] text-[#7D878F] hover:text-[#DFE4EA] transition-colors cursor-pointer"
            title="Alternar nivel de censura"
          >
            <Sliders className="w-3 h-3 text-[#8B191F]" />
            <span className="hidden sm:inline">MODO</span>
          </button>
        </div>
      </div>

      {/* Media Canvas Stage */}
      <div className={`relative w-full ${aspectClass} overflow-hidden bg-[#161B20] flex items-center justify-center`}>
        {/* Real Underlying Documentary Photograph */}
        <img
          src={imageSrc}
          alt={altText}
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover transition-all duration-500 filter ${
            censorMode === 0
              ? 'blur-2xl opacity-15 grayscale'
              : censorMode === 1
              ? 'grayscale contrast-150 brightness-90 blur-[0.5px]'
              : 'grayscale contrast-125 brightness-95'
          }`}
        />

        {/* Global Film Grain & CRT Scanline Textures */}
        <div className="absolute inset-0 scanlines opacity-50 pointer-events-none" />
        <div className="absolute inset-0 grain-overlay pointer-events-none" />

        {/* ------------------------------------------------------------- */}
        {/* MODE 0: SENSITIVE CONTENT BLACKOUT (Palette styled) */}
        {/* ------------------------------------------------------------- */}
        {censorMode === 0 && (
          <div className="absolute inset-0 z-20 bg-[#161B20]/95 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center">
            {/* Animated Eye Icon */}
            <div className="animate-eye-float mb-3">
              <svg
                viewBox="0 0 100 65"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-14 h-14 text-[#DFE4EA] drop-shadow-[0_2px_10px_rgba(223,228,234,0.2)]"
                aria-hidden="true"
              >
                <path d="M 12 32.5 C 24 10, 76 10, 88 32.5 C 76 55, 24 55, 12 32.5 Z" />
                <circle cx="50" cy="32.5" r="12" className="animate-pupil fill-[#161B20]/60" />
                <line x1="78" y1="7" x2="22" y2="58" className="animate-slash-twitch stroke-[#8B191F]" />
              </svg>
            </div>

            <h4 className="font-sans text-lg font-bold text-[#DFE4EA] mb-1.5 animate-text-glitch">
              Contenido Sensible
            </h4>

            <p className="text-xs font-sans text-[#BDC6CE] max-w-xs leading-relaxed mb-4">
              Esta fotografía contiene material sensible protegido por protocolo de censura visual.
            </p>

            <button
              onClick={handleReveal}
              className="py-1.5 px-6 rounded-xl border-2 border-[#DFE4EA] bg-transparent hover:bg-[#DFE4EA] hover:text-[#161B20] text-[#DFE4EA] font-sans text-xs font-semibold tracking-wide transition-all cursor-pointer animate-btn-pulse flex items-center gap-1.5"
            >
              <span>Ver ahora</span>
              <Eye className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* MODE 1 & 2: EXPLICIT VISIBLE CENSORSHIP OVERLAYS */}
        {/* ------------------------------------------------------------- */}
        {censorMode !== 0 && (
          <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-4">
            {/* Top Red Official Stamp */}
            <div className="flex items-center justify-between">
              <div className="bg-[#8B191F] text-white font-mono font-bold text-[10px] sm:text-xs px-2.5 py-0.5 tracking-wider uppercase shadow-md flex items-center gap-1.5">
                <ShieldAlert className="w-3 h-3" />
                <span>[IMAGEN RETIRADA // CENSURADA]</span>
              </div>
              <div className="bg-[#1C2228]/90 border border-[#3D4750] px-2 py-0.5 text-[9px] font-mono text-[#BDC6CE]">
                ACTA: #4092-B
              </div>
            </div>

            {/* Heavy Censor Bars crossing the center of the photo */}
            <div className="w-full flex flex-col items-center gap-2 my-auto">
              <div className="w-4/5 sm:w-3/5 py-1.5 px-4 bg-[#161B20] border border-[#3D4750] shadow-[0_4px_20px_rgba(22,27,32,0.9)] flex items-center justify-center">
                <span className="font-mono text-xs text-[#DFE4EA] font-bold tracking-widest text-center truncate">
                  {censorBarText}
                </span>
              </div>
              <div className="w-3/5 sm:w-2/5 py-1 bg-[#1C2228] text-center border border-[#2F3339]">
                <span className="font-mono text-[10px] text-[#7D878F] tracking-widest">
                  ████████████████████
                </span>
              </div>
            </div>

            {/* Bottom bar with Hide button affordance */}
            <div className="flex items-center justify-between pointer-events-auto">
              <span className="text-[10px] font-mono text-[#BDC6CE] bg-[#161B20]/90 px-2 py-0.5 border border-[#2F3339]">
                CENSURA VISUAL APLICADA
              </span>
              <button
                onClick={handleHide}
                className="py-1 px-2.5 bg-[#1C2228]/95 hover:bg-[#222830] border border-[#3D4750] hover:border-[#8B191F] text-[#DFE4EA] font-mono text-[10px] transition-colors cursor-pointer flex items-center gap-1"
              >
                <EyeOff className="w-3 h-3 text-[#8B191F]" />
                <span>Ocultar</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Caption footer */}
      {caption && (
        <div className="p-2.5 bg-[#1C2228] border-t border-[#2F3339] text-xs font-mono text-[#7D878F] flex items-center justify-between">
          <p className="line-clamp-1 italic text-[#BDC6CE]">{caption}</p>
          <span className="text-[10px] text-[#41474F] shrink-0 ml-2">
            [FOTOGRAFÍA DOCUMENTAL]
          </span>
        </div>
      )}
    </div>
  );
}
