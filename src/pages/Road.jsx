import React from 'react'
import Footer from '../components/footer/Footer'
import Nav from '../components/header/Nav'
import '../components/header/header.css'
import './pages.css'
import './backgroundimage.css'

const Road = () => {
  return (
    <div>
     <div className="header road"> 
        <Nav/>
        <h1 className='title'>Road Transport</h1>
      </div>
     <div className="body">
      <h1>Road Transport</h1>
      <div className="body-content">
        <p>We offer road transport services. We have access to a fleet of trucks, vans, 
          buses, and other vehicles that can be deployed to handle various types of 
          transportation needs, including defence logistics.
            We provide our customers with safe and reliable transport services at affordable rates. 
            We have a team of experienced professionals who can provide you with the necessary 
            guidance and support to ensure the success of transporting your goods within and outside 
            the country.
            Though based in Nigeria, our services are available across Europe, the Middle East, 
            and Africa.
        </p>
        <p>
          If you are looking for a reliable road transport service company to help you with moving a large number of products/goods from one place to another, 
          Splendid Freight is the right option for your company.
        </p>
      </div>

      <button>Contact Us</button>
     </div>
     <Footer/>
  </div>
  )
}

export default Road
