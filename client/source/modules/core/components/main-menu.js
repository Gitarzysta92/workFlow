import React from 'react';
import { Link } from "react-router-dom";

class MainMenu extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ul>
				<li><Link to={this.props.basePath + "/board"}>CooBoard</Link></li>
				<li><Link to="/register">Register</Link></li>
				<li><Link to="/logout">Logout</Link></li>
			</ul>
		)
	}
}


export default MainMenu;