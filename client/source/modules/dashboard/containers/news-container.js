import React, { Component } from 'react';


import Pinned from '../components/pinned';
import NewsFeed from '../components/news-feed';


const newsModel = [
	{
		content: {
			title: 'Sample data',
			message: 'Lorem ipsum sit dolor',
			comments: []
		},
		metaData: {
			id: 1,
			type: 'article',
			category: 'default',
			authorId: 12,
			publishDate: new Date,
			pinned: true,
			editable: true

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



class NewsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newsModel: newsModel
		}
	}


	getPinned() {
		return this.state.newsModel.map(current => {
			if (current.meta.isPinned) return current;
		});
	}

	render() {
		return (
			<div className={'scroller'}>
				<Pinned data={this.getPinned()} />
				<NewsFeed data={this.state.newsModel} />
			</div>
		);
	}
}

export default NewsContainer;