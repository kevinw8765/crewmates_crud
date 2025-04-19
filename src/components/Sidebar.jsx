import React from 'react'
import { Link } from 'react-router-dom'
import vent from '../assets/amongus_vent.gif'

const Sidebar = () => {

    return (
        <div className="sidebar">
          <Link to="/">Home</Link>
          <Link to="/create">Create a Crewmate!</Link>
          <Link to="/gallery">Crewmate Gallery</Link>
          <div className="logo-container">
            <img src={vent} alt="among us vent" />
          </div>
        </div>
    );
}

export default Sidebar