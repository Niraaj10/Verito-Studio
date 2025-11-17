'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate } from 'motion/react';

export const items = [
  {
    id: 1,
    url: 'https://res.cloudinary.com/diff4mm8y/image/upload/v1763020670/White_and_Black_Simple_Modern_Minimalist_Fashion_Lookbook_Photo_Collage_Presentation_8_a2puac.png',
    title: 'Hotel Indra & Biryani and Tandoori',
    desc: 'Pune-based local restaurant known for its signature biryani and smoky tandoori dishes.',
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/diff4mm8y/image/upload/v1763020669/White_and_Black_Simple_Modern_Minimalist_Fashion_Lookbook_Photo_Collage_Presentation_7_ygtbno.png',
    title: 'Winter Wonderland',
    desc: 'Seasonal café rebrand with a cozy atmosphere and winter-inspired theme.',
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/diff4mm8y/image/upload/v1763020659/Aesthetic_Simple_Interior_Design_Business_Presentation_2_w2uspc.png',
    title: 'Winter Wonderland',
    desc: 'Seasonal café rebrand with a cozy atmosphere and winter-inspired theme.',
  },
  {
    id: 4,
    url: 'https://res.cloudinary.com/diff4mm8y/image/upload/v1763020659/Aesthetic_Simple_Interior_Design_Business_Presentation_1_gvoewj.png',
    title: 'Winter Wonderland',
    desc: 'Seasonal café rebrand with a cozy atmosphere and winter-inspired theme.',
  },
];

export function FramerCarousel() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;

      animate(x, targetX, {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      });
    }
  }, [index, x]);

  return (
    <div className="p-1 md:p-2 md:max-w-7xl mx-auto">
      <div className="flex flex-col gap-3">
        <div className="relative overflow-hidden rounded-2xl" ref={containerRef}>
          <motion.div className="flex" style={{ x }}>
            {items.map((item) => (
              <div key={item.id} className="relative shrink-0 w-full h-[300px] md:h-[700px]">
                {/* Background Image */}
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-2xl select-none pointer-events-none"
                  draggable={false}
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-2xl" />

                {/* Text Content */}
                <div className="absolute hidden md:block top-0 md:bottom-0 md:left-0 p-8 text-white max-w-lg">
                  <h3 className="text-md md:text-2xl text-black md:text-white font-semibold mb-2 drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 md:text-gray-200 leading-relaxed drop-shadow-md">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Prev Button */}
          <motion.button
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className={`absolute hidden md:block left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${
                index === 0
                  ? 'opacity-40 cursor-not-allowed'
                  : 'bg-white hover:scale-110 hover:opacity-100 opacity-70'
              }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          {/* Next Button */}
          <motion.button
            disabled={index === items.length - 1}
            onClick={() => setIndex((i) => Math.min(items.length - 1, i + 1))}
            className={`absolute hidden md:block right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${
                index === items.length - 1
                  ? 'opacity-40 cursor-not-allowed'
                  : 'bg-white hover:scale-110 hover:opacity-100 opacity-70'
              }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>

          {/* Progress Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-white/20 rounded-xl border border-white/30 backdrop-blur-md">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-8 bg-white' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
