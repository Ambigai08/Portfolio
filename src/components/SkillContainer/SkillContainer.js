import React from 'react'
import { Element } from 'react-scroll' 
import LinearProgress from "@material-ui/core/LinearProgress"
import "../SkillContainer/SkilContainer.css"

const SkillContainer = () => {
    return (
          
        <Element className="skillcontainer" id="skills">
            <div className="skillcontainer_text">
               <h1> SKILLS </h1>
        </div>
            <div className="skillcontainer_skills">
            <div className="skillcontainer_left">
             <h3> Developer Skills</h3>
             <div className="skillcontainer_devloper">
             <h5>HTML<spam Style="padding-left:430px;">90%</spam></h5>
             <div className="skillcontainer_slider">
                 <LinearProgress variant="determinate" value={90} />
             </div>
             </div>
             <div className="skillcontainer_devloper">
             <h5>CSS<spam Style="padding-left:440px;">70%</spam></h5>
             <div className="skillcontainer_slider">
                 <LinearProgress variant="determinate" value={70} />
             </div>
             </div>
             <div className="skillcontainer_devloper">
             <h5>JS<spam Style="padding-left:450px;">50%</spam></h5>
             <div className="skillcontainer_slider">
                 <LinearProgress variant="determinate" value={50} />
             </div>
             </div>
             <div className="skillcontainer_devloper">
             <h5>React<spam Style="padding-left:430px;">50%</spam></h5>
             <div className="skillcontainer_slider">
                 <LinearProgress variant="determinate" value={50} />
             </div>
             </div>
             <div className="skillcontainer_devloper">
             <h5>PHP<spam Style="padding-left:440px;">40%</spam></h5>
             <div className="skillcontainer_slider">
                 <LinearProgress variant="determinate" value={40} />
             </div>
             </div>
             <div className="skillcontainer_devloper">
             <h5>SQL<spam Style="padding-left:440px;">90%</spam></h5>
             <div className="skillcontainer_slider">
                 <LinearProgress variant="determinate" value={90} />
             </div>
             </div>
            </div>
            <div className="skillcontainer_right">
              <h3>Designer Skills</h3>
              <div className="skillcontainer_devloper">
             <h5>Figma<spam Style="padding-left:420px;">70%</spam></h5>
             <div className="skillcontainer_slider">
                 <LinearProgress variant="determinate" value={70} />
             </div>
             </div>
             <div className="skillcontainer_devloper">
             <h5>Photoshop<spam Style="padding-left:390px;">90%</spam></h5>
             <div className="skillcontainer_slider">
                 <LinearProgress variant="determinate" value={90} />
             </div>
             </div>
              <h3 Style="padding-top:20px;"> Other skills</h3> 
              <div className="skillcontainer_devloper">
             <h5>C programming<spam Style="padding-left:360px;">70%</spam></h5>
             <div className="skillcontainer_slider">
                 <LinearProgress variant="determinate" value={70} />
             </div>
             </div>
             <div className="skillcontainer_devloper">
             <h5>Linux<spam Style="padding-left:440px;">90%</spam></h5>
             <div className="skillcontainer_slider">
                 <LinearProgress variant="determinate" value={90} />
             </div>
             </div>
             </div>
            </div>
              
        </Element>
    )
}

export default SkillContainer
