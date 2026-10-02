import { useState } from 'react';
import { Activity, Zap } from 'lucide-react';
import { soundFx } from '../utils/audio';

export function HabituationChart() {
  const [exposureLevel, setExposureLevel] = useState<number>(3); // 1 to 5 scale

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    soundFx.playClick();
    setExposureLevel(Number(e.target.value));
  };

  // Dynamic values using the palette colors
  const levelsData = [
    {
      label: 'Exposición Ocasional (1 evento al mes)',
      shockIndex: 95,
      scrollSpeed: 10,
      pupilDilation: 'Máxima (+3.4mm)',
      cognitiveState: 'Conmoción inmediata, pausa reflexiva obligada, búsqueda de contexto.',
      durationStay: '34 segundos',
      color: '#8B191F'
    },
    {
      label: 'Exposición Semanal (5-10 noticias)',
      shockIndex: 72,
      scrollSpeed: 30,
      pupilDilation: 'Elevada (+2.1mm)',
      cognitiveState: 'Incomodidad manifiesta, comentario breve, retención moderada del evento.',
      durationStay: '14 segundos',
      color: '#9E1B23'
    },
    {
      label: 'Exposición Cotidiana (20-40 impactos diarios)',
      shockIndex: 45,
      scrollSpeed: 60,
      pupilDilation: 'Atenuada (+0.8mm)',
      cognitiveState: 'Normalización parcial. El suceso se interpreta como "la situación del país".',
      durationStay: '4.2 segundos',
      color: '#7D878F'
    },
    {
      label: 'Feed Continuo (80+ impactos diarios)',
      shockIndex: 18,
      scrollSpeed: 85,
      pupilDilation: 'Plana (+0.1mm)',
      cognitiveState: 'Habituación avanzada. La violencia es percibida como fondo estético de la red.',
      durationStay: '1.1 segundos',
      color: '#41474F'
    },
    {
      label: 'Saturación Total (Consumo 24/7 sin filtros)',
      shockIndex: 5,
      scrollSpeed: 98,
      pupilDilation: 'Nula (0.0mm)',
      cognitiveState: 'Anestesia sensorial completa. La mirada resbala sin frictionar la conciencia.',
      durationStay: '0.4 segundos',
      color: '#2F3339'
    }
  ];

  const current = levelsData[exposureLevel - 1];

  return (
    <div className="border border-[#3D4750] bg-[#1C2228] p-6 md:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#2F3339] pb-4">
        <div>
          <div className="text-[11px] font-mono text-[#8B191F] font-bold tracking-widest uppercase">
            MODELO BIOMÉTRICO ESTIMADO
          </div>
          <h3 className="font-['Bebas_Neue'] text-3xl tracking-wide text-[#DFE4EA]">
            LA CURVA DE HABITUACIÓN SENSORIAL
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-[#7D878F]">
          <Activity className="w-4 h-4 text-[#8B191F] animate-pulse" />
          <span>RESPUESTA AFECTIVA VS. VOLUMEN</span>
        </div>
      </div>

      {/* Interactive Range Slider */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-[#BDC6CE]">DESLIZA EL NIVEL DE EXPOSICIÓN MEDIÁTICA:</span>
          <span className="text-[#DFE4EA] font-bold">{current.label}</span>
        </div>
        <input
          type="range"
          min="1"
          max="5"
          step="1"
          value={exposureLevel}
          onChange={handleSliderChange}
          className="w-full accent-[#8B191F] h-2 bg-[#222830] rounded-none cursor-pointer"
        />
        <div className="flex justify-between text-[10px] font-mono text-[#7D878F]">
          <span>NIVEL 1: BAJA EXPOSICIÓN</span>
          <span>NIVEL 3: PROMEDIO ACTUAL</span>
          <span>NIVEL 5: SATURACIÓN CRÓNICA</span>
        </div>
      </div>

      {/* Metric Visualizer Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
        <div className="border border-[#2F3339] bg-[#161B20] p-4">
          <div className="text-[11px] font-mono text-[#7D878F] uppercase mb-1">
            ÍNDICE DE CONMOCIÓN (SHOCK)
          </div>
          <div className="text-4xl font-['Bebas_Neue'] text-[#8B191F] tracking-wider tabular-nums">
            {current.shockIndex}%
          </div>
          <div className="w-full bg-[#222830] h-1.5 mt-2">
            <div
              className="h-full transition-all duration-300"
              style={{ width: `${current.shockIndex}%`, backgroundColor: current.color }}
            />
          </div>
        </div>

        <div className="border border-[#2F3339] bg-[#161B20] p-4">
          <div className="text-[11px] font-mono text-[#7D878F] uppercase mb-1">
            TIEMPO DE DETENCIÓN OCULAR
          </div>
          <div className="text-4xl font-['Bebas_Neue'] text-[#DFE4EA] tracking-wider tabular-nums">
            {current.durationStay}
          </div>
          <div className="text-[10px] font-mono text-[#7D878F] mt-2">
            Segundos antes de deslizar el pulgar
          </div>
        </div>

        <div className="border border-[#2F3339] bg-[#161B20] p-4">
          <div className="text-[11px] font-mono text-[#7D878F] uppercase mb-1">
            VELOCIDAD DE SCROLL
          </div>
          <div className="text-4xl font-['Bebas_Neue'] text-[#BDC6CE] tracking-wider tabular-nums">
            {current.scrollSpeed}%
          </div>
          <div className="w-full bg-[#222830] h-1.5 mt-2">
            <div
              className="bg-[#7D878F] h-full transition-all duration-300"
              style={{ width: `${current.scrollSpeed}%` }}
            />
          </div>
        </div>
      </div>

      {/* Psychological Diagnosis Box */}
      <div className="border-l-2 border-[#8B191F] bg-[#222830] p-4 text-xs font-mono space-y-1">
        <div className="text-[#8B191F] font-bold uppercase tracking-wider flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5" />
          DIAGNÓSTICO COGNITIVO ASOCIADO:
        </div>
        <p className="text-[#DFE4EA] leading-relaxed">
          {current.cognitiveState}
        </p>
      </div>
    </div>
  );
}
