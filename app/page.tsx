'use client';

import { useEffect, useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import ParticleBackground from '@/components/ParticleBackground';
import HeroSection from '@/components/HeroSection';
import AgentCard from '@/components/AgentCard';
import MissionBriefing from '@/components/MissionBriefing';
import AudioPlayer from '@/components/AudioPlayer';
import Timeline from '@/components/Timeline';
import Message from '@/components/Message';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full bg-black text-white overflow-x-hidden">
      {!isLoaded && <LoadingScreen />}
      {isLoaded && (
        <>
          <ParticleBackground />
          <HeroSection />
          <AgentCard />
          <MissionBriefing />
          <AudioPlayer />
          <Timeline />
          <Message />
          <FinalCTA />
        </>
      )}
    </main>
  );
}
