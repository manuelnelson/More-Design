/**
 * Created by manny on 5/28/15.
 */
var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * ProjectSlide Model
 * ==========
 */

var ProjectSlide = new keystone.List('ProjectSlide', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true }
});

ProjectSlide.add({
	name: { type: String, required: true },
	image: { type: Types.CloudinaryImage },
});


ProjectSlide.defaultColumns = 'name';
ProjectSlide.register();
