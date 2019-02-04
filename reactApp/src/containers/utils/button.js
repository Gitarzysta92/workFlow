import React from 'react';

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			icon: false
		}
	}

	get icon() {
		return this.state.icon ? this.props.set.icon : ''
	}

	render() {
		return <a className={'btn'} href={this.props.set.action}>
					{this.props.set.buttonText}
					{this.icon} 
				</a>
	}
}


export default Button;