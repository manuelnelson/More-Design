var keystone = require('keystone');

/**
 * ProjectType Model
 * ==================
 */

var ProjectType = new keystone.List('ProjectType', {
	autokey: { from: 'name', path: 'key', unique: true },
});

ProjectType.add({
	name: { type: String, required: true },
	sort: { type: Number }
});

ProjectType.relationship({ ref: 'Project', path: 'projects', refPath: 'type' });

ProjectType.register();
