export interface Option {
  id: string;
  text: string;
  technique: string;
  nextScenario: string;
  consequence: string;
}

export interface EducationalContent {
  title: string;
  content: string;
}

export interface Scenario {
  id: string;
  title: string;
  tactic: string;
  description: string;
  options: Option[];
  educationalContent?: EducationalContent;
}
