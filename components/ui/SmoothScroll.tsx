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





// "use client";
// import React, { createContext, useContext, useEffect, useRef, useState } from "react";
// import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/dist/locomotive-scroll.css";

// const ScrollContext = createContext<any>(null);
// export const useLoco = () => useContext(ScrollContext);

// export default function SmoothScroll({ children }: { children: React.ReactNode }) {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const [scroll, setScroll] = useState<any>(null);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     let loco: any = null;

//     try {
//       // Try the common pattern (works for many versions)
//       loco = new (LocomotiveScroll as any)({
//         el: containerRef.current,
//         smooth: true,
//         lerp: 0.07,
//         multiplier: 0.8,
//         smartphone: { smooth: true },
//         tablet: { smooth: true },
//       });
//       console.info("[smoothscroll] Locomotive created with el option.");
//     } catch (err) {
//       try {
//         // Fallback: create then init (some v5 setups)
//         loco = new (LocomotiveScroll as any)({
//           smooth: true,
//           lerp: 0.07,
//         });
//         if (typeof loco.init === "function") {
//           loco.init({ el: containerRef.current });
//           console.info("[smoothscroll] Locomotive created and init() called.");
//         } else {
//           console.warn("[smoothscroll] Locomotive instance created but no init() method found.");
//         }
//       } catch (err2) {
//         console.error("[smoothscroll] Failed to initialize LocomotiveScroll", err2);
//         return;
//       }
//     }

//     // safe global for debug / access elsewhere
//     (window as any).locoScroll = loco;
//     setScroll(loco);

//     // Optional: expose a small helper on window to read current y
//     (window as any).locoGetY = () => {
//       try {
//         // try common shapes
//         if (loco && loco.instance && loco.instance.scroll && typeof loco.instance.scroll.y === "number")
//           return loco.instance.scroll.y;
//         if (loco && loco.scroll && typeof loco.scroll.y === "number") return loco.scroll.y;
//         if (loco && loco.currentScroll && typeof loco.currentScroll.y === "number") return loco.currentScroll.y;
//       } catch (e) {}
//       return 0;
//     };

//     return () => {
//       try {
//         loco?.destroy?.();
//       } catch (e) {
//         console.warn("[smoothscroll] loco.destroy failed", e);
//       }
//       // cleanup globals
//       if ((window as any).locoScroll === loco) (window as any).locoScroll = undefined;
//       if ((window as any).locoGetY) (window as any).locoGetY = undefined;
//       setScroll(null);
//     };
//   }, []);

//   return (
//     <ScrollContext.Provider value={scroll}>
//       {/* keep `id` to reference if needed */}
//       <div id="loco-scroll" ref={containerRef}>
//         {children}
//       </div>
//     </ScrollContext.Provider>
//   );
// }



"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

const ScrollContext = createContext<any>(null);
export const useLoco = () => useContext(ScrollContext);

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scroll, setScroll] = useState<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let loco: any = null;

    // ⛔️ IMPORTANT: load locomotive-scroll *only on client*
    import("locomotive-scroll")
      .then((module) => {
        const LocomotiveScroll = module.default;

        try {
          // ---- Attempt 1: v4-like signature with el option ----
          loco = new LocomotiveScroll({
            el: containerRef.current,
            smooth: true,
            lerp: 0.07,
            multiplier: 0.8,
            smartphone: { smooth: true },
            tablet: { smooth: true },
          });

          console.info("[SmoothScroll] Locomotive initialized via el: option");
        } catch (err) {
          console.warn("[SmoothScroll] Init via el: failed, trying fallback…", err);

          try {
            // ---- Attempt 2: v5-like "init()" signature ----
            loco = new LocomotiveScroll({
              smooth: true,
              lerp: 0.07,
            });

            if (typeof loco.init === "function") {
              loco.init({ el: containerRef.current });
              console.info("[SmoothScroll] Locomotive initialized via init()");
            } else {
              console.warn(
                "[SmoothScroll] No init() method available on locomotive-scroll instance"
              );
            }
          } catch (e2) {
            console.error("[SmoothScroll] Failed to initialize loco scroll", e2);
            return;
          }
        }

        // Expose globally
        (window as any).locoScroll = loco;
        setScroll(loco);

        // helper for easy access of Y scroll
        (window as any).locoGetY = () => {
          try {
            if (loco?.instance?.scroll?.y) return loco.instance.scroll.y;
            if (loco?.scroll?.y) return loco.scroll.y;
            if (loco?.currentScroll?.y) return loco.currentScroll.y;
          } catch (_) {}
          return 0;
        };
      })
      .catch((err) => {
        console.error("[SmoothScroll] Failed dynamic import", err);
      });

    return () => {
      try {
        loco?.destroy?.();
      } catch (_) {}
      if ((window as any).locoScroll === loco)
        (window as any).locoScroll = undefined;
      if ((window as any).locoGetY) (window as any).locoGetY = undefined;

      setScroll(null);
    };
  }, []);

  return (
    <ScrollContext.Provider value={scroll}>
      <div id="loco-scroll" ref={containerRef}>
        {children}
      </div>
    </ScrollContext.Provider>
  );
}
