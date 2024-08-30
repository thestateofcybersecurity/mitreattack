import { useState, useCallback, useEffect } from 'react';
import { Scenario, Choice, HackerSkills } from '@/types';
import { getNextScenario, calculateSuccessRate, executeChoice } from '@/utils/gameLogic';

const useGameState = (initialScenarios: Scenario[]) => {
  const [scenarios, setScenarios] = useState<Scenario[]>(initialScenarios);
  const [currentScenario, setCurrentScenario] = useState<Scenario | null>(null);
  const [gameHistory, setGameHistory] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [hackerSkills, setHackerSkills] = useState<HackerSkills | null>(null);

  useEffect(() => {
    const storedSkills = localStorage.getItem('hackerSkills');
    if (storedSkills) {
      setHackerSkills(JSON.parse(storedSkills));
    }
  }, []);

  useEffect(() => {
    if (scenarios.length > 0 && !currentScenario) {
      setCurrentScenario(scenarios[0]);
    }
  }, [scenarios, currentScenario]);

  const makeChoice = useCallback((choiceId: string) => {
    if (!currentScenario || !hackerSkills) return;

    const choice = currentScenario.choices.find(option => option.id === choiceId);
    if (!choice) return;

    const successRate = calculateSuccessRate(choice, hackerSkills[currentScenario.phase]);
    const outcome = executeChoice(choice, successRate);

    setGameHistory(prevHistory => [...prevHistory, choiceId]);
    setScore(prevScore => prevScore + outcome.score);

    if (outcome.detected) {
      // Handle detection logic
    }

    const nextScenario = getNextScenario(scenarios, currentScenario, choice);
    setCurrentScenario(nextScenario);

    if (!nextScenario) {
      setGameOver(true);
    }
  }, [currentScenario, scenarios, hackerSkills]);

  return {
    currentScenario,
    gameHistory,
    gameOver,
    score,
    makeChoice,
    setScenarios,
    hackerSkills,
  };
};

export default useGameState;
