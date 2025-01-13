import React from 'react'
import './About.css'
import about_img from '../../assets/about-img.png'


const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
        
        </div>
        <div className="about-right">
            <h2>Our Mission</h2>
            <p>Onboarding Local Talents In Africa: We provide a platform backed by a community where Potential talents can develop their skills and have access to available work opportunities, driving the success of our region. </p>
        </div>
    </div>
  )
}

export default About