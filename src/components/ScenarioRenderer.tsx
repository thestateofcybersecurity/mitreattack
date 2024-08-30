import React from 'react';
import { Scenario } from '@/types';

interface ScenarioRendererProps {
  scenario: Scenario;
  onChoiceMade: (choiceId: string) => void;
}

const ScenarioRenderer: React.FC<ScenarioRendererProps> = ({ scenario, onChoiceMade }) => {
  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-white">{scenario.name}</h2>
      <p className="mb-6 text-gray-300">{scenario.description}</p>
      <div className="space-y-4">
        {scenario.choices.map((choice) => (
          <button
            key={choice.id}
            onClick={() => onChoiceMade(choice.id)}
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded transition duration-200"
          >
            {choice.method}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScenarioRenderer;
