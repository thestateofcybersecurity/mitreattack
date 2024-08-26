import React from 'react';
import { Scenario, Option } from '@/types';

interface ScenarioRendererProps {
  scenario: Scenario;
  onChoiceMade: (choiceId: string) => void;
}

const ScenarioRenderer: React.FC<ScenarioRendererProps> = ({ scenario, onChoiceMade }) => {
  return (
    <div>
      <h2 style={styles.title}>{scenario.title}</h2>
      <div style={styles.scenarioText}>
        {scenario.description.split("Random Event:")[0]}
      </div>
      <div style={styles.options}>
        {scenario.options.map((option: Option) => (
          <button
            key={option.id}
            onClick={() => onChoiceMade(option.id)}
            style={styles.optionButton}
          >
            {option.text}
          </button>
        ))}
      </div>
      {scenario.educationalContent && (
        <div style={styles.educationalContent}>
          <h3 style={styles.educationalTitle}>{scenario.educationalContent.title}</h3>
          <p>{scenario.educationalContent.content}</p>
        </div>
      )}
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
