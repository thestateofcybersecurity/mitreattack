import React from 'react';

interface GameOverScreenProps {
  score: number;
  choices: string[];
  onRestart: () => void;
}

const GameOverScreen: React.FC<GameOverScreenProps> = ({ score, choices, onRestart }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-cyberBlue rounded-lg shadow-neon animate-fadeIn">
      <h2 className="text-3xl font-bold mb-6 text-cyberGreen text-center">Game Over</h2>
      <p className="text-2xl text-cyberGreen mb-4 text-center">Your final score: {score}</p>
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2 text-cyberPurple">Your Choices:</h3>
        <ul className="list-disc list-inside text-cyberGreen">
          {choices.map((choice, index) => (
            <li key={index} className="mb-1">{choice}</li>
          ))}
        </ul>
      </div>
      <button
        onClick={onRestart}
        className="w-full py-2 px-4 bg-cyberGreen text-cyberBlue font-bold rounded hover:bg-cyberTeal transition duration-200"
      >
        Restart Game
      </button>
    </div>
  );
};

export default GameOverScreen;
