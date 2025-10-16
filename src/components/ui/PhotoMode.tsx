// src/components/ui/PhotoMode.tsx
import React from 'react';

interface PhotoModeProps {
  onExit: () => void;
}

const PhotoMode = ({ onExit }: PhotoModeProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-black bg-opacity-80 text-white p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-8">Photo Mode</h1>
        <div className="space-y-4">
          <button className="w-full bg-blue-500 py-2 rounded-lg hover:bg-red-700 transition-colors">Camera Settings</button>
          <button className="w-full bg-blue-500 py-2 rounded-lg hover:bg-red-700 transition-colors">Filters</button>
          <button className="w-full bg-green-500 py-2 rounded-lg hover:bg-green-700 transition-colors">Take Picture</button>
          <button onClick={onExit} className="w-full bg-gray-500 py-2 rounded-lg hover:bg-red-700 transition-colors">Exit</button>
        </div>
      </div>
    </div>
  );
};

export default PhotoMode;
