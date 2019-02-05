import React from 'react';



class Logo extends React.Component {
	
	render() {
		return (
			<img src={this.props.image.url} />
		)
	}
}


export default Logo;
