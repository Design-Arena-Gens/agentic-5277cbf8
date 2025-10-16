// src/components/ui/PauseMenu.tsx
import React from 'react';

interface PauseMenuProps {
  onResume: () => void;
}

const PauseMenu = ({ onResume }: PauseMenuProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-black bg-opacity-80 text-white p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-8">Paused</h1>
        <div className="space-y-4">
          <button onClick={onResume} className="w-full bg-blue-500 py-2 rounded-lg hover:bg-red-700 transition-colors">Resume</button>
          <button className="w-full bg-blue-500 py-2 rounded-lg hover:bg-red-700 transition-colors">Main Menu</button>
          <button className="w-full bg-blue-500 py-2 rounded-lg hover:bg-red-700 transition-colors">Quit</button>
        </div>
      </div>
    </div>
  );
};

export default PauseMenu;
