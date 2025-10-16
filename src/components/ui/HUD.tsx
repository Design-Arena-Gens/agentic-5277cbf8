// src/components/ui/HUD.tsx
'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Notification from './Notification';

const HUD = () => {
  const [notifications, setNotifications] = useState<string[]>([]);
  const [combo, setCombo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newNotification = `Event at ${new Date().toLocaleTimeString()}`;
      setNotifications(prev => [...prev, newNotification]);
      setTimeout(() => {
        setNotifications(prev => prev.slice(1));
      }, 3000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const comboInterval = setInterval(() => {
      setCombo(prev => prev + 1);
    }, 1000);
    return () => clearInterval(comboInterval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none text-white">
      {/* Mission Objectives */}
      <div className="absolute top-8 left-8 bg-black bg-opacity-50 p-4 rounded-lg flex items-center gap-4">
        <Image src="/icons/mission.svg" alt="Mission" width={24} height={24} />
        <div>
          <h2 className="text-lg font-bold text-red-500">Main Objective</h2>
          <p>Stop the bank robbery</p>
        </div>
      </div>

      {/* Nearby Crimes */}
      <div className="absolute top-8 right-8 bg-black bg-opacity-50 p-4 rounded-lg text-right flex items-center gap-4">
        <div>
          <h2 className="text-lg font-bold text-blue-500">Nearby Crimes</h2>
          <ul>
            <li>Mugging in progress</li>
            <li>Car chase</li>
          </ul>
        </div>
        <Image src="/icons/crime.svg" alt="Crime" width={24} height={24} />
      </div>

      {/* Web-Swinging Stats */}
      <div className="absolute bottom-8 left-8 bg-black bg-opacity-50 p-4 rounded-lg flex items-center gap-4">
        <Image src="/icons/swing.svg" alt="Swing" width={24} height={24} />
        <div>
          <h2 className="text-lg font-bold">Swing Stats</h2>
          <p>Speed: 120 mph</p>
          <p>Height: 250m</p>
        </div>
      </div>

      {/* Combo Counter */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-4xl font-bold animate-bounce">
        x{combo}
      </div>

      {/* Notifications */}
      {notifications.map((note, index) => (
        <Notification key={index} message={note} />
      ))}
    </div>
  );
};

export default HUD;
