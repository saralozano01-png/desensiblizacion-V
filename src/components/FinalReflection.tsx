import { useState, useEffect } from 'react';
import { RotateCcw, AlertTriangle, EyeOff, Activity, Zap, Clock, Eye } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface FinalReflectionProps {
  warningsGenerated: number;
  warningsDismissed: number;
  redactionsRevealed: number;
  secondsElapsed: number;
  habituationRate?: number;
  readingBehavior?: 'slow_reflective' | 'moderate' | 'fast_desensitized';
  averageTimePerSection?: number;
  scrollSpeed?: number;
  fastScrollCount?: number;
  slowPauseSeconds?: number;
  onResetExperience: () => void;
}

export function FinalReflection({
  warningsGenerated,
  warningsDismissed,
  redactionsRevealed,
  secondsElapsed,
  habituationRate = 50,
  readingBehavior = 'moderate',
  averageTimePerSection = 12,
  scrollSpeed = 0,
  fastScrollCount = 0,
  slowPauseSeconds = 0,
  onResetExperience
}: FinalReflectionProps) {
  const [silentMode, setSilentMode] = useState(false);
  const [silentTimer, setSilentTimer] = useState(10);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (silentMode && silentTimer > 0) {
      interval = setInterval(() => {
        setSilentTimer((prev) => prev - 1);
      }, 1000);
    } else if (silentTimer === 0) {
      setSilentMode(false);
      setSilentTimer(10);
    }
    return () => clearInterval(interval);
  }, [silentMode, silentTimer]);

  const triggerSilenceChamber = () => {
    soundFx.playWarningBeep();
    setSilentTimer(10);
    setSilentMode(true);
  };

  const isSpeedScroller = readingBehavior === 'fast_desensitized';
  const isReflective = readingBehavior === 'slow_reflective';

  if (silentMode) {
    return (
      <div className="fixed inset-0 z-50 bg-[#161B20] flex flex-col items-center justify-center p-6 text-center animate-fade-in">
        <div className="max-w-md space-y-6">
          <div className="text-[#8B191F] font-mono text-sm tracking-widest uppercase">
            [ INTERRUPCIÓN DEL FLUJO // PAUSA OBLIGATORIA ]
          </div>
          <div className="text-7xl font-['Bebas_Neue'] text-[#DFE4EA] tabular-nums tracking-widest">
            {silentTimer}s
          </div>
          <p className="font-mono text-sm text-[#BDC6CE] leading-relaxed">
            Sin alarmas. Sin noticias parpadeantes. Sin banners de emergencia.
            En este instante de silencio absoluto:
            <span className="text-[#DFE4EA] block mt-2 font-bold">
              ¿Qué imagen de las que acabas de ver todavía puedes recordar con nitidez?
            </span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <section id="reflexion" className="relative py-24 px-4 sm:px-6 border-t-2 border-[#8B191F] bg-[#161B20] overflow-hidden">
      <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-16 relative z-10 text-center">
        {/* Core Question 1 */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#8B191F] tracking-widest uppercase border border-[#8B191F]/40 px-3 py-1 bg-[#421115]/40">
            <AlertTriangle className="w-3.5 h-3.5 animate-warning-fast" />
            <span>VEREDICTO DEL DISPOSITIVO</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-['Bebas_Neue'] tracking-tight text-[#DFE4EA] leading-none">
            ¿EN QUÉ MOMENTO DEJASTE DE PRESTAR ATENCIÓN?
          </h2>

          <div className="h-0.5 w-24 bg-[#8B191F] mx-auto my-4" />
        </div>

        {/* Retrospective User Interaction Audit */}
        <div className="border border-[#3D4750] bg-[#1C2228] p-6 md:p-8 text-left space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#2F3339] pb-3 text-xs font-mono gap-2">
            <span className="text-[#DFE4EA] font-bold uppercase tracking-wider flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#8B191F]" />
              INFORME BIOMÉTRICO & CONDUCTUAL DE HABITUACIÓN:
            </span>
            <span className="text-[#7D878F]">
              TIEMPO DE LECTURA REGISTRADO: {Math.max(secondsElapsed, 1)} SEGUNDOS
            </span>
          </div>

          {/* Dynamic Personalized Profile Diagnosis */}
          <div
            className={`border p-5 space-y-3 ${
              isSpeedScroller
                ? 'border-[#8B191F] bg-[#421115]/50'
                : isReflective
                ? 'border-[#41474F] bg-[#161B20]'
                : 'border-[#3D4750] bg-[#222830]'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-2">
              <div className="flex items-center gap-2">
                {isSpeedScroller ? (
                  <Zap className="w-5 h-5 text-[#8B191F] animate-warning-fast" />
                ) : isReflective ? (
                  <Eye className="w-5 h-5 text-[#889826]" />
                ) : (
                  <Clock className="w-5 h-5 text-[#BDC6CE]" />
                )}
                <h4
                  className={`font-['Bebas_Neue'] text-2xl tracking-wide ${
                    isSpeedScroller
                      ? 'text-[#8B191F]'
                      : isReflective
                      ? 'text-[#889826]'
                      : 'text-[#DFE4EA]'
                  }`}
                >
                  {isSpeedScroller
                    ? 'PERFIL: CONSUMO ANESTESIADO (HABITUACIÓN ACELERADA)'
                    : isReflective
                    ? 'PERFIL: ESPECTADOR REFLEXIVO (SENSIBILIDAD PRESERVADA)'
                    : 'PERFIL: ATENCIÓN INTERMITENTE (HABITUACIÓN MODERADA)'}
                </h4>
              </div>

              <div className="text-xs font-mono">
                <span className="text-[#7D878F]">TASA FINAL: </span>
                <strong
                  className={`text-lg font-bold tabular-nums ${
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
            </div>

            <p className="font-mono text-xs sm:text-sm text-[#BDC6CE] leading-relaxed">
              {isSpeedScroller ? (
                <>
                  <strong className="text-[#DFE4EA]">Diagnóstico: </strong>
                  Descendiste a gran velocidad por los capítulos y pasaste sobre los textos e imágenes censuradas sin concederles el tiempo necesario para la reflexión ({secondsElapsed}s en total, con múltiples aceleraciones bruscas). Tu índice de habituación fue <strong className="text-[#8B191F]">ALTO ({Math.round(habituationRate)}%)</strong>. Reprodujiste con exactitud el patrón del usuario digital desensibilizado: deslizar la mirada sobre el horror con la misma ligereza que sobre un anuncio publicitario.
                </>
              ) : isReflective ? (
                <>
                  <strong className="text-[#DFE4EA]">Diagnóstico: </strong>
                  Te tomaste el tiempo necesario para leer los textos, detenerte en los párrafos y observar el material clasificado ({slowPauseSeconds} segundos en pausas de lectura). Por esta razón, tu nivel de habituación se mantuvo <strong className="text-[#889826]">BAJO ({Math.round(habituationRate)}%)</strong>. Demostraste resistencia a la velocidad dopaminérgica del feed y conservaste la capacidad de interpelación moral.
                </>
              ) : (
                <>
                  <strong className="text-[#DFE4EA]">Diagnóstico: </strong>
                  Mostraste un patrón oscilante: te detuviste en ciertos textos pero aceleraste el scroll en otros. Tu habituación se situó en un nivel <strong className="text-[#DFE4EA]">MODERADO ({Math.round(habituationRate)}%)</strong>, reflejando la lucha constante entre el deseo de comprender y la inercia del deslizamiento digital.
                </>
              )}
            </p>
          </div>

          {/* Conduct Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-[#161B20] p-3.5 border border-[#3D4750]">
              <div className="text-[10px] font-mono text-[#7D878F] uppercase">
                ÍNDICE DE HABITUACIÓN
              </div>
              <div
                className={`text-2xl sm:text-3xl font-['Bebas_Neue'] mt-1 tabular-nums ${
                  isSpeedScroller
                    ? 'text-[#8B191F]'
                    : isReflective
                    ? 'text-[#889826]'
                    : 'text-[#DFE4EA]'
                }`}
              >
                {Math.min(100, Math.round(habituationRate))}%
              </div>
              <p className="text-[10px] font-mono text-[#7D878F] mt-0.5">
                {isSpeedScroller ? 'Saturación alta' : isReflective ? 'Sensibilidad intacta' : 'Equilibrio'}
              </p>
            </div>

            <div className="bg-[#161B20] p-3.5 border border-[#3D4750]">
              <div className="text-[10px] font-mono text-[#7D878F] uppercase">
                TIEMPO EN PAUSAS
              </div>
              <div className="text-2xl sm:text-3xl font-['Bebas_Neue'] text-[#DFE4EA] mt-1 tabular-nums">
                {slowPauseSeconds}s
              </div>
              <p className="text-[10px] font-mono text-[#7D878F] mt-0.5">
                Segundos sin scroll activo
              </p>
            </div>

            <div className="bg-[#161B20] p-3.5 border border-[#3D4750]">
              <div className="text-[10px] font-mono text-[#7D878F] uppercase">
                AVISOS DESCARTADOS
              </div>
              <div className="text-2xl sm:text-3xl font-['Bebas_Neue'] text-[#8B191F] mt-1 tabular-nums">
                {warningsDismissed}
              </div>
              <p className="text-[10px] font-mono text-[#7D878F] mt-0.5">
                Cerrados por reflejo motor
              </p>
            </div>

            <div className="bg-[#161B20] p-3.5 border border-[#3D4750]">
              <div className="text-[10px] font-mono text-[#7D878F] uppercase">
                CENSURAS REVELADAS
              </div>
              <div className="text-2xl sm:text-3xl font-['Bebas_Neue'] text-[#BDC6CE] mt-1 tabular-nums">
                {redactionsRevealed}
              </div>
              <p className="text-[10px] font-mono text-[#7D878F] mt-0.5">
                Curiosidad ante el tabú
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-[#222830] border-l-2 border-[#8B191F] text-xs font-mono text-[#BDC6CE] leading-relaxed">
            <strong className="text-[#DFE4EA]">Conclusión del experimento: </strong>
            La velocidad con la que nos desplazamos por la información determina nuestra capacidad de empatía. Cuando nos negamos a detenernos, la violencia no desaparece: simplemente deja de conmovernos.
          </div>
        </div>

        {/* Master Closing Manifesto */}
        <div className="space-y-6 pt-4">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-['Bebas_Neue'] tracking-tight text-[#DFE4EA] leading-none">
            ¿CUÁNDO DEJAMOS DE MIRAR?
          </h1>

          <div className="max-w-2xl mx-auto space-y-4 font-mono text-base sm:text-xl text-[#BDC6CE] leading-relaxed">
            <p className="border-y border-[#3D4750] py-6 text-[#DFE4EA] font-semibold">
              "Tal vez el problema no sea que veamos demasiada violencia.
              <br />
              <span className="text-[#8B191F]">Tal vez sea que aprendimos a verla sin detenernos."</span>
            </p>
          </div>

          <p className="font-mono text-xs sm:text-sm text-[#7D878F] max-w-xl mx-auto leading-relaxed">
            Cuando la tragedia se convierte en mercancía y la alarma en un clic rutinario, no perdemos la visión: perdemos la capacidad de ser heridos por el dolor del otro. Y en esa herida radicaba nuestra humanidad.
          </p>
        </div>

        {/* Action Buttons: Silence Chamber & Reset */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <button
            onClick={triggerSilenceChamber}
            className="w-full sm:w-auto py-3.5 px-6 font-['Bebas_Neue'] text-xl tracking-wider text-[#DFE4EA] bg-[#161B20] hover:bg-[#222830] border border-[#8B191F] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(139,25,31,0.25)]"
          >
            <EyeOff className="w-5 h-5 text-[#8B191F]" />
            [ EXPERIMENTAR 10 SEGUNDOS DE SILENCIO ]
          </button>

          <button
            onClick={onResetExperience}
            className="w-full sm:w-auto py-3.5 px-6 font-['Bebas_Neue'] text-xl tracking-wider text-[#BDC6CE] hover:text-[#DFE4EA] bg-[#222830] hover:bg-[#2F3339] border border-[#3D4750] transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            [ REINICIAR EXPERIMENTO DESDE CERO ]
          </button>
        </div>

        {/* Subtle Archival Footer */}
        <div className="pt-12 border-t border-[#2F3339] text-center text-xs font-mono text-[#7D878F] space-y-1">
          <p>INVESTIGACIÓN ACADÉMICA · 2026</p>
          <p>REGISTRO DOCUMENTAL ABIERTO · SIN CONTENIDO GRÁFICO EXPLÍCITO</p>
        </div>
      </div>
    </section>
  );
}
