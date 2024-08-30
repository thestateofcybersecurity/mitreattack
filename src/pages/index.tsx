import React from 'react';
import { useRouter } from 'next/router';

const Home: React.FC = () => {
  const router = useRouter();

  const startGame = () => {
    router.push('/game');
  };

  return (
    <div className="min-h-screen bg-cyberBlue flex flex-col items-center justify-center text-cyberGreen">
      <h1 className="text-4xl font-bold mb-6">Welcome to the MITRE ATT&CK Adventure</h1>
      <p className="text-xl mb-8 max-w-2xl text-center">
        Embark on a thrilling journey through the world of cyber attacks and defenses.
        Choose your path, build your skills, and see if you can outsmart the defenders!
      </p>
      <button 
        onClick={startGame}
        className="bg-cyberPurple hover:bg-cyberTeal text-white font-bold py-2 px-4 rounded transition duration-200"
      >
        Start Your Hacker Journey
      </button>
    </div>
  );
};

export default Home;
