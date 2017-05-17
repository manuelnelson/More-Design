/**
 * Created by manny on 5/28/15.
 */
var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * PostSlide Model
 * ==========
 */

var PostSlide = new keystone.List('PostSlide', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true }
});

PostSlide.add({
	name: { type: String, required: true },
	image: { type: Types.CloudinaryImage },
});


PostSlide.defaultColumns = 'name';
PostSlide.register();
