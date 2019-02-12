import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { hot } from 'react-hot-loader';

import BoardContainer from './components/board-container';

import Pinned from './components/pinned';
import News from './components/news-feed';

const dashBoardModel = [
	{
		id: 1,
		content: {
			title:
			message: 
		}
		type: 'article',
		layout: 'full-width',
		authorId: 12, 
		date: new Date,
		category: 'default'
	}
]


class DashBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {}
		};
	}

	updateUser() {
		//setState
	}

	render() {
		return (
			<BoardContainer>
				<Pinned/>
				<News/>
			</BoardContainer>
		);
	}
}


const module = {
	name: 'DashBoard',
	component: DashBoard,
	mountPath: '/dashboard',
	api: [
		{
			id: 'addActivity',
			mountPath: '/'
		},
		{
			id: 'addActivity',
			mountPath: '/'
		}
	]
}

export default module;