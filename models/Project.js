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

Project.add(
	{
		title: { type: String, required: true },
		subTitle: { type: String },
		description: { type: Types.Html, wysiwyg: true},
		// date: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
		date: { type: Types.Date, index: true },
		location: { type: String },
		thumbnailImage: { type: Types.CloudinaryImage },
		type: { type: Types.Relationship, ref: 'ProjectType'},
		images: { type: Types.Relationship, ref: 'ProjectSlide', many: true}
	},
	'SEO Tags',
	{
		metaTitle: {
			label: 'Title',
			type: String,
			dependsOn: { overrideTitleTag: true }
		},
		metaDescription: {
			label: 'Description',
			type: String
		},
		metaKeywords: {
			label: 'Keywords',
			type: String
		}
	},
  'OG Tags',
	{
		ogImage: {
			label: 'Image',
			type: Types.CloudinaryImage,
			note: `Recommended Size: 1200x630`
		}
	}
);


Project.defaultColumns = 'title, date';
Project.register();
