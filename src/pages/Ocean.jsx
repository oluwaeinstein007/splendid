import React from 'react'
import Footer from '../components/footer/Footer'
import Nav from '../components/header/Nav'
import '../components/header/header.css'
import './pages.css'
import './backgroundimage.css'


const Ocean = () => {
  return (
    <div>
     <div className="header ocean">
      d
        <Nav/>
        <h1 className='title'>Ocean Freight</h1>
      </div> 
     <div className="body">
      <h1>Ocean Freight Service</h1> 
      <div className="body-content">
        <p>We offer some of the best ocean freight services in the industry. With a focus on both
           quality and customer service, we have a vast network of shipping partners that 
           allows us to offer our customers the most competitive rates.Also, with a variety of 
           value-added services to make sure your shipment arrives on time and in good condition, 
           we offer a tracking system that allows our customers to see the status of their shipment 
           at any time.
        </p>
        <span>
         <p>Our ocean freight services consist of the following models:</p> 
          <ul>
            <li>Seaport to Door</li>
            <li>Seaport to Seaport</li>
            <li>Door to Door</li>
            <li>Door to Seaport</li>
          </ul>
        </span>
        <p>We understand that your shipments need to reach their destination on time 
          without any delays or issues and we ensure they do so.</p>
      </div>

      <button>Contact Us</button>
     </div>
     <Footer/>
    </div>
  )
}

export default Ocean
