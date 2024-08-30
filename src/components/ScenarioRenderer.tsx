import React from 'react';
import { Scenario, Option } from '@/types';
import { useGameState } from './useGameState';

interface ScenarioRendererProps {
  scenario: Scenario;
  onChoiceMade: (choiceId: string) => void;
}

const ScenarioRenderer = () => {
    const { scenario, result, makeChoice } = useGameState();

    return (
        <div>
            <h2>{scenario.name}</h2>
            <p>{scenario.description}</p>
            {result && <p>{result}</p>}
            <div>
                {scenario.choices.map((choice, index) => (
                    <button key={index} onClick={() => makeChoice(index)}>
                        {choice.method}
                    </button>
                ))}
            </div>
        </div>
    );
};

const styles = {
  title: {
    fontSize: '1.5em',
    marginBottom: '10px',
  },
  scenarioText: {
    marginBottom: '20px',
  },
  options: {
    display: 'flex' as const,
    flexDirection: 'column' as const,
  },
  optionButton: {
    padding: '10px',
    margin: '5px 0',
    backgroundColor: '#444',
    border: 'none',
    borderRadius: '5px',
    color: '#f0f0f0',
    cursor: 'pointer',
  },
  educationalContent: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#333',
    borderRadius: '5px',
  },
  educationalTitle: {
    fontSize: '1.2em',
    marginBottom: '5px',
  },
};

export default ScenarioRenderer;
