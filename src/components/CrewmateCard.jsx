import React from 'react'
import { Link } from 'react-router-dom';
import og from '../assets/default_crewmate.png';

const CrewmateCard = ({crewmate}) => {
    const { id, name, speed, color } = crewmate;
  
    return (
        <div className={`crewmate-card ${color.toLowerCase()}-border`}>
        <div className="crewmate-icon">
            {/* This would be the crewmate character image/silhouette */}
            <img src = {og}/>
        </div>
        <div className="crewmate-info">
            <p><strong>Name of Crewmate:</strong> {name}</p>
            <p><strong>Speed of Crewmate:</strong> {speed} mph</p>
            <p><strong>Color of Crewmate:</strong> {color}</p>
        </div>
        <Link to={`/edit/${id}`} className="edit-button">Edit Crewmate</Link>
    </div>
    )
}

export default CrewmateCard