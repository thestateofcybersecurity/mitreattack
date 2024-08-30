import React from 'react';
import { useRouter } from 'next/router';

const Home = () => {
    const router = useRouter();

    const startGame = () => {
        router.push('/hackerSkillSheet'); // Route to the skill sheet first
    };

    return (
        <div>
            <h1>Welcome to the MITRE ATT&CK CYOA Game</h1>
            <button onClick={startGame}>Create Hacker Skill Sheet</button>
        </div>
    );
};

export default Home;

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1rem',
  },
  title: {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
  },
};
