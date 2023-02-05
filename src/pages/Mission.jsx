import React from 'react'
import Footer from '../components/footer/Footer'
import Nav from '../components/header/Nav'
import '../components/header/header.css'
import './pages.css'
import pot1 from '../image/Continous Improvement.png'
import pot2 from '../image/box1.png'
import pot3 from '../image/Friendship.png'
import pot4 from '../image/Professionalism.png'
import pot5 from '../image/Quality.png'
import pot6 from '../image/Reliability.png'


const Mission = () => {
  return (
    <div>
    <div className="header mission"> 
       <Nav/> 
       <h1 className='title'>Mission & Vision</h1>
     </div>
    <div className="body">
     <h1>Mission & Vision</h1>
     <div className="body-content">
        <p>
          Splendid Freight International Ltd. was established in 2015, out of a strong and 
          sincere desire to offer top-notch, bespoke logistics solutions that add value and 
          support the success of its clients. We currently have our business premises in Lagos,
          Abuja & Port Harcourt respectively, and anticipate further expansion to other locations.
        </p>
        <p>
          All of Nigeria's seaports and significant international airports are serviced by Splendid 
          Freight. Our team makes it a point of 
          duty to fully comprehend each client's needs before proffering the optimal solution.
        </p>
        <p>
          We are part of some global logistics networks of providers & partners. This enables us 
          to function effectively and 
          efficiently across global locations; picking up cargo and transporting them with ease.
        </p>
        <p>
          We ensure to work closely with you to design options that are most appropriate for your shipment.
        </p>
     </div>

     <div className="body-content green-span">
        <p><span>Mission</span> &gt; To provide our clients with complete and specialized logistics 
        solutions for the improvement of their supply chains.</p>
        <p><span>Our Vision</span> &gt; To improve the supply chain for our clients while being 
        a reliable 3PL provider to them.</p>
        <p><span>Business Domains</span> &gt; To expand activities focusing on logistics
         to assist industries and consumer services</p>
        <p><span>Management Policy</span> &gt; To take on the challenges of innovation and to adapt to market 
        demands as a diverse and all-encompassing logistics company.</p>
        <p><span>Action Guideline</span> &gt; To provide customer satisfaction while acting lawfully and ethically, 
        and with creativity, innovation, honesty, and thankfulness.</p>
        <p><span>Our value</span> &gt; Our Values are our company's foundation. It is a set of beliefs 
        that guide our work and how we interact with others in the workplace. 
        Our values are what we believe in and live by. 
        They are the foundational principles that shape our culture and 
        shape our business We believe in providing our clients with the best service. 
        We have set up values that guide us and help us provide better services.</p>
     </div>


      <div className="mission-box">
        
          <div className="box-pot">
            <div className="img">
              <img src={pot1} alt=""/>
            </div>
            <span>Continous Improvement</span>
            <p>We believe that continuous improvement is 
              not just a word but a belief that drives our actions and
               decisions. We believe that improvement is needed everywhere.
            </p>
          </div>

          <div className="box-pot">
            <div className="img">
              <img src={pot2} alt=""/>
            </div>
            <span>Courtesy</span>
            <p>Courtesy is an essential value at our company. 
              It is a value that we hope to instill in all of our employees 
              through training, coaching, and feedback.
            </p>
          </div>

          <div className="box-pot">
            <div className="img">
              <img src={pot3} alt=""/>
            </div>
            <span>Friendship</span>
            <p>Courtesy is an essential value at our company. 
              It is a value that we hope to instill in all of our employees through training, 
              coaching, and feedback.
            </p>
          </div>
        

        
          <div className="box-pot">
            <div className="img">
              <img src={pot4} alt=""/>
            </div>
            <span>Professionalism</span>
            <p>We value professionalism and transparency in our work. 
              We believe that these values help us succeed in our work and build 
              long-lasting relationships with our clients.
            </p>
          </div>

          <div className="box-pot">
            <div className="img">
              <img src={pot5} alt=""/>
            </div>
            <span>Quality</span>
            <p>The quality of our content is at the forefront of our minds.
               It is not only the quality of what we produce but also how it will be consumed.
            </p>
          </div>

          <div className="box-pot">
            <div className="img">
              <img src={pot6} alt=""/>
            </div>
            <span>Reliability</span>
            <p>We believe that reliability is the key to success. 
              We are reliable in our work, and we respect deadlines. 
              We are constantly striving to make our work more efficient.
            </p>
          </div>
        
      </div>

     
    </div>
    <Footer/>
 </div>
  )
}

export default Mission
