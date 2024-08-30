import React from 'react';
import ScenarioRenderer from '@/components/ScenarioRenderer';
import useGameState from '@/hooks/useGameState';
import scenarios from '@/data/scenarios';

const GameContainer: React.FC = () => {
  const { currentScenario, makeChoice, gameOver, score, setScenarios, hackerSkills } = useGameState([]);

  React.useEffect(() => {
    setScenarios(scenarios);
  }, [setScenarios]);

  if (!currentScenario) {
    return <div className="text-white">Loading game...</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg shadow-xl">
      <ScenarioRenderer
        scenario={currentScenario}
        onChoiceMade={makeChoice}
      />
      <div className="mt-6 text-xl text-white text-center">
        Current Score: {score}
      </div>
      {gameOver && (
        <div className="mt-6 p-4 bg-red-600 text-white rounded text-center">
          <h2 className="text-2xl font-bold">Game Over!</h2>
          <p>Your final score: {score}</p>
        </div>
      )}
      {hackerSkills && (
        <div className="mt-6 p-4 bg-gray-700 text-white rounded">
          <h3 className="text-xl font-bold mb-2">Your Hacker Skills:</h3>
          <ul>
            {Object.entries(hackerSkills).map(([skill, level]) => (
              <li key={skill} className="capitalize">{skill.replace(/([A-Z])/g, ' $1').trim()}: {level}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GameContainer;
