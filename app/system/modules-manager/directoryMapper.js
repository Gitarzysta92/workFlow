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
	async getFilesList(includeFiles) {
		const filesArray = await this._dirWalker(this.directory);
		return this._validate(this._createList(filesArray), this._dirInclude, includeFiles);		
	}

	async getSingleFile(fileQuery) {
		const result = await this.getFilesList(fileQuery)
		return result[0];
	}

	// Recursive dir walker
	// input:path = base directory
	// output:promise = array of files directories
	async _dirWalker(path) {
		const currentElement = await this._reading(path);
		const list = [];
			
		if (currentElement.isDirectory()) {
			let pathList = await this._listing(path);	
			pathList = this._validate(pathList, this._dirExclude, this._ignorePattern);
			await this._forEachAsync(pathList, async current => {
					const fullPath = path.concat('/'+ current);
					const results = await this._dirWalker(fullPath);
					list.push(results);	
			});
			return list;
		} else {
			return path;
		}
	}

	// Get elements of passed directory
	// input:path = base directory
	// output:promise = array of directory elements
	_listing(path) {
		const statResult = new Promise((resolve, reject) => {
			fs.readdir(path, (error, fileList) => {
				resolve(fileList);
				reject(error);
			});
		});
		return statResult;
	}

	// Get stats of passed directory
	// input:path = base directory
	// output:promise = file stats object
	_reading(path) {
		const readResult = new Promise((resolve, reject) => {
			fs.stat(path, (error, file) => {
				resolve(file);
				reject(error);
			});
		});
		return readResult;
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

	//Asynchoronus forEach loop
	async _forEachAsync(array, callback) {
		for(let index = 0; index < array.length; index++) {
			await callback(array[index], index, array);
		}
	}

}







module.exports = DirMap;