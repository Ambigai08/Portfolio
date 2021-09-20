import React, { useState } from 'react';
import { Element } from 'react-scroll';
import "./Project.css";


const Project = () => {

    var [modal, setModal]= useState(false);
    var [modal1,setModal1]=useState(false);
    var [modal3,setModal2]=useState(false);


    var toggleModel = () => {
        setModal(!modal)}
        var toggleModel1 = () => {
            setModal1(!modal1)}
            var toggleModel2 = () => {
                setModal2(!modal3)}

                if(modal) {
                    document.body.classList.add('active-modal')
                  } else {
                    document.body.classList.remove('active-modal')
                  }
    
    return (
        <Element className="projectcontainer" id="proj">
        <div className="projectcontainer_text">    
        <h1> Projects </h1>     
        </div> 
        <div className="projectDetailMain">
            <div className="projectcontainer_inner">
                <h2>Sandwich Shop</h2>   
            <button onClick={toggleModel} className="btn-modal">
                Learn More
            </button>
            </div>
            {modal && (
            <div className="modal">
            <div onClick={toggleModel} className="overlay"></div>
                <div className="modal-content">
                    <h2>Sandwich Shop</h2>
                    <p>Technologies:<span>HTML,CSS,JS,PHP</span></p>
                    <p>Software:<span>Notepad++</span></p>
                    <p>Database:<span>SQL</span></p>
                    <button className="close-modal" onClick={toggleModel}>
                        X
                    </button>
                    </div>
                </div>
            )}
<div className="projectcontainer_inner">

            <h2>Grocery Shop</h2>   
        <button onClick={toggleModel1} className="btn-modal">
            Learn More
        </button>
        </div>
                { modal1 && (
                    <div className="modal">
                    <div onClick={toggleModel1} className="overlay"></div>
                        <div className="modal-content">
                        <h2>Grocery Shop</h2>
                    <p>Technologies:<span>HTML,CSS,C#</span></p>
                    <p>Framework:<span>Asp.Net</span></p>
                    <p>Software:<span>Visual Studio code</span></p>
                    <p>Database:<span>SQL</span></p>
                    <button className="close-modal" onClick={toggleModel1}>
                        X
                    </button>
                            </div>
                        </div>
                )}

<div className="projectcontainer_inner">
            
            <h2>My Portfolio</h2>   
        <button onClick={toggleModel2} className="btn-modal">
            Learn More
        </button>
        </div>
        {modal3 && (
            <div className="modal">
          <div onClick={toggleModel2} className="overlay"></div>
        <div className="modal-content">
        <h2>My Portfolio</h2>
                    <p>Technologies:<span>HTML,CSS,JS</span></p>
                    <p>Framework:<span>React</span></p>
                    <p>Software:<span>Visual Studio Code</span></p>
                    <button className="close-modal" onClick={toggleModel2}>
                        X
                    </button>
            </div>
        </div> 
          )}

        </div>

        </Element>
    )
        
}

export default Project
