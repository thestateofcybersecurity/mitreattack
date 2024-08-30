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
  skillIncrease: {skill: string, increase: number} | null;
  choicesLocked: boolean;
}

const ScenarioRenderer: React.FC<ScenarioRendererProps> = ({ 
  scenario, 
  onChoiceMade, 
  rollResult, 
  skillIncrease,
  choicesLocked
}) => {
  const isRedAlert = scenario.name.includes('Red Alert');

  return (
    <div className={`bg-cyberGray p-6 rounded-lg shadow-neon ${isRedAlert ? 'border-4 border-cyberRed' : ''}`}>
      {isRedAlert && (
        <div className="text-cyberRed font-bold text-2xl mb-4 animate-pulse">
          RED ALERT: Detection Imminent
        </div>
      )}
      <h2 className={`text-2xl font-bold mb-4 ${isRedAlert ? 'text-cyberRed' : 'text-cyberGreen'}`}>{scenario.name}</h2>
      <p className="mb-6 text-white">{scenario.description}</p>

      {rollResult && (
        <div className={`mb-6 p-4 rounded ${rollResult.success ? 'bg-cyberGreen text-cyberBlue' : 'bg-cyberRed text-white'}`}>
          <p>{rollResult.message}</p>
          {skillIncrease && rollResult.success && (
            <p className="mt-2 text-cyberPurple">
              Your {skillIncrease.skill.replace(/([A-Z])/g, ' $1').trim()} skill increased by {skillIncrease.increase}!
            </p>
          )}
        </div>
      )}

      <div className="space-y-4">
        {scenario.choices.map((choice) => (
          <button
            key={choice.id}
            onClick={() => onChoiceMade(choice.id)}
            className={`w-full py-2 px-4 bg-cyberPurple hover:bg-cyberTeal text-white font-bold rounded transition duration-200 ${choicesLocked ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={choicesLocked}
          >
            {choice.method}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScenarioRenderer;
