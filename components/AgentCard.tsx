'use client';

import { useEffect, useState } from 'react';

interface Agent {
  id: string;
  name: string;
  codeName: string;
  number: string;
  specialization: string;
  emoji: string;
}

const agents: Agent[] = [
  { id: '001', name: 'Shubham Kumar', codeName: 'PHOENIX', number: '001', specialization: 'Senior Class', emoji: '🎯' },
  { id: '002', name: 'A.S.LIKHITA', codeName: 'SHADOW', number: '002', specialization: 'Senior Class', emoji: '⚔️' },
  { id: '003', name: 'KANDREGULA JASWANTH', codeName: 'GHOST', number: '003', specialization: 'Senior Class', emoji: '👻' },
  { id: '004', name: 'ROHIT MEENA', codeName: 'CIPHER', number: '004', specialization: 'Senior Class', emoji: '🧠' },
  { id: '005', name: 'CHITRA KUMARI', codeName: 'FALCON', number: '005', specialization: 'Senior Class', emoji: '🦅' },
  { id: '006', name: 'LOHITH S', codeName: 'TITAN', number: '006', specialization: 'Senior Class', emoji: '💪' },
  { id: '007', name: 'PRANAY MUKHERJEE', codeName: 'RAVEN', number: '007', specialization: 'Senior Class', emoji: '🐦' },
  { id: '008', name: 'HARSH KASHYAP', codeName: 'NEPTUNE', number: '008', specialization: 'Senior Class', emoji: '🌊' },
  { id: '009', name: 'RAKESH KUMAR', codeName: 'INFERNO', number: '009', specialization: 'Senior Class', emoji: '🔥' },
  { id: '010', name: 'GOGULA DHEERAJ', codeName: 'THUNDER', number: '010', specialization: 'Senior Class', emoji: '⚡' },
  { id: '011', name: 'LENA JOSHY M', codeName: 'SOVEREIGN', number: '023', specialization: 'Senior Class', emoji: '👑' },
  { id: '012', name: 'BHAVANA.S', codeName: 'ORACLE', number: '011', specialization: 'Senior Class', emoji: '🔮' },
  { id: '013', name: 'RUPAM KUMAR', codeName: 'NINJA', number: '012', specialization: 'Senior Class', emoji: '🥷' },
  { id: '014', name: 'DIVYA DANDASI', codeName: 'HOWLER', number: '013', specialization: 'Senior Class', emoji: '🐺' },
  { id: '015', name: 'BALIVADA CHATURYA', codeName: 'DRAGON', number: '014', specialization: 'Senior Class', emoji: '🐉' },
  { id: '016', name: 'SUJAL KUMAR', codeName: 'NEBULA', number: '015', specialization: 'Senior Class', emoji: '🌌' },
  { id: '017', name: 'ABHINAV KUMAR', codeName: 'SENTINEL', number: '016', specialization: 'Senior Class', emoji: '👁️' },
  { id: '018', name: 'ANIRUDDHA MONDAL', codeName: 'FORGER', number: '017', specialization: 'Senior Class', emoji: '🔨' },
  { id: '019', name: 'AASHIYA CHANDAKA', codeName: 'PHANTOM', number: '018', specialization: 'Senior Class', emoji: '🌑' },
  { id: '020', name: 'BABUL RAJU', codeName: 'ROYALE', number: '019', specialization: 'Senior Class', emoji: '🦁' },
  { id: '021', name: 'MANISH MOHAPATRA', codeName: 'APEX', number: '020', specialization: 'Senior Class', emoji: '👑' },
  { id: '022', name: 'MANVENDRA SINGH', codeName: 'VORTEX', number: '021', specialization: 'Senior Class', emoji: '🌪️' },
  { id: '023', name: 'MADIPELLY PREETHAM', codeName: 'STRIKER', number: '022', specialization: 'Senior Class', emoji: '⭐' },
  { id: '024', name: 'INDRAJIT DAS', codeName: 'SOVEREIGN', number: '023', specialization: 'Senior Class', emoji: '👑' },
];

export default function AgentCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [barcode, setBarcode] = useState('');
  const [gridPage, setGridPage] = useState(0);
  const agentsPerPage = 6;

  const currentAgent = agents[currentIndex];

  useEffect(() => {
    // Generate unique barcode for current agent
    setBarcode(
      Math.random()
        .toString(36)
        .substring(2, 14)
        .toUpperCase()
    );
  }, [currentIndex]);

  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % agents.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoRotating]);

  const goToAgent = (index: number) => {
    setCurrentIndex(index);
    setIsAutoRotating(false);
  };

  const nextAgent = () => {
    setCurrentIndex((prev) => (prev + 1) % agents.length);
    setIsAutoRotating(false);
  };

  const prevAgent = () => {
    setCurrentIndex((prev) => (prev - 1 + agents.length) % agents.length);
    setIsAutoRotating(false);
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-12 px-4 z-10">
      <div className="max-w-2xl w-full">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-mono font-bold text-red-500 tracking-widest mb-2">AGENT ROSTER</h2>
          <p className="text-gray-400 text-sm font-mono">
            {isAutoRotating ? 'Auto-rotating every 4 seconds' : 'Manual selection active'}
          </p>
        </div>

        {/* Main ID Card */}
        <div className="flex justify-center mb-12">
          <div
            className="bg-gradient-to-br from-gray-900 to-black border-2 border-red-600 rounded-lg p-8 backdrop-blur-sm relative overflow-hidden group w-full max-w-md"
            style={{
              boxShadow: '0 0 30px rgba(255, 0, 0, 0.3), inset 0 0 30px rgba(255, 0, 0, 0.05)',
            }}
          >
            {/* Holographic effect on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(45deg, transparent 30%, rgba(255, 0, 0, 0.3) 50%, transparent 70%)',
                backgroundSize: '200% 200%',
              }}
            />

            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-8 pb-6 border-b border-red-600">
                <div className="text-xs font-mono text-red-500 tracking-widest uppercase mb-2">
                  CLASSIFIED
                </div>
                <h2 className="text-2xl font-mono font-bold text-white mb-2">AGENT ID CARD</h2>
                <div className="text-xs text-gray-400 font-mono">Top Secret Clearance</div>
              </div>

              {/* Agent Photo & Info */}
              <div className="flex gap-6 mb-8">
                <div className="text-6xl flex-shrink-0">{currentAgent.emoji}</div>
                <div className="flex-1 space-y-4">
                  {/* Code Name */}
                  <div>
                    <div className="text-xs font-mono text-gray-500 uppercase mb-1">Code Name</div>
                    <div className="text-xl font-mono font-bold text-red-500">{currentAgent.codeName}</div>
                  </div>

                  {/* Real Name */}
                  <div>
                    <div className="text-xs font-mono text-gray-500 uppercase mb-1">Real Name</div>
                    <div className="text-lg font-mono font-bold text-white">{currentAgent.name}</div>
                  </div>
                </div>
              </div>

              {/* Agent Details Grid */}
              <div className="space-y-4 mb-8">
                {/* Agent Number */}
                <div className="flex justify-between items-start bg-gray-800 bg-opacity-50 p-3 rounded">
                  <div className="text-xs font-mono text-gray-500 uppercase">Agent ID</div>
                  <div className="text-lg font-mono font-bold text-red-500">{currentAgent.number}</div>
                </div>

                {/* Specialization */}
                <div className="flex justify-between items-start bg-gray-800 bg-opacity-50 p-3 rounded">
                  <div className="text-xs font-mono text-gray-500 uppercase">Specialization</div>
                  <div className="text-lg font-mono font-bold text-yellow-500">{currentAgent.specialization}</div>
                </div>

                {/* Status */}
                <div className="flex justify-between items-start bg-gray-800 bg-opacity-50 p-3 rounded">
                  <div className="text-xs font-mono text-gray-500 uppercase">Status</div>
                  <div className="text-lg font-mono font-bold text-green-500">◆ INVITED</div>
                </div>
              </div>

              {/* Unique Barcode */}
              <div className="py-6 border-t border-b border-red-600">
                <div className="bg-white h-12 flex items-center justify-center p-1 mb-2">
                  <div className="flex gap-1 h-full items-end">
                    {barcode.split('').map((char, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-black rounded-sm"
                        style={{
                          height: `${30 + (char.charCodeAt(0) % 70)}%`,
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="text-center text-xs font-mono text-gray-600">{barcode}</div>
              </div>

              {/* Footer */}
              <div className="mt-6 text-center">
                <div className="text-xs font-mono text-gray-500 mb-2">VALID CLEARANCE</div>
                <div className="text-xs font-mono text-red-500 tracking-widest">MISSION: FAREWELL 2026</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={prevAgent}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-mono font-bold rounded transition-colors text-sm"
          >
            {'< PREV'}
          </button>

          <div className="text-gray-400 font-mono text-sm">
            Agent {String(currentIndex + 1).padStart(2, '0')} of {String(agents.length).padStart(2, '0')}
          </div>

          <button
            onClick={nextAgent}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-mono font-bold rounded transition-colors text-sm"
          >
            {'NEXT >'}
          </button>
        </div>

        {/* Agent Selection Grid with Pagination */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {agents.slice(gridPage * agentsPerPage, (gridPage + 1) * agentsPerPage).map((agent, idx) => {
              const actualIndex = gridPage * agentsPerPage + idx;
              return (
                <button
                  key={agent.id}
                  onClick={() => {
                    goToAgent(actualIndex);
                    setGridPage(Math.floor(actualIndex / agentsPerPage));
                  }}
                  className={`p-3 rounded font-mono transition-all border-2 text-center ${
                    actualIndex === currentIndex
                      ? 'bg-red-600 border-red-500 text-black font-bold scale-105'
                      : 'bg-gray-800 border-gray-700 text-white hover:border-red-500'
                  }`}
                >
                  <div className="text-2xl mb-1">{agent.emoji}</div>
                  <div className="text-xs font-bold truncate">{agent.codeName}</div>
                  <div className="text-xs opacity-75">#{agent.number}</div>
                </button>
              );
            })}
          </div>

          
          {/* <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setGridPage(Math.max(0, gridPage - 1))}
              disabled={gridPage === 0}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-mono text-sm rounded transition-colors"
            >
              {'< Page'}
            </button>
            <div className="text-gray-400 font-mono text-sm">
              Page {gridPage + 1} of {Math.ceil(agents.length / agentsPerPage)}
            </div>
            <button
              onClick={() => setGridPage(Math.min(Math.ceil(agents.length / agentsPerPage) - 1, gridPage + 1))}
              disabled={gridPage >= Math.ceil(agents.length / agentsPerPage) - 1}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-mono text-sm rounded transition-colors"
            >
              {'Page >'}
            </button>
          </div> */}
        </div>

        {/* Authentication indicator */}
        <div className="mt-8 text-center">
          <div className="text-xs font-mono text-green-500 animate-pulse">✓ IDENTITY VERIFIED</div>
        </div>
      </div>
    </section>
  );
}
