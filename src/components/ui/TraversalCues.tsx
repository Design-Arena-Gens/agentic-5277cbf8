// src/components/ui/TraversalCues.tsx
'use client';
import React, { useState, useEffect } from 'react';

const TraversalCues = () => {
  const [speed, setSpeed] = useState(120);
  const [color, setColor] = useState('white');

  useEffect(() => {
    const interval = setInterval(() => {
      const newSpeed = Math.floor(Math.random() * 100) + 50;
      setSpeed(newSpeed);
      if (newSpeed > 120) {
        setColor('red');
      } else if (newSpeed > 80) {
        setColor('yellow');
      } else {
        setColor('white');
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
      {/* Speed Indicator */}
      <div className="absolute bottom-8 right-8 text-4xl font-bold transition-colors" style={{ color }}>
        {speed}
        <span className="text-lg">mph</span>
      </div>

      {/* Web-line Targeting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default TraversalCues;
