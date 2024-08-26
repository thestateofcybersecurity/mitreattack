import { Scenario, Option } from '@/types';

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

export const getNextScenario = (scenarios: Scenario[], currentScenario: Scenario, chosenOption: Option): Scenario => {
    const event = triggerRandomEvent();
    let nextScenarioId = chosenOption.nextScenario;

    if (event) {
        if (event.includes("increased_security")) {
            nextScenarioId = adjustScenarioForIncreasedSecurity(nextScenarioId);
        } else if (event.includes("detection_alert")) {
            nextScenarioId = getDefensiveScenario(scenarios);
        } else if (event.includes("system_update")) {
            nextScenarioId = adjustScenarioForSystemUpdate(nextScenarioId);
        }
    }

    const nextScenario = scenarios.find(s => s.id === nextScenarioId);
    if (!nextScenario) {
        console.warn(`Next scenario not found: ${nextScenarioId}. Returning a random scenario.`);
        return scenarios[Math.floor(Math.random() * scenarios.length)];
    }

    return {
        ...nextScenario,
        description: `${nextScenario.description}\n\n${event ? `Random Event: ${event}` : ''}`
    };
};

const adjustScenarioForIncreasedSecurity = (scenarioId: string): string => {
    // Logic to adjust the scenario for increased security
    // This could involve changing to a more defensive scenario or adding more challenges
    return scenarioId; // Placeholder: return the same scenario for now
};

const getDefensiveScenario = (scenarios: Scenario[]): string => {
    // Logic to find a defensive scenario
    // This could involve looking for scenarios with specific tags or categories
    return scenarios[Math.floor(Math.random() * scenarios.length)].id; // Placeholder: return a random scenario
};

const adjustScenarioForSystemUpdate = (scenarioId: string): string => {
    // Logic to adjust the scenario for a system update
    // This could involve changing available options or modifying the scenario difficulty
    return scenarioId; // Placeholder: return the same scenario for now
};

export const calculateScore = (technique: string, tactic: string): number => {
    const baseScores: {[key: string]: number} = {
        "Reconnaissance": 10,
        "Resource Development": 20,
        "Initial Access": 30,
        "Execution": 40,
        "Persistence": 50,
        "Privilege Escalation": 60,
        "Defense Evasion": 70,
        "Credential Access": 80,
        "Discovery": 50,
        "Lateral Movement": 70,
        "Collection": 60,
        "Command and Control": 80,
        "Exfiltration": 90,
        "Impact": 100
    };

    const techniqueMultipliers: {[key: string]: number} = {
        "Active Scanning": 0.8,
        "Gather Victim Host Information": 1.0,
        "Search Open Websites/Domains": 1.2,
        // Add more techniques and their multipliers here
    };

    const baseScore = baseScores[tactic] || 0;
    const multiplier = techniqueMultipliers[technique] || 1.0;

    return baseScore * multiplier;
};
