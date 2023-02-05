import React from 'react'
import Footer from '../components/footer/Footer'
import Nav from '../components/header/Nav'
import '../components/header/header.css'
import './pages.css'
import './backgroundimage.css'

const Chemical = () => {
  return (
    <div>
    <div className="header chemical"> 
       <Nav/>
       <h1 className='title'>Chemical  Logistics</h1>
     </div>
    <div className="body">
     <h1>Chemical  Logistics</h1>
     <div className="body-content">
      <p>
      At our company, we offer various chemical logistics services that
       are designed to meet the needs of our clients. We have a team of 
       experienced professionals who are knowledgeable in chemical logistics and can provide
       various services such as transportation, storage, and handling of hazardous materials.
      </p>
      <p>
      We are dedicated to providing our clients with the best possible service
       and our team is available 24/7 to answer any questions or concerns you may have.
      </p>
     </div>

     <button>Contact Us</button>
    </div>
    <Footer/>
 </div>
  )
}

export default Chemical
