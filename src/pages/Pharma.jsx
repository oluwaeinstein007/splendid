import React from 'react'
import Footer from '../components/footer/Footer'
import Nav from '../components/header/Nav'
import '../components/header/header.css'
import './pages.css'


const Pharma = () => {
  return (
    <div>
    <div className="header pharma"> 
       <Nav/>
       <h1 className='title'>Pharma & Healthcare Logistics</h1>
     </div>
    <div className="body">
     <h1>Pharma and Healthcare Logistics</h1>
     <div className="body-content">
      <p>
      There are various rules and regulations regarding the movement of pharmaceuticals.
       These are put in place to ensure the quality and safety of the products.
        However, at Splendid Freight, we have the experience
       and expertise to provide various pharmaceutical and healthcare logistics services.
      </p>
      <p>
      We have a team of dedicated professionals who are knowledgeable about the rules
       and regulations surrounding the movement of pharmaceuticals and healthcare logistics.
       So if you need help with pharmaceutical and healthcare logistics, we are the team to call.
      </p>
     </div>

     <button>Contact Us</button>
    </div>
    <Footer/>
 </div>
  )
}

export default Pharma
