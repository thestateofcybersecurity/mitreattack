import React, { useState, useEffect } from 'react';
import ScenarioRenderer from './ScenarioRenderer';
import useGameState from '@/hooks/useGameState';
import { Scenario } from '@/types';
import '@/styles/custom.css';

const GameContainer: React.FC = () => {
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const { currentScenario, makeChoice, gameOver, score } = useGameState(scenarios);
  const [eventNotification, setEventNotification] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/scenarios')
      .then(response => response.json())
      .then(data => {
        setScenarios(data);
      });
  }, []);

  useEffect(() => {
    if (currentScenario?.description.includes("Random Event:")) {
      const [_, event] = currentScenario.description.split("Random Event:");
      setEventNotification(event.trim());
      setTimeout(() => setEventNotification(null), 5000);
    }
  }, [currentScenario]);

  if (!currentScenario) {
    return <div className="game-container">Loading...</div>;
  }

  return (
    <div className="game-container">
      <h1>Cybersecurity Adventure</h1>
      <ScenarioRenderer scenario={currentScenario} onChoiceMade={makeChoice} />
      <div className={`event-notification ${eventNotification ? 'visible' : ''}`}>
        {eventNotification}
      </div>
      <div className="score-display">
        Current Score: {score}
      </div>
      {gameOver && (
        <div className="game-over">
          <p>Game Over!</p>
          <p>Your final score: {score}</p>
        </div>
      )}
    </div>
  );
};

export default GameContainer;
