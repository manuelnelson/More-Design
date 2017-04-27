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
});

ProjectType.relationship({ ref: 'Project', path: 'projects', refPath: 'type' });

ProjectType.register();
