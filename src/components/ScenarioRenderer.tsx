import React from 'react';
import { Scenario, Choice } from '@/types';

interface ScenarioRendererProps {
  scenario: Scenario;
  choices: Choice[];
  selectedChoice: Choice | null;
  onChoiceSelect: (choice: Choice) => void;
  onChoiceConfirm: () => void;
  onChoiceCancel: () => void;
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
  choices,
  selectedChoice,
  onChoiceSelect,
  onChoiceConfirm,
  onChoiceCancel,
  rollResult, 
  skillIncrease,
  choicesLocked
}) => {
  const isRedAlert = scenario.name.includes('Red Alert');

  return (
    <div className="bg-cyberGray p-6 rounded-lg shadow-neon">
      <h2 className={`text-2xl font-bold mb-4 ${
          isRedAlert 
            ? 'text-cyberRed animate-pulse' 
            : 'text-cyberGreen'
        }`}>
          {scenario.name}
        </h2>
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

      {!selectedChoice ? (
        <div className="space-y-4">
          {choices.map((choice) => (
            <button
              key={choice.id}
              onClick={() => onChoiceSelect(choice)}
              className={`w-full py-2 px-4 bg-cyberPurple hover:bg-cyberTeal text-white font-bold rounded transition duration-200 ${choicesLocked ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={choicesLocked}
            >
              {choice.method}
            </button>
          ))}
        </div>
      ) : (
        <div className="bg-cyberBlue p-4 rounded">
          <h3 className="text-xl font-bold mb-2 text-cyberGreen">{selectedChoice.method}</h3>
          <p className="text-white mb-4">{selectedChoice.description}</p>
          <div className="flex justify-between">
            <button
              onClick={onChoiceCancel}
              className="py-2 px-4 bg-cyberRed hover:bg-red-700 text-white font-bold rounded transition duration-200"
            >
              Cancel
            </button>
            <button
              onClick={onChoiceConfirm}
              className="py-2 px-4 bg-cyberGreen hover:bg-green-700 text-cyberBlue font-bold rounded transition duration-200"
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScenarioRenderer;
