import React, { useState, useEffect } from 'react';
import ScenarioRenderer from './ScenarioRenderer';
import useGameState from '@/hooks/useGameState';
import { Scenario } from '@/types';

const GameContainer: React.FC = () => {
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const { currentScenario, makeChoice, gameOver, score } = useGameState(scenarios);

  useEffect(() => {
    fetch('/api/scenarios')
      .then(response => response.json())
      .then(data => {
        setScenarios(data);
      });
  }, []);

  if (!currentScenario) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">MITRE ATT&CK: Choose Your Own Adventure</h1>
      <ScenarioRenderer scenario={currentScenario} onChoiceMade={makeChoice} />
      <div className="mt-4">
        <p className="font-bold">Current Score: {score}</p>
        {gameOver && (
          <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            <p className="font-bold">Game Over!</p>
            <p>Your final score: {score}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameContainer;
