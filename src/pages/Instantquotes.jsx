import React from 'react'
import Footer from '../components/footer/Footer'
import Nav from '../components/header/Nav'
import '../components/header/header.css'
import './pages.css'

const Instantquotes = () => {
  return (
    <div>
    <div className="header instantquote"> 
       <Nav/> 
       <h1 className='title'>Instant Quote</h1>
     </div>
    <div className="body">
     <h1>Instant Quote</h1>
     <div className="body-content">
        <p>
        Logistics is a complex process that requires a lot of time and effort to be done correctly.
         This can be frustrating for both the parties involved in the process - 
         the customer and the supplier. By providing instant quotes, we can instantly reduce these
          frustrations by providing customers with an accurate quote without wasting any time 
          trying to determine their actual cost.
        </p>
        <p>
        We provide instant quotes for significant logistic services like air cargo, trucking,
         and shipping. Our service is available 24/7 with a
         call-back option that lets you speak directly to our customer service representatives.
        </p>
        <p>
        Our instant quote service is straightforward
         to use and provides the most accurate rates from the top carriers in the industry.
        </p>
     </div>

     <button>Contact Us</button>
    </div>
    <Footer/>
 </div>
  )
}

export default Instantquotes
