// 

'use client';
import { useEffect, useRef } from 'react';
import { LocomotiveScrollOptions } from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import LocomotiveScroll from 'locomotive-scroll';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      lerp: 0.07, 
      multiplier: 0.8, 
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    } as LocomotiveScrollOptions);

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} data-scroll-container>
      {children}
    </div>
  );
}
