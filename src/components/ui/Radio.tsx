// src/components/ui/Radio.tsx
import React from 'react';

interface RadioProps {
  onExit: () => void;
}

const Radio = ({ onExit }: RadioProps) => {
  return (
    <div className="fixed bottom-24 right-8 bg-black bg-opacity-75 text-white p-4 rounded-lg">
      <h2 className="text-lg font-bold">Radio</h2>
      <div className="flex items-center gap-4 mt-2">
        <button className="bg-blue-500 px-2 py-1 rounded-lg">{"<"}</button>
        <span>Station Name</span>
        <button className="bg-blue-500 px-2 py-1 rounded-lg">{">"}</button>
      </div>
      <div className="mt-2">
        <input type="range" />
      </div>
      <button onClick={onExit} className="w-full bg-gray-500 py-1 rounded-lg mt-2">Exit</button>
    </div>
  );
};

export default Radio;
