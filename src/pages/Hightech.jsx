import React from 'react'
import Footer from '../components/footer/Footer'
import Nav from '../components/header/Nav'
import '../components/header/header.css'
import './pages.css'
import './backgroundimage.css'


const Hightech = () => {
  return (
    <div>
    <div className="header hightech"> 
       <Nav/>
       <h1 className='title'>High Tech Logistics</h1>
     </div>
    <div className="body">
     <h1>High-Tech Logistics</h1>
     <div className="body-content">
       <p>In today’s dynamic world, companies in the technology industry engage
         high-velocity logistics in order to compete effectively.
          From managing the flow of materials to their transformation into finished
           technological goods and their ultimate delivery to the end-user, 
           it has become increasingly imperative to understand and execute effective
            logistics operations due to the increasing proliferation of new product
             introduction into the markets.
       </p>
       <p>
       Splendid Freight offers Technology Logistic solutions tailored to your needs
        and assists in solving your logistics concerns.
       </p>
     </div>

     <button>Contact Us</button>
    </div>
    <Footer/>
 </div>
  )
}

export default Hightech
