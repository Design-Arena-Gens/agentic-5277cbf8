// src/components/ui/Tutorial.tsx
import React from 'react';

interface TutorialProps {
  message: string;
  onDismiss: () => void;
}

const Tutorial = ({ message, onDismiss }: TutorialProps) => {
  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-black bg-opacity-75 text-white px-4 py-2 rounded-lg flex items-center gap-4">
      <p>{message}</p>
      <button onClick={onDismiss} className="bg-red-500 px-2 py-1 rounded-lg">X</button>
    </div>
  );
};

export default Tutorial;
