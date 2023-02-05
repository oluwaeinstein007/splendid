import React from 'react'
import Footer from '../components/footer/Footer'
import Nav from '../components/header/Nav'
import '../components/header/header.css'
import './pages.css'
import './backgroundimage.css'


const Industrial = () => {
  return (
    <div>
    <div className="header industrial"> 
       <Nav/>
       <h1 className='title'>Industrial Logistics</h1>
     </div>
    <div className="body">
     <h1>Industrial Logistics</h1>
     <div className="body-content">
        <p>
        Industrial services are an important part of the supply chain management process.
         By coordinating the transportation of products and materials, these services
         we offer will help ensure that your products are delivered on time and in perfect condition.
        </p>
        <p>
        Our experienced global team specializes in shipping industrial products to and from any part of the world.
         Our team can handle industrial packages from small-sized packages to container loads.
        </p>
        <p>
        In need of a freight forwarding and logistics
         company to take care of your industrial logistics need,
          Splendid Freight is right for you.
        </p>
     </div>

     <button>Contact Us</button>
    </div>
    <Footer/>
 </div>
  )
}

export default Industrial
