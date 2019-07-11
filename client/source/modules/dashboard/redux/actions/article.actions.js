import { article } from '../_constants/actions.constants';

export const articleAction = {
	addArticle,
	editArticle,
	removeArticle
}

function addArticle(articleObject) {
	const { content, metaData } = articleObject;
	return {
		type: article.ADD,
		content: content
		metaData: metaData,
		id: metaData.id
	};
}

function editArticle(articleObject) {
	const { content, metaData } = articleObject;
	return {
		type: article.EDIT,
		content: content,
		id: metaData.id
	}
}

function removeArticle(articleObject) {
	const { metaData } = articleObject;
	return {
		type: article.REMOVE,
		id: metaData.id
	}
}





