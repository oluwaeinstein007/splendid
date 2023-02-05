import React from 'react'
import Footer from '../components/footer/Footer'
import Nav from '../components/header/Nav'
import '../components/header/header.css'
import './pages.css'
import './backgroundimage.css'

const Atmspares = () => {
  return (
    <div>
     <div className="header atmspare"> 
        <Nav/>
        <h1 className='title'>Supply of ATM Spares</h1>
      </div> 
     <div className="body">
      <h1>Supply of ATM Spares</h1> 
      <div className="body-content">
        <p>At Splendid Freight, we have a good logistics networks across the country
           and are now supplying ATM spares to our customers. We provide a reliable supply 
           of ATM spares to help our clients stay ahead of their competition.
        </p>
        <span>
         <p>Our services include:</p> 
          <ul>
            <li>Spare parts for all types of ATMs, from cash dispensers to self-service kiosks;</li>
            <li>Replacement parts for all types of ATMs, such as cassettes, card readers, and printers;</li>
            <li>Customized solutions or turnkey projects when required;</li>
            <li>Onsite service support for any issue related to ATM maintenance.</li>
          </ul>
        </span>
        <p>
        Our mission is to ensure that every client, who needs ATM spares can get them quickly. 
        We supply ATM spares for several customers, including banks and IT companies.
        </p>
      </div>

      <button>Contact Us</button>
     </div>
     <Footer/>
    </div>
  )
}

export default Atmspares
