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

    const event = triggerRandomEvent();
    let nextScenario = scenarios[currentIndex + 1];

    if (event) {
        if (event.includes("increased_security")) {
            nextScenario = adjustScenarioForIncreasedSecurity(nextScenario);
        } else if (event.includes("detection_alert")) {
            nextScenario = getDefensiveScenario(scenarios) || nextScenario;
        } else if (event.includes("system_update")) {
            nextScenario = adjustScenarioForSystemUpdate(nextScenario);
        }
    }

    return {
        ...nextScenario,
        description: `${nextScenario.description}\n\n${event ? `Random Event: ${event}` : ''}`
    };
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

const adjustScenarioForIncreasedSecurity = (scenario: Scenario): Scenario => {
    // Logic to adjust the scenario for increased security
    // This could involve increasing the difficulty of choices
    return {
        ...scenario,
        choices: scenario.choices.map(choice => ({
            ...choice,
            baseDifficulty: Math.min(10, choice.baseDifficulty + 1),
            successRateModifier: Math.max(0.1, choice.successRateModifier - 0.1)
        }))
    };
};

const getDefensiveScenario = (scenarios: Scenario[]): Scenario | null => {
    // Logic to find a defensive scenario
    // This could involve looking for scenarios with specific tags or categories
    const defensiveScenarios = scenarios.filter(s => s.name.toLowerCase().includes('defense') || s.name.toLowerCase().includes('evasion'));
    return defensiveScenarios[Math.floor(Math.random() * defensiveScenarios.length)] || null;
};

const adjustScenarioForSystemUpdate = (scenario: Scenario): Scenario => {
    // Logic to adjust the scenario for a system update
    // This could involve changing available options or modifying the scenario difficulty
    return {
        ...scenario,
        description: `${scenario.description}\n\nDue to the system update, some options may be unavailable or more risky.`,
        choices: scenario.choices.map(choice => ({
            ...choice,
            baseDifficulty: Math.min(10, choice.baseDifficulty + 2),
            successRateModifier: Math.max(0.1, choice.successRateModifier - 0.2)
        }))
    };
};

export const calculateScore = (choice: Choice, success: boolean, skillLevel: number): number => {
    if (!success) return 0;
    const baseScore = choice.baseDifficulty * 10;
    const skillBonus = skillLevel * 5; // Each skill point adds 5 to the score
    return baseScore + skillBonus;
};
