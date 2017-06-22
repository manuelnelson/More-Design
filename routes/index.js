/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require('keystone'),
	middleware = require('./middleware'),
	importRoutes = keystone.importer(__dirname),
	path = require('path');

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
	api: importRoutes('./api')
};

// Setup Route Bindings
exports = module.exports = function(app) {

	// Views
	// keystone.redirect('/home', '/index.html');

	app.get('/api/homes', routes.api.homes);
	app.get('/api/projects', routes.api.projects.list);
	app.get('/api/projects/:slug', routes.api.projects.get);
	app.get('/api/projectTypes', routes.api.projectTypes);
	app.get('/api/abouts', routes.api.abouts);
	app.get('/api/contacts', routes.api.contacts);
	app.get('/api/posts', routes.api.posts.list);
	app.get('/api/posts/:slug', routes.api.posts.get);
	app.get('/api/postCategories', routes.api.postCategories);
	app.get('/api/settings', routes.api.settings);
	app.get('/api/posts/:date/:direction', routes.api.posts.get);


	app.get('*', (req,res) => {
		// var userAgent = req.headers['user-agent'];
		// var socialBots = ['facebookexternalhit/1.1','Google (+https://developers.google.com/+/web/snippet/)', 'Twitterbot', 'Pinterest']
		// for(var i = 0; i<socialBots.length; i++){
		// 	if(userAgent.startsWith(socialBots[i]))
		// 	{
		// 		//send cached page
		// 		return;
		// 	}
		// }
		res.sendFile(path.join(__dirname+'/../dist/index.html'))
	});
	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

};
