export interface Choice {
  id: string;
  method: string;
  description: string;
  baseDifficulty: number;
  successRateModifier: number;
}

export interface Scenario {
  id: number;
  name: string;
  description: string;
  phase: keyof HackerSkills;
  choices: Choice[];
}

export interface HackerSkills {
  [key: string]: number;
  reconnaissance: number;
  resourceDevelopment: number;
  initialAccess: number;
  execution: number;
  persistence: number;
  privilegeEscalation: number;
  defenseEvasion: number;
  credentialAccess: number;
  discovery: number;
  lateralMovement: number;
  collection: number;
  commandAndControl: number;
  exfiltration: number;
  impact: number;
}

export interface GameState {
  currentScenario: Scenario | null;
  gameHistory: string[];
  gameOver: boolean;
  score: number;
  hackerSkills: HackerSkills | null;
}

export interface HighScore {
  name: string;
  score: number;
}
