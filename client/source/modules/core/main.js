import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LeftBar, MainContainer, RightBar } from './components/layout';


import imported from './modules';
import MainMenu from './components/main-menu';


class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}


	services = () => {
		const routes = imported.modules.map(current => {
			console.log(this.props.match.url + current.mountPath);
			return <Route key={current.name} path={this.props.match.url + current.mountPath} component={current.component}/>
		});
		return routes;
	}

	render() {
		return (
			<main className={'main-container'}>
				<div className="row">
					<LeftBar>
						<MainMenu basePath={this.props.match.url} items={imported.modules}/>
					</LeftBar>

					<MainContainer>
						{this.services()}
					</MainContainer>

					<RightBar>
						{'asdasdasdasd'}
					</RightBar>
				</div>
			</main>
		)
	}
}


export default hot(module)(Main);