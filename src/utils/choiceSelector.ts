import { Choice } from '@/types';

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
