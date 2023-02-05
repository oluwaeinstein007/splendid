import React from 'react'
import Footer from '../components/footer/Footer'
import Nav from '../components/header/Nav'
import '../components/header/header.css'
import './pages.css'
import './backgroundimage.css'

const Warehousing = () => {
  return (
    <div>
     <div className="header warehouse"> 
        <Nav/>
        <h1 className='title'>Warehousing & Distribution</h1>
      </div> 
     <div className="body">
      <h1>Warehousing & Distribution Service</h1>
      <div className="body-content">
        <p>We offer a comprehensive warehousing and distribution service
           that is tailored to meet the unique needs of our clients. 
           We understand that each business has different requirements, 
           and we are equipped to handle a wide range of products and services.
        </p>
        <span>
         <p>Our warehousing and distribution service includes a variety of features, such as:</p> 
          <ul>
            <li>A network of warehouses across the country</li>
            <li>A team of experienced professionals to manage your account</li>
            <li>Flexible storage options</li>
            <li>A wide range of distribution services</li>
          </ul>
        </span>
        <p>
          If you are looking for a warehousing and distribution partner that can provide you 
          with the customized solution you need, contact us today. We would be happy to discuss 
          your specific needs and requirements and develop a solution that is right for you.
        </p>
      </div>

      <button>Contact Us</button>
     </div>
     <Footer/>
    </div>
  )
}

export default Warehousing
