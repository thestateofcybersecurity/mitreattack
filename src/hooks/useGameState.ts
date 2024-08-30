import { useState, useCallback, useEffect } from 'react';
import { Scenario } from '@/types';
import { getNextScenario, calculateScore } from '@/utils/gameLogic';
import { useState } from 'react';
import { scenarios } from './scenarios';
import { executeChoice } from './gameLogic';

const useGameState = (initialScenarios: Scenario[]) => {
  const [scenarios, setScenarios] = useState<Scenario[]>(initialScenarios);
  const [currentScenario, setCurrentScenario] = useState<Scenario | null>(null);
  const [gameHistory, setGameHistory] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    console.log("useGameState: scenarios updated", scenarios);
    if (scenarios.length > 0 && !currentScenario) {
      console.log("Setting initial scenario", scenarios[0]);
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
    console.log("Setting next scenario", nextScenario);
    setCurrentScenario(nextScenario);

    // Check if the game should end (you might want to add more conditions here)
    if (nextScenario.options.length === 0) {
      setGameOver(true);
    }
  }, [currentScenario, scenarios]);

  export function useGameState() {
    const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
    const [result, setResult] = useState<string | null>(null);

    function makeChoice(choiceIndex: number) {
        const scenario = scenarios[currentScenarioIndex];
        const choice = scenario.choices[choiceIndex];
        const outcome = executeChoice(choice);
        setResult(outcome);

        // Advance to the next scenario or handle end of game
        if (currentScenarioIndex < scenarios.length - 1) {
            setCurrentScenarioIndex(currentScenarioIndex + 1);
        } else {
            // Handle end of game
        }
    }

  return {
    scenario: scenarios[currentScenarioIndex],
    result,
    makeChoice,
    currentScenario,
    gameHistory,
    gameOver,
    score,
    makeChoice,
    setScenarios,
  };
};

export default useGameState;
