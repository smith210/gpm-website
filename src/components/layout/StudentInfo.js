import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

import './page-css/About.css';

class StudentInfo extends React.Component{
	render(){
		return(
			<div className="page">
				<Header />
				<main className="body">
				<div className="Content">

				<div className="two-col-template">			
	
					<div className='left-col'>
						<ul className='side-menu'>
							<li><button>Graduate Plan of Study</button></li>
							<li><button>Research Project</button></li>
							<li><button>Teaching Assistants</button></li>
							<li><button>Timeline to Graduation</button></li>
							<li><button>FAQs</button></li>
							<li><button>Other Resources</button></li>
						</ul>
						
					</div>


					<div className='right-col'>
						<p> A place where current students can find information </p>
             				        <p>    TAships and other funding opportunities: </p>
                 				<ul>
                    					<li>Graduate School Teaching Assistant Guidelines</li>
                    					<li>What awards are available from the graduate school?</li>
                    					<li>What awards are available from the CS department?</li>
                  				</ul>  
						<p>
                			  	Important to-dos for your first and last quarter: (not done)
              				 	</p>
               				 
						<p>
                 			 	For curriculum info and help course planning, visit the
                			  	Computer Science Graduate Handbook here: </p>
                			  
						<a href='https://cse.wwu.edu/cs/graduate-programs'>
   
                   			 	https://cse.wwu.edu/cs/graduate-programs
                 			 	</a>

               				 	<ul>
                			  	Forms:
                			  	<li>
                 			   	<a href='https://esign.wwu.edu/forms/Grad_School/_plan_of_study_2.aspx'>
                   			   	Graduate Plan of Study
                  			  	</a>
                			  	</li>
                 			 	<li>
                  			  	<a href='https://esign.wwu.edu/forms/Grad_School/_amend_to_grad_plan_of_study_1.aspx'>
                    		 	 	Amendment to Graduate Plan of Study
                  			  	</a>
                 			 	</li>
                			 	 <li>
                  			  	<a href='https://esign.wwu.edu/forms/CSCI/_csci_grad_research_proj_1.aspx'>
                    			  	Graduate Research Project Form
                  			  	</a>
                			  	</li>
                			  	<li>
                  			  	<a href='https://esign.wwu.edu/forms/Grad_School/_degree_rec_non_thesis_1.aspx'>
                   			   	Degree Recommendation Non-Thesis Option
                 			   	</a>
                			  	</li>
                 			 	<li>
                   			 	<a href='https://gradschool.wwu.edu/degree-completion'>
                     			 	Application for Degree
                   			 	</a>
                 			 	</li>
                 			 	<li>
                  			  	<a href='https://gradschool.wwu.edu/courses-credits'>
                  			    	Independent Study
                 			   	</a>
                			  	</li>
                			  	<br />
                			  	General Graduate School Info
                			  	<li>
                 			   	<a href='https://gradschool.wwu.edu/program-requirements-0'>
                 			    	Academic Policies
                 			   	</a>
                			  	</li>
                			  	<li>
                  			  	<a href='https://gradschool.wwu.edu/funding-support'>
                     			 	Funding and Support
                    				</a>
                  				</li>
                				</ul>
					</div>
				</div>

				</div>
			</main>
			<Footer />
			</div>
		);
	}

}

export default StudentInfo;