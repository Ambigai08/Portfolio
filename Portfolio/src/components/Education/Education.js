import React from 'react'
import { Element } from 'react-scroll'
import "../Education/Education.css"


const Education = () => {
    return (
        <Element className="education_container" id="education">
            <div className="skillcontainer_text">
               <h1> Education </h1>
        </div>
		<div className="main-container1">
	<div class="main-container">

		<div class="text-wrapper left">
			
			<div class="content">
				<h3>MCA</h3>
				<p>Anna University</p>
				<p>2020-Present</p>
			</div>
		</div>
		
		<div class="text-wrapper right">
			
			<div class="content">
				<h3>BCA</h3>
				<p>Stella Maris College</p>
				<p>2017-2020</p>
			</div>
		</div>
		
		<div class="text-wrapper left">
			
			<div class="content">
				<h3>12th Grade</h3>
				<p>Sri Ahobila Math Oriental School</p>
				<p>2015-2017</p>
			</div>
		</div>
		
		<div class="text-wrapper right">
			
			<div class="content">
				<h3>10th Grade</h3>
				<p>Govt. Girls Higher Sec. School</p>
				<p>2014-2015</p>
			</div>
		</div>
	</div>
	</div>
        </Element>
    )
}

export default Education
