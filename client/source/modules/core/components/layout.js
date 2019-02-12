import React from 'react';

const LeftBar = (props) => {
	return (
		<div className="col-3">
			{props.children}
		</div>
	)
};

const MainContainer = (props) => {
	return (
		<div className="col-6">
			{props.children}
		</div>
	)
};

const RightBar = (props) => {
	return (
		<div className="col-3">
			{props.children}
		</div>
	)
}
;

export { LeftBar, MainContainer, RightBar };