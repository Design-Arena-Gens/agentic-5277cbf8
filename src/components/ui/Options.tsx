// src/components/ui/Options.tsx
'use client';
import React, { useState } from 'react';

const Options = () => {
  const [brightness, setBrightness] = useState(100);
  const [subtitles, setSubtitles] = useState(true);
  const [colorblindMode, setColorblindMode] = useState('None');

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 bg-black bg-opacity-80 text-white p-8 rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-8 text-red-500">Options</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold">Display</h2>
          <div className="flex justify-between items-center">
            <label>Brightness</label>
            <input type="range" value={brightness} onChange={(e) => setBrightness(parseInt(e.target.value))} />
          </div>
          <div className="flex justify-between items-center">
            <label>Subtitles</label>
            <input type="checkbox" checked={subtitles} onChange={() => setSubtitles(!subtitles)} />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Controls</h2>
          <button className="w-full bg-blue-500 py-2 rounded-lg hover:bg-red-700 transition-colors">Customize Controls</button>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Accessibility</h2>
          <div className="flex justify-between items-center">
            <label>Colorblind Mode</label>
            <select className="bg-gray-800" value={colorblindMode} onChange={(e) => setColorblindMode(e.target.value)}>
              <option>None</option>
              <option>Protanopia</option>
              <option>Deuteranopia</option>
              <option>Tritanopia</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
