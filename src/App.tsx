import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BlogTimeline } from './components/BlogTimeline';
import { ConceptualMapExplorer } from './components/ConceptualMapExplorer';
import { BlogSections } from './components/BlogSections';
import { ArtReferentsSection } from './components/ArtReferentsSection';
import { BibliographySection } from './components/BibliographySection';
import { DesensitizationInterlude } from './components/DesensitizationInterlude';
import { FloatingWarningSystem } from './components/FloatingWarningSystem';
import { FinalReflection } from './components/FinalReflection';
import { InitialWarningModal } from './components/InitialWarningModal';
import { ExitScreen } from './components/ExitScreen';
import { SensitivityExperience } from './components/SensitivityExperience';
import { useHabituationTracker } from './hooks/useHabituationTracker';

export default function App() {
  const [modalOpen, setModalOpen] = useState(true);
  const [hasExited, setHasExited] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('inicio');
  const [warningsCount, setWarningsCount] = useState(1);
  const [warningsDismissed, setWarningsDismissed] = useState(0);
  const [redactionsRevealed, setRedactionsRevealed] = useState(0);
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [feedInteractions, setFeedInteractions] = useState(0);
  const [experienceOpen, setExperienceOpen] = useState(false);

  // Timer for user dwell time
  useEffect(() => {
    if (modalOpen || hasExited) return;
    const interval = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [modalOpen, hasExited]);

  // Scroll tracking & section determination
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      // Check current section
      const sections = ['inicio', 'marco-teorico', 'feed', 'recorrido', 'articulos', 'referentes', 'bibliografia', 'reflexion'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.15) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intelligent habituation algorithm:
  // - If user stops to read text: habituation is LOW / normal.
  // - If user rushes down rapidly skimming text: habituation is HIGH / critical.
  const habituationStats = useHabituationTracker(
    scrollProgress,
    secondsElapsed,
    warningsDismissed,
    redactionsRevealed,
    feedInteractions,
    activeSection,
    !modalOpen && !hasExited
  );

  const handleNavigate = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResetExperience = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setWarningsDismissed(0);
    setRedactionsRevealed(0);
    setSecondsElapsed(0);
    setFeedInteractions(0);
    setModalOpen(true);
  };

  if (hasExited) {
    return <ExitScreen onReturn={() => setHasExited(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#161B20] text-[#DFE4EA] font-sans relative selection:bg-[#8B191F] selection:text-white">
      {/* Persistent global scanlines and noise */}
      <div className="fixed inset-0 scanlines opacity-25 pointer-events-none z-10" />
      <div className="fixed inset-0 grain-overlay pointer-events-none z-10" />

      {/* Mandatory Entry Interaction Modal */}
      <InitialWarningModal
        isOpen={modalOpen}
        onAccept={() => setModalOpen(false)}
        onExit={() => setHasExited(true)}
      />

      {/* Progressive Multiplied Warning System */}
      {!modalOpen && (
        <FloatingWarningSystem
          scrollProgress={scrollProgress}
          onWarningDismissed={() => {
            setWarningsDismissed((prev) => prev + 1);
            setWarningsCount((prev) => prev + 1);
          }}
          onWarningGenerated={(count) => {
            setWarningsCount((prev) => Math.max(prev, count + 1));
          }}
        />
      )}

      {/* Top Navbar with Intelligent Habituation Meter */}
      <Navbar
        activeSection={activeSection}
        scrollProgress={scrollProgress}
        warningsProcessed={warningsCount + warningsDismissed}
        desensitizationRate={habituationStats.habituationRate}
        habituationBehavior={habituationStats.readingBehavior}
        behaviorLabel={habituationStats.behaviorLabel}
        scrollSpeed={habituationStats.scrollSpeedPxPerSec}
        onNavigate={handleNavigate}
        onOpenExperience={() => setExperienceOpen(true)}
      />

      {experienceOpen && <SensitivityExperience onClose={() => setExperienceOpen(false)} />}

      <main>
        {/* Hero Section */}
        <Hero
          onScrollDown={() => handleNavigate('marco-teorico')}
          onInitialWarningDismissed={() => {
            setWarningsDismissed((prev) => prev + 1);
          }}
        />

        {/* 1. Punto de partida: investigaciones académicas e imágenes sin censura. */}
        <BlogTimeline
          onArticleRead={() => setFeedInteractions((prev) => prev + 1)}
          onRedactionReveal={() => setRedactionsRevealed((prev) => prev + 1)}
        />

        {/* 2. Marco: los cuatro ejes que conectan las investigaciones. */}
        <ConceptualMapExplorer />

        {/* 3. Recorrido guiado: definición, repetición, algoritmo, ética y feed. */}
        <div id="recorrido">
          <BlogSections
            onRedactionClick={() => setRedactionsRevealed((prev) => prev + 1)}
            onFeedInteraction={() => setFeedInteractions((prev) => prev + 1)}
          />
        </div>

        {/* 4. Pausa reflexiva basada en la navegación de la persona. */}
        <DesensitizationInterlude
          warningsDismissed={warningsDismissed}
          totalWarningsSeen={warningsCount + warningsDismissed}
          habituationRate={habituationStats.habituationRate}
          readingBehavior={habituationStats.readingBehavior}
          scrollSpeed={habituationStats.scrollSpeedPxPerSec}
          secondsElapsed={secondsElapsed}
        />

        {/* 5. Referentes visuales, luego fuentes para quien quiera comprobarlas. */}
        <ArtReferentsSection />
        <BibliographySection />
        {/* 7. Final Confrontation & Retrospective Intelligent Audit */}
        <FinalReflection
          warningsGenerated={warningsCount + warningsDismissed}
          warningsDismissed={warningsDismissed}
          redactionsRevealed={redactionsRevealed}
          secondsElapsed={secondsElapsed}
          habituationRate={habituationStats.habituationRate}
          readingBehavior={habituationStats.readingBehavior}
          averageTimePerSection={habituationStats.averageTimePerSection}
          scrollSpeed={habituationStats.scrollSpeedPxPerSec}
          fastScrollCount={habituationStats.fastScrollCount}
          slowPauseSeconds={habituationStats.slowPauseSeconds}
          onResetExperience={handleResetExperience}
        />
      </main>
    </div>
  );
}
