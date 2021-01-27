import React from "react";
import './Footer.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Logo from '../WWU-Logo.js';
import DepartmentFoot from './components/Department-Footer.js';
import WWUFoot from './components/WWU-Footer.js';

class Footer extends React.Component{
	render(){
		return(
		<footer className="page-footer">

			<section className="dept-foot">
				<div className="region-left">
				     <div className="dept-info">
					<div className="dept">
						<h2 className="dept-name">Computer Science Department</h2>
						<span aria-hidden="true" />
						<h2 className="dept-name">Masters Program</h2>
					</div>
					<div className="address">
					     <p>
						Communications Facility 483
					     </p>
					     <p>
						<a href="tel:3606504831"><i class="fa fa-phone fa-lg" aria-hidden="true"></i> (360) 650-4831</a>
					     </p>
					     <p>
						<a href='mailto:Yudong.Liu@wwu.edu'><i class="fa fa-envelope fa-lg" aria-hidden="true"></i> yudong.liu@wwu.edu</a>
					     </p>
					</div>
				     </div>
				</div>

				<div className="region-center">
				     <div className="rel-links">
	
				     </div>
				</div>

				<div className="region-right">
				     <div className="portal">
					     {/*<Link to="/login" className="link">Administrative Login</Link> */}
				     </div>
				</div>
			</section>

			<section className="wwu-foot">
				<div className="logo-bottom">
					<Logo />
					<p className="wwu-branch">GRADUATE SCHOOL</p>
				</div>
				<div className="wwu-info">
					<p>Old Main 530, MS 9037</p>
		
					<p>516 High Street, Bellingham, WA 98225</p>

					<p>
					<a href="tel:3606503170">(360) 650-3170</a>
					<span aria-hidden="true">|</span>
					<a href="mailto:gradschool@wwu.edu">gradschool@wwu.edu</a>
					</p>

					<p>
					<a href="https://www.wwu.edu/privacy/">Privacy</a>
					<span aria-hidden="true">|</span>
					<a href="https://www.wwu.edu/commitment-accessibility">Accessibility Notice</a>
					</p>
				</div>
				<ul className="social-media-links">

				</ul>
			</section>
		</footer>
		);
	}
}

export default Footer;