// src/components/ui/Loading.tsx
import React from 'react';

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center">
      <div className="text-white text-4xl font-bold animate-pulse">Loading...</div>
    </div>
  );
};

export default Loading;
