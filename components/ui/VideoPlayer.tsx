"use client";
// import Plyr from 'plyr-react';
import dynamic from 'next/dynamic';
import 'plyr-react/plyr.css';

const Plyr = dynamic(() => import("plyr-react"), {
  ssr: false,
});


interface VideoPlayerProps {
  src: string;
  title?: string;
  // poster?: string;
}

export default function VideoPlayer({ src, title }: VideoPlayerProps) {
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-md">
      <Plyr
        source={{
          type: 'video',
          title: title || '',
          sources: [{ src, type: 'video/mp4' }],
        }}
        options={{
          controls: [
            'play-large',
            'rewind',
            'play',
            'fast-forward',
            'progress',
            'current-time',
            'mute',
            'volume',
            'settings',
            'pip',
            'airplay',
            'fullscreen',
          ],
        }}
      />
    </div>
  );
}
