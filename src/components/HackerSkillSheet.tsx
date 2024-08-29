// HackerSkillSheet.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const initialSkillPoints = 10; // Set the initial points available for distribution

const skills = [
    { name: 'Initial Access', key: 'initialAccess' },
    { name: 'Execution', key: 'execution' },
    { name: 'Persistence', key: 'persistence' },
    { name: 'Privilege Escalation', key: 'privilegeEscalation' },
    { name: 'Defense Evasion', key: 'defenseEvasion' },
    { name: 'Credential Access', key: 'credentialAccess' },
    { name: 'Discovery', key: 'discovery' },
    { name: 'Lateral Movement', key: 'lateralMovement' },
    { name: 'Collection', key: 'collection' },
    { name: 'Exfiltration', key: 'exfiltration' },
    { name: 'Impact', key: 'impact' },
];

const HackerSkillSheet = () => {
    const [skillPoints, setSkillPoints] = useState(initialSkillPoints);
    const [skillDistribution, setSkillDistribution] = useState(
        skills.reduce((acc, skill) => {
            acc[skill.key] = 0;
            return acc;
        }, {} as Record<string, number>)
    );

    const router = useRouter();

    const handleIncrease = (key: string) => {
        if (skillPoints > 0) {
            setSkillDistribution({
                ...skillDistribution,
                [key]: skillDistribution[key] + 1,
            });
            setSkillPoints(skillPoints - 1);
        }
    };

    const handleDecrease = (key: string) => {
        if (skillDistribution[key] > 0) {
            setSkillDistribution({
                ...skillDistribution,
                [key]: skillDistribution[key] - 1,
            });
            setSkillPoints(skillPoints + 1);
        }
    };

    const handleSubmit = () => {
        localStorage.setItem('hackerSkills', JSON.stringify(skillDistribution));
        router.push('/game'); // Navigate to the game page
    };

    return (
        <div>
            <h1>Hacker Skill Sheet</h1>
            <p>Assign your skill points. Remaining points: {skillPoints}</p>
            <ul>
                {skills.map((skill) => (
                    <li key={skill.key}>
                        {skill.name}: {skillDistribution[skill.key]}
                        <button onClick={() => handleIncrease(skill.key)} disabled={skillPoints === 0}>
                            +
                        </button>
                        <button onClick={() => handleDecrease(skill.key)} disabled={skillDistribution[skill.key] === 0}>
                            -
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={handleSubmit} disabled={skillPoints > 0}>
                Start Game
            </button>
        </div>
    );
};

export default HackerSkillSheet;
