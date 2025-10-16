// src/components/ui/MainMenu.tsx
import React from 'react';

interface MainMenuProps {
  onStart: () => void;
  onSettings: () => void;
}

const MainMenu = ({ onStart, onSettings }: MainMenuProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-6xl font-bold mb-8">Spider-Man</h1>
        <div className="space-y-4">
          <button onClick={onStart} className="w-full bg-blue-500 py-2 rounded-lg hover:bg-red-700 transition-colors">Start Game</button>
          <button onClick={onSettings} className="w-full bg-blue-500 py-2 rounded-lg hover:bg-red-700 transition-colors">Settings</button>
          <button className="w-full bg-blue-500 py-2 rounded-lg hover:bg-red-700 transition-colors">Quit</button>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
