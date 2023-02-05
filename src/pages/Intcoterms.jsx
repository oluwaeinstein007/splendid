import React from 'react'
import Footer from '../components/footer/Footer'
import Nav from '../components/header/Nav'
import '../components/header/header.css'
import './pages.css'

const Intcoterms = () => {
  return (
    <div>
    <div className="header intercoms"> 
       <Nav/>
       <h1 className='title'>Incoterms</h1>
     </div> 
    <div className="body">
     <h1>Incoterms</h1> 
     <div className="body-content">
       <p>Incoterms are international trade terms that specify the various ways in which 
        goods may be shipped. They are used in international trade to define the rights 
        and obligations of the seller and buyer, including tax treatment, 
        shipping terms, and transport costs.Some commonly used incoterms are mentioned.
       </p>
       <span>
        <p>They include:</p> 
         <ul>
           <li>EXW – Ex Works</li>
           <li>FCA – Free Carrier</li>
           <li>CPT – Carriage Paid To</li>
           <li>CIP – Carriage and Insurance Paid To</li>
           <li>DAP – Delivered at Place</li>
           <li>DPU – Delivered at Place</li>
           <li>DDP – Delivered Duty Paid</li>
           <li>FAS – Free Alongside Ship</li>
           <li>FOB – Free on Board</li>
           <li>CFR – Cost and Freight</li>
           <li>CIF – Cost Insurance and Freight</li>
         </ul>
       </span>
       <p>
       For more on Incoterms 2020, You can view or download it.
       </p>
     </div>

     <button>Contact Us</button>
    </div>
    <Footer/>
   </div>
  )
}

export default Intcoterms
