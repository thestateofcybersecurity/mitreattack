import { useState, useEffect } from 'react';
import { Scenario, HackerSkills } from '@/types';

const useGameState = (initialScenarios: Scenario[]) => {
  const [scenarios, setScenarios] = useState<Scenario[]>(initialScenarios);
  const [currentScenario, setCurrentScenario] = useState<Scenario | null>(null);
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

  return {
    currentScenario,
    setCurrentScenario,
    gameOver,
    setGameOver,
    score,
    setScore,
    hackerSkills,
    setScenarios,
  };
};

export default useGameState;
