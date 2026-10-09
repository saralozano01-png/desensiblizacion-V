import { useState } from 'react';
import { Heart, MessageSquare, Share2, AlertTriangle, Eye, EyeOff } from 'lucide-react';
import { feedItemsData } from '../data/blogContent';
import { soundFx } from '../utils/audio';
import { CensoredMediaCard } from './CensoredMediaCard';

interface SimulatedSocialFeedProps {
  onInteraction: () => void;
}

export function SimulatedSocialFeed({ onInteraction }: SimulatedSocialFeedProps) {
  const [feedState, setFeedState] = useState(
    feedItemsData.map((item) => ({
      ...item,
      userLiked: false,
      revealedCensorship: false,
      showComments: false,
      likesCount: item.likes
    }))
  );

  const toggleLike = (id: string) => {
    soundFx.playClick();
    onInteraction();
    setFeedState((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            userLiked: !item.userLiked,
            likesCount: item.userLiked ? item.likesCount - 1 : item.likesCount + 1
          };
        }
        return item;
      })
    );
  };

  const toggleCensorship = (id: string) => {
    soundFx.playWarningBeep();
    onInteraction();
    setFeedState((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            revealedCensorship: !item.revealedCensorship
          };
        }
        return item;
      })
    );
  };

  const toggleComments = (id: string) => {
    soundFx.playClick();
    onInteraction();
    setFeedState((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            showComments: !item.showComments
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Feed simulation banner */}
      <div className="border border-[#3D4750] bg-[#222830] p-3 text-xs font-mono text-[#BDC6CE] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#8B191F] animate-ping" />
          <span className="text-[#DFE4EA] font-bold">ALGORITMO DE COEXISTENCIA // FEED SIMULADO</span>
        </div>
        <span className="text-[10px] text-[#8B191F] font-bold uppercase">TIEMPO REAL</span>
      </div>

      {feedState.map((post) => {
        const isViolent = post.type === 'violence' || post.type === 'tragedy';

        return (
          <article
            key={post.id}
            className={`border transition-all duration-200 ${
              isViolent
                ? 'border-[#8B191F]/50 bg-[#421115]/25 hover:border-[#8B191F]'
                : 'border-[#3D4750] bg-[#1C2228] hover:border-[#7D878F]'
            }`}
          >
            {/* Post Header */}
            <div className="p-4 border-b border-[#2F3339] flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 text-[11px] font-mono mb-1">
                  <span
                    className={`font-bold ${
                      isViolent ? 'text-[#8B191F]' : 'text-[#BDC6CE]'
                    }`}
                  >
                    {post.tag}
                  </span>
                  <span className="text-[#41474F]">·</span>
                  <span className="text-[#7D878F]">{post.timeAgo}</span>
                </div>
                <h4 className="font-sans font-semibold text-sm text-[#DFE4EA]">
                  {post.source}
                </h4>
              </div>

              {isViolent && (
                <span className="px-2 py-0.5 bg-[#421115] text-[#DFE4EA] text-[10px] font-mono border border-[#8B191F]/50 flex items-center gap-1 font-bold">
                  <AlertTriangle className="w-3 h-3 text-[#8B191F]" />
                  RESTRINGIDO
                </span>
              )}
            </div>

            {/* Post Content */}
            <div className="p-4 space-y-3">
              <h3 className="font-['Bebas_Neue'] text-xl tracking-wide text-[#DFE4EA] leading-tight">
                {post.headline}
              </h3>

              <p className="text-sm font-sans text-[#BDC6CE] leading-relaxed">
                {post.bodyText}
              </p>

              {/* Censored Media Box Simulation */}
              {post.censored && post.imageSrc ? (
                <CensoredMediaCard
                  imageSrc={post.imageSrc}
                  altText={post.headline}
                  caseCode={`CASO-${post.id.toUpperCase()}`}
                  censorBarText={post.censoredLabel || '██████████ [CONTENIDO CENSURADO]'}
                  caption={post.headline}
                  aspectRatio="16:9"
                  initialCensored={true}
                />
              ) : post.censored ? (
                <div className="relative border border-[#3D4750] bg-[#161B20] overflow-hidden my-3 min-h-[170px] flex flex-col items-center justify-center p-4 text-center">
                  <div className="absolute inset-0 scanlines opacity-50" />
                  <div className="absolute inset-0 grain-overlay" />

                  {post.revealedCensorship ? (
                    <div className="relative z-10 space-y-2">
                      <div className="text-xs font-mono text-[#8B191F] font-bold">
                        [IMAGEN DESCLASIFICADA BAJO CONDICIÓN DE ATENUACIÓN]
                      </div>
                      <div className="w-full h-32 bg-[#222830] border border-[#3D4750] flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-stone-800 to-neutral-900 opacity-80 blur-xl" />
                        <div className="relative z-10 font-mono text-xs text-[#BDC6CE] max-w-xs px-2">
                          Silueta de cordón policial y multitud en penumbras.
                          Detalle facial y elementos de trauma suprimidos por algoritmo editorial.
                        </div>
                      </div>
                      <button
                        onClick={() => toggleCensorship(post.id)}
                        className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#7D878F] hover:text-[#DFE4EA] underline cursor-pointer mt-1"
                      >
                        <EyeOff className="w-3 h-3 text-[#8B191F]" />
                        Ocultar nuevamente
                      </button>
                    </div>
                  ) : (
                    <div className="relative z-10 max-w-sm space-y-3 py-4 flex flex-col items-center text-center">
                      {/* Crossed Eye Icon with movement */}
                      <div className="animate-eye-float">
                        <svg
                          viewBox="0 0 100 65"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-14 h-14 text-[#DFE4EA] drop-shadow-[0_2px_8px_rgba(223,228,234,0.2)]"
                          aria-hidden="true"
                        >
                          <path d="M 12 32.5 C 24 10, 76 10, 88 32.5 C 76 55, 24 55, 12 32.5 Z" />
                          <circle cx="50" cy="32.5" r="12" className="animate-pupil fill-[#161B20]/60" />
                          <line x1="78" y1="7" x2="22" y2="58" className="animate-slash-twitch stroke-[#8B191F]" />
                        </svg>
                      </div>

                      <div className="font-sans text-lg font-bold text-[#DFE4EA] tracking-normal animate-text-glitch">
                        Contenido Sensible
                      </div>

                      <p className="text-xs font-sans text-[#BDC6CE] leading-relaxed max-w-xs">
                        Este medio contiene contenido sensible que algunas personas pueden encontrar ofensivo o perturbador.
                      </p>

                      <button
                        onClick={() => toggleCensorship(post.id)}
                        className="mt-2 py-1.5 px-6 rounded-xl border-2 border-[#DFE4EA] bg-transparent hover:bg-[#DFE4EA] hover:text-[#161B20] text-[#DFE4EA] font-sans text-xs font-semibold tracking-wide transition-all cursor-pointer animate-btn-pulse"
                      >
                        Ver ahora
                      </button>
                    </div>
                  )}
                </div>
              ) : null}

              {/* Meme/Ad media box representation */}
              {post.type === 'meme' && (
                <div className="border border-[#3D4750] bg-[#222830] p-6 text-center font-mono text-xs text-[#BDC6CE]">
                  <div className="text-[#DFE4EA] text-base mb-1 font-bold">
                    [CLIP DE COMEDIA DIGITAL // 15 FPS]
                  </div>
                  <span>Audio de risas enlatadas superpuesto a un gato en monopatín</span>
                </div>
              )}

              {post.type === 'ad' && (
                <div className="border border-[#3D4750] bg-[#222830] p-4 text-xs font-mono flex items-center justify-between text-[#BDC6CE]">
                  <span>CUPÓN: <strong className="text-[#DFE4EA]">DESCONEXION30</strong></span>
                  <span className="text-[#8B191F] font-bold">VÁLIDO 24 HORAS</span>
                </div>
              )}
            </div>

            {/* Post Interaction Bar (Likes, Comments, Shares) */}
            <div className="p-3 border-t border-[#2F3339] bg-[#161B20] flex items-center justify-between font-mono text-xs text-[#7D878F]">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => toggleLike(post.id)}
                  className={`flex items-center gap-1.5 cursor-pointer transition-colors ${
                    post.userLiked ? 'text-[#8B191F] font-bold' : 'hover:text-[#DFE4EA]'
                  }`}
                  aria-label="Reaccionar al post"
                >
                  <Heart className={`w-4 h-4 ${post.userLiked ? 'fill-[#8B191F] text-[#8B191F]' : ''}`} />
                  <span className="tabular-nums">{post.likesCount}</span>
                </button>

                <button
                  onClick={() => toggleComments(post.id)}
                  className="flex items-center gap-1.5 hover:text-[#DFE4EA] cursor-pointer transition-colors"
                  aria-label="Ver comentarios"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span className="tabular-nums">{post.commentsCount}</span>
                </button>

                <button
                  onClick={() => {
                    soundFx.playClick();
                    onInteraction();
                  }}
                  className="flex items-center gap-1.5 hover:text-[#DFE4EA] cursor-pointer transition-colors"
                  aria-label="Compartir en red"
                >
                  <Share2 className="w-4 h-4" />
                  <span className="tabular-nums">{post.shares}</span>
                </button>
              </div>

              <span className="text-[10px] text-[#41474F] uppercase">
                {post.userLiked ? 'REACCIÓN REGISTRADA' : 'SWIPE RAPIDO'}
              </span>
            </div>

            {/* Expandable Comments Drawer */}
            {post.showComments && (
              <div className="p-4 border-t border-[#2F3339] bg-[#161B20]/80 space-y-2.5">
                <div className="text-[11px] font-mono text-[#7D878F] uppercase pb-1 border-b border-[#2F3339]">
                  COMENTARIOS EN TIEMPO REAL:
                </div>
                {post.comments.map((c, idx) => (
                  <div key={idx} className="text-xs font-mono flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[#BDC6CE] font-bold mr-1.5">{c.user}:</span>
                      <span className="text-[#DFE4EA]">{c.text}</span>
                    </div>
                    <span className="text-[10px] text-[#41474F] shrink-0">{c.time}</span>
                  </div>
                ))}
              </div>
            )}
          </article>
        );
      })}

      {/* Critical Narrative Takeaway below Feed */}
      <div className="border border-[#8B191F]/50 bg-[#421115]/35 p-5 text-center space-y-2">
        <h4 className="font-['Bebas_Neue'] text-2xl tracking-wide text-[#DFE4EA]">
          LA YUXTAPOSICIÓN INDIFERENTE
        </h4>
        <p className="font-mono text-xs sm:text-sm text-[#BDC6CE] leading-relaxed max-w-xl mx-auto">
          En menos de 8 centímetros de scroll pasaste de un tiroteo con víctimas reales a una crema para el rostro y un video gracioso.
          Tu cerebro no tiene tiempo para procesar el luto ni la compasión; simplemente los cancela para continuar la estimulación dopaminérgica.
        </p>
      </div>
    </div>
  );
}
