import React from 'react';
import uuid from 'uuid';
import style from './jumbotron.scss';
import BackgroundVideo from './video';
import Title from '../utils/title';
import Button from '../utils/button';

const title = {
		id: uuid.v4(),
		titleText: 'Zobacz jak wyglądamy!'
	}


const button = {
		id: uuid.v4(),
		buttonText: 'Zobacz video',
		icon: 'asd',
		action: 'http://www.google.pl'
	}


class Jumbotron extends React.Component {

	render() {
		return (
			<div className={'container jumbotron dark'}>
				<div className={'row'}>
					<div className={'col-12 txt-center'}>
						<Title set={title} />
						<Button set={button} />
					</div>
				</div>
				<BackgroundVideo />
			</div>
		)
	}
}

export default Jumbotron;
