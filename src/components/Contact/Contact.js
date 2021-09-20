import { IconButton } from '@material-ui/core'
import React from 'react'
import { Element } from 'react-scroll'
import { Instagram , LinkedIn , GitHub} from '@material-ui/icons'
import "./Contact.css"

const Contact = () => {
    return (
        <Element className="contact" id="contact">
        <h1>
            Contact
        </h1>
        <div className="contact_container">
            <p>
                Email: <span>ambigaiaarthi08@gmail.com</span>
            </p>
            <p>
                Github Username : <span>@ambigaiaarthi</span>
            </p>
             <div className="contact_icons" >
                 <a href="https://www.linkedin.com/in/ambigai-ravikumar-5b8b26186/">
                     <IconButton>
                         <LinkedIn />
                     </IconButton>
                 </a>
                 <a href="https://github.com/">
                     <IconButton>
                         <GitHub />
                     </IconButton>
                 </a>
                 <a href="instagram.com/sarahenna_artist/">
                     <IconButton>
                         <Instagram />
                     </IconButton>
                 </a>
                
             </div>
        </div>
    
        </Element>
    )
}

export default Contact
