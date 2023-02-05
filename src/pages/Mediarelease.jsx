import React from 'react'
import Footer from '../components/footer/Footer'
import Nav from '../components/header/Nav'
import '../components/header/header.css'
import './pages.css'


const Mediarelease = () => {
  return (
    <div>
    <div className="header mediarelease"> 
       <Nav/> 
       <h1 className='title'>Media Release</h1>
     </div>
    <div className="body">
     <h1>Media Release</h1>
     <div className="body-content">
        <p>
        Splendid Freight is a logistics company that provides services to businesses and
         individuals. We have recently released our latest media release, which talks about 
         the launch of our new website. Keep up with our latest insights by following our 
         media release regarding new services and partnerships. The media release highlights 
         the ongoing events 
        at Splendid Freight and consists of exciting news and announcements!
        </p>
     </div>

     <button>Contact Us</button>
    </div>
    <Footer/>
 </div>
  )
}

export default Mediarelease
