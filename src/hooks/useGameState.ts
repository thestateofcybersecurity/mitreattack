import { useState, useCallback, useEffect } from 'react';
import { Scenario } from '@/types';
import { getNextScenario, calculateScore } from '@/utils/gameLogic';

const useGameState = (initialScenarios: Scenario[]) => {
  const [scenarios, setScenarios] = useState<Scenario[]>(initialScenarios);
  const [currentScenario, setCurrentScenario] = useState<Scenario | null>(null);
  const [gameHistory, setGameHistory] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (scenarios.length > 0 && !currentScenario) {
      setCurrentScenario(scenarios[0]);
    }
  }, [scenarios, currentScenario]);

  const makeChoice = useCallback((choiceId: string) => {
    if (!currentScenario) return;

    const choice = currentScenario.options.find(option => option.id === choiceId);
    if (!choice) return;

    setGameHistory(prevHistory => [...prevHistory, choiceId]);
    setScore(prevScore => prevScore + calculateScore(choice.technique, currentScenario.tactic));

    const nextScenario = getNextScenario(scenarios, currentScenario, choice);
    setCurrentScenario(nextScenario);

    if (nextScenario.options.length === 0) {
      setGameOver(true);
    }
  }, [currentScenario, scenarios]);

  return {
    currentScenario,
    gameHistory,
    gameOver,
    score,
    makeChoice,
  };
};

export default useGameState;
