'use client';

import { useState, useEffect } from 'react';

const details = [
  { icon: '📍', label: 'Location', value: 'Mohor Kutir Resorts, Durgapur, West Bengal' },
  { icon: '📅', label: 'Date', value: '2026-04-12' },
  { icon: '⏰', label: 'Time', value: '12:00 PM onwards' },
  { icon: '🎯', label: 'Objective', value: 'Celebrate unforgettable memories' },
];

export default function MissionBriefing() {
  const [visibleDetails, setVisibleDetails] = useState<number[]>([]);

  useEffect(() => {
    details.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleDetails((prev) => [...prev, index]);
      }, index * 200);

      return () => clearTimeout(timer);
    });
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-12 px-4 z-10">
      <div className="max-w-4xl w-full">
        {/* Section Title */}
        <h2
          className="text-4xl sm:text-5xl font-mono font-bold mb-12 text-center text-red-500 tracking-widest"
          style={{
            textShadow: '0 0 20px rgba(255, 0, 0, 0.5)',
          }}
        >
          MISSION BRIEFING
        </h2>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {details.map((detail, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-gray-900 to-black border border-red-600 rounded-lg p-6 backdrop-blur-sm transition-all duration-700 transform ${
                visibleDetails.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                boxShadow: visibleDetails.includes(index)
                  ? '0 0 20px rgba(255, 0, 0, 0.3), inset 0 0 20px rgba(255, 0, 0, 0.05)'
                  : '0 0 10px rgba(255, 0, 0, 0.1)',
              }}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl mt-1">{detail.icon}</div>
                <div className="flex-1">
                  <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-2">
                    {detail.label}
                  </h3>
                  <p className="text-lg font-mono font-bold text-white">
                    {detail.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Briefing Summary */}
        <div
          className="mt-12 bg-gradient-to-br from-gray-900 to-black border-2 border-red-600 rounded-lg p-8 backdrop-blur-sm"
          style={{
            boxShadow: '0 0 30px rgba(255, 0, 0, 0.2), inset 0 0 30px rgba(255, 0, 0, 0.05)',
          }}
        >
          <h3 className="text-xl font-mono font-bold text-red-500 mb-4 tracking-widest">
            MISSION PARAMETERS
          </h3>
          <ul className="space-y-3 text-gray-300 font-mono text-sm">
            <li className="flex gap-3">
              <span className="text-red-500">▸</span>
              <span>All invitees are critical to the success of this operation</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-500">▸</span>
              <span>Come prepared to celebrate years of legendary service</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-500">▸</span>
              <span>This farewell will be a night to remember</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-500">▸</span>
              <span>Further details will be provided at the briefing site</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
