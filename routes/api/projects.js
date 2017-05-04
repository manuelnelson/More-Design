/**
 * Created by manny on 6/24/15.
 */
keystone = require('keystone');
function list(req,res){
	keystone.list('Project').model.find().populate({
		path: 'type'
	}).exec(function(err,result){
		return res.json({success:true,data:result});
	})
}
function get(req,res,next){
	if(!req.params.slug){
		var err = new Error("id parameter required");
		return next(err)
	}
	keystone.list('Project').model.findOne({slug: req.params.slug}).populate({
		path: 'type images'
	}).exec(function(err,result){
		return res.json({success:true,data:result});
	})
}
exports = module.exports = { list, get};
