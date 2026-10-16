import { useState } from 'react';
import { EyeOff, ShieldAlert, Sliders } from 'lucide-react';
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
  // La censura conserva la imagen visible: usa desenfoque y capas traslúcidas,
  // no un bloqueo negro que elimine por completo el contexto visual.
  const [censorMode, setCensorMode] = useState<1 | 2>(initialCensored ? 1 : 2);

  const cycleCensorship = () => {
    soundFx.playWarningBeep();
    setCensorMode((prev) => (prev === 1 ? 2 : 1));
  };

  const handleHide = () => {
    soundFx.playClick();
    setCensorMode(1);
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
              censorMode === 1
                ? 'bg-[#421115] text-[#DFE4EA] border border-[#8B191F]/60'
                : 'bg-[#222830] text-[#BDC6CE] border border-[#3D4750]'
            }`}
          >
            {censorMode === 1 ? 'FILTRO DIFUSO' : 'ATENUACIÓN BAJA'}
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
          className={`w-full h-full object-contain transition-all duration-500 filter ${
            censorMode === 1
              ? 'contrast-110 brightness-75 blur-md scale-105'
              : 'contrast-110 brightness-95 blur-[0.5px]'
          }`}
        />

        {/* Global Film Grain & CRT Scanline Textures */}
        <div className="absolute inset-0 scanlines opacity-50 pointer-events-none" />
        <div className="absolute inset-0 grain-overlay pointer-events-none" />

        {(
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
            <div className="w-full flex flex-col items-center gap-1.5 mt-auto mb-10 sm:mb-14">
              <div className={`w-3/5 sm:w-2/5 py-1 px-3 border border-[#DFE4EA]/25 shadow-[0_4px_14px_rgba(22,27,32,0.35)] backdrop-blur-sm flex items-center justify-center ${censorMode === 1 ? 'bg-[#161B20]/55' : 'bg-[#161B20]/25'}`}>
                <span className="font-mono text-[10px] text-[#DFE4EA] font-bold tracking-wide text-center truncate">
                  {censorBarText}
                </span>
              </div>
              <div className={`w-2/5 sm:w-1/4 py-0.5 text-center border border-[#DFE4EA]/15 backdrop-blur-sm ${censorMode === 1 ? 'bg-[#1C2228]/50' : 'bg-[#1C2228]/20'}`}>
                <span className="font-mono text-[8px] text-[#7D878F] tracking-wide">
                  ████████████████████
                </span>
              </div>
            </div>

            {/* Bottom bar with Hide button affordance */}
            <div className="flex items-center justify-between pointer-events-auto">
              <span className="text-[10px] font-mono text-[#DFE4EA] bg-[#161B20]/45 backdrop-blur-sm px-2 py-0.5 border border-[#DFE4EA]/20">
                CENSURA DIFUSA APLICADA
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
