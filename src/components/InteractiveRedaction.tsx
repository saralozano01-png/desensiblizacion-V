import { useState } from 'react';

interface InteractiveRedactionProps {
  hiddenText: string;
  revealedByDefault?: boolean;
  onReveal?: () => void;
  className?: string;
  variant?: 'inline' | 'block' | 'headline';
}

export function InteractiveRedaction({
  hiddenText,
  revealedByDefault = false,
  onReveal,
  className = '',
  variant = 'inline'
}: InteractiveRedactionProps) {
  const [isRevealed, setIsRevealed] = useState(revealedByDefault);

  const handleClick = () => {
    if (!isRevealed) {
      setIsRevealed(true);
      onReveal?.();
    }
  };

  if (variant === 'block') {
    return (
      <div
        onClick={handleClick}
        className={`group relative cursor-pointer border border-[#3D4750] bg-[#161B20] p-3 transition-colors hover:border-[#8B191F] ${className}`}
        title="Clic para inspeccionar fragmento censurado"
      >
        <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-[#7D878F]">
          <span className="text-[#8B191F] font-bold">
            {isRevealed ? 'REVELADO' : '[FRAGMENTO CENSURADO]'}
          </span>
          <span className="text-[10px] uppercase">
            {isRevealed ? 'DESCLASIFICADO' : 'CLIC PARA FORZAR LECTURA'}
          </span>
        </div>
        <div className="mt-2 text-sm">
          {isRevealed ? (
            <p className="text-[#DFE4EA] font-mono leading-relaxed border-l-2 border-[#8B191F] pl-2 animate-glitch">
              {hiddenText}
            </p>
          ) : (
            <div className="flex flex-wrap gap-1.5 py-1">
              <span className="h-4 bg-[#222830] w-28 rounded-xs" />
              <span className="h-4 bg-[#222830] w-44 rounded-xs" />
              <span className="h-4 bg-[#222830] w-20 rounded-xs" />
              <span className="h-4 bg-[#222830] w-64 rounded-xs" />
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <span
      onClick={handleClick}
      title={isRevealed ? 'Texto desclasificado' : 'Clic para revelar término'}
      className={`inline-block cursor-pointer font-mono transition-all duration-200 select-none ${
        isRevealed
          ? 'bg-[#421115] text-[#DFE4EA] px-1 border-b border-[#8B191F]'
          : 'bg-[#161B20] text-[#7D878F] hover:bg-[#222830] hover:text-[#BDC6CE] px-1.5'
      } ${className}`}
    >
      {isRevealed ? hiddenText : '████████'}
    </span>
  );
}
