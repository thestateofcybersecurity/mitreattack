import React from 'react';
import { Scenario } from '@/types';

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
  const isRedAlert = scenario.id.toString().includes('1');

  return (
    <div className={`bg-cyberGray p-6 rounded-lg shadow-neon ${isRedAlert ? 'border-2 border-cyberRed' : ''}`}>
      <h2 className={`text-2xl font-bold mb-4 ${isRedAlert ? 'text-cyberRed' : 'text-cyberGreen'}`}>{scenario.name}</h2>
      <p className="mb-6 text-white">{scenario.description}</p>
      
      {rollResult && (
        <div className={`mb-6 p-4 rounded ${rollResult.success ? 'bg-cyberGreen text-cyberBlue' : 'bg-cyberRed text-white'}`}>
          <p>{rollResult.message}</p>
        </div>
      )}

      <div className="space-y-4">
        {scenario.choices.map((choice) => (
          <button
            key={choice.id}
            onClick={() => onChoiceMade(choice.id)}
            className="w-full py-2 px-4 bg-cyberPurple hover:bg-cyberTeal text-white font-bold rounded transition duration-200"
          >
            {choice.method}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScenarioRenderer;
