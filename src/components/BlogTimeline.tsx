import { useState } from 'react';
import { Calendar, Clock, User, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import { blogArticlesChronologicalReverse } from '../data/blogArticles';
import { InteractiveRedaction } from './InteractiveRedaction';
import { CensoredMediaCard } from './CensoredMediaCard';
import { soundFx } from '../utils/audio';

interface BlogTimelineProps {
  onArticleRead: () => void;
  onRedactionReveal: () => void;
}

export function BlogTimeline({ onArticleRead, onRedactionReveal }: BlogTimelineProps) {
  const [expandedArticles, setExpandedArticles] = useState<Record<string, boolean>>({
    'art-05': true, // most recent expanded by default
    'art-04': false,
    'art-03': false,
    'art-02': false,
    'art-01': false
  });

  const toggleExpand = (id: string) => {
    soundFx.playClick();
    onArticleRead();
    setExpandedArticles((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="articulos" className="max-w-4xl mx-auto px-4 sm:px-6 my-16 scroll-mt-20 space-y-16">
      {/* Blog Section Header */}
      <div className="border-b-2 border-[#8B191F] pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-[#7D878F] mb-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#8B191F] animate-warning-fast" />
            <span className="text-[#8B191F] font-bold">BITÁCORA TEÓRICA & ENSAYOS VISUALES</span>
          </div>
          <span className="text-[#DFE4EA] font-bold bg-[#222830] px-2.5 py-1 border border-[#3D4750]">
            ORDEN CRONOLÓGICO INVERSO (5 ARTÍCULOS)
          </span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-['Bebas_Neue'] tracking-wide text-[#DFE4EA] leading-none">
          ARCHIVOS DEL SUFRIMIENTO MEDIADO
        </h2>

        <p className="font-sans text-sm sm:text-base text-[#BDC6CE] max-w-2xl mt-3 leading-relaxed">
          Ensayos críticos de investigación sobre la selección, censura y circulación de imágenes de dolor en la cultura digital universitaria contemporánea.
        </p>
      </div>

      {/* Chronological Reverse Articles Stream */}
      <div className="space-y-16">
        {blogArticlesChronologicalReverse.map((article, index) => {
          const isExpanded = expandedArticles[article.id];

          return (
            <article
              key={article.id}
              className="border border-[#3D4750] bg-[#1C2228] transition-all hover:border-[#7D878F]"
            >
              {/* Article Meta Bar */}
              <div className="p-4 sm:p-5 border-b border-[#2F3339] bg-[#222830] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-0.5 bg-[#8B191F] text-white font-bold text-[11px] tracking-wider uppercase">
                    {article.postNumber}
                  </span>
                  <span className="text-[#BDC6CE] font-bold hidden sm:inline">{article.category}</span>
                </div>

                <div className="flex items-center gap-4 text-[#7D878F]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#7D878F]" />
                    <span>{article.date}</span>
                  </span>
                  <span className="text-[#41474F]">·</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#7D878F]" />
                    <span>{article.readTime}</span>
                  </span>
                </div>
              </div>

              {/* Cover Media Card */}
              {article.coverImage && (
                <div className="p-4 sm:p-6 pb-0">
                  <CensoredMediaCard
                    imageSrc={article.coverImage}
                    altText={article.title}
                    caseCode={`EXP-${article.id.toUpperCase()}`}
                    title={article.tags[0]}
                    censorBarText="██████████ [DOCUMENTO CLASIFICADO BAJO INVESTIGACIÓN]"
                    caption={article.coverCaption}
                    aspectRatio="16:9"
                    initialCensored={index > 0}
                  />
                </div>
              )}

              {/* Article Header & Summary */}
              <div className="p-4 sm:p-6 space-y-4">
                {/* Author & Theorists tags */}
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono">
                  <span className="text-[#DFE4EA] font-bold flex items-center gap-1 bg-[#161B20] px-2 py-0.5 border border-[#3D4750]">
                    <User className="w-3 h-3 text-[#8B191F]" />
                    {article.author}
                  </span>
                  <span className="text-[#41474F]">|</span>
                  <span className="text-[#7D878F]">MARCO TEÓRICO:</span>
                  {article.keyTheorists.map((theorist, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-[#161B20] border border-[#3D4750] text-[#BDC6CE] font-semibold"
                    >
                      {theorist}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-4xl font-['Bebas_Neue'] tracking-wide text-[#DFE4EA] leading-tight">
                  {article.title}
                </h3>

                {/* Subtitle */}
                <p className="font-mono text-xs sm:text-sm text-[#8B191F] font-semibold leading-relaxed">
                  {article.subtitle}
                </p>

                {/* Summary / Lead */}
                <p className="font-sans text-sm sm:text-base text-[#BDC6CE] leading-relaxed">
                  {article.summary}
                </p>

                {/* Expand / Collapse Full Reading Button */}
                <div className="pt-2 flex items-center justify-between border-t border-[#2F3339]">
                  <button
                    onClick={() => toggleExpand(article.id)}
                    className="py-2 px-4 bg-[#222830] hover:bg-[#2F3339] border border-[#3D4750] hover:border-[#8B191F] text-[#DFE4EA] font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-2"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#8B191F]" />
                    <span>{isExpanded ? 'COLAPSAR ARTÍCULO COMPLETO' : 'LEER ARTÍCULO COMPLETO & CITAS'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <div className="flex gap-1.5">
                    {article.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-[10px] font-mono text-[#7D878F] hidden md:inline"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Full Expanded Reading Content */}
              {isExpanded && (
                <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-[#2F3339] bg-[#161B20] space-y-8 animate-fade-in">
                  <div className="p-4 border-l-2 border-[#8B191F] bg-[#421115]/30 font-sans text-sm sm:text-base text-[#DFE4EA] leading-relaxed italic">
                    "{article.contentHtml.lead}"
                  </div>

                  {article.contentHtml.sections.map((sec, secIdx) => (
                    <div key={secIdx} className="space-y-4 font-sans text-sm sm:text-base text-[#BDC6CE] leading-relaxed">
                      <h4 className="font-['Bebas_Neue'] text-xl sm:text-2xl text-[#DFE4EA] tracking-wide border-b border-[#2F3339] pb-1">
                        {sec.heading}
                      </h4>

                      {sec.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}

                      {sec.quote && (
                        <blockquote className="my-4 border-l-2 border-[#8B191F] pl-4 py-1.5 font-mono text-xs sm:text-sm text-[#DFE4EA] bg-[#222830] italic">
                          "{sec.quote.text}"
                          <footer className="text-[11px] not-italic text-[#8B191F] font-bold mt-1 uppercase">
                            — {sec.quote.author} ({sec.quote.work})
                          </footer>
                        </blockquote>
                      )}

                      {sec.redactedFragment && (
                        <div className="border border-[#3D4750] bg-[#1C2228] p-4 text-xs font-mono my-3 space-y-2">
                          <span className="text-[#8B191F] font-bold block uppercase">
                            [{sec.redactedFragment.label}]
                          </span>
                          <p className="text-[#DFE4EA]">
                            "
                            <InteractiveRedaction
                              hiddenText={sec.redactedFragment.hiddenText}
                              onReveal={onRedactionReveal}
                            />
                            "
                          </p>
                          <span className="text-[10px] text-[#7D878F] block">
                            * {sec.redactedFragment.context}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
