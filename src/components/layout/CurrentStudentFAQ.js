import React from 'react';
import Collapsible from './Collapsible.js';
import './FAQ.css';

class CurrentStudentFAQ extends React.Component{
	render(){
		return(
		<div className="current-studentFAQ">
                <h2>Info for Current Students</h2>

                  <h3>Academic Resources</h3>

                    <Collapsible title="I am starting my first quarter. What should I do?">

		    </Collapsible>
                    <Collapsible title="How many courses a quarter should I take?">

		    </Collapsible>
                    <Collapsible title="What are the basic requirements for the degree?">
	            
		    </Collapsible>
                    <Collapsible title="Can the credits I took in BS count toward my MS?">
	            
		    </Collapsible>
                    <Collapsible title="As a graduate student, can I take a 400 level course and use it to fulfill my MS degree requirement?">
	            
		    </Collapsible>
                    <Collapsible title="What should I do if I want to register for the research course (CSCI 692)?">
	            
		    </Collapsible>
                    <Collapsible title="I am planning to graduate next quarter. What is the graduation application and approval process?">
	            
		    </Collapsible>
                    <Collapsible title="What should I do if I need to change my plan of study?">
	            
		    </Collapsible>
                    <Collapsible title="What should I do if I want to take an independent study?">
	            
		    </Collapsible>

                  <h3>TAships and other funding opportunities</h3>

		  <h3>Important to-dos for your first and last quarter</h3>
		  </div>
		);
	}

}

export default CurrentStudentFAQ;