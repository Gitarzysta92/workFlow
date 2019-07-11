import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { hot } from 'react-hot-loader';


import SingleNews from './single-news';


class NewsFeed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			news: this.props.data
		};
	}

	agregateNews() {
		return [...this.state.news, ...this.props.data];
	}

	prepareNews = () => {
		return this.state.news.map(current => <SingleNews key={current.meta.id} data={current}/>);
	}

	render() {
		return (
			<div className={'news'}>
				{this.prepareNews()}
			</div>
		);
	}
}


export default NewsFeed;