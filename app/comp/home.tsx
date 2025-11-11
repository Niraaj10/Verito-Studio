'use client';

import { useState, useEffect } from 'react';
import ScrollExpandMedia from '@/components/scroll-expansion-hero';

interface MediaAbout {
  overview: string;
  conclusion: string;
}

interface MediaContent {
  src: string;
  poster?: string;
  background: string;
  title: string;
  date: string;
  scrollToExpand: string;
  about: MediaAbout;
}

interface MediaContentCollection {
  [key: string]: MediaContent;
}

const sampleMediaContent: MediaContentCollection = {
  // video: {
  //   src: 'https://res.cloudinary.com/diff4mm8y/video/upload/v1762748823/VID_20251109_202109_836_eedhmt.mp4',
  //   poster:
  //     'https://res.cloudinary.com/diff4mm8y/image/upload/v1750183973/1_TYTTjau5wG9p_l5XMMjbOw_rbpdem.jpg',
  //   background:
  //     'https://res.cloudinary.com/diff4mm8y/image/upload/v1750183973/1_TYTTjau5wG9p_l5XMMjbOw_rbpdem.jpg',
  //   title: 'Immersive Video Experience',
  //   date: 'Cosmic Journey',
  //   scrollToExpand: 'Scroll to Expand Demo',
  //   about: {
  //     overview:
  //       'This is a demonstration of the ScrollExpandMedia component with a video. As you scroll, the video expands to fill more of the screen, creating an immersive experience. This component is perfect for showcasing video content in a modern, interactive way.',
  //     conclusion:
  //       'The ScrollExpandMedia component provides a unique way to engage users with your content through interactive scrolling. Try switching between video and image modes to see different implementations.',
  //   },
  // },
  image: {
    src: 'https://res.cloudinary.com/diff4mm8y/image/upload/v1762768101/Black_White_Bold_3D_Social_Media_Report_Presentation_dszo12.jpg',
    background:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1920&auto=format&fit=crop',
    title: 'Build. Launch. Grow. we handle your entire online presence',
    date: 'From social media to stunning websites, ',
    scrollToExpand: 'Verito Studio crafts a cohesive digital identity that sets your brand apart.',
    about: {
      overview:
        'This is a demonstration of the ScrollExpandMedia component with an image. The same smooth expansion effect works beautifully with static images, allowing you to create engaging visual experiences without video content.',
      conclusion:
        'The ScrollExpandMedia component works equally well with images and videos. This flexibility allows you to choose the media type that best suits your content while maintaining the same engaging user experience.',
    },
  },
};

// const MediaContent = ({ mediaType }: { mediaType: 'video' | 'image' }) => {
const MediaContent = ({ mediaType }: { mediaType: 'image' }) => {
  const currentMedia = sampleMediaContent[mediaType];

  return (
    <div className='max-w-4xl mx-auto'>
      <h2 className='text-3xl font-bold mb-6 text-black dark:text-white'>
        About This Component
      </h2>
      <p className='text-lg mb-8 text-black dark:text-white'>
        {currentMedia.about.overview}
      </p>

      <p className='text-lg mb-8 text-black dark:text-white'>
        {currentMedia.about.conclusion}
      </p>
    </div>
  );
};

// export const VideoExpansionTextBlend = () => {
//   const mediaType = 'video';
//   const currentMedia = sampleMediaContent[mediaType];

//   useEffect(() => {
//     window.scrollTo(0, 0);

//     const resetEvent = new Event('resetSection');
//     window.dispatchEvent(resetEvent);
//   }, []);

//   return (
//     <div className='min-h-screen'>
//       <ScrollExpandMedia
//         mediaType={mediaType}
//         mediaSrc={currentMedia.src}
//         posterSrc={currentMedia.poster}
//         bgImageSrc={currentMedia.background}
//         title={currentMedia.title}
//         date={currentMedia.date}
//         scrollToExpand={currentMedia.scrollToExpand}
//         textBlend
//       >
//         <MediaContent mediaType={mediaType} />
//       </ScrollExpandMedia>
//     </div>
//   );
// };

export const ImageExpansionTextBlend = () => {
  const mediaType = 'image';
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen'>
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
        textBlend
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

// export const VideoExpansion = () => {
//   const mediaType = 'video';
//   const currentMedia = sampleMediaContent[mediaType];

//   useEffect(() => {
//     window.scrollTo(0, 0);

//     const resetEvent = new Event('resetSection');
//     window.dispatchEvent(resetEvent);
//   }, []);

//   return (
//     <div className='min-h-screen'>
//       <ScrollExpandMedia
//         mediaType={mediaType}
//         mediaSrc={currentMedia.src}
//         posterSrc={currentMedia.poster}
//         bgImageSrc={currentMedia.background}
//         title={currentMedia.title}
//         date={currentMedia.date}
//         scrollToExpand={currentMedia.scrollToExpand}
//       >
//         <MediaContent mediaType={mediaType} />
//       </ScrollExpandMedia>
//     </div>
//   );
// };

// export const ImageExpansion = () => {
//   const mediaType = 'image';
//   const currentMedia = sampleMediaContent[mediaType];

//   useEffect(() => {
//     window.scrollTo(0, 0);

//     const resetEvent = new Event('resetSection');
//     window.dispatchEvent(resetEvent);
//   }, []);

//   return (
//     <div className='min-h-screen'>
//       <ScrollExpandMedia
//         mediaType={mediaType}
//         mediaSrc={currentMedia.src}
//         bgImageSrc={currentMedia.background}
//         title={currentMedia.title}
//         date={currentMedia.date}
//         scrollToExpand={currentMedia.scrollToExpand}
//       >
//         <MediaContent mediaType={mediaType} />
//       </ScrollExpandMedia>
//     </div>
//   );
// };

const Demo = () => {
  const [mediaType, setMediaType] = useState('image');
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, [mediaType]);

  return (
    <div className='min-h-screen bg-white'>
      {/* <div className='fixed top-4 right-4 z-50 flex gap-2'>
        <button
          onClick={() => setMediaType('video')}
          className={`px-4 py-2 rounded-lg ${
            mediaType === 'video'
              ? 'bg-white text-black'
              : 'bg-black/50 text-white border border-white/30'
          }`}
        >
          Video
        </button>

        <button
          onClick={() => setMediaType('image')}
          className={`px-4 py-2 rounded-lg ${
            mediaType === 'image'
              ? 'bg-white text-black'
              : 'bg-black/50 text-white border border-white/30'
          }`}
        >
          Image
        </button>
      </div> */}

      <ScrollExpandMedia
        mediaType={mediaType as 'video' | 'image'}
        mediaSrc={currentMedia.src}
        posterSrc={mediaType === 'video' ? currentMedia.poster : undefined}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType as 'image'} />
      </ScrollExpandMedia>
    </div>
  );
};

export default Demo;
