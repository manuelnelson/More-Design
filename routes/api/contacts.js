/**
 * Created by manny on 6/24/15.
 */
keystone = require('keystone'),

exports = module.exports = function(req, res) {
	keystone.list('Contact').model.findOne().exec(function(err,result){
		return res.json({success:true,data:result});
	})
};
