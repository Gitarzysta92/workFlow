// ------------------
// Http server config
// ------------------

// Init module interface
// and set it type
const mod = new Mod(__filename);

//load node modules dependencies
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
var cors = require('cors')



	const rootDir = this.rootDirectory;
	const config = function(server, router) {
		server.use(cors());
		//server.use(logger('dev'));
		server.use(bodyParser.json());
		server.use(bodyParser.urlencoded({ extended: false }));
		server.use('/', router);
		server.use(express.static('public'))
		return server;
	}


module.exports = config;
	


