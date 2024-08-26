import React from 'react';
import { Scenario, Option } from '@/types';

interface ScenarioRendererProps {
  scenario: Scenario;
  onChoiceMade: (choiceId: string) => void;
}

const ScenarioRenderer: React.FC<ScenarioRendererProps> = ({ scenario, onChoiceMade }) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">{scenario.title}</h2>
      <p className="mb-4 whitespace-pre-wrap">{scenario.description}</p>
      <div className="space-y-2">
        {scenario.options.map((option: Option) => (
          <button
            key={option.id}
            onClick={() => onChoiceMade(option.id)}
            className="w-full text-left p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {option.text}
          </button>
        ))}
      </div>
      {scenario.educationalContent && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <h3 className="font-bold mb-2">{scenario.educationalContent.title}</h3>
          <p>{scenario.educationalContent.content}</p>
        </div>
      )}
    </div>
  );
};

export default ScenarioRenderer;
