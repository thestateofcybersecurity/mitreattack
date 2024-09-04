import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import ScenarioRenderer from '@/components/ScenarioRenderer';
import GameOverScreen from '@/components/GameOverScreen';
import HackerSkillSheet from '@/components/HackerSkillSheet';
import useGameState from '@/hooks/useGameState';
import scenarios from '@/data/scenarios';
import { executeChoice, getNextScenario, createRedAlertScenario, calculateScore } from '@/utils/gameLogic';
import { HackerSkills, Scenario, Choice, HighScore } from '@/types';
import wordFilter from '@/utils/wordFilter';

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
  const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null);
  const [highScores, setHighScores] = useState<HighScore[]>([]);
  const [nameError, setNameError] = useState<string | null>(null);

  // Function to classify difficulty
  const classifyDifficulty = (baseDifficulty: number): 'easy' | 'medium' | 'hard' => {
    if (baseDifficulty <= 10) return 'easy';
    if (baseDifficulty <= 15) return 'medium';
    return 'hard';
  };

  // Function to select balanced choices
  const selectBalancedChoices = (choices: Choice[], count: number = 5): Choice[] => {
    const classifiedChoices = choices.map(choice => ({
      ...choice,
      difficultyRating: classifyDifficulty(choice.baseDifficulty)
    }));

    const easy = classifiedChoices.filter(c => c.difficultyRating === 'easy');
    const medium = classifiedChoices.filter(c => c.difficultyRating === 'medium');
    const hard = classifiedChoices.filter(c => c.difficultyRating === 'hard');

    const getRandomChoice = (arr: Choice[]) => arr[Math.floor(Math.random() * arr.length)];

    let selected: Choice[] = [];

    // Try to select 1 easy, 2 medium, and 2 hard choices
    if (easy.length > 0) selected.push(getRandomChoice(easy));
    if (medium.length > 0) selected.push(getRandomChoice(medium));
    if (medium.length > 1) selected.push(getRandomChoice(medium.filter(c => !selected.includes(c))));
    if (hard.length > 0) selected.push(getRandomChoice(hard));
    if (hard.length > 1) selected.push(getRandomChoice(hard.filter(c => !selected.includes(c))));

    // If we don't have enough choices, fill with random choices
    while (selected.length < count && classifiedChoices.length > selected.length) {
      const remainingChoices = classifiedChoices.filter(c => !selected.includes(c));
      selected.push(getRandomChoice(remainingChoices));
    }

    return selected;
  };

  // Modify the useEffect that sets the initial scenario
  useEffect(() => {
    if (scenarios.length > 0 && !currentScenario) {
      const initialScenario = scenarios[0];
      setCurrentScenario(initialScenario);
      setCurrentChoices(selectBalancedChoices(initialScenario.choices));
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
          setCurrentChoices(selectBalancedChoices(nextScenario.choices));
          setPreviousScenario(null);
        } else {
          setGameOver(true);
          handleGameOver();
        }
      } else {
        const redAlertScenario = createRedAlertScenario(currentScenario);
        setCurrentScenario(redAlertScenario);
        setCurrentChoices(selectBalancedChoices(redAlertScenario.choices));
        setPreviousScenario(currentScenario);
      }
      setRollResult(null);
      setSkillIncrease(null);
      setChoicesLocked(false);
    }, 5000);
  };


  const handleChoiceSelect = (choice: Choice) => {
    setSelectedChoice(choice);
  };

  const handleChoiceConfirm = () => {
    if (!selectedChoice || !currentScenario || !hackerSkills) return;
    
    const isRedAlert = currentScenario.name.includes('Red Alert');
    if (isRedAlert) {
      handleRedAlertChoice(selectedChoice.id);
    } else {
      makeChoice(selectedChoice.id);
    }
    setSelectedChoice(null);
  };

  const handleChoiceCancel = () => {
    setSelectedChoice(null);
  };

  const handleRedAlertChoice = (choiceId: string) => {
    if (!currentScenario || !hackerSkills || !previousScenario) return;

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
          setCurrentChoices(selectBalancedChoices(nextScenario.choices));
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

  const restartGame = useCallback(() => {
    const initialScenario = scenarios[0];
    setCurrentScenario(initialScenario);
    setCurrentChoices(selectBalancedChoices(initialScenario.choices));
    setGameOver(false);
    setScore(0);
    setChoices([]);
    setRollResult(null);
    setPreviousScenario(null);
    setSkillIncrease(null);
    setChoicesLocked(false);
    setShowNamePrompt(false);
    setPlayerName('');
    setScoreSubmitted(false);
    
    // Optionally reset hacker skills if you want players to start fresh each game
    // setHackerSkills(null);
    // setShowSkillSheet(true);
    
    // If you want to keep hacker skills persistent across games, you can leave them as is
  }, [scenarios]);

  // Ensure initial setup is done when component mounts
  useEffect(() => {
    if (scenarios.length > 0 && !currentScenario) {
      const initialScenario = scenarios[0];
      setCurrentScenario(initialScenario);
      setCurrentChoices(selectBalancedChoices(initialScenario.choices));
    }
  }, [scenarios, currentScenario]);

  const submitScore = async () => {
    const trimmedName = playerName.trim();
    if (!trimmedName) {
      setNameError("Please enter a name.");
      return;
    }

    if (wordFilter.isProfane(trimmedName)) {
      setNameError("Please choose a different name.");
      return;
    }

    setNameError(null);

    try {
      const response = await fetch('/api/high-scores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: trimmedName, score }),
      });
      if (!response.ok) {
        throw new Error('Failed to submit score');
      }
      const data = await response.json();
      console.log(data.message);
      setScoreSubmitted(true);
      fetchHighScores();
    } catch (error) {
      console.error('Error submitting score:', error);
      setNameError("Failed to submit score. Please try again.");
    }
    setShowNamePrompt(false);
  };
  
  const fetchHighScores = useCallback(async () => {
    try {
      const response = await fetch('/api/high-scores');
      if (!response.ok) {
        throw new Error('Failed to fetch high scores');
      }
      const data = await response.json();
      setHighScores(data);
    } catch (error) {
      console.error('Error fetching high scores:', error);
    }
  }, []);

  useEffect(() => {
    if (gameOver) {
      fetchHighScores();
    }
  }, [gameOver]);

  const handleGameOver = useCallback(() => {
    setGameOver(true);
    setShowNamePrompt(true);
    // Don't call fetchHighScores here, it will be called by the useEffect
  }, []);

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
    return <GameOverScreen score={score} choices={choices} onRestart={restartGame} highScores={highScores} />;
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
            {nameError && <p className="text-cyberRed mb-2">{nameError}</p>}
            <button onClick={submitScore} className="bg-cyberGreen text-cyberBlue p-2 rounded">
              Submit Score
            </button>
          </div>
        ) : (
          <GameOverScreen score={score} choices={choices} onRestart={restartGame} highScores={highScores} />
        )
      ) : (
        <>
          <ScenarioRenderer
            scenario={currentScenario}
            choices={currentChoices}
            selectedChoice={selectedChoice}
            onChoiceSelect={handleChoiceSelect}
            onChoiceConfirm={handleChoiceConfirm}
            onChoiceCancel={handleChoiceCancel}
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
