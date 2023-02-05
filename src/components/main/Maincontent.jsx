import React from 'react'
import airplane from '../../image/airplane.png'
import ocean from '../../image/ocean.png'
import train from '../../image/train.png'
import bus from '../../image/bus.png'

const Maincontent = () => {
  return (
    <div className="main-content">
            <div className="container">
                <div className="container-cotent">
                    <h1>Air Freight</h1>
                    <p>Air freight is a critical logistics service that
                        we provide to transport your goods from 
                        one part of the world.
                    </p>
                    <a href="#">Learn more</a>
                </div>
                    
                <div className="img">
                        <img src={airplane} alt=""/>
                </div>
            </div>

                <div className="container-reverse">
                    <div className="container-cotent">
                        <h1>Ocean Freight</h1>
                        <p>The world being globalized is interconnected. 
                            Thriving businesses have to think globally and 
                            act locally.
                        </p>
                        <a href="#">Learn more</a>
                    </div>

                    <div className="img">
                        <img src={ocean} alt=""/>
                    </div>
                </div>

                <div className="container">
                    <div className="container-cotent">
                        <h1>Rail Freight</h1>
                        <p>Rail freight services have become an essential
                            part of the logistics industry.
                        </p>
                        <a href="#">Learn more</a>
                    </div>
                    
                    <div className="img">
                        <img src={train} alt=""/>
                    </div>
                </div>

                <div className="container-reverse">
                    <div className="container-cotent">
                        <h1>Road Transport</h1>
                        <p>Though based in Nigeria, 
                            Splendid Freight provides safe
                            and reliable international road
                            transportation services.
                        </p>
                        <a href="#">Learn more</a>
                    </div>
                    
                    <div className="img">
                        <img src={bus} alt=""/>
                    </div>
                </div>          
    </div>
  )
}

export default Maincontent
