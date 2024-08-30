import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ScenarioRenderer from '@/components/ScenarioRenderer';
import GameOverScreen from '@/components/GameOverScreen';
import HackerSkillSheet from '@/components/HackerSkillSheet';
import useGameState from '@/hooks/useGameState';
import scenarios from '@/data/scenarios';
import { executeChoice, getNextScenario, createRedAlertScenario, calculateScore } from '@/utils/gameLogic';
import { HackerSkills, Scenario } from '@/types';

const GameContainer: React.FC = () => {
  const router = useRouter();
  const { currentScenario, setCurrentScenario, gameOver, setGameOver, score, setScore } = useGameState(scenarios);
  const [rollResult, setRollResult] = useState<any>(null);
  const [choices, setChoices] = useState<string[]>([]);
  const [hackerSkills, setHackerSkills] = useState<HackerSkills | null>(null);
  const [showSkillSheet, setShowSkillSheet] = useState(true);
  const [previousScenario, setPreviousScenario] = useState<Scenario | null>(null);
  const [skillIncrease, setSkillIncrease] = useState<{skill: string, increase: number} | null>(null);
  const [choicesLocked, setChoicesLocked] = useState(false);

  useEffect(() => {
    const skills = localStorage.getItem('hackerSkills');
    if (skills) {
      setHackerSkills(JSON.parse(skills));
      setShowSkillSheet(false);
    }
  }, []);

  const updateHackerSkills = (phase: keyof HackerSkills) => {
    if (!hackerSkills) return;

    const increase = 1;
    const updatedSkills = {
      ...hackerSkills,
      [phase]: hackerSkills[phase] + increase
    };

    setHackerSkills(updatedSkills);
    localStorage.setItem('hackerSkills', JSON.stringify(updatedSkills));
    setSkillIncrease({skill: String(phase), increase});
  };

  const makeChoice = (choiceId: string) => {
    if (!currentScenario || !hackerSkills) return;

    const choice = currentScenario.choices.find(c => c.id === choiceId);
    if (!choice) return;

    setChoicesLocked(true);  // Lock choices when a choice is made

    setChoices(prevChoices => [...prevChoices, choice.method]);

    const skillLevel = hackerSkills[currentScenario.phase];
    const result = executeChoice(choice, skillLevel);

    setRollResult(result);
    setScore(prevScore => prevScore + calculateScore(choice, result.success, result.roll));

    setTimeout(() => {
      if (result.success) {
        updateHackerSkills(currentScenario.phase);
        const nextScenario = getNextScenario(scenarios, currentScenario, { success: true });
        if (nextScenario) {
          setCurrentScenario(nextScenario);
          setPreviousScenario(null);
        } else {
          setGameOver(true);
        }
      } else {
        const redAlertScenario = createRedAlertScenario(currentScenario);
        setCurrentScenario(redAlertScenario);
        setPreviousScenario(currentScenario);
      }
      setRollResult(null);
      setSkillIncrease(null);
      setChoicesLocked(false);  // Unlock choices for the next scenario
    }, 5000);
  };

  const handleRedAlertChoice = (choiceId: string) => {
    if (!currentScenario || !hackerSkills || !previousScenario) return;

    const choice = currentScenario.choices.find(c => c.id === choiceId);
    if (!choice) return;

    setChoicesLocked(true);  // Lock choices when a choice is made

    const skillLevel = hackerSkills[previousScenario.phase];
    const result = executeChoice(choice, skillLevel);

    setRollResult(result);
    setScore(prevScore => prevScore + calculateScore(choice, result.success, result.roll));

    setTimeout(() => {
      if (result.success) {
        updateHackerSkills(previousScenario.phase);
        const nextScenario = getNextScenario(scenarios, previousScenario, { success: true });
        if (nextScenario) {
          setCurrentScenario(nextScenario);
          setPreviousScenario(null);
        } else {
          setGameOver(true);
        }
      } else {
        setGameOver(true);
      }
      setRollResult(null);
      setSkillIncrease(null);
      setChoicesLocked(false);  // Unlock choices for the next scenario
    }, 5000);
  };

  const restartGame = () => {
    setCurrentScenario(scenarios[0]);
    setGameOver(false);
    setScore(0);
    setChoices([]);
    setRollResult(null);
    setPreviousScenario(null);
    setSkillIncrease(null);
    // We don't reset hackerSkills here to keep them persistent
  };

  const onSkillsConfirmed = (skills: HackerSkills) => {
    setHackerSkills(skills);
    localStorage.setItem('hackerSkills', JSON.stringify(skills));
    setShowSkillSheet(false);
  };

  if (showSkillSheet || !hackerSkills) {
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
        onChoiceMade={currentScenario.name.includes('Red Alert') ? handleRedAlertChoice : makeChoice}
        rollResult={rollResult}
        skillIncrease={skillIncrease}
        choicesLocked={choicesLocked}
      />
      <div className="mt-6 text-xl text-cyberGreen text-center">
        Current Score: {score}
      </div>
      {hackerSkills && (
        <div className="mt-6 p-4 bg-cyberGray text-cyberGreen rounded">
          <h3 className="text-xl font-bold mb-2">Your Hacker Skills:</h3>
          <ul>
            {Object.entries(hackerSkills).map(([skill, level]) => (
              <li key={skill} className="capitalize">
                {skill.replace(/([A-Z])/g, ' $1').trim()}: {level}
                {skillIncrease && skillIncrease.skill === skill && (
                  <span className="text-cyberPurple ml-2">+{skillIncrease.increase}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GameContainer
