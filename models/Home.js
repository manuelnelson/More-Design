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
var storage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: keystone.expandPath('./public/files'),
		publicPath: '/public/files/',
	}
});
Home.add({
	name: { type: String, required: true },
	backgroundImage1: { type: Types.File, storage:storage },
	backgroundImage2: { type: Types.File, storage:storage },
	backgroundImage3: { type: Types.File, storage:storage }
});

Home.defaultColumns = 'name';
Home.register();