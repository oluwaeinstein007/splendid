import React from 'react'
import Footer from '../components/footer/Footer'
import Nav from '../components/header/Nav'
import '../components/header/header.css'
import './pages.css'

const Fastmoving = () => {
  return (
    <div>
    <div className="header fastmove"> 
       <Nav/>
       <h1 className='title'>Fast-Moving Consumer Goods</h1>
     </div>
    <div className="body">
     <h1>Fast-Moving Consumer Goods</h1>
     <div className="body-content">
        <p>
          From the production line to the point-of-sale, Splendid Freight through
          its networks can help you
          optimize your supply chain solutions effectively and efficiently to meet the customer’s needs.
        </p>
        <p>
        If you are looking for a reliable supply chain logistics and freight forwarding 
        company to help you with your fast-moving consumer goods logistics needs, contact us today.
        </p>
     </div>

     <button>Contact Us</button>
    </div>
    <Footer/>
 </div>
  )
}

export default Fastmoving
