
/**
 * Created by manny on 6/24/15.
 */
keystone = require('keystone'),

exports = module.exports = function(req, res) {
	keystone.list('About').model.find().sort('sort').exec(function(err,result){
		return res.json({success:true,data:result});
	})
};
