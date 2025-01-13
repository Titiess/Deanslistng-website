import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './Components/Navbar/Navbar'
import Programs from './Components/Programs/Programs'
import Hero from './Components/Hero/Hero'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'



const App = () => {
  return (
    <div>
      <Helmet>
        <title>DeansListng</title>
        <meta name="keywords" content="DeansListng, Deanslist, Solana, Dean, Nigeria, Web3, Crypto, Africa" />
      </Helmet>
      <Navbar/>
      <Hero/>
      <div className="containers">
      <Title subTitle= 'Deanslist_ng' title='Get Started On Solana'/>
      <Programs/>
      <About/>
      <Title subTitle= 'Our Services' title='What We Offer'/>
      <Services/>
      <Title subTitle= 'Contact Us'  title='GET IN TOUCH'/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  )
}

export default App