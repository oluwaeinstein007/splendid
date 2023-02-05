import React from 'react'
import Footer from '../components/footer/Footer'
import Nav from '../components/header/Nav'
import '../components/header/header.css'
import './pages.css'

const Aboutus = () => {
  return (
    <div>
    <div className="header aboutus"> 
       <Nav/> 
       <h1 className='title'>About Us</h1>
     </div>
    <div className="body">
     <h1>Splendid Freight Int LTD</h1>
     <div className="body-content">
        <p>
        Splendid Freight International Ltd. was established out of a strong and 
        sincere desire to offer top-notch, 
        bespoke logistics solutions that add value and support the success of its clients.
        </p>
        <p>
        We serve clients in different industries such as high-tech, pharma, healthcare, FMCG,
         and agriculture, amongst others, and we provide our clients with complete
          and specialized logistics solutions for the improvement of their supply chains.
           We also deal with ATM support solutions
         such as the supply of ATM spare parts, ATM deployment, ATM staging, and technical support.
        </p>
        <p>
        We also have a team of experienced professionals who are experts in the supply chain industry,
         and we are committed to providing our clients with the best possible service.
          We are constantly expanding our services and expanding our reach to meet the needs
           of our clients. We have a global network of partners that allow us to
         offer our clients the best possible rates and the most efficient shipping services.
        </p>
        <p>
        At Splendid Freight, we are in constant pursuit of excellence for our customers.
         We want to ensure that their experience with us is memorable for all of the right reasons.
         We will always remember our customers are the reason we exist and will always be our priority.
        </p>
     </div>
    </div>
    <div className="body">
     <h1>Contact Us</h1>
     <div className="body-content content-bold">
          <p><span>Lagos Address:</span>Faith House, Plot 15, Block 75, Ichie Mike Ejezie Street, 
            Lekki Phase 1, Lagos</p>     
          <p><span>Abuja Address:</span> Suite 316, Ebenezer Place, plot 630,Durumi Area 1,
           FCT, Abuja</p>
           <p><span>Port Harcourt Address:</span> Suite 20, Milkah Plaza NTA Road, 
           Ozuoba, Port Harcourt</p>
           <p><span>Email:</span>HUB10, 5 Ehule Lane, Ada George Road, Port Harcourt</p>
           <p><span>Call/Whatsapp:</span> +234 818 651 6205, +234 916 853 4200</p>
     </div>
    </div>
    <Footer/>
 </div>
  )
}

export default Aboutus
