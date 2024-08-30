import React, { useEffect } from 'react';
import ScenarioRenderer from '@/components/ScenarioRenderer';
import useGameState from '@/hooks/useGameState';
import scenarios from '@/data/scenarios';

const GameContainer: React.FC = () => {
  const { currentScenario, makeChoice, gameOver, score, setScenarios, hackerSkills } = useGameState([]);

  useEffect(() => {
    setScenarios(scenarios);
  }, [setScenarios]);

  if (!currentScenario) {
    return <div className="text-white">Loading game...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <ScenarioRenderer
        scenario={currentScenario}
        onChoiceMade={makeChoice}
      />
      <div className="mt-6 text-xl text-white">
        Current Score: {score}
      </div>
      {gameOver && (
        <div className="mt-6 p-4 bg-red-600 text-white rounded">
          <h2 className="text-2xl font-bold">Game Over!</h2>
          <p>Your final score: {score}</p>
        </div>
      )}
      {hackerSkills && (
        <div className="mt-6 p-4 bg-gray-700 text-white rounded">
          <h3 className="text-xl font-bold mb-2">Your Hacker Skills:</h3>
          <ul>
            {Object.entries(hackerSkills).map(([skill, level]) => (
              <li key={skill}>{skill}: {level}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GameContainer;
