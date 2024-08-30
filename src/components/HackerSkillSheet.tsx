import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { HackerSkills } from '@/types';

const initialSkillPoints = 20; // Increased due to more skills

const skills: { name: string; key: keyof HackerSkills }[] = [
    { name: 'Reconnaissance', key: 'reconnaissance' },
    { name: 'Resource Development', key: 'resourceDevelopment' },
    { name: 'Initial Access', key: 'initialAccess' },
    { name: 'Execution', key: 'execution' },
    { name: 'Persistence', key: 'persistence' },
    { name: 'Privilege Escalation', key: 'privilegeEscalation' },
    { name: 'Defense Evasion', key: 'defenseEvasion' },
    { name: 'Credential Access', key: 'credentialAccess' },
    { name: 'Discovery', key: 'discovery' },
    { name: 'Lateral Movement', key: 'lateralMovement' },
    { name: 'Collection', key: 'collection' },
    { name: 'Command and Control', key: 'commandAndControl' },
    { name: 'Exfiltration', key: 'exfiltration' },
    { name: 'Impact', key: 'impact' },
];

const HackerSkillSheet: React.FC = () => {
    const [skillPoints, setSkillPoints] = useState(initialSkillPoints);
    const [skillDistribution, setSkillDistribution] = useState<HackerSkills>(() => {
        return skills.reduce((acc, skill) => ({ ...acc, [skill.key]: 0 }), {} as HackerSkills);
    });

    const router = useRouter();

    const handleIncrease = (key: keyof HackerSkills) => {
        if (skillPoints > 0) {
            setSkillDistribution(prev => ({ ...prev, [key]: prev[key] + 1 }));
            setSkillPoints(prev => prev - 1);
        }
    };

    const handleDecrease = (key: keyof HackerSkills) => {
        if (skillDistribution[key] > 0) {
            setSkillDistribution(prev => ({ ...prev, [key]: prev[key] - 1 }));
            setSkillPoints(prev => prev + 1);
        }
    };

    const handleSubmit = () => {
        localStorage.setItem('hackerSkills', JSON.stringify(skillDistribution));
        router.push('/game');
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-white">Hacker Skill Sheet</h1>
            <p className="mb-4 text-gray-300">Assign your skill points. Remaining points: {skillPoints}</p>
            <ul className="space-y-4">
                {skills.map((skill) => (
                    <li key={skill.key} className="flex items-center justify-between">
                        <span className="text-white">{skill.name}: {skillDistribution[skill.key]}</span>
                        <div>
                            <button
                                onClick={() => handleIncrease(skill.key)}
                                disabled={skillPoints === 0}
                                className="px-2 py-1 bg-blue-600 text-white rounded mr-2 disabled:opacity-50"
                            >
                                +
                            </button>
                            <button
                                onClick={() => handleDecrease(skill.key)}
                                disabled={skillDistribution[skill.key] === 0}
                                className="px-2 py-1 bg-red-600 text-white rounded disabled:opacity-50"
                            >
                                -
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <button
                onClick={handleSubmit}
                disabled={skillPoints > 0}
                className="mt-6 px-4 py-2 bg-green-600 text-white rounded disabled:opacity-50"
            >
                Start Game
            </button>
        </div>
    );
};

export default HackerSkillSheet;
