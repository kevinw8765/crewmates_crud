import { useParams, Link } from 'react-router-dom';
import background from '../assets/amongus_background.png'

const CrewmateDetail = ( { crewmates }) => {
    const { id } = useParams();
    const crewmate = crewmates.find(c => c.id.toString() === id);
    if (!crewmate) {
        return <div className="not-found">Crewmate not found!</div>;
    }

    return (
        <div className="detail-page">
        <h1>Crewmate: {crewmate.name}</h1>
        
        <div className="stats-section">
            <h2>Stats:</h2>
            <p><strong>Color:</strong> {crewmate.color}</p>
            <p><strong>Speed:</strong> {crewmate.speed} mph</p>
        </div>
        
        {crewmate.speed < 3 && (
            <p className="speed-comment">You may want to find a Crewmate with more speed, this one is kind of slow 😊</p>
        )}
        
        <div className="crewmate-image">
            {/* This would show the crewmate artwork based on color */}
            <img src = {background}/>
        </div>
        
        <Link to={`/edit/${crewmate.id}`} className="edit-button">Wanna edit this Crewmate?</Link>
        </div>
    )
}

export default CrewmateDetail