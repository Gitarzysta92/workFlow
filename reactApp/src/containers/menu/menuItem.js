import React from 'react';
import Menu from './menu';

class MenuItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			submenu: this.isSubmenu(),
			toggle: false
		};
		this.toggle = this.toggle.bind(this);
		this.getDisplay = this.getDisplay.bind(this);
	}

	isSubmenu() {
		if (typeof this.props.action === 'object') {
			return true;
		} else {
			return false;
		}
	}

	toggle() {
		this.setState(prevState => {
			if (prevState.toggle) {
				return {toggle: false}
			} else {
				return {toggle: true}
			}
		});
	}

	getDisplay(state) {
		this.setState({ toggle: state });
		//console.log(state);
	}

	get item() {
		if (this.state.submenu) {
			
			return (
				<li>
					<a href='#' onClick={this.toggle}>{this.props.text}</a>
					<Menu 
						isSubmenu={this.state.submenu}
						isDisplay={this.state.toggle} 
						itemsList={this.props.action}
						synchro={this.getDisplay}
					/>
				</li>
			)
		} else {
			return <li><a href={this.props.action}>{this.props.text}</a></li>;	
		}
	}

	render() {
		return (
			this.item
		)
	}
}


export default MenuItem;
