import React from 'react';

const LeftSidebar = (props) => {
	return (
		<div className="col-3">
			{props.children}
		</div>
	)
};

const CenterContainer = (props) => {
	return (
		<div className="col-6">
			{props.children}
		</div>
	)
};

const RightSidebar = (props) => {
	return (
		<div className="col-3">
			
		</div>
	)
};

const Wrapper = (props) => {
	return (
		<main className={'main-container'}>
			<div className="row">
				{props.children}
			</div>
		</main>
	)
}


export const appLayout = { LeftSidebar, CenterContainer, RightSidebar, Wrapper };