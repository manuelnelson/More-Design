/**
 * Created by manny on 5/28/15.
 */
var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Settings Model
 * ==========
 */

var Settings = new keystone.List('Settings', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true }
});
Settings.add({
	name: { type: String, required: true },
	siteLogoWhite: { type: Types.CloudinaryImage },	
	siteLogoDark: { type: Types.CloudinaryImage }
});

Settings.defaultColumns = 'name';
Settings.register();
