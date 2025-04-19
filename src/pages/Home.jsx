import React from 'react'
import amongus from '../assets/amongus_crewmates.png'
import ufo from '../assets/amongus_ufo.png'

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Crewmate Creator!</h1>
      <p>Here is where you can create your very own set of crewmates before sending them off into space!</p>
      <div className="crewmates-image">
        {/* Group of colorful crewmates image */}
        <img src = {amongus} alt='among us characters'/>
      </div>
      <div className="spaceship-image">
        {/* Spaceship/UFO image */}
        <img src = {ufo} alt = 'among us ufo'/>
      </div>
    </div>
  )
}

export default Home