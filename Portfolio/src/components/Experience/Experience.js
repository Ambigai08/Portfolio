import React, { useState } from 'react'
import { link } from 'react-scroll';
import "./Experience.css"

const Experience = ({ img, title, dura , desc }) => {

    const [show, setShow] = useState(false);
    
    return (  
        
          <a href={link}>
          <div className="experience"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)} >
            {  show ? (
                  <div className="experience_content">
                      <h2>{title}</h2>
                      <p>{dura}</p>
                      <p>{desc}</p>
                  </div>
              ) :(
                  <img src={img} alt=""/>
              )}
               
          </div>
          </a>
        
    )
}

export default Experience
