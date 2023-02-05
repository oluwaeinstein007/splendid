import React from 'react'
import Footer from '../components/footer/Footer'
import Nav from '../components/header/Nav'
import '../components/header/header.css'
import './pages.css'
import './backgroundimage.css'

const Defence = () => {
  return (
    <div>
     <div className="header defence"> 
        <Nav/>
        <h1 className='title'>Defence Logistics</h1>
      </div>
     <div className="body">
      <h1>Defence Logistics Service</h1>
      <div className="body-content">
        <p>Our defence logistics provide world-class supply chain management
           and support to military forces.
          We offer a broad range of services, from the procurement and supply of equipment 
          and spare parts, the management of stores and inventory, to the transportation of supplies.
          Our experienced global team specializes in making your supply chain as effective 
          and efficient as it can be.
        </p>
      </div>

      <button>Contact Us</button>
     </div>
     <Footer/>
  </div>
  )
}

export default Defence
