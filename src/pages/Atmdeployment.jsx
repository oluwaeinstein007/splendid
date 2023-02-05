import React from 'react'
import Footer from '../components/footer/Footer'
import Nav from '../components/header/Nav'
import '../components/header/header.css'
import './pages.css'
import './backgroundimage.css'

const Atmdeployment = () => {
  return (
    <div>
    <div className="header atmdeploy"> 
       <Nav/> 
       <h1 className='title'>ATM Deployment</h1>
     </div>
    <div className="body">
     <h1>ATM Deployment</h1>
     <div className="body-content">
        <p>
        Splendid Freight provides ATM deployment services to banks and IT companies. 
        We are now offering a range of services, including hauling of ATMs from warehouse 
        to installation sites, relocation of ATMs from one site to another site and retrieval 
        of ATMs from site to warehouse.
        </p>
        <p>
        We have a team of experts to provide solutions in the financial inclusion value chain. 
        If you want to increase your ATM locations, you can contact us for further details.
        </p>
     </div>

     <button>Contact Us</button>
    </div>
    <Footer/>
 </div>
  )
}

export default Atmdeployment
