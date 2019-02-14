import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { hot } from 'react-hot-loader';
import style from './style.scss';

import NewsContainer from './news-container';
import BoardContainer from './components/board-container';



const newsModel = [
	{
		content: {
			title: 'Sample data',
			message: 'Lorem ipsum sit dolor'
		},
		meta: {
			id: 1,
			type: 'article',
			category: 'default',
			authorId: 12,
			publishDate: new Date,
			comments: true,
			isPinned: true
		}
	},
	{
		content: {
			title: 'Sample data',
			message: 'Lorem ipsum sit dolor'
		},
		meta: {
			id: 2,
			type: 'article',
			category: 'default',
			authorId: 12, 
			publishDate: new Date,
			comments: true,
			isPinned: true
		}
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
				<NewsContainer data={newsModel}/>
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