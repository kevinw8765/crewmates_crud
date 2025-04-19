import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ColorSelector from '../components/ColorSelector';
import amongus from '../assets/amongus_crewmates.png'

const CreateCrewmate = ({ addCrewmate }) => {

    const [name, setName] = useState('');
    const [speed, setSpeed] = useState('');
    const [color, setColor] = useState('Red');
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        
        if (!name || !speed) {
          alert('Please fill in all fields');
          return;
        }
        
        const newCrewmate = {
          name,
          speed: parseFloat(speed),
          color
        };
        
        const createdCrewmate = await addCrewmate(newCrewmate);
        if (createdCrewmate) {
          navigate(`/crewmate/${createdCrewmate.id}`);
        }
    }

    return (
        <div className="create-page">
            <h1>Create a New Crewmate</h1>
            
            <div className="crewmates-icon">
                {/* Small crewmates group icon */}
                <img src = {amongus}/>
            </div>
            
            <form onSubmit={handleSubmit}>
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
                
                <button type="submit" className="create-button">Create Crewmate</button>
            </form>
        </div>
    )
}

export default CreateCrewmate