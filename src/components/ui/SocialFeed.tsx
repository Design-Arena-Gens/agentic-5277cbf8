// src/components/ui/SocialFeed.tsx
import React from 'react';

interface SocialFeedProps {
  onExit: () => void;
}

const posts = [
  { author: 'J. Jonah Jameson', content: 'Spider-Man is a menace!' },
  { author: 'Mary Jane Watson', content: 'Just saw Spider-Man save the day again!' },
  { author: 'Peter Parker', content: 'I need to get some pictures of Spider-Man for the Daily Bugle.' },
];

const SocialFeed = ({ onExit }: SocialFeedProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-black bg-opacity-80 text-white p-8 rounded-lg w-1/2">
        <h1 className="text-4xl font-bold mb-8">Social Feed</h1>
        <div className="space-y-4">
          {posts.map((post, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg">
              <p className="font-bold">{post.author}</p>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
        <button onClick={onExit} className="w-full bg-gray-500 py-2 rounded-lg mt-8">Exit</button>
      </div>
    </div>
  );
};

export default SocialFeed;
