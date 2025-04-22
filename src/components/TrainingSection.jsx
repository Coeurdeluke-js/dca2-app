import React from 'react'
import TrainingCard from './TrainingCard'
import './TrainingSection.css'

import fuerzaFisica from '../assets/mancuerna.png'
import explosividad from '../assets/energia.png'
import resistencia from '../assets/corazon.png'
import controlMental from '../assets/cerebro.png'

const trainingData = [
  {
    icon: fuerzaFisica,
    title: 'Fuerza Física',
    description: 'Entrena cuerpo y mente para dominar tu energía vital. Nuestros maestros te guiarán en el camino hacia la fuerza suprema, utilizando técnicas ancestrales del lado oscuro. Aprende a controlar tu poder como un auténtico Lord Sith y desata tu verdadero potencial físico.',
  },
  {
    icon: explosividad,
    title: 'Explosividad',
    description: 'Desarrolla ejercicios explosivos y movimientos veloces para reaccionar ante cualquier amenaza. Con reflejos tan afilados como un sable oscuro, serás capaz de anticipar cualquier movimiento de tu oponente. La agilidad y potencia son fundamentales en el camino del guerrero Sith, convirtiendo tu cuerpo en un arma letal.',
  },
  {
    icon: resistencia,
    title: 'Resistencia',
    description: 'Domina el arte de la perseverancia con entrenamientos de resistencia extrema, esenciales para sobrevivir en el campo de batalla. Los entrenamientos intensivos forjarán tu capacidad de soportar cualquier desafío, elevando tu umbral de dolor y fortaleciendo tu voluntad. La resistencia mental y física son la base de todo guerrero poderoso.',
  },
  {
    icon: controlMental,
    title: 'Control Mental',
    description: 'Conquista tu mente interior para liberar tu potencial. La meditación activa y el enfoque intenso serán tus armas más poderosas en la senda del entrenamiento Sith. Aprende a canalizar tus emociones hacia la Fuerza, transformando la ira en poder y el miedo en fortaleza. El verdadero poder comienza en la mente.',
  },
]

const TrainingSection = () => {
  return (
    <section className="training-section">
      <h2>Entrenamiento Sith</h2>
      <div className="training-grid">
        {trainingData.map((item, index) => (
          <TrainingCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  )
}

export default TrainingSection
