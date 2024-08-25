import React, { useState, useEffect } from 'react';
import ScenarioRenderer from './ScenarioRenderer';
import useGameState from '@/hooks/useGameState';
import { Scenario } from '@/types';

const GameContainer: React.FC = () => {
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const { currentScenario, makeChoice, gameOver, score } = useGameState();

  useEffect(() => {
    fetch('/api/scenarios')
      .then(response => response.json())
      .then(data => {
        setScenarios(data);
      });
  }, []);

  useEffect(() => {
    if (scenarios.length > 0 && !currentScenario) {
      makeChoice(scenarios[0].id);
    }
  }, [scenarios, currentScenario, makeChoice]);

  if (!currentScenario) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ScenarioRenderer scenario={currentScenario} onChoiceMade={makeChoice} />
      <div className="mt-4">
        <p className="font-bold">Current Score: {score}</p>
        {gameOver && <p className="text-red-500 font-bold">Game Over!</p>}
      </div>
    </div>
  );
};

export default GameContainer;
