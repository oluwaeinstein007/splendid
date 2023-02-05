import React, { useState } from 'react';
import Navbar from './Navbar'
import logo from '../../image/logo.png' 

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const styleName = toggle? 'open' : 'closed'

  const handleToggle = () => {
    setToggle(!toggle);
  };


  return (
    <nav className={toggle? 'nav expanded':'nav'}> 
        <div className="img">
            <img src={logo} alt=""/>
        </div>
        <Navbar styleName={styleName}/>
        <div className='toggle-icon' onClick={handleToggle}>
          {toggle?<i className="fa-solid fa-xmark"></i>:<i className="fa-solid fa-bars"></i>} 
        </div>
        
    </nav>
  )
}

export default Nav
