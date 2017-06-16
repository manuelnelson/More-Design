require('dotenv').load();

var express = require('express'),
    app = express(),
    keystone = require('keystone'),
    serve = require('serve-static'),
    favicon = require('serve-favicon'),
    body = require('body-parser'),
    cookieParser = require('cookie-parser'),
    multer = require('multer');

var cookieSecret = 'lasdfjoijqw3r8uadsflkj';


app.use(cookieParser(cookieSecret));
app.use(body.urlencoded({ extended: true }));
app.use(body.json());
app.use(multer());

keystone.init({
	'name': 'More Design',
	'brand': 'More Design',

	'sass': 'public',
	'static': ['public','dist'],
	'favicon': 'public/favicon.png',
	'views': 'templates/views',

	'emails': 'templates/emails',

	'auto update': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': 'I8J8PQCTi(X7_k~*[O:(P*4;^c(TB*n4Cx0#u,4D/FwJgVN7Ja>|1~FrWD+y/<@,'
});

// Let keystone know where your models are defined. Here we have it at the `/models`
keystone.import('models');
keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});
keystone.set('session store','mongo');

keystone.set('wysiwyg additional buttons', 'forecolor backcolor undo underline | styleselect fontsizeselect table spellchecker removeformat');
keystone.set('wysiwyg additional plugins', 'paste textcolor table');
keystone.set('wysiwyg additional options', {
	paste_as_text: true,
	valid_elements: "*[*]",
	browser_spellcheck :true,
	external_plugins: {
		uploadimage: '/js/uploadimage/plugin.min.js'
	}
});
keystone.set('wysiwyg cloudinary images', 'true');

// Load your project's Routes
keystone.set('routes', require('./routes')(app));

keystone.app = app;
keystone.start();
