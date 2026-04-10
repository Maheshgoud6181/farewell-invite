'use client';

import { useState } from 'react';

export default function HeroSection() {
  const [isAccepted, setIsAccepted] = useState(false);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden z-10">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(255, 0, 0, .1) 25%, rgba(255, 0, 0, .1) 26%, transparent 27%, transparent 74%, rgba(255, 0, 0, .1) 75%, rgba(255, 0, 0, .1) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(255, 0, 0, .1) 25%, rgba(255, 0, 0, .1) 26%, transparent 27%, transparent 74%, rgba(255, 0, 0, .1) 75%, rgba(255, 0, 0, .1) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '50px 50px',
            backgroundPosition: '0 0',
          }}
        />
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
        {/* Fingerprint effect */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32">
            <svg
              className="w-full h-full text-red-600"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            >
              <circle cx="50" cy="50" r="45" opacity="0.3" />
              <circle cx="50" cy="50" r="38" opacity="0.4" />
              <circle cx="50" cy="50" r="31" opacity="0.5" />
              <circle cx="50" cy="50" r="24" opacity="0.6" />
              <circle cx="50" cy="50" r="17" opacity="0.7" />
              <path
                d="M 50 50 Q 60 40 70 50 Q 60 60 50 70 Q 40 60 30 50 Q 40 40 50 50"
                opacity="0.8"
              />
            </svg>
            <div
              className="absolute inset-0 animate-pulse"
              style={{
                animation: 'pulse 2s ease-in-out infinite',
              }}
            >
              <svg
                className="w-full h-full text-red-500"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              >
                <circle cx="50" cy="50" r="45" opacity="0.5" />
              </svg>
            </div>
          </div>
        </div>

        {/* Main title with glitch effect */}
        <h1
          className="text-5xl sm:text-7xl font-mono font-bold mb-4 text-white tracking-wider"
          style={{
            textShadow: '0 0 20px rgba(255, 0, 0, 0.5)',
            animation: 'glitch 3s ease-in-out infinite',
          }}
        >
          MISSION: FAREWELL 2026
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-300 font-mono mb-8 tracking-widest">
          This message will self-destruct...
        </p>

        {/* Glowing button */}
        <button
          onClick={() => setIsAccepted(true)}
          className="relative px-8 py-4 bg-red-600 text-white font-mono font-bold text-lg tracking-widest uppercase rounded-lg transition-all duration-300 hover:scale-105"
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
          Accept Mission
        </button>

        {isAccepted && (
          <div className="mt-8 text-center">
            <p className="text-green-500 font-mono text-sm tracking-widest animate-pulse">
              ✓ MISSION ACCEPTED
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
