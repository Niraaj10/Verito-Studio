'use client';
import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';

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
