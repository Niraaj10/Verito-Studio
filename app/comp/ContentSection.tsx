// 'use client';

// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { Volume2, VolumeX } from 'lucide-react';

// const videos = [
//   { src: '/videos/Reel 4th.mov', title: 'Every lead', poster: '/posters/lead.jpg' },
//   { src: '/videos/Reel 4th.mov', title: 'biomarkers', poster: '/posters/biomarkers.jpg' },
//   { src: '/videos/Reel 4th.mov', title: 'it drains', poster: '/posters/drains.jpg' },
//   { src: '/videos/Reel 4th.mov', title: 'software', poster: '/posters/software.jpg' },
// ];

// export default function CuratedContentSection() {
//   return (
//     <section className="bg-black text-white py-20 px-6 flex flex-col items-center">
//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: 'easeOut' }}
//         viewport={{ once: false }}
//         className="text-center max-w-2xl mb-14"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold">
//           Curated{' '}
//           <span className="text-yellow-400">short form</span> content
//         </h2>
//         <p className="text-gray-400 mt-4">
//           We help with creative direction and/or ideate, script and post produce.
//         </p>
//       </motion.div>

//       {/* Video Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {videos.map((video, index) => (
//           <VideoCard key={index} src={video.src} title={video.title} />
//         ))}
//       </div>
//     </section>
//   );
// }

// function VideoCard({ src, title }: { src: string; title: string }) {
//   const [muted, setMuted] = useState(true);

//   return (
//     // <motion.div
//     //   initial={{ opacity: 0, y: 30, scale: 0.95 }}
//     //   whileInView={{ opacity: 1, y: 0, scale: 1 }}
//     //   transition={{ duration: 0.7, delay: 0.1 }}
//     //   viewport={{ once: false }}
//     //   className="relative bg-zinc-900 rounded-2xl overflow-hidden shadow-lg border border-zinc-700"
//     // >
//     <div className="relative bg-zinc-900 rounded-2xl overflow-hidden shadow-lg border border-zinc-700">
//       {/* Video */}
//       <video
//         src={src}
//         muted={muted}
//         autoPlay
//         loop
//         playsInline
//         className="w-full aspect-[9/16] object-cover"
//       />

//       {/* Enable sound button */}
//       <button
//         onClick={() => setMuted(!muted)}
//         className="absolute top-3 left-3 bg-zinc-800/70 hover:bg-zinc-700 text-sm px-3 py-1 rounded-md flex items-center gap-2"
//       >
//         {muted ? (
//           <>
//             <VolumeX size={16} /> Enable sound
//           </>
//         ) : (
//           <>
//             <Volume2 size={16} /> Mute
//           </>
//         )}
//       </button>
//       </div>
//     // </motion.div>
//   );
// }



'use client';
import VideoPlayer from '@/components/ui/VideoPlayer';
import { Anton } from 'next/font/google';
import Image from 'next/image';

const sans = Anton({
  subsets: ['latin'],
  weight: '400',
});

const videos = [
  { src: '/videos/Reel 4th.mov', title: 'Every lead', poster: '/posters/lead.jpg' },
  { src: '/videos/Reel 4th.mov', title: 'biomarkers', poster: '/posters/biomarkers.jpg' },
  { src: '/videos/Reel 4th.mov', title: 'it drains', poster: '/posters/drains.jpg' },
  { src: '/videos/Reel 4th.mov', title: 'software', poster: '/posters/software.jpg' },
];

export default function CuratedContentSection() {
  return (
    <section className="text-center py-12 mt-20">
      <div className="relative text-center max-w-3xl mx-auto">
        <Image
          src="/smallC.svg"
          alt="Automated Templates"
          width={100}
          height={100}
          //   h-108 w-85
          className="absolute -top-8 left-13 w-[500px] h-[110px] z-0"
        />
        <h2 className={`${sans.className} relative text-4xl font-bold text-gray-900 mb-4`}>
          Scroll-Stopping Short Form
        </h2>
        <p className="text-gray-600 relative max-w-2xl">
          We ideate, script, shoot, and edit high-performing reels designed to grab attention, tell your story, and grow your brand.                </p>
      </div>

      <div className="max-w-6xl mt-16 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {videos.map((video, idx) => (
          <div key={idx} className='bg-gradient-to-tr from-purple-100 via-blue-100 to-orange-100 p-2 shadow-xl rounded-2xl'>
            <VideoPlayer
              key={idx}
              src={video.src}
              title={video.title}
            // poster={video.poster}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
