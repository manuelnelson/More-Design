/**
 * Created by manny on 5/28/15.
 */
var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * About Model
 * ==========
 */

var About = new keystone.List('About', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true }
});
About.add({
	name: { type: String, required: true },
	content: { type: Types.Html, wysiwyg: true },
});

About.defaultColumns = 'name';
About.register();
