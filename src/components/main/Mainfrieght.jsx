import React from 'react'
import box1 from '../../image/box1.png'
import box2 from '../../image/box2.png'
import box3 from '../../image/box3.png'

const Mainfrieght = () => { 
  return (
    <div className="main-frieght">
      <div className="Text">
        <h1>Splendid Freight International LTD</h1>
        <p>Splendid Freight International Ltd. was established in 2015, out of a strong and sincere desire to offer top-notch,
             bespoke logistics solutions that add value and support the success of its clients. <br />
            We ensure to work closely with you to design options that are most appropriate for your 
            shipment.
        </p>
      </div>

      <div className="box">
        <div className="box-content">
          <div className="img">
            <img src={box1} alt=""/>
          </div>
          <span>Courtesy</span>
          <p>Courtesy is an essential value at our company. 
            It is a value that we hope to instill in all of our employees through training,
             coaching, and feedback.
          </p>
        </div>

        <div className="box-content">
          <div className="img">
            <img src={box2} alt=""/>
          </div>
          <span>Mission</span>
          <p>To provide our clients complete and specialized logistics solutions
             for the improvement of their supply chains.
          </p>
        </div>

        <div className="box-content">
          <div className="img">
            <img src={box3} alt=""/>
          </div>
          <span>Vision</span>
          <p>To improve the supply chain for our clients while being
             a reliable3PL provider to them..
          </p>
        </div>
      </div>

      
    </div>
  )
}

export default Mainfrieght
