var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Post = new keystone.List('Post', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Post.add({
	title: { type: String, required: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	date: { type: Types.Date, index: true },
	thumbnailImage: { type: Types.CloudinaryImage },
	locationImage: { type: Types.CloudinaryImage },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
	images: { type: Types.Relationship, ref: 'PostSlide', many: true},
	categories: { type: Types.Relationship, ref: 'PostCategory', many: true },
});

Post.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});
Post.schema.pre('save', function(next) {
    if (!this.date) {
        this.date = new Date();
    }
    next();
});

Post.defaultColumns = 'title, author|20%, date|20%';
Post.register();
