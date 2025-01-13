import React from 'react'
import './Services.css'
import white_arrow from '../../assets/white-arrow.png'

const Services = () => {
  return (
    <div className='services'>
      <div className="cards">
        <div className="cardss"><h2>IRL EVENTS</h2> <p>We will be hosting IRL events to onboard the next set of powered users through educational contents focused on Solana and blockchain technology in general.</p></div>
        <div className="cardss"><h2>WORKSPACE</h2><p> We provide both physical an virtual working enviroment suited for our community members to fufil their work needs.</p></div>
        <div className="cardss"><h2>WORK2EARN</h2> <p>you get to work on key projects in the ecosystem by providing quality reviews needed for app development and get paid for it in USDC</p></div>
      </div>
      <a href="https://deanslist.services/" target='_blan'><button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button></a>
    </div>
  )
}

export default Services