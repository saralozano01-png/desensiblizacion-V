import { AlertOctagon, Zap, Eye } from 'lucide-react';
import { InteractiveRedaction } from './InteractiveRedaction';

interface DesensitizationInterludeProps {
  warningsDismissed: number;
  totalWarningsSeen: number;
  habituationRate?: number;
  readingBehavior?: 'slow_reflective' | 'moderate' | 'fast_desensitized';
  scrollSpeed?: number;
  secondsElapsed?: number;
}

export function DesensitizationInterlude({
  warningsDismissed,
  totalWarningsSeen,
  habituationRate = 50,
  readingBehavior = 'moderate',
  scrollSpeed = 0,
  secondsElapsed = 0
}: DesensitizationInterludeProps) {
  const isSpeedScroller = readingBehavior === 'fast_desensitized';
  const isReflective = readingBehavior === 'slow_reflective';

  return (
    <section className="relative my-24 py-20 px-4 sm:px-6 bg-[#1A1F24] border-y-2 border-[#8B191F] overflow-hidden">
      {/* Decorative Warning Hazard Striping with Palette Colors */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-[repeating-linear-gradient(45deg,#8B191F,#8B191F_10px,#161B20_10px,#161B20_20px)]" />
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[repeating-linear-gradient(45deg,#8B191F,#8B191F_10px,#161B20_10px,#161B20_20px)]" />
      <div className="absolute inset-0 scanlines opacity-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Dynamic Metric Badges */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 border border-[#8B191F]/50 bg-[#161B20] px-4 py-2 mb-6 text-xs font-mono text-[#BDC6CE]">
          <div className="flex items-center gap-1.5">
            <AlertOctagon className="w-4 h-4 text-[#8B191F] animate-warning-fast" />
            <span>ALERTAS PROCESADAS: <strong className="text-[#DFE4EA]">{Math.max(totalWarningsSeen, 8)}</strong></span>
          </div>

          <span className="text-[#41474F] hidden sm:inline">·</span>

          <div className="flex items-center gap-1.5">
            <span>HABITUACIÓN ACTUAL: </span>
            <strong
              className={`tabular-nums ${
                isSpeedScroller
                  ? 'text-[#8B191F]'
                  : isReflective
                  ? 'text-[#889826]'
                  : 'text-[#DFE4EA]'
              }`}
            >
              {Math.min(100, Math.round(habituationRate))}%
            </strong>
          </div>

          <span className="text-[#41474F] hidden sm:inline">·</span>

          <div className="flex items-center gap-1.5">
            {isSpeedScroller ? (
              <span className="text-[#8B191F] font-bold">⚠ RITMO: SCROLL RÁPIDO</span>
            ) : isReflective ? (
              <span className="text-[#889826] font-bold">● RITMO: LECTURA ATENTA</span>
            ) : (
              <span className="text-[#BDC6CE]">RITMO: MODERADO</span>
            )}
          </div>
        </div>

        {/* Small Lead-in */}
        <p className="font-mono text-xs sm:text-sm tracking-widest text-[#7D878F] uppercase mb-3">
          EXPERIMENTO DE SATURACIÓN // EVALUACIÓN DE CONDUCTA
        </p>

        {/* First Question */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-['Bebas_Neue'] tracking-wide text-[#DFE4EA] mb-2">
          ¿SIGUES LEYENDO LAS ADVERTENCIAS?
        </h2>

        {/* Big Punch Headline */}
        <h3 className="text-4xl sm:text-6xl md:text-7xl font-['Bebas_Neue'] tracking-tight text-[#8B191F] leading-none mb-6 animate-glitch">
          ¿O YA LAS CERRASTE AUTOMÁTICAMENTE?
        </h3>

        <div className="h-0.5 w-32 bg-[#8B191F] mx-auto my-6" />

        {/* Dynamic Behavioral Feedback */}
        <div className="max-w-2xl mx-auto space-y-4 font-mono text-sm sm:text-base text-[#BDC6CE] leading-relaxed text-left sm:text-center">
          {isSpeedScroller ? (
            <div className="border border-[#8B191F] bg-[#421115]/50 p-4 text-xs sm:text-sm text-[#DFE4EA] text-left space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#8B191F] uppercase">
                <Zap className="w-4 h-4 animate-warning-fast" />
                <span>DIAGNÓSTICO: CONSUMO VELOZ DETECTADO</span>
              </div>
              <p>
                El algoritmo registró que descendiste rápidamente por la página sin pausar en los párrafos extensos. Tu tiempo total de lectura ({secondsElapsed}s) es muy inferior al tiempo requerido para asimilar los textos. Tu nivel de habituación se disparó al <strong className="text-white">{Math.round(habituationRate)}%</strong> porque tu mente activó el modo de deslizamiento continuo para protegerse de la sobrecarga.
              </p>
            </div>
          ) : isReflective ? (
            <div className="border border-[#3D4750] bg-[#161B20] p-4 text-xs sm:text-sm text-[#DFE4EA] text-left space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#889826] uppercase">
                <Eye className="w-4 h-4 text-[#889826]" />
                <span>DIAGNÓSTICO: ATENCIÓN REFLEXIVA PRESERVADA</span>
              </div>
              <p>
                Has permanecido leyendo los párrafos y mirando las fotografías con detenimiento ({secondsElapsed} segundos de atención sostenida). Por esta razón, tu índice de habituación se mantiene controlado en un <strong className="text-[#889826]">{Math.round(habituationRate)}%</strong>. A diferencia del usuario anestesiado, todavía te detienes ante el significado de lo que observas.
              </p>
            </div>
          ) : (
            <div className="border border-[#3D4750] bg-[#1C2228] p-4 text-xs sm:text-sm text-[#BDC6CE] text-left space-y-1">
              <span className="text-[#8B191F] font-bold block mb-1">
                [MONITOREO DE REACCIÓN MOTORA]
              </span>
              <p>
                Al ingresar a este sitio, la primera advertencia te obligó a detenerte. Leíste cada palabra con cautela. Conforme avanzas, el reflejo motor busca la [✕] para continuar consumiendo sin interrupciones.
              </p>
            </div>
          )}

          <p className="text-[#7D878F] pt-2">
            El sistema nervioso no tolera la alarma permanente. Para sobrevivir al bombardeo de señales rojas, eleva el umbral de activación. El precio de la tranquilidad es la anulación de la empatía: la <InteractiveRedaction hiddenText="atrocidad cotidiana" /> se convierte en ruido de fondo.
          </p>

          <p className="text-xs text-[#8B191F] uppercase tracking-wider font-bold text-center pt-2">
            LA VELOCIDAD CON LA QUE SCROLLEAS ES LA MEDIDA EXACTA DE TU INDIFERENCIA.
          </p>
        </div>
      </div>
    </section>
  );
}
