import './App.css'
import Card from './components/Card'
import { cards } from './data/cards'
import TrainingSection from './components/TrainingSection'

function App() {
  return (
    <div className="app-container">
      <h1>Crypto Force - Tu academia Sith</h1>
      
      <div className="cards-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            subtitle={card.subtitle}
            content={card.content}
            bgPosition={card.bgPosition}
          />
        ))}
      </div>

      {/* Sección de entrenamiento físico/mental */}
      <TrainingSection />
    </div>
  )
}

export default App
