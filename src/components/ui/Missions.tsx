// src/components/ui/Missions.tsx
'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const missions = [
  {
    title: 'Bank Heist',
    difficulty: 'Hard',
    rewards: '1000 XP, Tech Parts',
    artwork: '/missions/placeholder.svg',
  },
  {
    title: 'Thug Takedown',
    difficulty: 'Easy',
    rewards: '250 XP',
    artwork: '/missions/placeholder.svg',
  },
  {
    title: 'Research Sabotage',
    difficulty: 'Medium',
    rewards: '500 XP, Rare Tech',
    artwork: '/missions/placeholder.svg',
  },
];

const Missions = () => {
  const [selectedMission, setSelectedMission] = useState<string | null>(null);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-black bg-opacity-80 text-white p-8 rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-8 text-red-500">Missions</h1>
      <div className="grid grid-cols-3 gap-8">
        {missions.map((mission) => (
          <div 
            key={mission.title} 
            className={`border-2 rounded-lg p-4 flex flex-col justify-between cursor-pointer transition-all ${selectedMission === mission.title ? 'border-red-500 scale-105' : 'border-blue-500'}`}
            onClick={() => setSelectedMission(mission.title)}
          >
            <Image src={mission.artwork} alt={mission.title} width={400} height={300} className="rounded-lg mb-4" />
            <h2 className="text-2xl font-bold">{mission.title}</h2>
            <p>Difficulty: {mission.difficulty}</p>
            <p>Rewards: {mission.rewards}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Missions;
