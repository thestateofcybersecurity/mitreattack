import React, { useState, useEffect } from 'react';
import { HighScore } from '@/types';

interface ChoiceRecord {
  method: string;
  tacticId: string;
}

interface GameOverScreenProps {
  score: number;
  choices: ChoiceRecord[];
  onRestart: () => void;
  highScores: HighScore[];
}

const GameOverScreen: React.FC<GameOverScreenProps> = ({ score, choices, onRestart, highScores }) => {

  useEffect(() => {
    fetch('/api/high-scores')
      .then(response => response.json())
      .then(data => setHighScores(data))
      .catch(error => console.error('Error fetching high scores:', error));
  }, []);

  const getMitreUrl = (tacticId: string) => {
    const baseUrl = 'https://attack.mitre.org/techniques/';
    const parts = tacticId.split('.');
    if (parts.length === 1) {
      return `${baseUrl}${tacticId}/`;
    } else {
      return `${baseUrl}${parts[0]}/${parts.slice(1).join('/')}/`;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-cyberBlue rounded-lg shadow-neon animate-fadeIn">
      <h2 className="text-3xl font-bold mb-6 text-cyberGreen text-center">Game Over</h2>
      <p className="text-2xl text-cyberGreen mb-4 text-center">Your final score: {score}</p>
      
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2 text-cyberPurple">Your Choices:</h3>
        <ul className="list-disc list-inside text-cyberGreen">
          {choices.map((choice, index) => (
            <li key={index} className="mb-1">
              <a 
                href={getMitreUrl(choice.tacticId)} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-cyberTeal underline"
              >
                {choice.method}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2 text-cyberPurple">High Scores:</h3>
        <ul className="list-decimal list-inside text-cyberGreen">
          {highScores.map((highScore, index) => (
            <li key={index} className="mb-1">
              {highScore.name}: {highScore.score}
            </li>
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
