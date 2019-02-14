import React, { Component } from 'react';


import Pinned from './components/pinned';
import NewsFeed from './components/news-feed';

class NewsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newsModel: this.props.data 
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