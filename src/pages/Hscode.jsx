import React from 'react'
import Footer from '../components/footer/Footer'
import Nav from '../components/header/Nav'
import '../components/header/header.css'
import './pages.css'

const Hscode = () => {
  return (
    <div>
    <div className="header hscode"> 
       <Nav/> 
       <h1 className='title'>Find the right HS Codes</h1>
     </div>
    <div className="body">
     <h1>Find the right HS Codes</h1>
     <div className="body-content">
        <p>
          Knowing the right HS codes for your products helps you determine the applicable duties,
           levies and taxes you will be expected to pay even before you ship. 
           Splendid Freight is designed to help you find the correct HS codes for your product(s), 
           thus helping you make an informed decision before you ship. If you have any questions
            about how we can help you with knowing the right HS codes to use for your products, 
            don't hesitate to get in touch with us at.
          freight@splendidfreight.com
        </p>
     </div>

     <button>Contact Us</button>
    </div>
    <Footer/>
 </div>
  )
}

export default Hscode
