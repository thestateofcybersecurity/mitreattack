import GameContainer from '@/components/GameContainer'

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>MITRE ATT&CK: Choose Your Own Adventure</h1>
      <GameContainer />
    </div>
  )
}

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
