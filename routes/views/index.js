var keystone = require('keystone');

exports = module.exports = function(req, res) {
	keystone.redirect('/', '/index.html');
	// var view = new keystone.View(req, res);
	//
	// // Render the view
	// view.render('/index.html');
};
