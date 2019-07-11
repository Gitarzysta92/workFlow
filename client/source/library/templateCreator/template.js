import React from 'react';


function Template(WrappedComponent, filledTemplate, bypass) {
	return class extends React.Component {
		constructor(props) {
			super(props);
		}
	
		render() {
			return <WrappedComponent content={filledTemplate} untemplated={bypass} {...this.props} />;
		}
	}
}

export default Template;