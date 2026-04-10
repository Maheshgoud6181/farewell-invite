'use client';

export default function Message() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-12 px-4 z-10">
      <div className="max-w-2xl w-full">
        {/* Message container */}
        <div
          className="bg-gradient-to-br from-gray-900 to-black border-2 border-red-600 rounded-lg p-8 sm:p-12 backdrop-blur-sm"
          style={{
            boxShadow: '0 0 40px rgba(255, 0, 0, 0.3), inset 0 0 30px rgba(255, 0, 0, 0.05)',
          }}
        >
          {/* Decorative lines */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-red-600" />
            <span className="text-red-600 font-mono text-sm tracking-widest">FINAL MESSAGE</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-red-600" />
          </div>

          {/* Main message */}
          <div className="text-center space-y-6">
            <p className="text-lg sm:text-xl text-gray-300 font-mono leading-relaxed">
              You were not just seniors,
              <br />
              you were mentors, guides, and inspiration.
            </p>

            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto" />

            <p className="text-base sm:text-lg text-gray-400 font-mono leading-relaxed">
              Every mission accomplished, every obstacle overcome, and every moment shared has 
              shaped not just our college experience, but the very foundation of who we are becoming.
            </p>

            <p className="text-base sm:text-lg text-gray-400 font-mono leading-relaxed">
              This farewell is not an ending, but the beginning of a new chapter where your legacy 
              continues to guide us forward.
            </p>

            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto" />

            <p className="text-sm sm:text-base text-gray-500 font-mono italic mt-8">
              "In every spy mission, the greatest asset is not the tools, but the people who stand beside you."
            </p>
          </div>

          {/* Signature */}
          <div className="mt-12 text-center">
            <div className="font-mono text-sm text-gray-600 mb-4">━━━━━━━━━━━━━━━━━━━━━━</div>
            <p className="text-white font-mono font-bold">YOUR FELLOW AGENTS</p>
            <p className="text-gray-500 font-mono text-sm mt-2">Batch 2027</p>
          </div>
        </div>

        {/* Emotional note */}
        <div className="mt-8 text-center">
          <div
            className="inline-block bg-gradient-to-br from-red-900/30 to-red-900/10 border border-red-600 rounded-lg px-6 py-3 backdrop-blur-sm"
            style={{
              boxShadow: '0 0 15px rgba(255, 0, 0, 0.2)',
            }}
          >
            <p className="text-red-500 font-mono text-sm tracking-widest">
              ✦ THIS BOND WILL NEVER BE BROKEN ✦
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
