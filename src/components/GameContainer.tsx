import React, { useState, useEffect } from 'react';
import ScenarioRenderer from './ScenarioRenderer';
import useGameState from '@/hooks/useGameState';
import { Scenario } from '@/types';

const GameContainer: React.FC = () => {
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { currentScenario, makeChoice, gameOver, score } = useGameState(scenarios);

  useEffect(() => {
    setIsLoading(true);
    fetch('/api/scenarios')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("Fetched scenarios:", data);
        setScenarios(data);
        setIsLoading(false);
      })
      .catch(e => {
        console.error("Fetching scenarios failed:", e);
        setError("Failed to load scenarios. Please try again later.");
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log("Scenarios state updated:", scenarios);
    console.log("Current scenario:", currentScenario);
  }, [scenarios, currentScenario]);

  if (isLoading) {
    return <div>Loading scenarios...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!currentScenario) {
    return <div>No scenario available. Please check your data. Scenarios loaded: {scenarios.length}</div>;
  }

  return (
    <div style={styles.gameContainer}>
      <ScenarioRenderer scenario={currentScenario} onChoiceMade={makeChoice} />
      <div style={styles.scoreDisplay}>
        Current Score: {score}
      </div>
      {gameOver && (
        <div style={styles.gameOver}>
          <p>Game Over!</p>
          <p>Your final score: {score}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  gameContainer: {
    width: '80%',
    maxWidth: '800px',
    padding: '20px',
    backgroundColor: '#2a2a2a',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
    color: '#f0f0f0',
  },
  scoreDisplay: {
    textAlign: 'center' as const,
    marginTop: '20px',
    fontSize: '1.2em',
  },
  gameOver: {
    textAlign: 'center' as const,
    marginTop: '20px',
    padding: '20px',
    backgroundColor: '#ff4444',
    color: '#ffffff',
    borderRadius: '5px',
    fontWeight: 'bold',
  },
};

export default GameContainer;
