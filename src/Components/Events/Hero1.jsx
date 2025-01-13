import React from 'react'
import './Hero1.css'
import dark_arrow from '../../assets/dark-arrow.png'
import Countdown from './Countdown'
import ng from '../../assets/ng.png'



const Hero1 = () => {
  return (
    <div className='hero1 container' id='hero1'>
      <div className="eventcompleted">
        <h2>Event Completed</h2><br />
        
      </div>
      <div className="hero-text1">
        <h1>DEANSLIST DEVELOPER WORKSHOP <img src={ng} alt="" className='nglogo'/></h1>
        <p>Harnessing your skills to build on Solana. Join us IRL at our dedicated workspace for an engaging session.</p>
        <a href="https://x.com/deanslistng" target='_blan'><button className='btn'>Explore more <img src={dark_arrow} alt="" /></button></a>
      </div>

    </div>
  )
}

export default Hero1