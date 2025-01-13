import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link as ScrollLink} from 'react-scroll';
import { Link } from 'react-router-dom';






const Navbar = () => {
        
    const [sticky, setSticky] = useState(false);
    
    useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      })
    },[]);


    const[mobileMenu, setMobileMenu] = useState(false)
    const toogleMenu = ()=>{
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <ScrollLink to='hero' smooth={true} offset={0} duration={500}>< img src={logo} alt="" className='logo' /></ScrollLink>
       <ul className={mobileMenu ? '':'hide-mobile-menu'}>
        <li><ScrollLink to='hero' smooth={true} offset={0} duration={500}>Home</ScrollLink></li>
        <li><ScrollLink to='program' smooth={true} offset={-360} duration={500}>Get Started</ScrollLink></li>
        <li><ScrollLink to='about' smooth={true} offset={-160} duration={500}>About Us</ScrollLink></li>
        <li><ScrollLink to='services' smooth={true} offset={-300} duration={500}>Services</ScrollLink></li>
        <li><ScrollLink to='contact' smooth={true} offset={-255} duration={500}>Contact Us</ScrollLink></li>
        <li><Link to="/Events" >Events</Link></li>
        
        
        <a href="https://form.jotform.com/241470897454365" target='_blan
        '><li><button className='btn' >Join Us!</button> </li></a>
        
       </ul>
       <img src={menu_icon} alt="" className='menu-icon' onClick={toogleMenu}/>
    </nav>
  )
}

export default Navbar