import { FileText, Headphones, ImageIcon, Link2, Mic, PanelsTopLeft } from 'lucide-react';

const PendingBadge = () => (
  <span className="border border-[#8B191F]/70 bg-[#421115]/40 px-2 py-1 font-mono text-[10px] font-bold tracking-wider text-[#BDC6CE]">
    MATERIAL PENDIENTE
  </span>
);

export function MediaModulesPending() {
  return (
    <>
      <section id="multimedia" className="border-y border-[#3D4750] bg-[#1C2228] px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs font-bold tracking-[0.16em] text-[#8B191F]">MÓDULO MULTIMEDIAL</p>
              <h2 className="mt-2 font-display text-4xl tracking-wide text-[#DFE4EA] sm:text-5xl">ARCHIVO DEL PROYECTO</h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#BDC6CE]">Espacio preparado para los materiales de identidad, presentación e informe breve del proyecto.</p>
            </div>
            <PendingBadge />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="min-h-56 border border-dashed border-[#7D878F] bg-[#161B20] p-6">
              <ImageIcon className="h-7 w-7 text-[#8B191F]" />
              <h3 className="mt-6 font-display text-2xl tracking-wide text-[#DFE4EA]">LOGO DEL PROYECTO</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#BDC6CE]">Área reservada para el logo institucional o la identidad gráfica final.</p>
            </article>
            <article className="min-h-56 border border-dashed border-[#7D878F] bg-[#161B20] p-6">
              <PanelsTopLeft className="h-7 w-7 text-[#8B191F]" />
              <h3 className="mt-6 font-display text-2xl tracking-wide text-[#DFE4EA]">PÓSTER DEL MÓDULO</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#BDC6CE]">Área reservada para el póster definitivo de difusión de la experiencia.</p>
            </article>
          </div>

          <article className="mt-5 border border-[#3D4750] bg-[#161B20] p-6 sm:p-8">
            <div className="flex items-center gap-3"><FileText className="h-6 w-6 text-[#8B191F]" /><h3 className="font-display text-2xl tracking-wide text-[#DFE4EA]">INFORME BREVE DEL MÓDULO</h3></div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {['Imágenes', 'Contenido', 'Proceso', 'Desarrollo'].map((item) => (
                <div key={item} className="border border-[#3D4750] bg-[#20262D] p-4">
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#DFE4EA]">{item}</p>
                  <p className="mt-2 text-sm text-[#7D878F]">Pendiente de documentación.</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="podcast" className="bg-[#161B20] px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs font-bold tracking-[0.16em] text-[#8B191F]">APARTADO INDIVIDUAL</p>
              <h2 className="mt-2 font-display text-4xl tracking-wide text-[#DFE4EA] sm:text-5xl">PODCAST</h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#BDC6CE]">Entrevista con Esteban Morales sobre violencia y cultura digital.</p>
            </div>
            <PendingBadge />
          </div>

          <div className="grid gap-5 sm:grid-cols-[11rem_minmax(0,1fr)]">
            <figure className="w-full max-w-44 self-start overflow-hidden border border-[#3D4750] bg-[#1C2228]">
              <img src={`${import.meta.env.BASE_URL}podcast/esteban-morales.png`} alt="Retrato de Esteban Morales" width={768} height={1024} loading="lazy" className="h-auto w-full" />
              <figcaption className="px-5 py-3 font-mono text-xs text-[#BDC6CE]">Esteban Morales · Invitado</figcaption>
            </figure>

            <div className="space-y-5">
              <article className="border border-[#3D4750] bg-[#1C2228] p-6">
                <div className="flex items-center gap-3"><Mic className="h-6 w-6 text-[#8B191F]" /><h3 className="font-display text-2xl tracking-wide text-[#DFE4EA]">Esteban Morales</h3></div>
                <p className="mt-4 text-sm leading-relaxed text-[#BDC6CE]">Profesor e investigador en medios y culturas digitales en la Universidad de Groningen. Estudia cómo las plataformas digitales influyen en la circulación y la experiencia de la violencia.</p>
                <ul className="mt-4 space-y-2 text-sm text-sky-300">
                  <li><a href="https://esteban-morales.com/" className="inline-flex items-center gap-2 underline underline-offset-4"><Link2 className="h-4 w-4" /> Sitio profesional</a></li>
                  <li><a href="https://journals.sagepub.com/doi/full/10.1177/14614448261420823" className="underline underline-offset-4">Estudio sobre violencia en plataformas digitales</a></li>
                  <li><a href="https://rcientificas.uninorte.edu.co/index.php/investigacion/article/view/15328" className="underline underline-offset-4">Revisión sobre violencia en redes sociales en Colombia</a></li>
                </ul>
              </article>

              <article className="border border-[#3D4750] bg-[#1C2228] p-6">
                <div className="flex items-center gap-3"><Headphones className="h-6 w-6 text-[#8B191F]" /><h3 className="font-display text-2xl tracking-wide text-[#DFE4EA]">REPRODUCTOR Y TRANSCRIPCIÓN</h3></div>
                <div className="mt-5 border border-dashed border-[#7D878F] bg-[#161B20] p-5 text-center"><p className="font-mono text-xs tracking-wider text-[#BDC6CE]">AUDIO DEL EPISODIO PENDIENTE</p></div>
                <div className="mt-3 max-h-40 overflow-auto border border-dashed border-[#41474F] p-4"><p className="font-mono text-[10px] tracking-wider text-[#7D878F]">TRANSCRIPCIÓN SINCRONIZADA</p><p className="mt-2 text-sm leading-relaxed text-[#BDC6CE]">Aquí aparecerá la transcripción literal y se resaltará el fragmento que suene en el audio.</p></div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
