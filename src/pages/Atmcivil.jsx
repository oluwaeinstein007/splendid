import React from 'react'
import Footer from '../components/footer/Footer'
import Nav from '../components/header/Nav'
import '../components/header/header.css'
import './pages.css'
import './backgroundimage.css'

const Atmcivil = () => {
  return (
    <div>
     <div className="header atmcivil"> 
        <Nav/>
        <h1 className='title'>Civil Works for ATM</h1>
      </div> 
     <div className="body">
      <h1>Civil Works for ATM</h1> 
      <div className="body-content">
        <p>We have a team of professionals capable of handling all aspects of providing
           civil work for ATMs. Our team 
          consists of experienced individuals in this sector who can provide you with
           an efficient service of the best quality.
        </p>
        <span>
         <p>We have a wide range of services that we offer, including:</p> 
          <ul>
            <li>Civil construction</li>
            <li>Civil engineering</li>
            <li>Civil engineering design</li>
            <li>Civil engineering inspection</li>
          </ul>
        </span>
        <p>
        Let us handle the civil works for ATM by taking over all your responsibilities
         so that you can focus on the core business.
        </p>
      </div>

      <button>Contact Us</button>
     </div>
     <Footer/>
    </div>
  )
}

export default Atmcivil
