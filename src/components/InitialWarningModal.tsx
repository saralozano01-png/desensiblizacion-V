import { useState } from 'react';
import { soundFx } from '../utils/audio';

interface InitialWarningModalProps {
  isOpen: boolean;
  onAccept: () => void;
  onExit: () => void;
}

export function InitialWarningModal({ isOpen, onAccept, onExit }: InitialWarningModalProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  if (!isOpen) return null;

  const handleContinue = () => {
    soundFx.playWarningBeep();
    setIsOpening(true);
    setTimeout(() => {
      onAccept();
    }, 380);
  };

  const handleExit = () => {
    soundFx.playClick();
    onExit();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="sensitive-title"
      className={`fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#161B20] select-none transition-all duration-300 ${
        isOpening ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Moving Ambient Scanlines & Texture */}
      <div className="absolute inset-0 scanlines-animated opacity-55 pointer-events-none" />
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      {/* Subtle pulsing background vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#161B20]/60 to-[#161B20] pointer-events-none" />

      {/* Center Interactive Stage */}
      <div className="relative z-10 w-full max-w-lg flex flex-col items-center justify-center text-center">
        {/* Subtle Live Warning Status Chip */}
        <div className="mb-5 inline-flex items-center gap-2 border border-[#3D4750] bg-[#1C2228] px-3 py-1 text-[11px] font-mono tracking-widest text-[#BDC6CE]">
          <span className="w-2 h-2 rounded-full bg-[#8B191F] animate-ping" />
          <span className="text-[#8B191F] font-bold">AVISO DE CLASIFICACIÓN</span>
          <span className="text-[#41474F]">·</span>
          <span>FILTRO ACTIVO</span>
        </div>

        {/* Dynamic Animated Crossed Eye Icon */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="mb-6 relative flex items-center justify-center cursor-pointer group"
          title="Contenido con filtro de protección"
        >
          {/* Subtle Ambient Glow behind Eye */}
          <div
            className={`absolute -inset-4 rounded-full transition-all duration-500 blur-xl ${
              isHovered
                ? 'bg-[#8B191F]/30 scale-125'
                : 'bg-white/5 scale-100'
            }`}
          />

          {/* Eye SVG with floating, pupil breathing and slash twitching */}
          <div className="animate-eye-float">
            <svg
              viewBox="0 0 100 65"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`w-28 h-28 sm:w-32 sm:h-32 transition-colors duration-300 drop-shadow-[0_4px_16px_rgba(223,228,234,0.15)] ${
                isHovered ? 'text-white' : 'text-[#DFE4EA]'
              }`}
              aria-hidden="true"
            >
              {/* Outer eye almond shape */}
              <path
                d="M 12 32.5 C 24 10, 76 10, 88 32.5 C 76 55, 24 55, 12 32.5 Z"
                className="transition-all duration-300 group-hover:stroke-white"
              />

              {/* Pupil / iris circle with breathing pulse animation */}
              <circle
                cx="50"
                cy="32.5"
                r="12"
                className="animate-pupil fill-[#161B20]/80"
              />

              {/* Diagonal slash with subtle twitch and red glitch shadow */}
              <line
                x1="78"
                y1="7"
                x2="22"
                y2="58"
                className="animate-slash-twitch transition-all duration-300 group-hover:stroke-[#9E1B23]"
              />
            </svg>
          </div>
        </div>

        {/* Main Title in Spanish: Contenido Sensible */}
        <h1
          id="sensitive-title"
          className="text-3xl sm:text-4xl font-bold font-sans text-[#DFE4EA] tracking-normal mb-3 animate-text-glitch"
        >
          Contenido Sensible
        </h1>

        {/* Description in Spanish */}
        <div className="space-y-2 max-w-md mx-auto mb-8 font-sans px-2">
          <p className="text-sm sm:text-base text-[#DFE4EA]/90 leading-relaxed font-normal">
            Este medio contiene contenido sensible que algunas personas pueden encontrar ofensivo o perturbador.
          </p>
          <p className="text-xs sm:text-sm text-[#7D878F] leading-relaxed font-mono">
            (Investigación experimental sobre la pérdida de sensibilidad y violencia digital)
          </p>
        </div>

        {/* Actions: "Ver ahora" Button with Radar Pulse Ring */}
        <div className="flex flex-col items-center gap-4 w-full">
          <button
            onClick={handleContinue}
            className="relative w-full max-w-[220px] py-3 px-8 rounded-xl border-2 border-[#DFE4EA] bg-transparent text-[#DFE4EA] font-sans font-semibold text-base tracking-wide hover:bg-[#DFE4EA] hover:text-[#161B20] active:scale-95 transition-all duration-200 cursor-pointer animate-btn-pulse group overflow-hidden"
          >
            {/* Shimmer reflection sweep on hover */}
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>Ver ahora</span>
              <span className="text-xs opacity-70 group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </button>

          {/* Secondary quiet exit link */}
          <button
            onClick={handleExit}
            className="text-xs font-mono text-[#7D878F] hover:text-[#8B191F] transition-colors cursor-pointer pt-1"
          >
            [ Salir / Prefiero no ingresar ]
          </button>
        </div>
      </div>
    </div>
  );
}
