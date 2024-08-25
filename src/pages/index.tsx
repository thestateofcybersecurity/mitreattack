import GameContainer from '@/components/GameContainer'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">MITRE ATT&CK: Choose Your Own Adventure</h1>
      <GameContainer />
    </div>
  )
}
