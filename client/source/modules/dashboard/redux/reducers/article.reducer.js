
import { article } from '../constants/actions.constant.js';


export function articles(state = [], action) {
	switch(action.type) {
		case article.ADD:
			return [{
				id: action.id,
				content: action.content,
				metaData: _secure(action.metaData)

			}, ...state]
		case article.EDIT:
			return state.map(article => article.id === action.id ?
				Object.assign(article.content, action.content) : article);
		case article.REMOVE:
			return state.filter(article => article.id === action.id ?
				false: true)
	}
}


function _secure(dataObject) {
	const securedCopy = {};

	for (let key in dataObject) {
		dataObject.hasOwnProperty(key) &&
		Object.defineProperty(securedCopy, key, {
			value: dataObject[key]
		});
	}

	return securedCopy;
}