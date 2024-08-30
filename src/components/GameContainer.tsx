import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ScenarioRenderer from '@/components/ScenarioRenderer';
import GameOverScreen from '@/components/GameOverScreen';
import HackerSkillSheet from '@/components/HackerSkillSheet';
import useGameState from '@/hooks/useGameState';
import scenarios from '@/data/scenarios';
import { executeChoice, getNextScenario, createRedAlertScenario, calculateScore } from '@/utils/gameLogic';
import { HackerSkills } from '@/types';

const GameContainer: React.FC = () => {
  const router = useRouter();
  const { currentScenario, setCurrentScenario, gameOver, setGameOver, score, setScore } = useGameState(scenarios);
  const [rollResult, setRollResult] = useState<any>(null);
  const [choices, setChoices] = useState<string[]>([]);
  const [hackerSkills, setHackerSkills] = useState<HackerSkills | null>(null);
  const [showSkillSheet, setShowSkillSheet] = useState(true);

  useEffect(() => {
    const skills = localStorage.getItem('hackerSkills');
    if (skills) {
      setHackerSkills(JSON.parse(skills));
      setShowSkillSheet(false);
    }
  }, []);

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
      const nextScenario = getNextScenario(scenarios, currentScenario, { success: true });
      if (nextScenario) {
        setTimeout(() => {
          setCurrentScenario(nextScenario);
          setRollResult(null);
        }, 3000);
      } else {
        setGameOver(true);
      }
    } else {
      const redAlertScenario = createRedAlertScenario(currentScenario);
      setTimeout(() => {
        setCurrentScenario(redAlertScenario);
        setRollResult(null);
      }, 3000);
    }
  };

  const handleRedAlertChoice = (choiceId: string) => {
    const choice = currentScenario?.choices.find(c => c.id === choiceId);
    if (!choice || !hackerSkills) return;

    const skillLevel = hackerSkills[currentScenario.phase];
    const result = executeChoice(choice, skillLevel);

    setRollResult(result);
    setScore(prevScore => prevScore + calculateScore(choice, result.success, result.roll));

    setTimeout(() => {
      if (result.success) {
        const nextScenario = getNextScenario(scenarios, currentScenario, { success: true });
        if (nextScenario) {
          setCurrentScenario(nextScenario);
        } else {
          setGameOver(true);
        }
      } else {
        setGameOver(true);
      }
      setRollResult(null);
    }, 3000);
  };

  const restartGame = () => {
    localStorage.removeItem('hackerSkills');
    router.push('/');
  };

  const onSkillsConfirmed = (skills: HackerSkills) => {
    setHackerSkills(skills);
    localStorage.setItem('hackerSkills', JSON.stringify(skills));
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
        onChoiceMade={currentScenario.id.toString().includes('_alert') ? handleRedAlertChoice : makeChoice}
        rollResult={rollResult}
      />
      <div className="mt-6 text-xl text-cyberGreen text-center">
        Current Score: {score}
      </div>
    </div>
  );
};

export default GameContainer;
