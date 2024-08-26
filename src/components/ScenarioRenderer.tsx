import React from 'react';
import { Scenario, Option } from '@/types';

interface ScenarioRendererProps {
  scenario: Scenario;
  onChoiceMade: (choiceId: string) => void;
}

const ScenarioRenderer: React.FC<ScenarioRendererProps> = ({ scenario, onChoiceMade }) => {
  return (
    <div>
      <h2>{scenario.title}</h2>
      <div className="scenario-text">
        {scenario.description.split("Random Event:")[0]}
      </div>
      <div className="options">
        {scenario.options.map((option: Option) => (
          <button
            key={option.id}
            onClick={() => onChoiceMade(option.id)}
            className="option-button"
          >
            {option.text}
          </button>
        ))}
      </div>
      {scenario.educationalContent && (
        <div className="educational-content">
          <h3>{scenario.educationalContent.title}</h3>
          <p>{scenario.educationalContent.content}</p>
        </div>
      )}
    </div>
  );
};

export default ScenarioRenderer;
