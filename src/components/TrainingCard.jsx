import React, { useState } from 'react'
import './TrainingSection.css'

const TrainingCard = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`training-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="icon-circle">
        <img src={icon} alt={title} className="training-icon" />
      </div>
      <h3>{title}</h3>
      {isHovered && <p className="description">{description}</p>}
    </div>
  )
}

export default TrainingCard
