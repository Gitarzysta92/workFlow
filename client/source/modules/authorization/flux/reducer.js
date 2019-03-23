'use strict';

import ADD_COMMENT from './actions';

function comments(state = initialState, action) {
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