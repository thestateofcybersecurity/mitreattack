import React, { useState } from 'react';
import ScenarioRenderer from '@/components/ScenarioRenderer';
import GameOverScreen from '@/components/GameOverScreen';
import useGameState from '@/hooks/useGameState';
import scenarios from '@/data/scenarios';
import { executeChoice, getNextScenario, calculateScore } from '@/utils/gameLogic';

const GameContainer: React.FC = () => {
  const { currentScenario, setCurrentScenario, gameOver, setGameOver, score, setScore, hackerSkills } = useGameState(scenarios);
  const [rollResult, setRollResult] = useState<any>(null);
  const [choices, setChoices] = useState<string[]>([]);

  const makeChoice = (choiceId: string) => {
    if (!currentScenario) return;

    const choice = currentScenario.choices.find(c => c.id === choiceId);
    if (!choice) return;

    // Add the choice to the choices array
    setChoices(prevChoices => [...prevChoices, choice.method]);

    const skillLevel = hackerSkills ? hackerSkills[currentScenario.phase] : 0;
    const result = executeChoice(choice, skillLevel);

    setRollResult(result);

    // Update score
    setScore(prevScore => prevScore + calculateScore(choice, result.success, result.roll));

    // Get next scenario
    const nextScenario = getNextScenario(scenarios, currentScenario, result);
    
    if (nextScenario) {
      setTimeout(() => {
        setCurrentScenario(nextScenario);
        setRollResult(null);
      }, 3000);
    } else {
      // Game over
      setGameOver(true);
    }
  };

  const restartGame = () => {
    setCurrentScenario(scenarios[0]);
    setGameOver(false);
    setScore(0);
    setChoices([]);
    setRollResult(null);
  };

  if (gameOver) {
    return <GameOverScreen score={score} choices={choices} onRestart={restartGame} />;
  }

  if (!currentScenario) {
    return <div className="text-cyberGreen">Loading game...</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-cyberBlue rounded-lg shadow-neon animate-fadeIn">
      <ScenarioRenderer
        scenario={currentScenario}
        onChoiceMade={makeChoice}
        rollResult={rollResult}
      />
      <div className="mt-6 text-xl text-cyberGreen text-center">
        Current Score: {score}
      </div>
      {hackerSkills && (
        <div className="mt-6 p-4 bg-cyberGray text-cyberGreen rounded">
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
