import React from 'react';

const News = (props) => {
	return (
			<div className="col-6 pinned-news">
				<h1>{props.data.content.title}</h1>
				<p>{props.data.content.message}</p>
		</div>
	);
}

export default News;