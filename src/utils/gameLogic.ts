import { Scenario, Choice, HackerSkills } from '@/types';

const random_events = {
    "increased_security": "Security measures have been increased. Certain tactics might now be riskier.",
    "detection_alert": "A detection alert has been triggered. You must act quickly to maintain your cover.",
    "system_update": "A system update is in progress, potentially disrupting your tactics."
};

export const triggerRandomEvent = (): string | null => {
    const event_chance = Math.random();
    if (event_chance < 0.2) {
        const event_keys = Object.keys(random_events);
        const event_key = event_keys[Math.floor(Math.random() * event_keys.length)];
        return random_events[event_key as keyof typeof random_events];
    }
    return null;
};

export const getNextScenario = (scenarios: Scenario[], currentScenario: Scenario, chosenChoice: Choice): Scenario | null => {
    const currentIndex = scenarios.findIndex(s => s.id === currentScenario.id);
    if (currentIndex === -1 || currentIndex === scenarios.length - 1) {
        return null; // Game over
    }
    return scenarios[currentIndex + 1];
};

export const calculateSuccessRate = (choice: Choice, skillLevel: number): number => {
    const baseSuccessRate = 1 - (choice.baseDifficulty / 10);
    const skillBonus = skillLevel * 0.05; // Each skill point increases success rate by 5%
    return Math.min(0.95, Math.max(0.05, baseSuccessRate + skillBonus));
};

export const executeChoice = (choice: Choice, successRate: number): { success: boolean; detected: boolean; score: number } => {
    const success = Math.random() < successRate;
    const detected = Math.random() < (1 - successRate) * 0.5; // 50% chance of detection on failure
    const score = success ? Math.floor(choice.baseDifficulty * 10) : 0;

    return { success, detected, score };
};

export const getNextScenario = (scenarios: Scenario[], currentScenario: Scenario): Scenario | null => {
    const currentIndex = scenarios.findIndex(s => s.id === currentScenario.id);
    if (currentIndex === -1 || currentIndex === scenarios.length - 1) {
        return null; // Game over
    }
    return scenarios[currentIndex + 1];
};
