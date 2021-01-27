import React, {Fragment} from "react";

import Footer from "./footer/Footer.js";
import Header from "./header/Header.js";

import "./page-css/About.css";

class About extends React.Component{

	render(){
		return(
			
			<div className="page">
			<Header />
			<main className="body">
				<div className='Content'>
					<div className='two-col-template'>
			 			<div className='left-col'>

							<ul className='side-menu'>
							<li><button>Mission Statement</button></li>
							<li><button>Cirriculum</button></li>
							<li><button>3 Year Track</button></li>
							<li><button>BS+MS Fast Track</button></li>
							<li><button>Staff & Faculty</button></li>
							</ul>
							
						</div>
						<div className='right-col'>
							<h2 className='title'>Mission Statement</h2>
			
							<p>
							The faculty and staff of the Computer Science Department are dedicated to training and preparing
							students to become computer scientists. We believe that computer science has been and will
							continue to contribute greatly to all disciplines of study and world economy.  
							</p>

							<p>
							We provide a high quality education to prepare students for productive careers in industry,
							academia, and government in a nourishing environment for teaching, learning, and research in the
							theory and applications of computing. This training is offered under the direction of the Graduate
							School at Western Washington University. 
							</p>

							<p>
							Students in the graduate program in the Computer Science take courses on computer science theory,
							concepts, and practice and in research projects. Students graduating from our program will have the
							ability to apply computing knowledge and mathematics to real world problems. They will be able to
							analyze problems and identify the computing requirements appropriate to its solution. Students will
							master the design-implementation-evaluation cycle for computer-based systems, processes,
							components, or programs to meet desired goals. Our program provides students with an
							understanding of professional, ethical, legal, security and social issues and responsibilities. Our
							excellent preparation for our students will have a profound impact on the future of humanity.  
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

export default About;