import React from 'react'
import Footer from '../components/footer/Footer'
import Nav from '../components/header/Nav'
import '../components/header/header.css'
import './pages.css'

const Trackpages = () => {
  return (
    <div className='pages'> 
      <div className="header"> 
        <Nav/>
      </div>
      <div className="trackpages">
        <h2>Track By Reference</h2>
        <p>Enter a reference number to quickly check the status of your shipment </p>
        <input type="number" placeholder='Enter Tracking Number' />
        <button>TRACK RESULT </button>
      </div>
      <Footer/>
    </div>
  )
}

export default Trackpages
