import React from "react";
import './css/Menu.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class Menu extends React.Component{
	render(){

  
		return(

			
				<div className="main-menu">
					<ul className="horizontal-menu">
						<li className="menu-item">
							<Link to="/" className="link">Home</Link>
						</li>
						<li className="menu-item">
							<Link to="/about" className="link">Overview</Link>
						</li>
						<li className="menu-item">
							<Link to="/admissions" className="link">Admissions</Link>
						</li>
						<li className="menu-item">
							<Link to="/current-students" className="link">Current Students</Link>
						</li>
						<li className="menu-item">
							<a href="https://www.applyweb.com/wwugrad/" className="link">Apply</a>
						</li>
					</ul>
				</div>

		);

	}

}

export default Menu;