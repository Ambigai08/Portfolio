import React from 'react';
import { Link } from "react-scroll";
import "../Header/Header.css";

const Header = () => {
    return (
        <div className="header">
        <div className="header_left">
            <h2>
                Develop<spam>er</spam>
            </h2>
        </div>   
        <div className="header_right">
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
            
            <button className="header_joinbutton">
            <Link to="contact" smooth={true} duration={500} >
                <h4>
                    Contact Me  
                </h4>
            </Link>
            </button>
        </div>
        </div>
    )
}

export default Header;

