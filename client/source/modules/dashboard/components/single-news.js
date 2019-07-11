import React from 'react';

const News = (props) => {
	return (
		<div className="row">
			<div className="col single-news">
				<h1>{props.data.content.title}</h1>
				<p>{props.data.content.message}</p>
			</div>
		</div>
	);
}

export default News;