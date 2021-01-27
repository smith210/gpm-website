import React from 'react';
import Collapsible from './Collapsible.js';
import './FAQ.css';

class ApplicationFAQ extends React.Component{
	render(){
		return(
		<div className = "admissionFAQ">	

		<h2>Admissions FAQs</h2>
                <h3>General Application Questions</h3>
		    <Collapsible title="Am I eligible to apply?">
			<p>1Answer here</p>
		    </Collapsible>

		    <Collapsible title="Do I need a degree in Computer Science to be admitted to the program?">
			<p>2Answer here</p>
		    </Collapsible>

		    <Collapsible title="Can I apply to start in Winter or Spring quarter?">
			<p>3Answer here</p>
		    </Collapsible>

		    <Collapsible title="How do I apply?">
			<p>4Answer here</p>
		    </Collapsible>

		    <Collapsible title="What documents do I need to submit for my application?">
			<p>The documents you will need are as follows:</p>
			<ul>
			<li>Transcripts</li>
			<li>Letters of Recommendation</li>
			<li>GRE Test Scores</li>
			</ul>
		    </Collapsible>

		    <Collapsible title="When are the deadlines for the application?">
			<p>6Answer here</p>
		    </Collapsible>

		    <Collapsible title="What criteria are used to evaluate applicants for admission to the department?">
			<p>7Answer here</p>
		    </Collapsible>

                  <h3>Language Proficiency Tests</h3>

		    <Collapsible title="Do I need to take the GRE test?">
			<p>1Answer here</p>
		    </Collapsible>
		    <Collapsible title="Are there minimum GRE scores required for admission and can I submit my GRE scores after the deadline?">
			<p>1Answer here</p>
		    </Collapsible>
		    <Collapsible title="Do I need to take the TOEFL test? Are there minimum TOEFL/IELTS scores and can I submit my scores after the deadline?">
			<p>1Answer here</p>
		    </Collapsible>
		    <Collapsible title="When should I take the GRE/TOEFL?">
			<p>1Answer here</p>
		    </Collapsible>
		    <Collapsible title="I am currently in the CS honors program and thinking to apply for the Graduate Program. How should I apply?">
			<p>1Answer here</p>
		    </Collapsible>


                  <h3>Transfer Questions</h3>
 		    <Collapsible title="If I already have a MS in CS from another institute, may I apply to the CS MS program at WWU?">
			<p>1Answer here</p>
		    </Collapsible>
		    <Collapsible title="I am currently enrolled in a graduate program at another institution. May I apply for the CS MS program at WWU?">
			<p>1Answer here</p>
		    </Collapsible>

                    
                  <h3>If Admitted</h3>
		    <Collapsible title="If I am admitted to the program, can I defer admission?">
			<p>1Answer here</p>
		    </Collapsible>
		    <Collapsible title="Can a course I took somewhere else (e.g., an online program) be waived from the prerequisite course list I will be required to take?">
			<p>1Answer here</p>
		    </Collapsible>
		    <Collapsible title="What are the MS degree requirements?">
			<p>1Answer here</p>
		    </Collapsible>
		    <Collapsible title="How long does it take to complete the program? Can I complete my degree part time?">
			<p>1Answer here</p>
		    </Collapsible>
		    <Collapsible title="How can I find out more about course requirements for the CS Master’s program?">
			<p>1Answer here</p>
		    </Collapsible>
      

                  <h3>Fees and Funding/Financial Support</h3>
		    <Collapsible title="What are tuition and fees? What if I’m an international student?">
			<p>1Answer here</p>
		    </Collapsible>
		    <Collapsible title="Do you offer financial support for MS students?">
			<p>1Answer here</p>
		    </Collapsible>

                  <h3>Recommendation Letters</h3>
		    <Collapsible title="How many letters of recommendation do I need?">
			<p>1Answer here</p>
		    </Collapsible>
		    <Collapsible title="How should my recommenders send their letters?">
			<p>1Answer here</p>
		    </Collapsible>
		    <Collapsible title="I’ve been working for several years and it’s difficult to get 3 letters of recommendation from former professors. Will you accept letters from my employer or supervisors?">
			<p>1Answer here</p>
		    </Collapsible>

		</div>
		);
	}

}

export default ApplicationFAQ;