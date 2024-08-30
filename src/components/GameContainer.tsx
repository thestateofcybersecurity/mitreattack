import React, { useState, useEffect } from 'react';
import ScenarioRenderer from '@/components/ScenarioRenderer';
import GameOverScreen from '@/components/GameOverScreen';
import HackerSkillSheet from '@/components/HackerSkillSheet';
import useGameState from '@/hooks/useGameState';
import scenarios from '@/data/scenarios';
import { executeChoice, getNextScenario, createRedAlertScenario, calculateScore } from '@/utils/gameLogic';
import { HackerSkills } from '@/types';

const GameContainer: React.FC = () => {
  const { currentScenario, setCurrentScenario, gameOver, setGameOver, score, setScore } = useGameState(scenarios);
  const [rollResult, setRollResult] = useState<any>(null);
  const [choices, setChoices] = useState<string[]>([]);
  const [hackerSkills, setHackerSkills] = useState<HackerSkills | null>(null);
  const [showSkillSheet, setShowSkillSheet] = useState(true);

  const makeChoice = (choiceId: string) => {
    if (!currentScenario || !hackerSkills) return;

    const choice = currentScenario.choices.find(c => c.id === choiceId);
    if (!choice) return;

    setChoices(prevChoices => [...prevChoices, choice.method]);

    const skillLevel = hackerSkills[currentScenario.phase];
    const result = executeChoice(choice, skillLevel);

    setRollResult(result);
    setScore(prevScore => prevScore + calculateScore(choice, result.success, result.roll));

    if (result.success) {
      const nextScenario = getNextScenario(scenarios, currentScenario);
      if (nextScenario) {
        setTimeout(() => {
          setCurrentScenario(nextScenario);
          setRollResult(null);
        }, 3000);
      } else {
        setGameOver(true);
      }
    } else {
      // Trigger Red Alert Scenario
      const redAlertScenario = createRedAlertScenario(currentScenario);
      setTimeout(() => {
        setCurrentScenario(redAlertScenario);
        setRollResult(null);
      }, 3000);
    }
  };

  const restartGame = () => {
    setCurrentScenario(scenarios[0]);
    setGameOver(false);
    setScore(0);
    setChoices([]);
    setRollResult(null);
    setShowSkillSheet(true);
  };

  const onSkillsConfirmed = (skills: HackerSkills) => {
    setHackerSkills(skills);
    setShowSkillSheet(false);
  };

  if (showSkillSheet) {
    return <HackerSkillSheet onConfirm={onSkillsConfirmed} />;
  }

  if (gameOver) {
    return <GameOverScreen score={score} choices={choices} onRestart={restartGame} />;
  }

  if (!currentScenario || !hackerSkills) {
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
      <div className="mt-6 p-4 bg-cyberGray text-cyberGreen rounded">
        <h3 className="text-xl font-bold mb-2">Your Hacker Skills:</h3>
        <ul>
          {Object.entries(hackerSkills).map(([skill, level]) => (
            <li key={skill} className="capitalize">{skill.replace(/([A-Z])/g, ' $1').trim()}: {level}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GameContainer;
