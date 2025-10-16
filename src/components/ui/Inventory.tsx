// src/components/ui/Inventory.tsx
'use client';
import React, { useState } from 'react';

const skills = [
  { id: 'web-zip', name: 'Web Zip', description: 'Zip towards a point.', dependencies: [] },
  { id: 'web-throw', name: 'Web Throw', description: 'Throw enemies with webs.', dependencies: ['web-zip'] },
  { id: 'venom-punch', name: 'Venom Punch', description: 'A powerful punch.', dependencies: ['web-throw'] },
];

const Inventory = () => {
  const [activeTab, setActiveTab] = useState('suits');
  const [unlockedSkills, setUnlockedSkills] = useState<string[]>(['web-zip']);

  const handleUnlockSkill = (skillId: string) => {
    const skill = skills.find(s => s.id === skillId);
    if (skill && skill.dependencies.every(dep => unlockedSkills.includes(dep))) {
      setUnlockedSkills([...unlockedSkills, skillId]);
    }
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-black bg-opacity-80 text-white p-8 rounded-lg">
      <div className="flex justify-center mb-8">
        <button onClick={() => setActiveTab('suits')} className={`px-4 py-2 text-lg font-bold ${activeTab === 'suits' ? 'text-red-500 border-b-2 border-red-500' : ''}`}>Suits</button>
        <button onClick={() => setActiveTab('gadgets')} className={`px-4 py-2 text-lg font-bold ${activeTab === 'gadgets' ? 'text-red-500 border-b-2 border-red-500' : ''}`}>Gadgets</button>
        <button onClick={() => setActiveTab('skills')} className={`px-4 py-2 text-lg font-bold ${activeTab === 'skills' ? 'text-red-500 border-b-2 border-red-500' : ''}`}>Skills</button>
      </div>
      <div>
        {activeTab === 'suits' && (
          <div className="grid grid-cols-4 gap-4">
            {/* Placeholder suit items */}
            <div className="border-2 border-blue-500 rounded-lg p-4">
              <h3 className="text-lg font-bold">Classic Suit</h3>
              <p className="text-sm text-gray-400">A timeless classic.</p>
              <p className="text-sm font-bold text-green-500">Unlocked</p>
            </div>
            <div className="border-2 border-gray-500 rounded-lg p-4">
              <h3 className="text-lg font-bold">Iron Spider</h3>
              <p className="text-sm text-gray-400">Advanced suit from Tony Stark.</p>
              <p className="text-sm font-bold text-red-500">Locked</p>
            </div>
            <div className="border-2 border-gray-500 rounded-lg p-4">
              <h3 className="text-lg font-bold">Stealth Suit</h3>
              <p className="text-sm text-gray-400">For silent takedowns.</p>
              <p className="text-sm font-bold text-red-500">Locked</p>
            </div>
          </div>
        )}
        {activeTab === 'gadgets' && (
          <div className="grid grid-cols-4 gap-4">
            {/* Placeholder gadget items */}
            <div className="border-2 border-blue-500 rounded-lg p-4">
              <h3 className="text-lg font-bold">Web Shooters</h3>
              <p className="text-sm text-gray-400">Standard web shooters.</p>
              <p className="text-sm font-bold text-green-500">Unlocked</p>
            </div>
            <div className="border-2 border-gray-500 rounded-lg p-4">
              <h3 className="text-lg font-bold">Spider-Drone</h3>
              <p className="text-sm text-gray-400">A drone for reconnaissance.</p>
              <p className="text-sm font-bold text-red-500">Locked</p>
            </div>
          </div>
        )}
        {activeTab === 'skills' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Skill Tree</h2>
            <div className="flex items-center gap-8">
              {skills.map((skill, index) => (
                <React.Fragment key={skill.id}>
                  <div 
                    className={`p-4 rounded-lg cursor-pointer ${unlockedSkills.includes(skill.id) ? 'bg-blue-500' : 'bg-gray-700'}`}
                    onClick={() => handleUnlockSkill(skill.id)}
                  >
                    <h3 className="text-lg font-bold">{skill.name}</h3>
                    <p className="text-sm">{skill.description}</p>
                  </div>
                  {index < skills.length - 1 && <div className="w-8 h-1 bg-gray-500"></div>}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inventory;
