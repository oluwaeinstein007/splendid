import React from 'react'
import Footer from '../components/footer/Footer'
import Nav from '../components/header/Nav'
import '../components/header/header.css'
import './pages.css' 


const Cargowait = () => {
  return (
    <div>
    <div className="header cargoweight"> 
       <Nav/> 
       <h1 className='title'>Calculate your Cargo Weight</h1>
     </div>
    <div className="body">
     <h1>Calculate your Cargo Weight</h1>
     <div className="body-content">
        <p>
        If you are planning on sending goods or products abroad, you should know
         how much it weighs to get a quote. We have an option for calculating the weight
          of your package before sending it. All types of businesses who want to know the
           weight and number of packages they need to send can take advantage of our knowledge 
           at Splendid Freight. It is easy for customers to calculate their cargo weight without
            having to go through lengthy calculations or find someone with expertise in the field.
             We provide the most accurate and reliable way to calculate your freight weight.
              Our website is easy to use, fast and efficient, with a straightforward interface that
         allows you to calculate the weight of your goods in just a few clicks.
        </p>
     </div>

     <button>Contact Us</button>
    </div>
    <Footer/>
 </div>
  )
}

export default Cargowait
