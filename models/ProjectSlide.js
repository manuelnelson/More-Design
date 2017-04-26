/**
 * Created by manny on 5/28/15.
 */
var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Slide Model
 * ==========
 */

var Slide = new keystone.List('Slide', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true }
});

Slide.add({
	name: { type: String, required: true },
	image: { type: Types.CloudinaryImage },
});


Slide.defaultColumns = 'name';
Slide.register();
