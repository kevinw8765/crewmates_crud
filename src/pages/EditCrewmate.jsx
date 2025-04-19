import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ColorSelector from '../components/ColorSelector';
import amongus from '../assets/amongus_crewmates.png'

const EditCrewmate = ({ crewmates, updateCrewmate, deleteCrewmate }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [name, setName] = useState('');
    const [speed, setSpeed] = useState('');
    const [color, setColor] = useState('');
    
    useEffect(() => {
        const crewmate = crewmates.find(c => c.id.toString() === id);
        if (crewmate) {
          setName(crewmate.name);
          setSpeed(crewmate.speed.toString());
          setColor(crewmate.color);
        }
    }, [crewmates, id]);

    async function handleUpdate(e) {
        e.preventDefault();
        
        if (!name || !speed) {
          alert('Please fill in all fields');
          return;
        }
        
        const updatedCrewmate = {
          name,
          speed: parseFloat(speed),
          color
        };
        
        const result = await updateCrewmate(id, updatedCrewmate);
        if (result) {
          navigate(`/crewmate/${id}`);
        }
    }
    
    async function handleDelete() {
        if (window.confirm('Are you sure you want to delete this crewmate?')) {
          const result = await deleteCrewmate(id);
          if (result) {
            navigate('/gallery');
          }
        }
    }

    return (
    <div className="edit-page">
      <h1>Update Your Crewmate :</h1>
      
      <div className="crewmates-icon">
        {/* Small crewmates group icon */}
        <img src = {amongus}/>
      </div>
      
      <div className="current-info">
        <p>Current Crewmate Info:</p>
        <p>Name: {name}, Speed: {speed}, Color: {color}</p>
      </div>
      
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            placeholder="Enter crewmate's name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="speed">Speed (mph):</label>
          <input 
            type="number" 
            id="speed" 
            placeholder="Enter speed in mph"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
            step="0.1"
            min="0"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Color:</label>
          <ColorSelector selectedColor={color} onChange={setColor} />
        </div>
        
        <div className="button-group">
            <button type="submit" className="update-button">Update Crewmate</button>
            <button type="button" className="delete-button" onClick={handleDelete}>Delete Crewmate</button>
        </div>
        </form>
    </div>
    )
}

export default EditCrewmate