import React from 'react'
import Footer from '../components/footer/Footer'
import Nav from '../components/header/Nav'
import '../components/header/header.css'
import './pages.css'
import './backgroundimage.css'


const Air = () => {
  return (
    <div>
     <div className="header air"> 
        <Nav/>
        <h1 className='title'>Air Freight</h1>
      </div>
     <div className="body">
      <h1>Air Freight Service</h1>
      <div className="body-content">
        <p>Air freight is a critical logistics service that we provide to transport your
           goods from one part of the world to another reliably. We are an established company
            in the industry with an experienced team of professionals who know how to handle
             different types of shipments, including time-critical ones.
        </p>
        <span>
         <p>We offer a wide range of logistics services tailored to meet our clients' needs. 
          Depending on the nature of the journey, 
          we provide a range of air freight options, including:
          </p> 
          <ul>
            <li>Airport to Airport</li>
            <li>Airport to Door</li>
            <li>Door to Airport</li>
            <li>Door to Door</li>
          </ul>
        </span>
        <p>
            At Splendid Freight, we also offer air charter operations 
            with some of the major air carriers.
        </p>
      </div>

      <button>Contact Us</button>
     </div>
     <Footer/>
    </div>
  )
}

export default Air
