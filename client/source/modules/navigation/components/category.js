import React from 'react';
import { NavLink } from 'react-router-dom';
class Category extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const asd = this.props.items.map((current, index) => (<NavLink key={index} to={current.uri}>{current.label}</NavLink>));	
		return (
			<div>
				{asd}
			</div>
		)
	}
}

export default Category;