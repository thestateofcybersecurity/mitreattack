import React, { useState } from 'react';
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
  const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null);

  const handleChoiceClick = (choice: Choice) => {
    setSelectedChoice(choice);
  };

  const handleConfirm = () => {
    if (selectedChoice) {
      onChoiceMade(selectedChoice.id);
      setSelectedChoice(null);
    }
  };

  return (
    <div className="bg-cyberGray p-6 rounded-lg shadow-neon">
      <h2 className="text-2xl font-bold mb-4 text-cyberGreen">{scenario.name}</h2>
      <p className="mb-6 text-white">{scenario.description}</p>
      
      {rollResult && (
        <div className={`mb-6 p-4 rounded ${rollResult.success ? 'bg-cyberGreen text-cyberBlue' : 'bg-cyberRed text-white'}`}>
          <p>{rollResult.message}</p>
        </div>
      )}

      {!selectedChoice ? (
        <div className="space-y-4">
          {scenario.choices.map((choice) => (
            <button
              key={choice.id}
              onClick={() => handleChoiceClick(choice)}
              className="w-full py-2 px-4 bg-cyberPurple hover:bg-cyberTeal text-white font-bold rounded transition duration-200"
            >
              {choice.method}
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-cyberBlue p-4 rounded">
            <h3 className="text-xl font-bold mb-2 text-cyberGreen">{selectedChoice.method}</h3>
            <p className="text-white mb-4">{selectedChoice.description}</p>
            <div className="flex justify-between">
              <button
                onClick={() => setSelectedChoice(null)}
                className="py-2 px-4 bg-cyberRed hover:bg-red-700 text-white font-bold rounded transition duration-200"
              >
                Back
              </button>
              <button
                onClick={handleConfirm}
                className="py-2 px-4 bg-cyberGreen hover:bg-green-700 text-cyberBlue font-bold rounded transition duration-200"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScenarioRenderer;
