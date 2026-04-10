'use client';

import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 500);
    const timer2 = setTimeout(() => setStep(2), 2000);
    const timer3 = setTimeout(() => setStep(3), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden">
      <div className="flex flex-col items-center gap-8">
        {/* Animated bars */}
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1 h-12 bg-red-600 animate-pulse"
              style={{
                animation: `pulse 0.8s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        {/* Text */}
        <div className="text-center font-mono text-white space-y-4">
          <div className={`text-lg tracking-widest transition-opacity duration-500 ${step >= 1 ? 'opacity-100' : 'opacity-0'}`}>
            {'> ACCESSING CONFIDENTIAL FILE...'}
          </div>

          <div className={`text-lg tracking-widest text-red-500 transition-opacity duration-500 ${step >= 2 ? 'opacity-100' : 'opacity-0'}`}>
            {'> DECRYPTING...'}
          </div>

          <div className={`text-sm tracking-widest text-green-500 transition-opacity duration-500 ${step >= 3 ? 'opacity-100' : 'opacity-0'}`}>
            {'> DECRYPTION COMPLETE'}
          </div>
        </div>

        {/* Loading bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-red-600 transition-all duration-3000"
            style={{
              width: step >= 3 ? '100%' : step >= 2 ? '75%' : step >= 1 ? '50%' : '10%',
            }}
          />
        </div>
      </div>
    </div>
  );
}
