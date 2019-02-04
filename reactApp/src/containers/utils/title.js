import React from 'react';

class Title extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <h1>{this.props.set.titleText}</h1>
	}
}


export default Title;