'use client';

import { useState, useEffect } from 'react';

const agenda = [
  { time: '3:00 PM', event: 'Arrival', icon: '🚗' },
  { time: '5:00 PM', event: 'Games & Activities', icon: '🎮' },
  { time: '8:00 PM', event: 'Dinner Service', icon: '🍽️' },
  { time: '10:00 PM', event: 'Memories & Speeches', icon: '🎤' },
  { time: '12:00 AM', event: 'Farewell', icon: '👋' },
];

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % agenda.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-12 px-4 z-10">
      <div className="max-w-4xl w-full">
        {/* Section Title */}
        <h2
          className="text-4xl sm:text-5xl font-mono font-bold mb-16 text-center text-red-500 tracking-widest"
          style={{
            textShadow: '0 0 20px rgba(255, 0, 0, 0.5)',
          }}
        >
          TIMELINE & AGENDA
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          {/* <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 via-red-500 to-transparent transform -translate-x-1/2" /> */}

          {/* Timeline items */}
          <div className="space-y-12">
            {agenda.map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-500 transform ${
                  index === activeIndex ? 'scale-100 opacity-100' : 'scale-90 opacity-60'
                }`}
              >
                <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8 items-center`}>
                  {/* Content */}
                  <div className="flex-1">
                    <div
                      className={`${
                        index === activeIndex
                          ? 'bg-gradient-to-br from-red-900/50 to-red-900/20 border-red-500'
                          : 'bg-gradient-to-br from-gray-900 to-black border-red-600'
                      } border rounded-lg p-6 transition-all duration-500`}
                      style={{
                        boxShadow:
                          index === activeIndex
                            ? '0 0 30px rgba(255, 0, 0, 0.5), inset 0 0 20px rgba(255, 0, 0, 0.1)'
                            : '0 0 10px rgba(255, 0, 0, 0.2)',
                      }}
                    >
                      <div className="text-sm font-mono text-red-500 uppercase tracking-widest mb-2">
                        {item.time}
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{item.icon}</span>
                        <h3 className="text-xl font-mono font-bold text-white">
                          {item.event}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <div
                      className={`absolute inset-0 rounded-full border-2 border-red-600 transition-all duration-500 ${
                        index === activeIndex
                          ? 'bg-red-600 scale-100'
                          : 'bg-transparent scale-75'
                      }`}
                      style={{
                        boxShadow:
                          index === activeIndex
                            ? '0 0 20px rgba(255, 0, 0, 0.8)'
                            : '0 0 10px rgba(255, 0, 0, 0.3)',
                      }}
                    />
                    {index === activeIndex && (
                      <div className="absolute inset-0 rounded-full border-2 border-red-600 animate-pulse" />
                    )}
                  </div>

                  {/* Spacer for flex alignment */}
                  <div className="flex-1" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current event indicator */}
        <div className="mt-16 text-center">
          <p className="text-sm font-mono text-green-500 tracking-widest animate-pulse">
            ● NOW HIGHLIGHTING: {agenda[activeIndex].event.toUpperCase()}
          </p>
        </div>
      </div>
    </section>
  );
}
