import React from 'react'
import Footer from '../components/footer/Footer'
import Nav from '../components/header/Nav'
import '../components/header/header.css'
import './pages.css'
import './backgroundimage.css'


const Agricultural = () => {
  return (
    <div>
    <div className="header agric"> 
       <Nav/>
       <h1 className='title'>Agricultural Logistics</h1>
     </div>
    <div className="body">
     <h1>Agricultural Logistics</h1>
     <div className="body-content">
       <p>At Splendid Freight, we offer a variety of agricultural logistics services 
        to help farmers and agribusinesses get their products to various locations. 
        We have a team of experienced professionals who understand the unique needs of 
        the agriculture industry, and we are dedicated to providing the best possible 
        service to our clients.
       </p>
      <p>
      We offer a full range of agricultural logistics services, from transportation
       and storage to warehousing and distribution. We also offer value-added services
        such as warehousing and storage,
       and we are always exploring new ways to better serve our clients.
      </p>
      <p>
      If you are looking for a partner to help you with your agricultural logistics needs,
       please contact us today. We would be happy
       to discuss your specific needs and tailor a solution that meets your unique requirements.
      </p>
     </div>

     <button>Contact Us</button>
    </div>
    <Footer/>
 </div>
  )
}

export default Agricultural
