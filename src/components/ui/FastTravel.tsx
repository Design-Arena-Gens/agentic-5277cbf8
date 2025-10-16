// src/components/ui/FastTravel.tsx
import React from 'react';

interface FastTravelProps {
  onExit: () => void;
}

const FastTravel = ({ onExit }: FastTravelProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-black bg-opacity-80 text-white p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-8">Fast Travel</h1>
        <div className="w-[600px] h-[400px] bg-gray-700 rounded-lg mb-4">
          {/* Placeholder for map */}
          <p className="text-center pt-4">Map</p>
        </div>
        <button onClick={onExit} className="w-full bg-gray-500 py-2 rounded-lg hover:bg-red-700 transition-colors">Exit</button>
      </div>
    </div>
  );
};

export default FastTravel;
