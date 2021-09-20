import React from 'react'
import { Element } from 'react-scroll'
import "./TopContainer.css"

const TopContainer = () => {
    return (
        <Element name="about" className="topContainer">
        
                 <div className="topContent">
            <div className="topContent_left"> 
              <h1>
                  Hi, I'm Ambigai 
              </h1>
              <p>
                  A Highly Motivated Computer enthusiat who is passionate in web designing . 
              </p>
              
            </div>
            <div className="topContent_right">
                </div>
            
        </div>
            
        </Element>
    )
}

export default TopContainer
