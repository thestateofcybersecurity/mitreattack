import React, { useState, useEffect } from 'react';
import { HackerSkills } from '@/types';

interface HackerSkillSheetProps {
  onConfirm: (skills: HackerSkills) => void;
}

const initialSkillPoints = 20;

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
  { name: 'Collection', key: 'commandAndControl' },
  { name: 'Command and Control', key: 'exfiltration' },
  { name: 'Impact', key: 'impact' },
];

const HackerSkillSheet: React.FC<HackerSkillSheetProps> = ({ onConfirm }) => {
  const [skillPoints, setSkillPoints] = useState(initialSkillPoints);
  const [skillDistribution, setSkillDistribution] = useState<HackerSkills>(() => 
    skills.reduce((acc, skill) => ({ ...acc, [skill.key]: 0 }), {} as HackerSkills)
  );

  useEffect(() => {
    const savedSkills = localStorage.getItem('hackerSkills');
    if (savedSkills) {
      try {
        const parsedSkills = JSON.parse(savedSkills) as HackerSkills;
        if (isValidHackerSkills(parsedSkills)) {
          const usedPoints = Object.values(parsedSkills).reduce((a, b) => a + b, 0);
          setSkillPoints(Math.max(0, initialSkillPoints - usedPoints));
          setSkillDistribution(parsedSkills);
        }
      } catch (error) {
        console.error('Error parsing saved skills:', error);
      }
    }
  }, []);

  const isValidHackerSkills = (skills: any): skills is HackerSkills => {
    return skills && typeof skills === 'object' && Object.keys(skills).every(key => 
      skills.hasOwnProperty(key) && typeof skills[key] === 'number' && skills[key] >= 0
    );
  };

  const handleIncrease = (key: keyof HackerSkills) => {
    if (skillPoints > 0) {
      setSkillDistribution(prev => ({
        ...prev,
        [key]: prev[key] + 1
      }));
      setSkillPoints(prev => prev - 1);
    }
  };

  const handleDecrease = (key: keyof HackerSkills) => {
    if (skillDistribution[key] > 0) {
      setSkillDistribution(prev => ({
        ...prev,
        [key]: prev[key] - 1
      }));
      setSkillPoints(prev => prev + 1);
    }
  };

  const handleConfirm = () => {
    onConfirm(skillDistribution);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-cyberBlue rounded-lg shadow-neon">
      <h1 className="text-3xl font-bold mb-6 text-cyberGreen">Hacker Skill Sheet</h1>
      <p className="mb-4 text-cyberGreen">Assign your skill points. Remaining points: {skillPoints}</p>
      <ul className="space-y-4">
        {skills.map((skill) => (
          <li key={skill.key} className="flex items-center justify-between">
            <span className="text-cyberGreen">{skill.name}: {skillDistribution[skill.key]}</span>
            <div>
              <button
                onClick={() => handleIncrease(skill.key)}
                disabled={skillPoints === 0}
                className="px-2 py-1 bg-cyberPurple text-white rounded mr-2 disabled:opacity-50"
              >
                +
              </button>
              <button
                onClick={() => handleDecrease(skill.key)}
                disabled={skillDistribution[skill.key] === 0}
                className="px-2 py-1 bg-cyberRed text-white rounded disabled:opacity-50"
              >
                -
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        onClick={handleConfirm}
        disabled={skillPoints > 0}
        className="mt-6 px-4 py-2 bg-cyberGreen text-cyberBlue rounded disabled:opacity-50"
      >
        Start Game
      </button>
    </div>
  );
};

export default HackerSkillSheet;
