import React from 'react'
import './Footer.css'
import github_icon from '../../assets/github-icon.png'
import twitter_icon from '../../assets/twitter-icon.png'
import solana_logo from '../../assets/solana-logo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <p><a href="https://solana.com/" target='_blan'><img src={solana_logo} alt="" /></a> &#169; 2024 DeansList. All rights reserved.</p>
        <ul>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
            <a href="https://github.com/DeansListNG" target='_blan'><li><img src={github_icon} alt="" /></li></a>
          <a href="https://twitter.com/deanslistng" target='_blan'><li><img src={twitter_icon} alt="" /></li></a>
        </ul>
    </div>
  )
}

export default Footer