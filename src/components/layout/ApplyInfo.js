import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

import "./page-css/About.css";

class ApplyInfo extends React.Component{
	render(){
		return(
			<div className="page">
				<Header />
				
				<main className="body">
					<div className="Content">
					<div className='two-col-template'>
			 			<div className='left-col'>

							<ul className='side-menu'>
							<li><button>Admissions</button></li>
							<li><button>Tuition & Financial Aid</button></li>
							<li><button>International Students</button></li>
							<li><button>FAQs</button></li>
							</ul>
							
						</div>

						<div className='right-col'>
							<h2 className='title'>Admissions</h2>
							
							<p> A place where propspective students can find information </p>

                					<p>
                  					Admissions and program details can be found here:
                  					<a href='https://gradschool.wwu.edu/computer-science'>
                    					{' '}
                    					https://gradschool.wwu.edu/computer-science
                  					</a>
                  					<br></br>
                 					 If you are a CS honors student, please follow the normal
                  					application procedure to apply to the Graduate Program.
                					</p>
                					<p>
                  					Computer Science Graduate Handbook:
                  					<a href='https://cse.wwu.edu/cs/graduate-programs'>
                    					{' '}
                    					https://cse.wwu.edu/cs/graduate-programs
                  					</a>
                					</p>
               					</div>
					</div>
					</div>
				</main>
				
				<Footer />
			</div>
		);
	}

}

export default ApplyInfo;