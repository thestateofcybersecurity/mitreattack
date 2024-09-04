import { Scenario, Choice, HackerSkills } from '@/types';
import { criticalFailureMessages, criticalSuccessMessages } from './criticalMessages';

export const rollD20 = (): number => {
  return Math.floor(Math.random() * 20) + 1;
};

export const executeChoice = (
  choice: Choice, 
  skillLevel: number
): { success: boolean; roll: number; total: number; message: string; isCritical: boolean } => {
  const roll = Math.floor(Math.random() * 20) + 1;
  const total = roll + (skillLevel || 0);
  const adjustedDifficulty = Math.round(choice.baseDifficulty * choice.successRateModifier);

  let success: boolean;
  let message: string;
  let isCritical: boolean = false;

  if (roll === 1) {
    success = false;
    isCritical = true;
    message = criticalFailureMessages[Math.floor(Math.random() * criticalFailureMessages.length)];
  } else if (roll === 20) {
    success = true;
    isCritical = true;
    message = criticalSuccessMessages[Math.floor(Math.random() * criticalSuccessMessages.length)];
  } else {
    success = total >= adjustedDifficulty;
    message = `You rolled a ${roll}. `;
    if (skillLevel > 0) {
      message += `Your skill bonus of +${skillLevel} brings your total to ${total}. `;
    }
    message += success 
      ? `Success! You beat the difficulty of ${adjustedDifficulty}.` 
      : `Failure. You didn't meet the difficulty of ${adjustedDifficulty}.`;
  }

  return { success, roll, total, message, isCritical };
};

export const getNextScenario = (
  scenarios: Scenario[],
  currentScenario: Scenario,
  choiceResult: { success: boolean }
): Scenario | null => {
  const currentIndex = scenarios.findIndex(s => s.id === currentScenario.id);
  
  // If we're at the end of the scenarios, the game is over
  if (currentIndex === -1 || currentIndex === scenarios.length - 1) {
    return null; // Game over
  }
  
  // If we're in a red alert scenario and the choice was successful,
  // we want to skip to the next regular scenario
  if (currentScenario.name.includes('Red Alert') && choiceResult.success) {
    // Find the next non-red alert scenario
    for (let i = currentIndex + 1; i < scenarios.length; i++) {
      if (!scenarios[i].name.includes('Red Alert')) {
        return scenarios[i];
      }
    }
    // If we couldn't find a non-red alert scenario, the game is over
    return null;
  }
  
  // For regular scenarios or failed red alerts, just return the next scenario
  return scenarios[currentIndex + 1];
};

export const createRedAlertScenario = (currentScenario: Scenario): Scenario => {
  return {
    id: currentScenario.id * 100 + 1,
    name: "Red Alert: Detection Imminent",
    description: "Your last action has triggered security systems. Act fast to avoid detection!",
    phase: currentScenario.phase,
    choices: [
      {
        id: 'alert_1',
        method: "Quickly cover your tracks",
        description: "Attempt to erase evidence of your presence in the system. This could involve deleting logs, removing malware, or hiding your network presence.",
        baseDifficulty: 15,
        successRateModifier: 1,
      },
      {
        id: 'alert_2',
        method: "Create a diversion",
        description: "Try to distract the security team by creating a false alarm elsewhere in the system. This could buy you time to complete your objectives.",
        baseDifficulty: 17,
        successRateModifier: 1,
      },
      {
        id: 'alert_3',
        method: "Attempt to bypass security",
        description: "Make a daring attempt to circumvent the triggered security measures. This is risky but could allow you to continue your operation undetected.",
        baseDifficulty: 25,
        successRateModifier: 1,
      }
    ]
  };
};

export const calculateScore = (choice: Choice, success: boolean, roll: number): number => {
  if (!success) return 0;
  return Math.floor(choice.baseDifficulty * roll);
};
