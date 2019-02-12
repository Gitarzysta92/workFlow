import React from 'react';



class CooBoard extends React.Component {

	render() {
		return (
			<div>
			{'CooBoard'}
			</div>
		);
	}
}


const module = {
	name: 'CooBoard',
	component: CooBoard,
	mountPath: '/cooboard',
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