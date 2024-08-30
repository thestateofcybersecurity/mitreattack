import React from 'react';
import { Scenario, Choice } from '@/types';

interface ScenarioRendererProps {
  scenario: Scenario;
  onChoiceMade: (choiceId: string) => void;
  rollResult?: {
    success: boolean;
    roll: number;
    total: number;
    message: string;
  };
}

const ScenarioRenderer: React.FC<ScenarioRendererProps> = ({ scenario, onChoiceMade, rollResult }) => {
  const isRedAlert = scenario.id.toString().includes('1'); // Assuming red alert scenarios have IDs ending with 1

  return (
    <div className={`bg-gray-800 p-6 rounded-lg shadow-lg ${isRedAlert ? 'border-2 border-red-500' : ''}`}>
      <h2 className={`text-2xl font-bold mb-4 ${isRedAlert ? 'text-red-500' : 'text-white'}`}>{scenario.name}</h2>
      <p className="mb-6 text-gray-300">{scenario.description}</p>
      
      {rollResult && (
        <div className={`mb-6 p-4 rounded ${rollResult.success ? 'bg-green-700' : 'bg-red-700'}`}>
          <p className="text-white">{rollResult.message}</p>
        </div>
      )}

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
