import React from 'react'
import Footer from '../components/footer/Footer'
import Nav from '../components/header/Nav'
import '../components/header/header.css'
import './pages.css' 

const Career = () => {
  return (
    <div>
      <div className="header career"> 
        <Nav/> 
        <h1 className='title'>Career</h1>
      </div>
      <div className="body">
      <h1>Career</h1>
      <div className="body-content">
          <p>
            Splendid Freight is a logistics company in Nigeria. we also provide transportation services, 
            warhousing, and logistics to companinies across the country and globally. Splendid Freight offers
            career opportunities in various department such as marketing, sales finance, accounting, human 
            resources, and more. We offer employees a chance to grow and develop their careers with 
            advancement, training, and development opportunities. As a Splendid Freight employee, you 
            will be part of a team of professionals who work hard to help our customers get their packages
            delivered safely and on time every day. you will also have the opportunity to take on new 
            challenges as your career progress.    
          </p>
      </div>

      <div className="body-content">
        <h1>For Joining Us</h1>

        <div className="form">
            <div className="name">
              <input type="text" placeholder='First Name'/>
              <input type="text" placeholder='Last Name'/>
            </div>
            <input type="email" placeholder='Email' />
            <input type="text" placeholder='Company & Address'/>
            <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>    
        </div>

        <button>Send</button>
      </div>

      </div>
      <Footer/>
 </div>
  )
}

export default Career