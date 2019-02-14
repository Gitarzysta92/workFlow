import React from 'react';

const BoardContainer = (props) => {
	return (
		<div className="container">
			{props.children}
		</div>
	)
}

export default BoardContainer;