import { useState, useEffect, useMemo } from 'react';
import { AlertTriangle, X, ShieldAlert } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface FloatingWarningSystemProps {
  scrollProgress: number; // 0 to 100
  onWarningDismissed: () => void;
  onWarningGenerated: (count: number) => void;
}

interface WarningItem {
  id: string;
  text: string;
  subtext?: string;
  levelTrigger: number; // minimum scroll progress to show
  xPos: 'left' | 'right' | 'center';
  yPos: 'top' | 'bottom' | 'middle';
  animDelay: string;
  isGlitching: boolean;
}

export function FloatingWarningSystem({
  scrollProgress,
  onWarningDismissed,
  onWarningGenerated
}: FloatingWarningSystemProps) {
  const [dismissedIds, setDismissedIds] = useState<Set<string>>(new Set());

  // Master roster of warnings calibrated by progression
  const warningsList: WarningItem[] = useMemo(() => [
    // Level 2 warnings (scroll > 15%)
    {
      id: 'w-2-1',
      text: '⚠ CONTENIDO SENSIBLE',
      subtext: 'IMÁGENES Y TESTIMONIOS SUJETOS A EVALUACIÓN',
      levelTrigger: 15,
      xPos: 'right',
      yPos: 'top',
      animDelay: '0s',
      isGlitching: false
    },
    {
      id: 'w-2-2',
      text: '⚠ SE RECOMIENDA DISCRECIÓN',
      subtext: 'EXPOSICIÓN DOCUMENTAL CONTINUA',
      levelTrigger: 22,
      xPos: 'left',
      yPos: 'bottom',
      animDelay: '1.2s',
      isGlitching: true
    },
    {
      id: 'w-2-3',
      text: '⚠ REGISTRO SIN FILTRO EDITORIAL',
      subtext: 'CLASIFICACIÓN C',
      levelTrigger: 30,
      xPos: 'right',
      yPos: 'bottom',
      animDelay: '0.6s',
      isGlitching: false
    },

    // Level 3 warnings (scroll > 40%) - Intensity escalates
    {
      id: 'w-3-1',
      text: '⚠ IMAGEN CENSURADA',
      subtext: 'BLOQUEO PREVENTIVO DE SEÑAL',
      levelTrigger: 42,
      xPos: 'left',
      yPos: 'middle',
      animDelay: '0.3s',
      isGlitching: true
    },
    {
      id: 'w-3-2',
      text: '⚠ ¿DESEA CONTINUAR?',
      subtext: 'SU UMBRAL DE ATENCIÓN ESTÁ DISMINUYENDO',
      levelTrigger: 48,
      xPos: 'right',
      yPos: 'middle',
      animDelay: '1.5s',
      isGlitching: false
    },
    {
      id: 'w-3-3',
      text: '⚠ HA SIDO ADVERTIDO',
      subtext: 'EL RITMO CARDÍACO DEL ESPECTADOR SE ESTABILIZA',
      levelTrigger: 55,
      xPos: 'center',
      yPos: 'top',
      animDelay: '0.9s',
      isGlitching: true
    },
    {
      id: 'w-3-4',
      text: '⚠ PROTOCOLO DE SATURACIÓN VISUAL',
      subtext: 'CANAL DE NOTICIAS 24/7 EN BUCLE',
      levelTrigger: 60,
      xPos: 'left',
      yPos: 'top',
      animDelay: '2.1s',
      isGlitching: false
    },

    // Level 4 warnings (scroll > 70%) - Extreme crowding
    {
      id: 'w-4-1',
      text: '⚠ ADVERTENCIA 18: SATURACIÓN',
      subtext: 'DESCARGA MASIVA DE ESTÍMULOS',
      levelTrigger: 72,
      xPos: 'right',
      yPos: 'bottom',
      animDelay: '0.4s',
      isGlitching: true
    },
    {
      id: 'w-4-2',
      text: '⚠ AVISO IGNORADO AUTOMÁTICAMENTE',
      subtext: 'TIEMPO DE REACCIÓN: < 0.9s',
      levelTrigger: 76,
      xPos: 'left',
      yPos: 'bottom',
      animDelay: '1.8s',
      isGlitching: true
    },
    {
      id: 'w-4-3',
      text: '⚠ SEÑAL DE EMERGENCIA #44',
      subtext: 'YA NO LEES ESTE MENSAJE',
      levelTrigger: 82,
      xPos: 'center',
      yPos: 'bottom',
      animDelay: '1.1s',
      isGlitching: true
    }
  ], []);

  // Compute active warnings that qualify and haven't been dismissed
  const activeWarnings = warningsList.filter(
    (w) => scrollProgress >= w.levelTrigger && !dismissedIds.has(w.id)
  );

  useEffect(() => {
    onWarningGenerated(activeWarnings.length);
  }, [activeWarnings.length, onWarningGenerated]);

  const handleDismiss = (id: string) => {
    soundFx.playClick();
    setDismissedIds((prev) => new Set([...prev, id]));
    onWarningDismissed();
  };

  if (activeWarnings.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {activeWarnings.map((w) => {
        // Position styles
        let posClass = '';
        if (w.xPos === 'left' && w.yPos === 'top') posClass = 'top-16 left-4 md:left-8';
        else if (w.xPos === 'right' && w.yPos === 'top') posClass = 'top-16 right-4 md:right-8';
        else if (w.xPos === 'center' && w.yPos === 'top') posClass = 'top-24 left-1/2 -translate-x-1/2';
        else if (w.xPos === 'left' && w.yPos === 'middle') posClass = 'top-1/2 left-4 md:left-8 -translate-y-1/2';
        else if (w.xPos === 'right' && w.yPos === 'middle') posClass = 'top-1/2 right-4 md:right-8 -translate-y-1/2';
        else if (w.xPos === 'left' && w.yPos === 'bottom') posClass = 'bottom-16 left-4 md:left-8';
        else if (w.xPos === 'right' && w.yPos === 'bottom') posClass = 'bottom-16 right-4 md:right-8';
        else posClass = 'bottom-20 left-1/2 -translate-x-1/2';

        return (
          <aside
            key={w.id}
            aria-label="Alerta de contenido"
            style={{ animationDelay: w.animDelay }}
            className={`absolute pointer-events-auto max-w-[280px] sm:max-w-xs border-2 border-[#8B191F] bg-[#1C2228]/95 backdrop-blur-sm p-3 shadow-[0_0_20px_rgba(139,25,31,0.5)] transition-all ${posClass} ${
              w.isGlitching ? 'animate-glitch' : 'animate-warning-slow'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#8B191F] shrink-0 animate-warning-fast" />
                <span className="font-['Bebas_Neue'] text-lg tracking-wider text-[#DFE4EA] leading-none">
                  {w.text}
                </span>
              </div>
              <button
                onClick={() => handleDismiss(w.id)}
                className="p-1 text-[#7D878F] hover:text-white hover:bg-[#8B191F] transition-colors cursor-pointer"
                title="Cerrar advertencia"
                aria-label="Cerrar advertencia"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {w.subtext && (
              <p className="mt-1 text-[11px] font-mono text-[#BDC6CE] leading-tight">
                {w.subtext}
              </p>
            )}

            <div className="mt-2 pt-1 border-t border-[#8B191F]/30 flex items-center justify-between text-[9px] font-mono text-[#7D878F]">
              <span>[REACCIÓN AUTOMÁTICA]</span>
              <span className="text-[#8B191F] font-bold">DESECHAR [✕]</span>
            </div>
          </aside>
        );
      })}
    </div>
  );
}
