import React from 'react';
import { Link } from "react-router-dom"; 



const Navbar = ({ styleName }) => {

  return (
    <>
      <div className={`navbar ${styleName}`}>
        <ul>
            <li>
              <Link to="/home">Home</Link> 
            </li>

            <li className="link-frieght">
                <a href="#">Freight forwarding solutions <i class="fa-solid fa-arrow-down"></i></a>

                <div className="frieght">
                  <ul>
                      <li><Link to="/ocean">Ocean Frieght</Link></li>
                      <li><Link to="/air">Air Frieght</Link></li>
                      <li><Link to="/rail">Rail Frieght</Link></li>
                      <li><Link to="/road">Road Transport</Link></li>
                      <li><Link to="/warehousing">Warehousing Distribution</Link></li>
                      <li><Link to="/project">Project Logistics & Cargo</Link></li>
                      <li><Link to="/defence">Defence Logistics</Link></li>
                  </ul>
    </          div>
            </li>

            <li className="link-industry">
                <a href="#">Industry solutions <i class="fa-solid fa-arrow-down"></i></a>

                <div className="industry">
                  <ul>
                      <li><Link to="/hightech">High Tech Logistics</Link></li>
                      <li><Link to="/agricultural">Agricultural Logistics</Link></li>
                      <li><Link to="/chemical">Chemical  Logistics</Link></li>
                      <li><Link to="/pharma">Pharma & Healthcare Logistics</Link></li>
                      <li><Link to="/fastmoving">Fast-Moving Consumer Goods</Link></li>
                      <li><Link to="/industrial">Industrial Logistics</Link></li>
                      <li><Link to="/projectcargo">Project Cargo</Link></li>
                  </ul>
                </div>
            </li>

            <li className="link-atm">
                <a href="#">ATM Support solutions <i class="fa-solid fa-arrow-down"></i></a>

                <div className="atm">
                  <ul>
                      <li><Link to="/atmspares">Supply of ATM Spares</Link></li>
                      <li><Link to="/atmdeployment">ATM Deployment</Link></li>
                      <li><Link to="/atmstaging">ATM Staging</Link></li>
                      <li><Link to="/atmcivil">Civil Works for ATM</Link></li>
                      <li><Link to="/atmtechnical">Technical Support for ATM</Link></li>
                  </ul>
                </div>
            </li>

            <li className="link-knowledge">
                <a href="#">Knowledge <i class="fa-solid fa-arrow-down"></i></a>

                <div className="knowledge">
                  <ul>
                      <li><Link to="/incoterms">Incoterms</Link></li>
                      <li><Link to="/hscodes">Find the right HS Codes</Link></li>
                      <li><Link to="/cargoweight">Calculate your Cargo Weight</Link></li>
                      <li><Link to="/instantquote">Instant Quote</Link></li>
                      <li><Link to="/mediarelease">Media Release</Link></li>
                  </ul>
                </div>
            </li>

            <li className="link-company">
                <a href="#">Company <i class="fa-solid fa-arrow-down"></i></a>

                <div className="company">
                  <ul>
                      <li><Link to="/aboutus">About Us</Link></li>
                      <li><Link to="/mission">Mission & Vision</Link></li>
                      <li><Link to="/career">Career</Link></li> 
                  </ul>
                </div>
            </li>
        </ul>

        <button>
          <Link to="/trackshippment" style={{ color: 'black' }}>TRACK SHIPMENT</Link>
        </button>
      </div>

      
    </>
  )
}

export default Navbar
