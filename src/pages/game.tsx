import React from 'react';
import GameContainer from '@/components/GameContainer';

const GamePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-8">MITRE ATT&CK Adventure</h1>
        <GameContainer />
      </div>
    </div>
  );
};

export default GamePage;
