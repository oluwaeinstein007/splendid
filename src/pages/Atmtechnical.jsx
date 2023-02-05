import React from 'react'
import Footer from '../components/footer/Footer'
import Nav from '../components/header/Nav'
import '../components/header/header.css'
import './pages.css'
import './backgroundimage.css'


const Atmtechnical = () => {
  return (
    <div>
     <div className="header atmtechnical"> 
        <Nav/>
        <h1 className='title'>Technical Support for ATM</h1>
      </div> 
     <div className="body">
      <h1>Technical Support for ATM</h1> 
      <div className="body-content">
        <p>We provide technical support and service to ATMs of all types. 
          We have a team of skilled technicians
          and engineers who can be called upon to troubleshoot any issue with your machine.
        </p>
        <span>
         <p>We provide services such as:</p> 
          <ul>
            <li>Troubleshooting</li>
            <li>Maintenance</li>
            <li>Testing</li>
            <li>Repairing</li>
          </ul>
        </span>
        <p>
          Our support team is available 24 hours daily to provide you with the best possible service.
        </p>
      </div>

      <button>Contact Us</button>
     </div>
     <Footer/>
    </div>
  )
}

export default Atmtechnical
