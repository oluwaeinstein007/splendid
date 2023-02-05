import React from 'react'

const Mainlocations = () => {
  return (
    <div className="main-location">
      <div className="location-title">
        <h1>Available Locations</h1>
        <p>Our office is located across three areas in Nigeria. 
          Here are <br /> our addresses for further clarity:
        </p>
      </div>

      <div className="box">
        <div className="box-text">
          <span>Abuja Office</span>
          <p>Suite 313, EbenezerPlace, Durumi Area 1,Abuja</p>
        </div>

        <div className="box-text">
          <span>Lagos Office</span>
          <p>Faith House, Plot 15, Block 75,
            Ichie Mike Ejezie Street,
            Lekki Phase 1, Lagos
          </p>
        </div>

        <div className="box-text">
          <span>Port harcourt Office</span>
          <p>Suite 20, Milkah Plaza
              NTA Road, Ozuoba,
              Port Harcourt
          </p>
        </div>
      </div>
    </div>
  )
}

export default Mainlocations
