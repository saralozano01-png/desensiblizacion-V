import { useState } from 'react';
import { Volume2, VolumeX, Menu, X, Radio, Eye, Zap } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface NavbarProps {
  activeSection: string;
  scrollProgress: number;
  warningsProcessed: number;
  desensitizationRate: number;
  habituationBehavior?: 'slow_reflective' | 'moderate' | 'fast_desensitized';
  behaviorLabel?: string;
  scrollSpeed?: number;
  onNavigate: (sectionId: string) => void;
}

export function Navbar({
  activeSection,
  scrollProgress,
  warningsProcessed,
  desensitizationRate,
  habituationBehavior = 'moderate',
  behaviorLabel = 'LECTURA MODERADA',
  scrollSpeed = 0,
  onNavigate
}: NavbarProps) {
  const [audioActive, setAudioActive] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'inicio', label: 'INICIO' },
    { id: 'articulos', label: 'BLOG' },
    { id: 'mapa-conceptual', label: 'MAPA CONCEPTUAL' },
    { id: 'feed', label: 'FEED SOCIAL' },
    { id: 'referentes', label: 'REFERENTES' },
    { id: 'bibliografia', label: 'BIBLIOGRAFÍA' },
    { id: 'reflexion', label: 'REFLEXIÓN' }
  ];

  const toggleAudio = () => {
    const nextState = !audioActive;
    setAudioActive(nextState);
    soundFx.enabled = nextState;
    if (nextState) soundFx.playClick();
  };

  const handleNavClick = (id: string) => {
    soundFx.playClick();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const isLowHabituation = habituationBehavior === 'slow_reflective';
  const isHighHabituation = habituationBehavior === 'fast_desensitized';

  return (
    <header className="sticky top-0 z-40 w-full bg-[#161B20]/95 backdrop-blur-md border-b border-[#3D4750]">
      {/* Reading Progress Indicator */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-[#8B191F] transition-all duration-150 z-50 shadow-[0_0_8px_#8B191F]"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={scrollProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        {/* Zone 1: Wordmark / Title */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('inicio')}
            className="flex items-center gap-2 text-left group cursor-pointer"
          >
            <div className="w-2.5 h-2.5 bg-[#8B191F] animate-warning-fast" />
            <span className="font-['Bebas_Neue'] text-xl md:text-2xl tracking-wider text-[#DFE4EA] group-hover:text-[#8B191F] transition-colors">
              ¿TODAVÍA TE SENSIBILIZA?
            </span>
          </button>
        </div>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-5 text-xs font-mono tracking-wider">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative py-1 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  isActive
                    ? 'text-[#DFE4EA] font-bold'
                    : 'text-[#7D878F] hover:text-[#DFE4EA]'
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 bg-[#8B191F] inline-block animate-pulse" />
                )}
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute -bottom-[15px] left-0 right-0 h-[2px] bg-[#8B191F]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Actions & Live Intelligent Habituation Meter */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Live Desensitization & Attention Meter */}
          <div
            className={`hidden sm:flex items-center gap-2 border px-2.5 py-1 text-[11px] font-mono transition-colors ${
              isHighHabituation
                ? 'border-[#8B191F] bg-[#421115]/80 text-[#DFE4EA]'
                : isLowHabituation
                ? 'border-[#41474F] bg-[#161B20] text-[#889826]'
                : 'border-[#3D4750] bg-[#222830] text-[#BDC6CE]'
            }`}
            title="Monitoreo inteligente: si te detienes a leer los textos, la habituación es baja. Si bajas rápido, la habituación sube."
          >
            {isHighHabituation ? (
              <Zap className="w-3.5 h-3.5 text-[#8B191F] animate-warning-fast shrink-0" />
            ) : isLowHabituation ? (
              <Eye className="w-3.5 h-3.5 text-[#889826] shrink-0" />
            ) : (
              <Radio className="w-3 h-3 text-[#8B191F] shrink-0" />
            )}

            <span className="text-[#7D878F] hidden md:inline">HABITUACIÓN:</span>
            <span
              className={`font-bold tabular-nums ${
                isHighHabituation
                  ? 'text-[#8B191F]'
                  : isLowHabituation
                  ? 'text-[#889826]'
                  : 'text-[#DFE4EA]'
              }`}
            >
              {Math.min(100, Math.round(desensitizationRate))}%
            </span>

            <span className="text-[#41474F] mx-0.5">·</span>

            <span
              className={`text-[10px] font-bold uppercase truncate max-w-[150px] ${
                isHighHabituation
                  ? 'text-[#BDC6CE] animate-pulse'
                  : isLowHabituation
                  ? 'text-[#889826]'
                  : 'text-[#A4A7A9]'
              }`}
            >
              {isHighHabituation
                ? 'SCROLL VELOZ'
                : isLowHabituation
                ? 'LECTURA DETENIDA'
                : 'MODERADO'}
            </span>

            {scrollSpeed > 0 && (
              <>
                <span className="text-[#41474F] mx-0.5 hidden xl:inline">·</span>
                <span className="text-[#7D878F] hidden xl:inline tabular-nums">
                  {scrollSpeed} px/s
                </span>
              </>
            )}
          </div>

          {/* Sound Toggle */}
          <button
            onClick={toggleAudio}
            className="p-1.5 border border-[#3D4750] bg-[#222830] text-[#BDC6CE] hover:text-[#DFE4EA] hover:border-[#7D878F] transition-colors cursor-pointer"
            title={audioActive ? 'Silenciar señales sonoras' : 'Activar señales sonoras'}
            aria-label="Silenciar o activar sonidos táctiles"
          >
            {audioActive ? <Volume2 className="w-4 h-4 text-[#8B191F]" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 lg:hidden border border-[#3D4750] bg-[#222830] text-[#DFE4EA] hover:text-white cursor-pointer"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#3D4750] bg-[#161B20] px-4 py-4 space-y-2">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#2A323A] text-xs font-mono">
            <span className="text-[#7D878F]">HABITUACIÓN INTELIGENTE:</span>
            <span
              className={`font-bold ${
                isHighHabituation
                  ? 'text-[#8B191F]'
                  : isLowHabituation
                  ? 'text-[#889826]'
                  : 'text-[#DFE4EA]'
              }`}
            >
              {Math.round(desensitizationRate)}% ({behaviorLabel})
            </span>
          </div>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left py-2 px-3 text-sm font-mono flex items-center justify-between transition-colors ${
                activeSection === link.id
                  ? 'bg-[#222830] text-[#DFE4EA] border-l-2 border-[#8B191F]'
                  : 'text-[#7D878F] hover:bg-[#20262D] hover:text-[#DFE4EA]'
              }`}
            >
              <span>{link.label}</span>
              <span className="text-[10px] text-[#41474F]">→</span>
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
