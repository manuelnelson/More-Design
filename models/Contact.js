/**
 * Created by manny on 5/28/15.
 */
var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Contact Model
 * ==========
 */

var Contact = new keystone.List('Contact', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true }
});
Contact.add({
	name: { type: String, required: true },
	content: { type: Types.Html, wysiwyg: true },
	instagramUrl: { type: String },
	facebookUrl: { type: String },
	pinterestUrl: { type: String }	
});

Contact.defaultColumns = 'name';
Contact.register();
