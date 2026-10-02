import { RotateCcw } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface ExitScreenProps {
  onReturn: () => void;
}

export function ExitScreen({ onReturn }: ExitScreenProps) {
  const handleReturn = () => {
    soundFx.playWarningBeep();
    onReturn();
  };

  return (
    <div className="min-h-screen bg-[#161B20] text-[#DFE4EA] flex flex-col items-center justify-center p-6 text-center select-none relative overflow-hidden">
      <div className="absolute inset-0 scanlines opacity-50 pointer-events-none" />
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      <div className="max-w-xl z-10 border border-[#3D4750] p-8 md:p-12 bg-[#1C2228]">
        <div className="text-[#8B191F] font-mono text-xs tracking-widest uppercase mb-4 font-bold">
          [ REGISTRO INTERRUMPIDO POR EL ESPECTADOR ]
        </div>

        <h1 className="text-4xl md:text-6xl font-['Bebas_Neue'] tracking-wider text-[#DFE4EA] mb-6">
          ELEGISTE APARTAR LA MIRADA
        </h1>

        <div className="h-0.5 w-16 bg-[#8B191F] mx-auto mb-6" />

        <p className="font-mono text-sm md:text-base text-[#BDC6CE] leading-relaxed mb-6">
          Cerrar los ojos detiene la imagen en tu pantalla, pero no detiene la realidad que la produce.
        </p>

        <p className="text-xs font-mono text-[#7D878F] leading-relaxed mb-8 max-w-md mx-auto">
          ¿En qué momento mirar se convierte en complicidad, y no mirar en privilegio?
          La desensibilización no es solo la indiferencia ante la tragedia: es también la ilusión de que podemos aislarnos de ella con un clic.
        </p>

        <button
          onClick={handleReturn}
          className="inline-flex items-center gap-2 py-3 px-6 font-['Bebas_Neue'] text-xl tracking-widest text-white bg-[#8B191F] hover:bg-[#9E1B23] transition-all cursor-pointer border border-[#8B191F] shadow-[0_0_20px_rgba(139,25,31,0.35)]"
        >
          <RotateCcw className="w-4 h-4" />
          [ REGRESAR AL ARCHIVO ]
        </button>
      </div>
    </div>
  );
}
