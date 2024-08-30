import { Scenario, Choice, HackerSkills } from '@/types';

export const rollD20 = (): number => {
  return Math.floor(Math.random() * 20) + 1;
};

export const executeChoice = (
  choice: Choice, 
  skillLevel: number
): { success: boolean; roll: number; total: number; message: string } => {
  const roll = rollD20();
  const total = roll + skillLevel;
  const adjustedDifficulty = Math.round(choice.baseDifficulty * choice.successRateModifier);
  const success = total >= adjustedDifficulty;

  let message = `You rolled a ${roll}. `;
  if (skillLevel > 0) {
    message += `Your skill bonus of +${skillLevel} brings your total to ${total}. `;
  }
  message += success 
    ? `Success! You beat the difficulty of ${adjustedDifficulty}.` 
    : `Failure. You didn't meet the difficulty of ${adjustedDifficulty}.`;

  return { success, roll, total, message };
};

export const getNextScenario = (
  scenarios: Scenario[], 
  currentScenario: Scenario, 
  choiceResult: { success: boolean }
): Scenario | null => {
  const currentIndex = scenarios.findIndex(s => s.id === currentScenario.id);
  if (currentIndex === -1 || currentIndex === scenarios.length - 1) {
    return null; // Game over
  }

  if (choiceResult.success) {
    return scenarios[currentIndex + 1];
  } else {
    // Return a "red alert" scenario
    return createRedAlertScenario(currentScenario);
  }
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
        successRateModifier: 0.7,
      },
      {
        id: 'alert_2',
        method: "Create a diversion",
        description: "Try to distract the security team by creating a false alarm elsewhere in the system. This could buy you time to complete your objectives.",
        baseDifficulty: 13,
        successRateModifier: 0.8,
      },
      {
        id: 'alert_3',
        method: "Attempt to bypass security",
        description: "Make a daring attempt to circumvent the triggered security measures. This is risky but could allow you to continue your operation undetected.",
        baseDifficulty: 17,
        successRateModifier: 0.6,
      }
    ]
  };
};

export const calculateScore = (choice: Choice, success: boolean, roll: number): number => {
  if (!success) return 0;
  return Math.floor(choice.baseDifficulty * roll);
};
