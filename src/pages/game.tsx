import React from 'react';
import GameContainer from '@/components/GameContainer';

const GamePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-cyberBlue flex items-center justify-center">
      <GameContainer />
    </div>
  );
};

export default GamePage;
