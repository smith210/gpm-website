import React from "react";
import PropTypes from "prop-types";
import ReactDOM from 'react-dom';
import TopBar from "./components/Site-Header.js";
import Splash from "./components/Splash.js";
import Menu from "./components/Menu.js";
import Logo from "./components/WWU-Logo.js";
import QuickLinks from "./components/WWUQuickLinks.js";
import './Header.css';

class Header extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			isOpen: false,
			right: -100,
			opacity: 0,
		}
		
	}

	menuToggle(i){
		i.preventDefault();
		this.setState({
			isOpen: !this.state.isExpanded,
			right: 0,
			opacity: 1,
		})
	}

	menuUntoggle(i){
		i.preventDefault();
		this.setState({
			isOpen: !this.state.isExpanded,
			right: -100,
			opacity: 0,
		})

	}



	render(){


		const {isOpen, right, opacity} = this.state;
                const currRight = isOpen ? right: -100;
		const currOpacity = isOpen ? opacity : 0;
		const shouldDisplay = (right == 0 && opacity == 1) ? '' : 'none';


		return(

			<header className='site-header'>
				<div className='western-header'>

					<TopBar />

					
					<button className='mobile-menu-icon' onClick={(i)=>this.menuToggle(i)}>
					   <div className='menu-line'></div>
					   <div className='menu-line'></div>
					   <div className='menu-line'></div>
					</button>

				</div>

				<div className='splash'>
					<Splash />
				</div>

				<nav className="region-nav" style={{right: currRight + '%', opacity: currOpacity}}>
					<div className="mobile-quick-links">
						<QuickLinks />
						<button className='mobile-menu-icon' onClick={(i)=>this.menuUntoggle(i)}>
					   		X
						</button>
					</div>
					<Menu />
			        </nav>

			</header>

		);
	
	}

}

export default Header;