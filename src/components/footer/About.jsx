import React from 'react'
import logo from '../../image/logo.png' 

const About = () => {
  return (
    <>
      <div className="about">
        <div className="img">
            <img src={logo} alt=""/>
        </div>

        <div className="content">
            <div><a href="#">About US</a><i class="fa-solid fa-arrow-up"></i></div>
            <div><a href="#">Carrers</a><i class="fa-solid fa-arrow-up"></i></div>
            <div><a href="#">Cargo Weight</a><i class="fa-solid fa-arrow-up"></i></div>
            
            
            
        </div>
      </div>
    </>
  )
}

export default About
