import React from 'react'
import './header.css'
import { Link } from "react-router-dom";
import Nav from './Nav';


const Header = () => {
  return ( 
    <div className='header home'>
      <Nav/>
        
        <div className="heading"> 
                <h1>Complete and specialized<br />
                    logistics solutions for<br />
                    supply chain. 
                </h1>

                <p>
                    We provide you complete and specialized logistics sloutions for<br />
                    the improvement of your supply chain. Get to know the status<br /> 
                    of your shipment.
                </p>
        </div>

        <button className='button'>
          <Link to="/trackshippment"  style={{ color: 'black' }}>TRACK SHIPMENT</Link>
        </button>
    </div>

   
  )
}

export default Header
