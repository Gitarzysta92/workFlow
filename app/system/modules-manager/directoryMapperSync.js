const fs = require('fs');
const path = require('path');


//
//
//

class DirMap {
	constructor(startDir, ignored) {
		this.directory = startDir.split(path.sep).join('/');
		this._ignorePattern = ignored || [];
		this._defaultPattern = this._prepareRegexPattern(['node_modules', '.gitignore','.git']);
	}

	// DirMap interface
	getFilesList(includeFiles) {
		const filesArray = this._dirWalker(this.directory);
		return this._validate(this._createList(filesArray), this._dirInclude, includeFiles);		
	}

	getSingleFile(fileQuery) {
		const result = this.getFilesList(fileQuery)
		return result[0];
	}

	// Recursive dir walker
	// input:path = base directory
	// output:promise = array of files directories
	_dirWalker(path) {
		const currentElement = fs.statSync(path);
		const list = [];
			
		if (currentElement.isDirectory()) {
			let pathList = fs.readdirSync(path);	
			pathList = this._validate(pathList, this._dirExclude, this._ignorePattern);
			pathList.forEach(current => {
					const fullPath = path.concat('/'+ current);
					const results = this._dirWalker(fullPath);
					list.push(results);	
			});
			return list;
		} else {
			return path;
		}
	}

	_createList(filesArray, aggregator = []) {
		const result = aggregator;
		filesArray.forEach(current => {
			typeof current === 'object' ? this._createList(current, result) : result.push(current);
		});
		return result;
	}

	//
	// Utils
	//

	_validate(dirArray, validateType, toValidate) {
		return dirArray.filter(current => {
			if (validateType(current, this._prepareRegexPattern(toValidate))) {	
				return current;
			}
		}); 
	}

	// Exclude choosen directories
	// input:string = base directory
	// output:boolean = true if not ignored
	_dirExclude(directory, pattern) {
		const node = pattern ? pattern : /(.)/i;
		return !node.test(directory);
	}

	_dirInclude(directory, pattern) {
		const node = pattern ? pattern : /(.)/i;
		return node.test(directory);
	}

	// Prepare regexp object with exclude pattern
	// input:array = list of exluded elements
	// output:object = prepared pattern
	_prepareRegexPattern(elementsArray = []) {
		const regStr = elementsArray.map(current => {
			return current.charAt(0) === '.' ? '\\' + current : current;
		}).join('|');
		const regex = new RegExp('(' + regStr + ')','ig');
		return regStr.length > 0 ? regex : null;
	}
}







module.exports = DirMap;