import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ScenarioRenderer from '@/components/ScenarioRenderer';
import GameOverScreen from '@/components/GameOverScreen';
import HackerSkillSheet from '@/components/HackerSkillSheet';
import useGameState from '@/hooks/useGameState';
import scenarios from '@/data/scenarios';
import { executeChoice, getNextScenario, createRedAlertScenario, calculateScore } from '@/utils/gameLogic';
import { HackerSkills, Scenario } from '@/types';
import { selectBalancedChoices } from '@/utils/choiceSelector';

interface ChoiceRecord {
  method: string;
  tacticId: string;
}

const GameContainer: React.FC = () => {
  const router = useRouter();
  const { currentScenario, setCurrentScenario, gameOver, setGameOver, score, setScore } = useGameState(scenarios);
  const [rollResult, setRollResult] = useState<any>(null);
  const [choices, setChoices] = useState<ChoiceRecord[]>([]);
  const [hackerSkills, setHackerSkills] = useState<HackerSkills | null>(null);
  const [showSkillSheet, setShowSkillSheet] = useState(true);
  const [previousScenario, setPreviousScenario] = useState<Scenario | null>(null);
  const [skillIncrease, setSkillIncrease] = useState<{skill: string, increase: number} | null>(null);
  const [choicesLocked, setChoicesLocked] = useState(false);
  const [showNamePrompt, setShowNamePrompt] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [scoreSubmitted, setScoreSubmitted] = useState(false);
  const [currentChoices, setCurrentChoices] = useState<Choice[]>([]);

  useEffect(() => {
   if (scenarios.length > 0 && !currentScenario) {
      const initialScenario = scenarios[0];
      setCurrentScenario(initialScenario);
      setCurrentChoices(selectBalancedChoices(initialScenario.choicePool));
    }
  }, [scenarios, currentScenario]);

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

    const choice = currentChoices.find(c => c.id === choiceId);
    if (!choice) return;

    setChoicesLocked(true);

    setChoices(prevChoices => [...prevChoices, { method: choice.method, tacticId: choice.id }]);

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
          setCurrentChoices(selectBalancedChoices(nextScenario.choicePool));
          setPreviousScenario(null);
        } else {
          setGameOver(true);
          handleGameOver();
        }
      } else {
        const redAlertScenario = createRedAlertScenario(currentScenario);
        setCurrentScenario(redAlertScenario);
        setCurrentChoices(selectBalancedChoices(redAlertScenario.choicePool));
        setPreviousScenario(currentScenario);
      }
      setRollResult(null);
      setSkillIncrease(null);
      setChoicesLocked(false);
    }, 5000);
  };

  const handleRedAlertChoice = (choiceId: string) => {
    if (!currentScenario || !hackerSkills || !previousScenario || choicesLocked) return;

    const choice = currentScenario.choices.find(c => c.id === choiceId);
    if (!choice) return;

    setChoicesLocked(true);

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
        handleGameOver();
      }
    } else {
      setGameOver(true);
      handleGameOver();
    }
      setRollResult(null);
      setSkillIncrease(null);
      setChoicesLocked(false);
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

  const handleGameOver = async () => {
    setShowNamePrompt(true);
  };

  const submitScore = async () => {
    if (playerName) {
      try {
        const response = await fetch('./pages/api/high-scores', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: playerName, score }),
        });
        if (!response.ok) {
          throw new Error('Failed to submit score');
        }
        setScoreSubmitted(true);
      } catch (error) {
        console.error('Error submitting score:', error);
      }
    }
    setShowNamePrompt(false);
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
    if (showNamePrompt) {
      return (
        <div className="w-full max-w-4xl mx-auto p-6 bg-cyberBlue rounded-lg shadow-neon animate-fadeIn">
          <h2 className="text-2xl font-bold mb-4 text-cyberGreen">Game Over</h2>
          <p className="mb-4 text-cyberGreen">Your final score: {score}</p>
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Enter your name"
            className="p-2 mb-4 w-full text-cyberBlue"
          />
          <button 
            onClick={submitScore}
            className="bg-cyberGreen text-cyberBlue p-2 rounded hover:bg-cyberTeal transition duration-200"
          >
            Submit Score
          </button>
        </div>
      );
    }
    return <GameOverScreen score={score} choices={choices} onRestart={restartGame} />;
  }

  if (!currentScenario || !hackerSkills) {
    return <div className="text-cyberGreen">Loading game...</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-cyberBlue rounded-lg shadow-neon animate-fadeIn">
      {gameOver ? (
        showNamePrompt ? (
          <div>
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder="Enter your name"
              className="p-2 mb-4 w-full"
            />
            <button onClick={submitScore} className="bg-cyberGreen text-cyberBlue p-2 rounded">
              Submit Score
            </button>
          </div>
        ) : (
          <GameOverScreen score={score} choices={choices} onRestart={restartGame} />
        )
      ) : (
        <>
          <ScenarioRenderer
            scenario={currentScenario}
            choices={currentChoices}
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
        </>
      )}
    </div>
  );
};

export default GameContainer;
