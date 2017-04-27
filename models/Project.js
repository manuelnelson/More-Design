var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Project Model
 * ==========
 */

var Project = new keystone.List('Project', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Project.add({
	title: { type: String, required: true },
	date: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	location: { type: String },
	thumbnailImage: { type: Types.CloudinaryImage },
	type: { type: Types.Relationship, ref: 'ProjectType'},
	images: { type: Types.Relationship, ref: 'ProjectSlide', many: true},
});


Project.defaultColumns = 'title, date';
Project.register();
