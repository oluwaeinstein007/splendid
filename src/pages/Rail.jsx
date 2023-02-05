import React from 'react'
import Footer from '../components/footer/Footer'
import Nav from '../components/header/Nav'
import '../components/header/header.css'
import './pages.css'
import './backgroundimage.css'


const Rail = () => {
  return (
  <div>
     <div className="header rail"> 
        <Nav/>
        <h1 className='title'>Rail Freight</h1>
      </div>
     <div className="body">
      <h1>Rail Freight Service</h1>
      <div className="body-content">
        <p>Rail freight services have become an essential part of the logistics industry. 
          These services have various advantages over other modes of transportation, and they may
           become even more popular in the future.
            Our rail freight services are designed to provide a cost-effective and efficient 
            solution for your business. We offer a wide range of services that can be tailored 
            to your specific needs, and our experienced team is here to help you every step of the way.
            Whether you need to transport goods across the country or around the world, our rail freight 
            services can get the job done. We have a network of rail lines and terminals that span the 
            globe, and we can work with you to develop a custom shipping solution that meets your unique 
            requirements.
        </p>
        <p>
          If you're looking for a reliable, cost-effective way to move your goods, 
          choose Splendid Freight.
        </p>
      </div>

      <button>Contact Us</button>
     </div>
     <Footer/>
  </div>
  )
}

export default Rail
