import React from 'react';
import uuidv4 from 'uuid/v4';

import withTemplate from './template';


const defaultWrapper = props => (<div>props.children</div>);

const createView = function({container, components = [], template = {}, bypass, layout}) {

	if (!typeof container === 'function') throw new Error('TEMPLATE CREATOR: Given container is invaild type: ' + typeof container);
	const _assignComponentsBy = _prepareComponents(components);
	const assignedComponents = {};
	const untemplated = {};

	for (let key in template) {
		const mountPoint = template[key];
		Object.defineProperty(assignedComponents, mountPoint, {
			value: _assignComponentsBy(mountPoint),
			writable: false,
			enumerable: true
		});
	}

	for (let key in bypass) {
		const mountPoint = bypass[key];
		Object.defineProperty(untemplated, mountPoint, {
			value: _assignComponentsBy(mountPoint),
			writable: false,
			enumerable: true
		});
	}
	const preparedTemplate = _fulfillTemplate(layout, assignedComponents);
	return withTemplate(container, preparedTemplate, untemplated);
}


function _fulfillTemplate(layoutParts, components) {
	const { Wrapper = defaultWrapper, ...rest} = layoutParts;
	const filledPartials = Object.entries(rest).map(current => {
		const assignedComponents = components[current[0]];
		const Component = current[1];
		return (
			<Component key={uuidv4()}>
				{_mapToJsxComponents(assignedComponents)}
			</Component>
		)
	});
	return (
		<Wrapper>
			{filledPartials}
		</Wrapper>
	)
} 


function _mapToJsxComponents(components) {
	return components ? components.map(Current => (<Current key={uuidv4()}/>)) : 'No modules';
}

function _prepareComponents(components) {
	return function(mountPoint) {
		return components.reduce((acc, curr) => mountPoint === curr.mountPoint ? 
			[curr.component, ...acc] : [...acc]
		, [])
	}
}



export { createView }



