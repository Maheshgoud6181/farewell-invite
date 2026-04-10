'use client';

import { useState, useRef, useEffect } from 'react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          // Audio play failed, likely due to browser policy
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio.addEventListener('timeupdate', updateProgress);
    return () => audio.removeEventListener('timeupdate', updateProgress);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-12 px-4 z-10">
      <div className="max-w-md w-full">
        {/* Floating audio player */}
        <div
          className="bg-gradient-to-br from-gray-900 to-black border-2 border-red-600 rounded-lg p-8 backdrop-blur-sm animate-bounce"
          style={{
            boxShadow: '0 0 40px rgba(255, 0, 0, 0.4), inset 0 0 20px rgba(255, 0, 0, 0.1)',
            animationDuration: '2s',
          }}
        >
          <h3 className="text-center text-xl font-mono font-bold text-red-500 mb-6 tracking-widest">
            🔊 MISSION AUDIO
          </h3>

          {/* Animated frequency bars */}
          <div className="flex items-center justify-center gap-1 mb-8 h-12">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="w-1 bg-red-600 rounded-full"
                style={{
                  height: `${Math.sin(i * 0.5) * 30 + 40}%`,
                  animation: `pulse 0.4s ease-in-out infinite`,
                  animationDelay: `${i * 0.05}s`,
                }}
              />
            ))}
          </div>

          {/* Controls */}
          <div className="space-y-6">
            {/* Play button */}
            <button
              onClick={handlePlayPause}
              className="w-full py-4 bg-red-600 text-white font-mono font-bold text-lg tracking-widest uppercase rounded-lg transition-all duration-300 hover:scale-105"
              style={{
                boxShadow: '0 0 20px rgba(255, 0, 0, 0.5), inset 0 0 20px rgba(255, 0, 0, 0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 40px rgba(255, 0, 0, 0.8), inset 0 0 40px rgba(255, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 0, 0, 0.5), inset 0 0 20px rgba(255, 0, 0, 0.1)';
              }}
            >
              {isPlaying ? '⏸ PAUSE' : '▶ PLAY'}
            </button>

            {/* Progress bar */}
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-red-600 transition-all duration-100"
                style={{
                  width: `${progress}%`,
                  boxShadow: '0 0 10px rgba(255, 0, 0, 0.5)',
                }}
              />
            </div>

            {/* Status */}
            <div className="text-center">
              <p className="text-sm font-mono text-gray-400">
                {isPlaying ? 'Playing...' : 'Click to play mission audio'}
              </p>
            </div>
          </div>

          {/* Hidden audio element */}
          <audio
            ref={audioRef}
            src="https://assets.mixkit.co/active_storage/sfx/2867/2867-preview.mp3"
            crossOrigin="anonymous"
          />
        </div>

        {/* Info text */}
        <p className="text-center text-gray-500 font-mono text-xs mt-8 tracking-widest">
          SUSPENSE AUDIO ENABLED
        </p>
      </div>
    </section>
  );
}
