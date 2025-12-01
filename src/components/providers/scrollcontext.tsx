// components/LenisProvider.tsx
"use client";

import Lenis from "lenis";
import { useEffect, useState, createContext, useContext } from "react";

interface SmoothScrollContextType {
  LenisRef: Lenis | null;
}

const SmoothScrollContext = createContext<SmoothScrollContextType | null>(null);

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export default function ScrollContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [LenisRef, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const scroller = new Lenis({
      lerp: 0.06,
      wheelMultiplier: 1.2,
      touchMultiplier: 2.5,
      syncTouch: true,
      syncTouchLerp: 0.06,
      overscroll: true,
      smoothWheel: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    let rf: number;

    function raf(time: number) {
      if (scroller) scroller.raf(time);
      rf = requestAnimationFrame(raf);
    }

    rf = requestAnimationFrame(raf);
    setLenis(scroller);

    return () => {
      if (scroller) {
        cancelAnimationFrame(rf);
        scroller.destroy();
        setLenis(null);
      }
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ LenisRef }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
