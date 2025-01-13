import React, { useEffect, useState } from 'react'
import './Navbar1.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
// import { Link as ScrollLink} from 'react-scroll';
import { Link } from 'react-router-dom';






const Navbar1 = () => {
        
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
    <nav className={`container ${sticky? 'dark-nav' : ''}`} id='nav1'>
      <Link to='https://deanslistng.com' >< img src={logo} alt="" className='logo' /></Link>
       <ul className={mobileMenu ? '':'hide-mobile-menu'}>
        <li><Link to='https://deanslistng.com'>Home</Link></li>
        <li><Link to='https://deanslistng.com'>Get Started</Link></li>
        <li><Link to='https://deanslistng.com'>About Us</Link></li>
        <li><Link to='https://deanslistng.com'>Services</Link></li>
        <li><Link to='https://deanslistng.com'>Contact Us</Link></li>
        <li><Link to='https://deanslistng.com'>Events</Link></li>
        
        
        <a href="https://form.jotform.com/242276940453358" target='_blan
        '><li><button className='btn' >Register Here!</button> </li></a>
        
       </ul>
       <img src={menu_icon} alt="" className='menu-icon' onClick={toogleMenu}/>
    </nav>
  )
}

export default Navbar1