import { Link } from 'react-router-dom';
import CrewmateCard from '../components/CrewmateCard';


const CrewmateGallery = ( { crewmates }) => {
 
    return (
        <div className="gallery-page">
        <h1>Your Crewmate Gallery!</h1>
        
        {crewmates.length === 0 ? (
            <div className="empty-gallery">
            <p>You haven't made a crewmate yet!</p>
            <Link to="/create" className="create-link">Create one here!</Link>
            </div>
        ) : (
            <div className="crewmate-grid">
            {crewmates.map(crewmate => (
                <Link to={`/crewmate/${crewmate.id}`} key={crewmate.id} className="crewmate-link">
                <CrewmateCard crewmate={crewmate} />
                </Link>
            ))}
            </div>
        )}
        </div>
    )
}

export default CrewmateGallery