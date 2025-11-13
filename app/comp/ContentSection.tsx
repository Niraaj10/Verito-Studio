'use client';
import VideoPlayer from '@/components/ui/VideoPlayer';
import React from 'react';

const videos = [
  { src: '/videos/Reel 4th.mov', title: 'Every lead', poster: '/posters/lead.jpg' },
  { src: '/videos/Reel 4th.mov', title: 'biomarkers', poster: '/posters/biomarkers.jpg' },
  { src: '/videos/Reel 4th.mov', title: 'it drains', poster: '/posters/drains.jpg' },
  { src: '/videos/Reel 4th.mov', title: 'software', poster: '/posters/software.jpg' },
];

export default function CuratedContentSection() {
  return (
    <section className="text-center text-white py-12 bg-gradient-to-b from-zinc-900 to-black">
      <h2 className="text-4xl font-bold">
        Curated <span className="text-yellow-400">short form</span> content
      </h2>
      <p className="text-gray-400 mt-2">
        We help with creative direction and/or ideate, script and post produce.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {videos.map((video, idx) => (
          <VideoPlayer
            key={idx}
            src={video.src}
            title={video.title}
            // poster={video.poster}
          />
        ))}
      </div>
    </section>
  );
}
