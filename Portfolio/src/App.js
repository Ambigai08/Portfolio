import React from 'react'
import Header from "./components/Header/Header";
import TopContainer from './components/TopContainer/TopContainer';
import SkillContainer from './components/SkillContainer/SkillContainer';
import Education from './components/Education/Education';
import Project from './components/ProjectContainer/Project';
import ExperienceContainer from './components/ExperienceContainer/ExperienceContainer';
import Contact from './components/Contact/Contact';
import Footercontainer from './components/Footercontainer/Footercontainer';

const App = () => {
  return (
    <div>
      <Header/>
      <TopContainer />
      <SkillContainer />
      <Education />
      <Project/>
      <ExperienceContainer />
      <Contact />
      <Footercontainer/>
    </div>
  )
}

export default App
