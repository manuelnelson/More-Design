/**
 * Created by manny on 5/28/15.
 */
var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Home Model
 * ==========
 */

var Home = new keystone.List('Home', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true }
});
Home.add({
	name: { type: String, required: true },
	backgroundImage1: { type: Types.CloudinaryImage },
	backgroundImage2: { type: Types.CloudinaryImage },
	backgroundImage3: { type: Types.CloudinaryImage }
});

Home.defaultColumns = 'name';
Home.register();
