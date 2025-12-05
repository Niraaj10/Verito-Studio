'use client';

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
  TouchEvent,
  WheelEvent,
} from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Anton, Work_Sans } from 'next/font/google';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import BlurText from "./BlurText";

const sans = Anton({
  subsets: ['latin'],
  weight: '400',
});

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        // Increase sensitivity for mobile, especially when scrolling back
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005; // Higher sensitivity for scrolling back
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = (): void => {
      setTouchStartY(0);
    };

    const handleScroll = (): void => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('wheel', handleWheel as unknown as EventListener, {
      passive: false,
    });
    window.addEventListener('scroll', handleScroll as EventListener);
    window.addEventListener(
      'touchstart',
      handleTouchStart as unknown as EventListener,
      { passive: false }
    );
    window.addEventListener(
      'touchmove',
      handleTouchMove as unknown as EventListener,
      { passive: false }
    );
    window.addEventListener('touchend', handleTouchEnd as EventListener);

    return () => {
      window.removeEventListener(
        'wheel',
        handleWheel as unknown as EventListener
      );
      window.removeEventListener('scroll', handleScroll as EventListener);
      window.removeEventListener(
        'touchstart',
        handleTouchStart as unknown as EventListener
      );
      window.removeEventListener(
        'touchmove',
        handleTouchMove as unknown as EventListener
      );
      window.removeEventListener('touchend', handleTouchEnd as EventListener);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const mediaWidth = 600 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight = 350 + scrollProgress * (isMobileState ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);

  const firstWord = title ? title.split(' ').slice(0, 3).join(' ') : '';
  const restOfTitle = title ? title.split(' ').slice(3).join(' ') : '';

  return (
    <div
      ref={sectionRef}
      className='bg-white duration-700 ease-in-out overflow-x-hidden'
    >
      <section className='relative flex flex-col items-center justify-start min-h-[100dvh]'>
        <div className='relative w-full flex flex-col items-center min-h-[100dvh] pt-7'>
          <motion.div
            className='absolute inset-0 z-0 h-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress * 2 }}
            transition={{ duration: 0.1 }}
          >
            {/* <Image
              src={bgImageSrc}
              alt='Background'
              width={1920}
              height={1080}
              className='w-screen h-screen'
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              priority
            /> */}
            <div className='flex flex-col items-center pb-24 justify-end h-[100vh] w-[100vw] text-black'>



              <p
                className="mx-auto -mt-10 md:mt-8 max-w-4xl text-center text-xs px-4 md:px-0 md:text-lg font-semibold">
                From social media to stunning websites, Verito Studio crafts a cohesive digital identity that sets your brand apart blending digital strategy, creative storytelling, high-impact content creation, and conversion-focused websites that helping your brand stand out and multiply your leads.
              </p>
            </div>
            <div className='absolute inset-0 ' />
          </motion.div>

          <div className='container mx-auto -mt-20 md:-mt-0 flex flex-col items-center justify-start relative z-10'>
            <div className='flex flex-col items-center justify-center w-full h-[100dvh] relative'>
              <div
                className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none rounded-2xl backdrop-blur-3xl bg-gray-100/20 -mt-4'
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.3)',
                }}
              >
                {mediaType === 'video' ? (
                  mediaSrc.includes('youtube.com') ? (
                    <div className='relative w-full h-full pointer-events-none'>
                      <iframe
                        width='100%'
                        height='100%'
                        src={
                          mediaSrc.includes('embed')
                            ? mediaSrc +
                            (mediaSrc.includes('?') ? '&' : '?') +
                            'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                            : mediaSrc.replace('watch?v=', 'embed/') +
                            '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' +
                            mediaSrc.split('v=')[1]
                        }
                        className='w-full h-full rounded-xl'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                      />
                      <div
                        className='absolute inset-0 z-10'
                        style={{ pointerEvents: 'none' }}
                      ></div>

                      <motion.div
                        className='absolute inset-0 bg-black/30 rounded-xl'
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  ) : (
                    <div className='relative w-full h-full pointer-events-none'>
                      <video
                        src={mediaSrc}
                        poster={posterSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload='auto'
                        className='w-full h-full object-cover rounded-xl'
                        controls={false}
                        disablePictureInPicture
                        disableRemotePlayback
                      />
                      <div
                        className='absolute inset-0 z-10'
                        style={{ pointerEvents: 'none' }}
                      ></div>

                      <motion.div
                        className='absolute inset-0 bg-black/30 rounded-xl'
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  )
                ) : (
                  <div className='relative w-full h-full p-2'>
                    <Image
                      src={mediaSrc}
                      alt={title || 'Media content'}
                      width={1280}
                      height={720}
                      className='w-full h-full object-cover rounded-xl'
                    />

                    <motion.div
                      className='absolute inset-0  rounded-xl'
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}

                <div className='flex flex-col max-w-2xl items-center text-center relative z-10 mt-5 transition-none'>
                  <Link
                    href="https://cal.com/verito-studio"
                    className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-lg border border-[#012afa4b] p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                    {/* <span className="text-foreground text-sm font-semibold">Book Your Free Strategy Call</span> */}
                    <span className="text-foreground text-sm font-semibold">Let’s Build Your Digital Presence</span>
                    <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                    <div className="bg-[#012cfa] group-hover:bg-[#012afa8d] size-8 overflow-hidden rounded-md duration-500">
                      <div className="flex w-12 text-white -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0 pl-2">
                        <span className="flex size-8">
                          <ArrowRight className="m-auto size-5" />
                        </span>
                        <span className="flex size-8">
                          <ArrowRight className="m-auto size-5" />
                        </span>
                      </div>
                    </div>
                  </Link>


                </div>

              </div>

              <div
                className={`flex items-center justfy-content -mt-[600px] text-center gap-4 w-full relative z-10 transition-none flex-col ${textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
                  }`}
              >
                <motion.h2
                  className='text-xl md:text-5xl lg:text-4xl -mb-3 font-bold text-center text-[#012cfa] transition-none'
                  style={{ transform: `translateX(${textTranslateX}vw)` }}
                >
                  <BlurText
                    text={restOfTitle}
                    delay={150}
                    animateBy="words"
                    direction="top"
                    // onAnimationComplete={handleAnimationComplete}
                    className="text-xl md:text-5xl lg:text-4xl font-bold text-center"
                  />
                  {/* {restOfTitle} */}
                </motion.h2>
                <motion.h2
                  className={`${sans.className} text-5xl md:text-5xl lg:text-8xl text-black uppercase`}
                  style={{ transform: `translateX(-${textTranslateX}vw)` }}
                >
                   <BlurText
                    text={firstWord}
                    delay={150}
                    animateBy="words"
                    direction="top"
                    // onAnimationComplete={handleAnimationComplete}
                    className="text-4xl md:text-5xl lg:text-8xl"
                  />
                  {/* {firstWord} */}
                </motion.h2>
              </div>
            </div>

            {/* <motion.section
              className='flex flex-col w-full px-8 py-10 md:px-16 lg:py-20'
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;






// "use client";

// import {
//   useEffect,
//   useRef,
//   useState,
//   ReactNode,
//   TouchEvent,
//   WheelEvent,
// } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Anton } from "next/font/google";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import { useLoco } from "./ui/SmoothScroll";

// const sans = Anton({
//   subsets: ["latin"],
//   weight: "400",
// });

// interface ScrollExpandMediaProps {
//   mediaType?: "video" | "image";
//   mediaSrc: string;
//   posterSrc?: string;
//   bgImageSrc: string;
//   title?: string;
//   date?: string;
//   scrollToExpand?: string;
//   textBlend?: boolean;
//   children?: ReactNode;
// }

// const ScrollExpandMedia = ({
//   mediaType = "video",
//   mediaSrc,
//   posterSrc,
//   bgImageSrc,
//   title,
//   textBlend,
// }: ScrollExpandMediaProps) => {
//   const scroll = useLoco();

//   const [progress, setProgress] = useState(0);
//   const [touchStart, setTouchStart] = useState(0);
//   const [isMobileState, setIsMobileState] = useState(false);
//   const isInsideExpand = useRef(false); 


//   // CONTROL LOCOMOTIVE ONLY WHEN animating
//   useEffect(() => {
//     if (!scroll) return;

//     if (progress > 0 && progress < 1) {
//       if (!isInsideExpand.current) {
//         scroll.stop();
//         isInsideExpand.current = true;
//       }
//     } else {
//       if (isInsideExpand.current) {
//         scroll.start();
//         isInsideExpand.current = false;
//       }
//     }
//   }, [progress, scroll]);

//   // SCROLL PROGRESS UPDATE (REVERSIBLE)
//   const updateProgress = (delta: number) => {
//     const next = Math.min(Math.max(progress + delta, 0), 1);
//     setProgress(next);
//   };

//   // WHEEL
//   const handleWheel = (e: WheelEvent) => {
//     // expand/collapse fully reversible
//     const delta = e.deltaY * 0.0012;

//     // Only block natural scrolling if we're inside 0–1
//     if (progress > 0 && progress < 1) {
//       e.preventDefault();
//     }

//     updateProgress(delta);
//   };

//   // TOUCH
//   const handleTouchStart = (e: TouchEvent) => {
//     setTouchStart(e.touches[0].clientY);
//   };

//   const handleTouchMove = (e: TouchEvent) => {
//     if (!touchStart) return;

//     const deltaY = touchStart - e.touches[0].clientY;
//     const delta = deltaY * 0.006;

//     if (progress > 0 && progress < 1) {
//       e.preventDefault();
//     }

//     updateProgress(delta);

//     setTouchStart(e.touches[0].clientY);
//   };

//   // GLOBAL LISTENERS
//   useEffect(() => {
//     window.addEventListener("wheel", handleWheel as any, { passive: false });
//     window.addEventListener("touchstart", handleTouchStart as any, {
//       passive: false,
//     });
//     window.addEventListener("touchmove", handleTouchMove as any, {
//       passive: false,
//     });

//     return () => {
//       window.removeEventListener("wheel", handleWheel as any);
//       window.removeEventListener("touchstart", handleTouchStart as any);
//       window.removeEventListener("touchmove", handleTouchMove as any);
//     };
//   });

//   // MOBILE CHECK
//   useEffect(() => {
//     const check = () => setIsMobileState(window.innerWidth < 800);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);

//   // UI (UNCHANGED)
//   const mediaWidth = 600 + progress * (isMobileState ? 600 : 1250);
//   const mediaHeight = 350 + progress * (isMobileState ? 100 : 400);
//   const textTranslateX = progress * (isMobileState ? 180 : 150);

//   const firstWord = title ? title.split(" ").slice(0, 3).join(" ") : "";
//   const restOfTitle = title ? title.split(" ").slice(3).join(" ") : "";

//   return (
//     <div className="bg-white duration-700 ease-in-out overflow-x-hidden">


//       <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
//         <div className="relative w-full flex flex-col items-center min-h-[100dvh] pt-7">
//           <motion.div
//             className="absolute inset-0 z-0 h-full"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 - progress * 2 }}
//             transition={{ duration: 0.1 }}
//           >
//             <div className="flex flex-col items-center pb-24 justify-end h-[100vh] w-[100vw] text-black">
//               <p className="mx-auto mt-8 max-w-4xl text-center text-xs px-4 md:px-0 md:text-lg font-semibold">
//               From social media to stunning websites, Verito Studio crafts a cohesive digital identity that sets your brand apart blending digital strategy, creative storytelling, high-impact content creation, and conversion-focused websites that helping your brand stand out and multiply your leads.
//               </p>
//             </div>
//             <div className="absolute inset-0" />
//           </motion.div>

//           <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
//             <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">

//               {/* MEDIA BOX */}
//               <div
//                 className="absolute  z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl backdrop-blur-3xl bg-gray-100/20 -mt-16 md:-mt-4 transition-none"
//                 style={{
//                   width: `${mediaWidth}px`,
//                   height: `${mediaHeight}px`,
//                   maxWidth: "95vw",
//                   maxHeight: "85vh",
//                   boxShadow: "0px 0px 50px rgba(0,0,0,0.3)",
//                 }}
//               >
//                 {mediaType === "video" ? (
//                   <div className="relative w-full h-full pointer-events-none">
//                     <video
//                       src={isMobileState ? "https://res.cloudinary.com/diff4mm8y/image/upload/v1763397291/Black_White_Bold_3D_Social_Media_Report_Presentation_3_czoshf.png" : mediaSrc}
//                       poster={posterSrc}
//                       autoPlay
//                       muted
//                       loop
//                       playsInline
//                       preload="auto"
//                       className="w-full h-full object-cover rounded-xl"
//                       controls={false}
//                     />
//                     <motion.div
//                       className="absolute inset-0 bg-black/30 rounded-xl"
//                       initial={{ opacity: 0.7 }}
//                       animate={{ opacity: 0.5 - progress * 0.3 }}
//                     />
//                   </div>
//                 ) : (
//                   <div className="relative w-full h-full p-2">
//                     <Image
//                       src={isMobileState ? "https://res.cloudinary.com/diff4mm8y/image/upload/v1763397291/Black_White_Bold_3D_Social_Media_Report_Presentation_3_czoshf.png" : mediaSrc}
//                       alt={title || "Media"}
//                       width={1280}
//                       height={720}
//                       className="w-full h-full object-cover rounded-xl"
//                     />
//                     <motion.div
//                       className="absolute inset-0 rounded-xl"
//                       initial={{ opacity: 0.7 }}
//                       animate={{ opacity: 0.7 - progress * 0.3 }}
//                     />
//                   </div>
//                 )}

//                 {/* BUTTON */}
//                 <div className="flex flex-col max-w-2xl items-center text-center relative z-10 mt-5 transition-none">
//                   <Link
//                     href="#link"
//                     className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-lg border border-[#012afa4b] p-1 pl-4 shadow-md dark:border-t-white/5"
//                   >
//                     <span className="text-foreground text-sm font-semibold">
//                       Let’s Build Your Digital Presence
//                     </span>

//                     <span className="dark:border-background block h-4 w-0.5 bg-white dark:bg-zinc-700"></span>

//                     <div className="bg-[#012cfa] group-hover:bg-[#012afa8d] size-8 overflow-hidden rounded-md duration-500">
//                       <div className="flex w-12 text-white -translate-x-1/2 duration-500 group-hover:translate-x-0 pl-2">
//                         <span className="flex size-8">
//                           <ArrowRight className="m-auto size-5" />
//                         </span>
//                         <span className="flex size-8">
//                           <ArrowRight className="m-auto size-5" />
//                         </span>
//                       </div>
//                     </div>
//                   </Link>
//                 </div>
//               </div>


//               {/* TITLE */}
//               <div
//                 className={`flex items-center text-center gap-4 w-full relative z-10 flex-col -mt-[600px] ${
//                   textBlend ? "mix-blend-difference" : "mix-blend-normal"
//                 }`}
//               >
//                 <motion.h2
//                   className="text-lg md:text-5xl lg:text-4xl -mb-3 font-bold text-center text-[#012cfa]"
//                   style={{ transform: `translateX(${textTranslateX}vw)` }}
//                 >
//                   {restOfTitle}
//                 </motion.h2>

//                 <motion.h2
//                   className={`${sans.className} text-4xl md:text-5xl lg:text-8xl text-black uppercase`}
//                   style={{ transform: `translateX(-${textTranslateX}vw)` }}
//                 >
//                   {firstWord}
//                 </motion.h2>
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ScrollExpandMedia;

