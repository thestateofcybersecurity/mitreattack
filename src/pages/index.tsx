import React from 'react';
import { useRouter } from 'next/router';

const Home = () => {
    const router = useRouter();

    const startGame = () => {
        router.push('/hackerSkillSheet');
    };

    return (
        <div className="bg-cyberBlue text-cyberGreen font-mono p-6 shadow-neon">
            <h1 className="text-4xl animate-glitch">Welcome to the MITRE ATT&CK Adventure</h1>
            <p className="text-cyberGray mt-4">
                Embark on a thrilling journey through the world of cyber attacks and defenses.
                Choose your path, build your skills, and see if you can outsmart the defenders!
            </p>
            <button 
                onClick={startGame}
                className="mt-6 bg-cyberPurple hover:bg-cyberRed text-white py-2 px-4 rounded">
                Create Your Hacker Profile
            </button>
        </div>
    );
};

export default Home;
