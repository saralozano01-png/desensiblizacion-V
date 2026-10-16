import { ExternalLink, Palette, PlayCircle } from 'lucide-react';
import roslerWorkOne from '../assets/images/rosler_house_beautiful_01.png';
import roslerWorkTwo from '../assets/images/rosler_house_beautiful_02.png';
import roslerWorkThree from '../assets/images/rosler_house_beautiful_03.png';

const roslerWorks = [
  { src: roslerWorkOne, label: 'House Beautiful: Bringing the War Home, 1967–72' },
  { src: roslerWorkTwo, label: 'House Beautiful: Bringing the War Home, 1967–72' },
  { src: roslerWorkThree, label: 'House Beautiful: Bringing the War Home, 1967–72' }
];

export function ArtReferentsSection() {
  return (
    <section id="referentes-artisticos" className="max-w-4xl mx-auto px-4 sm:px-6 my-20 scroll-mt-20 space-y-10">
      <div className="border-b border-[#3D4750] pb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-[#8B191F] mb-2 uppercase font-bold tracking-widest"><Palette className="w-4 h-4" /> REFERENTES ARTÍSTICOS Y VISUALES</div>
        <h2 className="text-4xl sm:text-5xl font-['Bebas_Neue'] tracking-wide text-[#DFE4EA] leading-none">EL ARTE ANTE EL CONSUMO DEL DOLOR</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#BDC6CE]">Dos prácticas permiten pensar cómo la violencia se vuelve imagen, espectáculo y experiencia del espectador.</p>
      </div>

      <article className="border border-[#3D4750] bg-[#1C2228] p-5 sm:p-6 space-y-5">
        <div className="border-b border-[#2F3339] pb-4"><p className="text-[11px] font-mono font-bold tracking-widest text-[#8B191F]">REFERENTE 01 // FOTOMONTAJE Y GUERRA MEDIADA</p><h3 className="font-['Bebas_Neue'] text-3xl tracking-wide text-[#DFE4EA]">MARTHA ROSLER · HOUSE BEAUTIFUL: BRINGING THE WAR HOME</h3></div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">{roslerWorks.map((work) => <figure key={work.src} className="border border-[#3D4750] bg-[#161B20]"><div className="h-52 overflow-hidden p-2"><img src={work.src} alt={work.label} className="h-full w-full object-contain" /></div><figcaption className="border-t border-[#3D4750] p-2 text-[10px] font-mono text-[#BDC6CE]">{work.label}</figcaption></figure>)}</div>
        <p className="text-sm leading-relaxed text-[#BDC6CE]">Rosler une interiores domésticos e imágenes de guerra para eliminar la distancia entre el confort privado y la violencia transmitida por los medios. El montaje no ilustra un conflicto lejano: lo hace irrumpir en el espacio cotidiano desde el que miramos.</p>
        <blockquote className="border-l-2 border-[#8B191F] bg-[#222830] p-4 text-sm italic text-[#DFE4EA]">“No estamos ‘aquí’ y ‘allá’. Somos uno, y eso es crucial.”<footer className="mt-2 text-[10px] not-italic font-mono uppercase text-[#7D878F]">— Martha Rosler, sobre House Beautiful: Bringing the War Home</footer></blockquote>
      </article>

      <article className="border border-[#3D4750] bg-[#1C2228] p-5 sm:p-6 space-y-5">
        <div className="border-b border-[#2F3339] pb-4"><p className="text-[11px] font-mono font-bold tracking-widest text-[#8B191F]">REFERENTE 02 // CUERPO, RIESGO Y ESPECTADOR</p><h3 className="font-['Bebas_Neue'] text-3xl tracking-wide text-[#DFE4EA]">CHRIS BURDEN · SHOOT (1971)</h3></div>
        <div className="border border-[#8B191F]/50 bg-[#421115]/20 p-5 sm:flex sm:items-center sm:justify-between sm:gap-6"><div><div className="mb-2 flex items-center gap-2 text-sm font-bold text-[#DFE4EA]"><PlayCircle className="h-5 w-5 text-[#8B191F]" /> DOCUMENTACIÓN EN VIDEO · 2:11</div><p className="max-w-xl text-sm leading-relaxed text-[#BDC6CE]">En <em>Shoot</em>, Burden hizo que un colaborador le disparara en el brazo. La documentación confronta al público con el riesgo real y con su propia posición como testigo de una violencia convertida en evento.</p></div><a href="https://collections.lacma.org/object/280556" target="_blank" rel="noreferrer" className="mt-4 inline-flex shrink-0 items-center gap-2 border border-[#8B191F] px-3 py-2 text-xs font-mono font-bold text-[#DFE4EA] hover:bg-[#421115] sm:mt-0">VER FICHA DEL VIDEO <ExternalLink className="h-3.5 w-3.5" /></a></div>
        <p className="text-sm leading-relaxed text-[#BDC6CE]">La pieza desplaza la violencia que el público suele consumir en prensa y televisión al tiempo presente de una performance. Así, hace visible la incomodidad de observar sin intervenir y cuestiona la aparente distancia entre imagen, cuerpo y responsabilidad.</p>
        <blockquote className="border-l-2 border-[#8B191F] bg-[#222830] p-4 text-sm italic text-[#DFE4EA]">La obra usa el peligro, el dolor y el cuerpo como una prueba de la relación entre artista y espectador.<footer className="mt-2 text-[10px] not-italic font-mono uppercase text-[#7D878F]">— Síntesis conceptual a partir de la documentación de Electronic Arts Intermix</footer></blockquote>
      </article>
    </section>
  );
}
