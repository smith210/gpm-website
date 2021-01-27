import React from 'react';
import PropTypes from 'prop-types';

class Collapsible extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isExpanded: false
		}
		
	}

	handleToggle(i){
		i.preventDefault();
		this.setState({
			isExpanded: !this.state.isExpanded,
			height: this.refs.content.clientHeight,
		})
	}

	render(){
		const {title, children} = this.props;
		const {isExpanded, height} = this.state;
		const currHeight = isExpanded ?  height : 0;

		return(
		    <div className={`panel ${isExpanded ? 'is-opened' : ''}`} onClick={(i)=>this.handleToggle(i)}>
                    
		    <div className={`question-box ${isExpanded ? 'is-opened' : ''}`}>
			<div className="question">
				{title}
			</div>
		    </div>
		    
		    <div className="collapsible" style ={{height: currHeight+'px'}}>
		         <div className="answer" ref="content">
		    	     {children}
		         </div>
		    </div>
		    
		    </div>
		)
	}
}

Collapsible.propTypes = {
	title: PropTypes.string,
}

export default Collapsible;