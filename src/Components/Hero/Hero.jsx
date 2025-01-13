import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'


const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Bolstering Solana <br/>Adoption in Africa</h1>
        <p>We're a community of web3 Power users providing quality reviews of products in the Solana Ecosystem and beyond.</p>
        <a href="https://deanslist.services/" target='_blan'><button className='btn'>Explore more <img src={dark_arrow} alt="" /></button></a>
      </div>

    </div>
  )
}

export default Hero