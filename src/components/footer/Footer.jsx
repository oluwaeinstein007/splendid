import React from 'react'
import About from './About'
import Contactus from './Contactus'
import Otherservices from './Otherservices'
import Quicklinks from './Quicklinks'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <About/>
      <Quicklinks/>
      <Otherservices/>
      <Contactus/>
    </div>
  )
}

export default Footer
