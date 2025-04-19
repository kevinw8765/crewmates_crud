import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import CreateCrewmate from './pages/CreateCrewmate';
import CrewmateGallery from './pages/CrewmateGallery';
import CrewmateDetail from './pages/CrewmateDetail';
import EditCrewmate from './pages/EditCrewmate';
import { supabase } from './supabaseClient.js';

function App() { 

  const [crewmates, setCrewmates] = useState([]);
  
  useEffect(() => {
    fetchCrewmates();
  }, []);

  async function fetchCrewmates() {
    try {
      const { data, error } = await supabase
        .from('crewmates')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      setCrewmates(data || []);
    } catch (error) {
      console.error('Error fetching crewmates:', error);
    }
  }

  async function addCrewmate(newCrewmate) {
    try {
      const { data, error } = await supabase
        .from('crewmates')
        .insert([newCrewmate])
        .select();
        
      if (error) throw error;
      setCrewmates([data[0], ...crewmates]);
      return data[0];
    } catch (error) {
      console.error('Error adding crewmate:', error);
      return null;
    }
  }

  async function updateCrewmate(id, updatedCrewmate) {
    try {
      const { data, error } = await supabase
        .from('crewmates')
        .update(updatedCrewmate)
        .eq('id', id)
        .select();
        
      if (error) throw error;
      setCrewmates(crewmates.map(c => c.id === id ? data[0] : c));
      return data[0];
    } catch (error) {
      console.error('Error updating crewmate:', error);
      return null;
    }
  }

  async function deleteCrewmate(id) {
    try {
      const { error } = await supabase
        .from('crewmates')
        .delete()
        .eq('id', id);
        
      if (error) throw error;
      setCrewmates(crewmates.filter(c => c.id !== id));
      return true;
    } catch (error) {
      console.error('Error deleting crewmate:', error);
      return false;
    }
  }

  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateCrewmate addCrewmate={addCrewmate} />} />
            <Route path="/gallery" element={<CrewmateGallery crewmates={crewmates} />} />
            <Route path="/crewmate/:id" element={<CrewmateDetail crewmates={crewmates} />} />
            <Route path="/edit/:id" element={<EditCrewmate 
              crewmates={crewmates} 
              updateCrewmate={updateCrewmate} 
              deleteCrewmate={deleteCrewmate} 
            />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
