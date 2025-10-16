// src/components/ui/SettingsMenu.tsx
import React from 'react';

interface SettingsMenuProps {
  onBack: () => void;
}

const SettingsMenu = ({ onBack }: SettingsMenuProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center">
      <div className="bg-black bg-opacity-80 text-white p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-8">Settings</h1>
        <div className="space-y-4">
          <button className="w-full bg-blue-500 py-2 rounded-lg hover:bg-red-700 transition-colors">Graphics</button>
          <button className="w-full bg-blue-500 py-2 rounded-lg hover:bg-red-700 transition-colors">Audio</button>
          <button className="w-full bg-blue-500 py-2 rounded-lg hover:bg-red-700 transition-colors">Controls</button>
          <button onClick={onBack} className="w-full bg-gray-500 py-2 rounded-lg hover:bg-red-700 transition-colors">Back</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsMenu;
