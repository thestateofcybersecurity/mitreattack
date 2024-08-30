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

  console.log(`Debug - Roll: ${roll}, Skill: ${skillLevel}, Total: ${total}, Difficulty: ${adjustedDifficulty}, Success: ${success}`);

  return { success, roll, total, message };
};

export const getNextScenario = (
  scenarios: Scenario[], 
  currentScenario: Scenario, 
  choiceResult: { success: boolean }
): Scenario | null => {
  const currentIndex = scenarios.findIndex(s => s.id === currentScenario.id);
  
  // If it's a red alert scenario
  if (currentScenario.name.includes('Red Alert')) {
    if (choiceResult.success) {
      // On success, move to the next regular scenario
      return scenarios[currentIndex] || null;
    } else {
      // On failure, game over
      return null;
    }
  }

  // For regular scenarios
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

export function selectBalancedChoices(choicePool: Choice[]): Choice[] {
  const easy = choicePool.filter(c => c.difficultyRating === 'easy');
  const medium = choicePool.filter(c => c.difficultyRating === 'medium');
  const hard = choicePool.filter(c => c.difficultyRating === 'hard');

  let selected: Choice[] = [];  
  // Select 1 easy, 2 medium, 2 hard if possible
  if (easy.length > 0) selected.push(easy[Math.floor(Math.random() * easy.length)]);
  if (medium.length > 0) selected.push(medium[Math.floor(Math.random() * medium.length)]);
  if (medium.length > 1) selected.push(medium[Math.floor(Math.random() * medium.length)]);
  if (hard.length > 0) selected.push(hard[Math.floor(Math.random() * hard.length)]);
  if (hard.length > 1) selected.push(hard[Math.floor(Math.random() * hard.length)]);

  // If we don't have 5 choices yet, fill with random choices
  while (selected.length < 5 && choicePool.length > 0) {
    const randomChoice = choicePool[Math.floor(Math.random() * choicePool.length)];
    if (!selected.includes(randomChoice)) {
      selected.push(randomChoice);
    }
  }

  return selected;
}
