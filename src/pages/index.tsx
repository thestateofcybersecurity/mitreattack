import React from 'react';
import { useRouter } from 'next/router';

const Home = () => {
    const router = useRouter();

    const startGame = () => {
        router.push('/hackerSkillSheet');
    };

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl font-bold mb-6">Welcome to the MITRE ATT&CK Adventure</h1>
            <p className="text-xl mb-8 max-w-2xl text-center">
                Embark on a thrilling journey through the world of cyber attacks and defenses.
                Choose your path, build your skills, and see if you can outsmart the defenders!
            </p>
            <button 
                onClick={startGame}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
            >
                Create Your Hacker Profile
            </button>
        </div>
    );
};

export default Home;
