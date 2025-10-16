// src/components/GameUI.tsx
'use client';
import React, { useState, useEffect } from 'react';
import HUD from './ui/HUD';
import TraversalCues from './ui/TraversalCues';
import Inventory from './ui/Inventory';
import Missions from './ui/Missions';
import Options from './ui/Options';
import Loading from './ui/Loading';
import PauseMenu from './ui/PauseMenu';
import MainMenu from './ui/MainMenu';
import SettingsMenu from './ui/SettingsMenu';
import PhotoMode from './ui/PhotoMode';
import CharacterCustomization from './ui/CharacterCustomization';
import Tutorial from './ui/Tutorial';
import FastTravel from './ui/FastTravel';
import Radio from './ui/Radio';
import SocialFeed from './ui/SocialFeed';

type UIState = 'game' | 'inventory' | 'missions' | 'options';
type GameState = 'main-menu' | 'settings' | 'playing';

const GameUI = () => {
  const [uiState, setUiState] = useState<UIState>('game');
  const [loading, setLoading] = useState(true);
  const [paused, setPaused] = useState(false);
  const [gameState, setGameState] = useState<GameState>('main-menu');
  const [photoMode, setPhotoMode] = useState(false);
  const [characterCustomization, setCharacterCustomization] = useState(false);
  const [tutorial, setTutorial] = useState<string | null>('Welcome to Spider-Man! Press "P" for photo mode and "C" for character customization.');
  const [fastTravel, setFastTravel] = useState(false);
  const [radio, setRadio] = useState(false);
  const [socialFeed, setSocialFeed] = useState(false);
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setPaused(!paused);
      }
      if (e.key === 'p') {
        setPhotoMode(!photoMode);
      }
      if (e.key === 'c') {
        setCharacterCustomization(!characterCustomization);
      }
      if (e.key === 'f') {
        setFastTravel(!fastTravel);
      }
      if (e.key === 'r') {
        setRadio(!radio);
      }
      if (e.key === 's') {
        setSocialFeed(!socialFeed);
      }
      if (e.key === 't') {
        setIsDay(!isDay);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paused, photoMode, characterCustomization, fastTravel, radio, socialFeed, isDay]);

  const renderUIState = () => {
    if (socialFeed) {
      return <SocialFeed onExit={() => setSocialFeed(false)} />;
    }
    if (radio) {
      return <Radio onExit={() => setRadio(false)} />;
    }
    if (fastTravel) {
      return <FastTravel onExit={() => setFastTravel(false)} />;
    }
    if (characterCustomization) {
      return <CharacterCustomization onExit={() => setCharacterCustomization(false)} />;
    }
    if (photoMode) {
      return <PhotoMode onExit={() => setPhotoMode(false)} />;
    }
    if (paused) {
      return <PauseMenu onResume={() => setPaused(false)} />;
    }
    switch (uiState) {
      case 'inventory':
        return <Inventory />;
      case 'missions':
        return <Missions />;
      case 'options':
        return <Options />;
      default:
        return null;
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (gameState === 'main-menu') {
    return <MainMenu onStart={() => setGameState('playing')} onSettings={() => setGameState('settings')} />;
  }

  if (gameState === 'settings') {
    return <SettingsMenu onBack={() => setGameState('main-menu')} />;
  }

  return (
    <div className="w-screen h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${isDay ? '/background.svg' : '/background-night.svg'})` }}>
      <HUD />
      <TraversalCues />
      {renderUIState()}
      {tutorial && <Tutorial message={tutorial} onDismiss={() => setTutorial(null)} />}

      {/* Mock controls to change UI state */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
        <button onClick={() => setUiState('game')} className={`text-white px-4 py-2 rounded-lg transition-colors ${uiState === 'game' ? 'bg-red-500' : 'bg-blue-500'} hover:bg-red-700`}>Game</button>
        <button onClick={() => setUiState('inventory')} className={`text-white px-4 py-2 rounded-lg transition-colors ${uiState === 'inventory' ? 'bg-red-500' : 'bg-blue-500'} hover:bg-red-700`}>Inventory</button>
        <button onClick={() => setUiState('missions')} className={`text-white px-4 py-2 rounded-lg transition-colors ${uiState === 'missions' ? 'bg-red-500' : 'bg-blue-500'} hover:bg-red-700`}>Missions</button>
        <button onClick={() => setUiState('options')} className={`text-white px-4 py-2 rounded-lg transition-colors ${uiState === 'options' ? 'bg-red-500' : 'bg-blue-500'} hover:bg-red-700`}>Options</button>
      </div>
    </div>
  );
};

export default GameUI;
