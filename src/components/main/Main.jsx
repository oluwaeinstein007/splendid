import React from 'react'
import './main.css'
import Maincontent from './Maincontent'
import Mainfrieght from './Mainfrieght'
import Mainlocations from './Mainlocations'

const Main = () => {
  return (
    <div className="main">
      <Maincontent/>
      <Mainfrieght/>
      <Mainlocations/>
    </div>
  )
}

export default Main 
