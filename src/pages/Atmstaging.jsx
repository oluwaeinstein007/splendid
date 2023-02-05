import React from 'react'
import Footer from '../components/footer/Footer'
import Nav from '../components/header/Nav'
import '../components/header/header.css'
import './pages.css'
import './backgroundimage.css'


const Atmstaging = () => {
  return (
    <div>
    <div className="header atmstagin"> 
       <Nav/>
       <h1 className='title'>ATM Staging</h1>
     </div>
    <div className="body">
     <h1>ATM Staging</h1>
     <div className="body-content">
        <p>
        With the growing banking needs of the populace and the financial inclusion drive of 
        the financial sector, we assist in staging ATMs and kiosks in designated required places 
        thus helping to make it easier for people to withdraw cash,
         deposit cash and make transfers via the machines whenever they need to
        </p>
        <p>
        At Splendid Freight, our team of experts are always available to ensure that ATMs
         are tested and are in good working conditions where they are deployed. We provide
          ATM staging services for banks
         and other financial institutions who want to deploy ATMs in different locations.
        </p>
     </div>

     <button>Contact Us</button>
    </div>
    <Footer/>
 </div>
  )
}

export default Atmstaging
