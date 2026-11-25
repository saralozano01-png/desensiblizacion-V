import { X } from 'lucide-react';

export function VisualNovelExperience({ onClose }: { onClose: () => void }) {
  return (
    <section className="fixed inset-0 z-[100] bg-[#0b0c0e]" aria-label="Novela gráfica Umbral">
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-[110] flex items-center gap-2 border border-[#C6C6C6] bg-[#3A3A3A]/90 px-3 py-2 text-xs font-mono tracking-wider text-[#F1F1F1] transition-colors hover:border-[#E52828] hover:bg-[#E52828]"
        aria-label="Cerrar novela gráfica y volver al blog"
      >
        <X size={15} /> VOLVER AL BLOG
      </button>
      <iframe
        title="Umbral: novela gráfica interactiva"
        src="/novela/index.html"
        className="h-full w-full border-0"
        allow="fullscreen"
      />
    </section>
  );
}
