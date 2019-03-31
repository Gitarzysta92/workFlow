'use strict';

import ADD_COMMENT from './actions';

function comments(state = [], action) {
	switch(action.type) {
		case ADD_COMMENT:
			return [{
				id: action.id,
				text: action
			},...state]
		default:
			return state;
	}
}

export default comments;