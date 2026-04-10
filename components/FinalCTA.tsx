'use client';

import { useState } from 'react';

export default function FinalCTA() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const handleSaveTheDate = () => {
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
    }, 3000);
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-12 px-4 z-10 pb-24">
      <div className="max-w-3xl w-full text-center">
        {/* Main call to action */}
        <div className="mb-12">
          <h2
            className="text-5xl sm:text-7xl font-mono font-bold mb-6 text-white tracking-wider"
            style={{
              textShadow: '0 0 30px rgba(255, 0, 0, 0.6)',
            }}
          >
            YOUR MISSION
            <br />
            STARTS NOW
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 font-mono mb-12">
            Confirm your attendance for the farewell celebration
          </p>
        </div>

        {/* Button group */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <button
            onClick={handleSubmit}
            className="px-8 py-4 bg-red-600 text-white font-mono font-bold text-lg tracking-widest uppercase rounded-lg transition-all duration-300 hover:scale-105"
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
            JOIN THE FAREWELL
          </button>

          <button
            onClick={handleSaveTheDate}
            className="px-8 py-4 border-2 border-red-600 text-red-500 font-mono font-bold text-lg tracking-widest uppercase rounded-lg transition-all duration-300 hover:scale-105 hover:bg-red-600/10"
            style={{
              boxShadow: '0 0 15px rgba(255, 0, 0, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 0, 0, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.3)';
            }}
          >
            SAVE THE DATE
          </button>
        </div>

        {/* Confirmation message */}
        {isSubmitted && (
          <div
            className="mb-12 p-6 bg-gradient-to-br from-green-900/30 to-green-900/10 border border-green-600 rounded-lg backdrop-blur-sm animate-pulse"
            style={{
              boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)',
            }}
          >
            <p className="text-green-500 font-mono text-lg tracking-widest font-bold">
              ✓ MISSION CONFIRMATION RECEIVED
            </p>
            <p className="text-green-400 font-mono text-sm mt-2">
              Further instructions will be transmitted to your secure channel
            </p>
          </div>
        )}

        {/* Save the Date Confirmation */}
        {isSaved && (
          <div
            className="mb-12 p-6 bg-gradient-to-br from-blue-900/30 to-blue-900/10 border border-blue-600 rounded-lg backdrop-blur-sm animate-pulse"
            style={{
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
            }}
          >
            <p className="text-blue-500 font-mono text-lg tracking-widest font-bold">
              ✓ DATE SAVED TO CALENDAR
            </p>
            <p className="text-blue-400 font-mono text-sm mt-2">
              Mission Farewell 2026 | 12-04-2026 | 12:00 PM
            </p>
          </div>
        )}

        {/* Important notice */}
        <div
          className="bg-gradient-to-br from-gray-900 to-black border-2 border-red-600 rounded-lg p-8 backdrop-blur-sm"
          style={{
            boxShadow: '0 0 30px rgba(255, 0, 0, 0.2), inset 0 0 20px rgba(255, 0, 0, 0.05)',
          }}
        >
          <div className="flex items-start gap-4">
            <span className="text-3xl mt-1">⚠️</span>
            <div className="text-left">
              <h3 className="text-red-500 font-mono font-bold text-lg mb-2 tracking-widest">
                CLASSIFIED NOTICE
              </h3>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                This invitation is classified and is intended only for the recipients listed above. 
                If you have received this message in error, please disregard and report to the intelligence bureau. 
                The details of this farewell mission are to remain confidential until the date of the event.
              </p>
            </div>
          </div>
        </div>

        {/* Footer message */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 font-mono text-xs tracking-widest uppercase">
            Message will self-destruct in 48 hours
          </p>
          <p className="text-gray-600 font-mono text-xs mt-4">
            Thank you for being part of this incredible journey
          </p>
        </div>
      </div>
    </section>
  );
}
