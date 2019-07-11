import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { hot } from 'react-hot-loader';

import SingleNews from './pinned-news';


class PinnedNews extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {}
		};
	}

	prepareNews = () => {
		return this.props.data.map(current => <SingleNews key={current.meta.id} data={current}/>);
	}


	render() {
		return (
			<div className={'pinned'}>
				{this.prepareNews()}
			</div>
		);
	}

}



export default PinnedNews;