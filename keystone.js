// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load();

// Require keystone
var keystone = require('keystone'),
	handlebars = require('express-handlebars');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({

	'name': 'More Design',
	'brand': 'More Design',

	'sass': 'public',
	'static': ['public','dist'],
	'favicon': 'public/favicon.png',
	'views': 'templates/views',
	'view engine': 'hbs',

	'custom engine': handlebars.create({
		layoutsDir: 'templates/views/layouts',
		partialsDir: 'templates/views/partials',
		defaultLayout: 'default',
		helpers: new require('./templates/views/helpers')(),
		extname: '.hbs'
	}).engine,

	'emails': 'templates/emails',

	'auto update': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': 'I8J8PQCTi(X7_k~*[O:(P*4;^c(TB*n4Cx0#u,4D/FwJgVN7Ja>|1~FrWD+y/<@,'

});

keystone.set('session store','mongo');


// Load your project's Models

keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

//wysiwyg
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
keystone.set('routes', require('./routes'));

// Setup replacement rules for emails, to automate the handling of differences
// between development a production.

// Be sure to update this rule to include your site's actual domain, and add
// other rules your email templates require.

// Configure the navigation bar in Keystone's Admin UI

keystone.set('nav', {
	'pages': ['homes', 'contacts', 'abouts', 'posts', 'projects'],
	'users': 'users'
});

// Start Keystone to connect to your database and initialise the web server
keystone.start();

if(process.env.NODE_ENV && process.env.NODE_ENV.indexOf('generate') > -1){
	var sitemap = require('express-sitemap')
	//we only care about projects and blogs
	keystone.list('Project').model.find().exec(function(err,results){
		let map = {}
		let routes = {}
		results.map(x=>{
			map['/projects/' + x.slug] = ['get']
			routes['/projects/' + x.slug] = {
				'changefreq': 'monthly'
			}
		})
		keystone.list('Post').model.find().exec(function(err,posts){
				posts.map(x=>{
					map['/blog/post/' + x.slug] = ['get']
					routes['/blog/post/' + x.slug] = {
						'changefreq': 'monthly'
					}
				})
				sitemap({
					http: "https",
					url: "more-design.herokuapp.com",
					map: map,
					route: routes
				}).XMLtoFile()
		})
	})

}
