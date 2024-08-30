import React from 'react';
import { useRouter } from 'next/router';
import HackerSkillSheet from '@/components/HackerSkillSheet';
import { HackerSkills } from '@/types';

const HackerSkillSheetPage: React.FC = () => {
  const router = useRouter();

  const handleConfirm = (skills: HackerSkills) => {
    // You might want to store the skills in a global state or context here
    // For now, we'll just navigate to the game page
    router.push('/game');
  };

  return (
    <div className="min-h-screen bg-cyberBlue flex items-center justify-center">
      <HackerSkillSheet onConfirm={handleConfirm} />
    </div>
  );
};

export default HackerSkillSheetPage;
