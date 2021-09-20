import React from 'react'
import { Link } from 'react-scroll'
import "./Footercontainer.css"

const Footercontainer = () => {
    return (
        <div className="footer">
            <div className="footer_content">
                <p>A Highly Motivated computer enthusiast who is passionate in Web Designing</p>
            </div>
        <div className="footer_right">
            <Link to="about" smooth={true} duration={500} >
                <h4>
                    About Me 
                </h4>
            </Link>
            <Link to="skills" smooth={true} duration={500} >
                <h4>
                    Skills 
                </h4>
            </Link>
            <Link to="education" smooth={true} duration={500} >
                <h4>
                    Education 
                </h4>
            </Link>
            <Link to="proj" smooth={true} duration={500} >
                <h4>
                    Project
                </h4>
            </Link>
            <Link to="exp" smooth={true} duration={500} >
                <h4>
                    Experience
                </h4>
            </Link>
            
            
        </div>

        
        </div>
        

    )
}

export default Footercontainer
