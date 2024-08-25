import { useState, useCallback } from 'react';
import { Scenario } from '@/types';

const useGameState = () => {
  const [currentScenario, setCurrentScenario] = useState<Scenario | null>(null);
  const [gameHistory, setGameHistory] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const makeChoice = useCallback((choiceId: string) => {
    if (!currentScenario) return;

    const choice = currentScenario.options.find(option => option.id === choiceId);
    if (!choice) return;

    setGameHistory(prevHistory => [...prevHistory, choiceId]);
    setScore(prevScore => prevScore + calculateScore(choice.technique, currentScenario.tactic));

    // In a full implementation, you would load the next scenario based on choice.nextScenario
    // For this example, we'll just update the current scenario with a placeholder
    setCurrentScenario({
      ...currentScenario,
      title: `Scenario after choosing ${choice.text}`,
      description: choice.consequence,
      options: [] // This would be populated with new options in a full implementation
    });

    if (currentScenario.options.length === 0) {
      setGameOver(true);
    }
  }, [currentScenario]);

  return {
    currentScenario,
    gameHistory,
    gameOver,
    score,
    makeChoice,
  };
};

const calculateScore = (technique: string, tactic: string) => {
  const baseScores: {[key: string]: number} = {
    "Reconnaissance": 10,
    "Resource Development": 20,
    "Initial Access": 30,
    // ... other tactics
  };

  const techniqueMultipliers: {[key: string]: number} = {
    "Active Scanning": 0.8,
    "Gather Victim Host Information": 1.0,
    "Search Open Websites/Domains": 1.2,
    // ... other techniques
  };

  const baseScore = baseScores[tactic] || 0;
  const multiplier = techniqueMultipliers[technique] || 1.0;

  return baseScore * multiplier;
};

export default useGameState;
