import { useState, useEffect, useRef } from 'react';

export interface HabituationStats {
  habituationRate: number; // 0 to 100
  scrollSpeedPxPerSec: number;
  readingBehavior: 'slow_reflective' | 'moderate' | 'fast_desensitized';
  behaviorLabel: string;
  behaviorDescription: string;
  averageTimePerSection: number;
  fastScrollCount: number;
  slowPauseSeconds: number;
  totalDistancePx: number;
}

export function useHabituationTracker(
  scrollProgress: number,
  secondsElapsed: number,
  warningsDismissed: number,
  redactionsRevealed: number,
  feedInteractions: number,
  activeSection: string,
  isActive: boolean
) {
  const [scrollSpeed, setScrollSpeed] = useState<number>(0);
  const [fastScrollCount, setFastScrollCount] = useState<number>(0);
  const [slowPauseSeconds, setSlowPauseSeconds] = useState<number>(0);
  const sectionDwellTime = useRef<Record<string, number>>({});

  const lastScrollY = useRef<number>(0);
  const lastScrollTime = useRef<number>(Date.now());
  const speedHistory = useRef<number[]>([]);

  // Track dwell time per section
  useEffect(() => {
    if (!isActive || !activeSection) return;
    const interval = setInterval(() => {
      sectionDwellTime.current[activeSection] = (sectionDwellTime.current[activeSection] || 0) + 1;
    }, 1000);
    return () => clearInterval(interval);
  }, [activeSection, isActive]);

  // Track real scroll velocity (px per second)
  useEffect(() => {
    if (!isActive) return;

    let timeoutId: NodeJS.Timeout;

    const handleScrollEvent = () => {
      const now = Date.now();
      const currentY = window.scrollY;
      const timeDeltaMs = now - lastScrollTime.current;

      if (timeDeltaMs > 80) {
        const distanceDeltaPx = Math.abs(currentY - lastScrollY.current);
        const calculatedSpeed = Math.round((distanceDeltaPx / timeDeltaMs) * 1000);

        setScrollSpeed(calculatedSpeed);
        speedHistory.current.push(calculatedSpeed);
        if (speedHistory.current.length > 25) {
          speedHistory.current.shift();
        }

        if (calculatedSpeed > 750) {
          setFastScrollCount((prev) => prev + 1);
        }

        lastScrollY.current = currentY;
        lastScrollTime.current = now;
      }

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScrollSpeed(0);
      }, 250);
    };

    window.addEventListener('scroll', handleScrollEvent, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
      clearTimeout(timeoutId);
    };
  }, [isActive]);

  // Track pauses and slow reading moments
  useEffect(() => {
    if (!isActive) return;
    const interval = setInterval(() => {
      if (scrollSpeed < 120 && secondsElapsed > 0) {
        setSlowPauseSeconds((prev) => prev + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [scrollSpeed, secondsElapsed, isActive]);

  // -------------------------------------------------------------
  // INTELLIGENT HABITUATION ALGORITHM
  // -------------------------------------------------------------
  // If the user scrolls fast and doesn't spend time reading:
  //   -> High habituation rate (numb digital consumer).
  // If the user stops, reads paragraphs, spends time per section:
  //   -> Low / normal habituation rate (empathetic attentive reader).
  // -------------------------------------------------------------
  const avgSpeed =
    speedHistory.current.length > 0
      ? Math.round(
          speedHistory.current.reduce((a, b) => a + b, 0) / speedHistory.current.length
        )
      : scrollSpeed;

  // Expected reading time in seconds for the current scroll progress
  // (Full page ~1500 words = ~240 seconds for thoughtful reading)
  const expectedReadingSeconds = Math.max(8, (scrollProgress / 100) * 200);

  // Ratio of actual time spent vs expected time
  // If actual < expected -> rushing down -> ratio < 1
  // If actual >= expected -> reading with care -> ratio >= 1
  const readingDwellRatio = secondsElapsed > 0 ? secondsElapsed / expectedReadingSeconds : 0.5;

  let calculatedHabituation = 50;

  if (scrollProgress <= 5) {
    // Just entered
    calculatedHabituation = 8;
  } else if (readingDwellRatio >= 1.2) {
    // The user is reading with care, pausing and taking time:
    // Habituation stays low (15% to 35%)
    const baseLow = Math.max(12, Math.round(scrollProgress * 0.25));
    const pauseBonus = Math.min(10, Math.floor(slowPauseSeconds / 15));
    const curBonus = Math.min(8, redactionsRevealed * 2);
    calculatedHabituation = Math.max(10, baseLow - pauseBonus - curBonus);
  } else if (readingDwellRatio >= 0.6) {
    // Moderate reader
    // Habituation is normal / moderate (35% to 65%)
    calculatedHabituation = Math.min(
      65,
      Math.max(35, Math.round(scrollProgress * 0.55 + warningsDismissed * 4 - redactionsRevealed * 2))
    );
  } else {
    // Speed scroller / rushed reader!
    // The user is flying through the text without stopping:
    // Habituation climbs rapidly to 70% - 98%!
    const speedPenalty = Math.min(30, Math.floor(fastScrollCount * 3));
    const rushPenalty = Math.round((1 - readingDwellRatio) * 45);
    calculatedHabituation = Math.min(
      99,
      Math.max(68, Math.round(scrollProgress * 0.5 + rushPenalty + speedPenalty + warningsDismissed * 5))
    );
  }

  // Determine behavior classification
  let behavior: 'slow_reflective' | 'moderate' | 'fast_desensitized' = 'moderate';
  let label = 'LECTURA MODERADA';
  let description =
    'Mantienes un ritmo de lectura promedio, intercalando pausas breves con avances rápidos.';

  if (calculatedHabituation <= 35 || readingDwellRatio >= 1.1) {
    behavior = 'slow_reflective';
    label = 'LECTURA DETENIDA // SENSIBILIDAD ACTIVA';
    description =
      'Te estás tomando el tiempo de leer los textos con calma y procesar las imágenes. Tu mente no ha entrado en piloto automático.';
  } else if (calculatedHabituation >= 68 || readingDwellRatio < 0.5) {
    behavior = 'fast_desensitized';
    label = 'SCROLL VELOZ // HABITUACIÓN ALTA';
    description =
      'Estás bajando rápidamente por la página sin concederle tiempo a las palabras. Tu sistema perceptivo trata la violencia como simple feed superficial.';
  }

  const sectionsCount = Object.keys(sectionDwellTime.current).length;
  const totalDwellTime = Object.values(sectionDwellTime.current).reduce((a, b) => a + b, 0);
  const avgTimePerSection = sectionsCount > 0 ? Math.round(totalDwellTime / sectionsCount) : 0;

  return {
    habituationRate: calculatedHabituation,
    scrollSpeedPxPerSec: avgSpeed,
    readingBehavior: behavior,
    behaviorLabel: label,
    behaviorDescription: description,
    averageTimePerSection: avgTimePerSection,
    fastScrollCount,
    slowPauseSeconds,
    totalDistancePx: lastScrollY.current
  };
}
