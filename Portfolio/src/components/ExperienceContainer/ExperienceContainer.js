import React from 'react'
import { Element } from 'react-scroll';
import Experience from '../Experience/Experience';
import "./ExperienceContainer.css"

const ExperienceContainer = () => {
    const myexperience = [
    {
        img:"https://cdn.phenompeople.com/CareerConnectResources/COGNGLOBAL/social/share-logo-1532696363769.png",
        title: "Cognizant",
        dura: "Nov 2020 - Present ",
        desc:"Incident Management ",
    },
    {
        img:"https://media-exp1.licdn.com/dms/image/C560BAQHnspjoQrLiiQ/company-logo_200_200/0/1593708185633?e=2159024400&v=beta&t=x9nlWst-rltWjrWjgUI1VdBkQzNqMlvGWeOvazqmJXM",
        title: "BeyondX",
        dura: "Sep 2020 - Oct 2020 ",
        desc:"work on designing web page ",
    },

];

    return (
        <Element className="experiencecontainer" id="exp">
            <div className="experiencecontainer_text">
            <h1>Experience</h1>
            </div>
            <div className="experiencecontainer_main">
              {
                  myexperience.map((experience, index) => {
                      return(
                         <Experience
                          key={index}
                          img={experience.img}
                          title={experience.title}
                          dura={experience.dura}
                          desc={experience.desc}
                          />
                      );
                  })
              }
            </div>
        </Element>
    )
}

export default ExperienceContainer
