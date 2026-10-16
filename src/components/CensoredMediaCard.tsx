import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
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
  censorBarText: _censorBarText = 'CONTENIDO SENSIBLE',
  aspectRatio = '16:9'
}: CensoredMediaCardProps) {
  const [isHidden, setIsHidden] = useState(initialCensored);

  const showImage = () => {
    soundFx.playWarningBeep();
    setIsHidden(false);
  };

  const handleHide = () => {
    soundFx.playClick();
    setIsHidden(true);
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
        <span className={`text-[10px] font-bold uppercase ${isHidden ? 'text-[#8B191F]' : 'text-[#7D878F]'}`}>
          {isHidden ? 'CONTENIDO SENSIBLE' : 'IMAGEN VISIBLE'}
        </span>
      </div>

      {/* Media Canvas Stage */}
      <div className={`relative w-full ${aspectClass} overflow-hidden bg-[#161B20] flex items-center justify-center`}>
        {/* Real Underlying Documentary Photograph */}
        <img
          src={imageSrc}
          alt={altText}
          referrerPolicy="no-referrer"
          className={`w-full h-full object-contain transition-all duration-500 ${isHidden ? 'scale-105 blur-md brightness-75' : ''}`}
        />

        {isHidden ? (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#161B20]/35 p-4 text-center">
            <div className="border border-[#DFE4EA]/60 bg-[#161B20]/85 px-5 py-4 shadow-lg backdrop-blur-sm">
              <p className="font-mono text-xs font-bold tracking-wider text-[#DFE4EA]">CONTENIDO SENSIBLE</p>
              <button onClick={showImage} className="mt-3 inline-flex items-center gap-1.5 border border-[#DFE4EA] px-3 py-1.5 font-mono text-xs font-bold text-[#DFE4EA] transition-colors hover:bg-[#DFE4EA] hover:text-[#161B20]"><Eye className="h-3.5 w-3.5" /> Ver imagen</button>
            </div>
          </div>
        ) : (
          <div className="absolute bottom-3 right-3 z-10">
            <button onClick={handleHide} className="flex items-center gap-1 bg-[#161B20]/80 px-2.5 py-1.5 font-mono text-[10px] text-[#DFE4EA] opacity-0 transition-opacity hover:bg-[#222830] group-hover:opacity-100 focus:opacity-100"><EyeOff className="h-3 w-3" /> Ocultar</button>
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
