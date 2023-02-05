import React from 'react'
import Footer from '../components/footer/Footer'
import Nav from '../components/header/Nav'
import '../components/header/header.css'
import './pages.css'
import './backgroundimage.css'

const Projectcargo = () => {
  return (
    <div>
    <div className="header projectcargo"> 
       <Nav/>
       <h1 className='title'>Project Cargo</h1>
     </div>
    <div className="body">
     <h1>Project Cargo</h1>
     <div className="body-content">
        <p>
        Our project logistics and cargo services are designed to provide you with a 
        comprehensive and hassle-free solution for all your shipping needs. 
        We can handle anything from small parcels to large containers, 
        and we will work with you to ensure that your goods arrive at 
        their destination on time and in perfect condition.
        </p>
        <p>
        We understand that every shipment is different, and we will tailor our services 
        to meet your specific requirements. We also offer a range of value-added services 
        such as packaging, 
        labeling, and storage to make sure that your project is a success from start to finish.
        </p>
        <p>
          If you are looking for a reliable and experienced partner for your next shipping project,
           contact us today. We would be happy to provide you with a free quote and answer any
            questions you may have.
        </p>
     </div>

     <button>Contact Us</button>
    </div>
    <Footer/>
 </div>
  )
}

export default Projectcargo
