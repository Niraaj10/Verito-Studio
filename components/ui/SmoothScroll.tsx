// // 

// 'use client';
// import { useEffect, useRef } from 'react';
// import { LocomotiveScrollOptions } from 'locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.css';
// import LocomotiveScroll from 'locomotive-scroll';

// export default function SmoothScroll({ children }: { children: React.ReactNode }) {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const scroll = new LocomotiveScroll({
//       el: containerRef.current,
//       smooth: true,
//       lerp: 0.07, 
//       multiplier: 0.8, 
//       smartphone: {
//         smooth: true,
//       },
//       tablet: {
//         smooth: true,
//       },
//     } as LocomotiveScrollOptions);

//     return () => {
//       scroll.destroy();
//     };
//   }, []);

//   return (
//     <div ref={containerRef} data-scroll-container>
//       {children}
//     </div>
//   );
// }



// 'use client';
// import { createContext, useContext, useEffect, useRef, useState } from 'react';
// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.css';

// const ScrollContext = createContext<any>(null);
// export const useLoco = () => useContext(ScrollContext);

// export default function SmoothScroll({ children }: { children: React.ReactNode }) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [scroll, setScroll] = useState<any>(null);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const loco = new LocomotiveScroll({
//       el: containerRef.current,
//       smooth: true,
//       lerp: 0.07,
//       multiplier: 0.8,
//       smartphone: { smooth: true },
//       tablet: { smooth: true },
//     });

//     setScroll(loco);

//     return () => loco.destroy();
//   }, []);

//   return (
//     <ScrollContext.Provider value={scroll}>
//       <div ref={containerRef} data-scroll-container>
//         {children}
//       </div>
//     </ScrollContext.Provider>
//   );
// }




"use client";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const ScrollContext = createContext<any>(null);
export const useLoco = () => useContext(ScrollContext);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scroll, setScroll] = useState<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let loco: any = null;

    try {
      // Try the common pattern (works for many versions)
      loco = new (LocomotiveScroll as any)({
        el: containerRef.current,
        smooth: true,
        lerp: 0.07,
        multiplier: 0.8,
        smartphone: { smooth: true },
        tablet: { smooth: true },
      });
      console.info("[smoothscroll] Locomotive created with el option.");
    } catch (err) {
      try {
        // Fallback: create then init (some v5 setups)
        loco = new (LocomotiveScroll as any)({
          smooth: true,
          lerp: 0.07,
        });
        if (typeof loco.init === "function") {
          loco.init({ el: containerRef.current });
          console.info("[smoothscroll] Locomotive created and init() called.");
        } else {
          console.warn("[smoothscroll] Locomotive instance created but no init() method found.");
        }
      } catch (err2) {
        console.error("[smoothscroll] Failed to initialize LocomotiveScroll", err2);
        return;
      }
    }

    // safe global for debug / access elsewhere
    (window as any).locoScroll = loco;
    setScroll(loco);

    // Optional: expose a small helper on window to read current y
    (window as any).locoGetY = () => {
      try {
        // try common shapes
        if (loco && loco.instance && loco.instance.scroll && typeof loco.instance.scroll.y === "number")
          return loco.instance.scroll.y;
        if (loco && loco.scroll && typeof loco.scroll.y === "number") return loco.scroll.y;
        if (loco && loco.currentScroll && typeof loco.currentScroll.y === "number") return loco.currentScroll.y;
      } catch (e) {}
      return 0;
    };

    return () => {
      try {
        loco?.destroy?.();
      } catch (e) {
        console.warn("[smoothscroll] loco.destroy failed", e);
      }
      // cleanup globals
      if ((window as any).locoScroll === loco) (window as any).locoScroll = undefined;
      if ((window as any).locoGetY) (window as any).locoGetY = undefined;
      setScroll(null);
    };
  }, []);

  return (
    <ScrollContext.Provider value={scroll}>
      {/* keep `id` to reference if needed */}
      <div id="loco-scroll" ref={containerRef}>
        {children}
      </div>
    </ScrollContext.Provider>
  );
}
