'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var ADD_COMMENT = 'ADD_COMMENT',
    EDIT_COMMENT = 'EDIT_COMMENT',
    REMOVE_COMMENT = 'REMOVE_COMMENT',
    THUMB_UP_COMMENT = 'THUMB_UP_COMMENT',
    THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
	return {
		type: ADD_COMMENT,
		text: text,
		id: uniqueId(10)
	};
}

function editComment(id, text) {
	return {
		type: EDIT_COMMENT,
		text: text,
		id: id
	};
}

function removeComment(id) {
	return {
		type: REMOVE_COMMENT,
		id: id
	};
}

function thumbUpComment(id) {
	return {
		type: THUMB_UP_COMMENT,
		id: id,
		votes: 1
	};
}

function thumbDownComment(id) {
	return {
		type: THUMB_DOWN_COMMENT,
		id: id,
		votes: -1
	};
}
var actions = {
	addComment: addComment,
	editComment: editComment,
	removeComment: removeComment,
	thumbUpComment: thumbUpComment,
	thumbDownComment: thumbDownComment
};

function uniqueId(length) {
	var signs = 'ABCDEFGHIJKOPRST123456789',
	    id = [];

	for (var i = 0; i < length; i++) {
		var rand = Math.floor(Math.random() * signs.length);
		id.push(signs.charAt(rand));
	}

	return id.join('');
}

exports.actions = actions;
exports.ADD_COMMENT = ADD_COMMENT;
exports.EDIT_COMMENT = EDIT_COMMENT;
exports.REMOVE_COMMENT = REMOVE_COMMENT;
exports.THUMB_UP_COMMENT = THUMB_UP_COMMENT;
exports.THUMB_DOWN_COMMENT = THUMB_DOWN_COMMENT;