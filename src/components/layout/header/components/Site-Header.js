import React from 'react';
import Logo from '../../WWU-Logo.js';
import WWUQuickLinks from './WWUQuickLinks.js';


import './css/TopBar.css';

class TopBar extends React.Component{
	render(){
		return(
			<div className='wrap'>

			<div className='wwu-logo'>
				<a className="western-home-link" href="https://wwu.edu">
					<Logo />
        			</a>
				<a className="graduate-school" href="https://gradschool.wwu.edu/">
					GRADUATE SCHOOL
				</a>
				<a className="department-name" href="https://cse.wwu.edu/computer-science">
					COMPUTER SCIENCE DEPARTMENT
				</a>
			</div>


			<nav className="quick-links desktop" aria-label="Western Quick Links">
				 <WWUQuickLinks />
			</nav>

			</div>
		);
	}
}

export default TopBar;