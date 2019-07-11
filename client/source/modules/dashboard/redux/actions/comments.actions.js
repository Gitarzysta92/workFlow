import { comment } from '../_constants/actions.constants';

export const commentAction = {
	addArticle,
	editArticle,
	removeArticle
}

function addComment(commentObject) {
	const { content, metaData } = commentObject;
	return {
		type: comment.ADD,
		content: content,
		metaData: metaData,
		id: metaData.id
	}
}

function removeComment(commentObject) {
	const { metaData } = commentObject;
	return {
		type: comment.REMOVE,
		id: metaData.id
	}
}



