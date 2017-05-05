/**
 * Created by manny on 6/24/15.
 */
keystone = require('keystone');
function list(req,res){
	keystone.list('Post').model.find().populate({
		path: 'categories'
	}).exec(function(err,result){
		return res.json({success:true,data:result});
	})
}
function get(req,res,next){
	if(!req.params.slug){
		var err = new Error("id parameter required");
		return next(err)
	}
	keystone.list('Post').model.findOne({slug: req.params.slug}).populate({
		path: 'categories'
	}).exec(function(err,result){
		return res.json({success:true,data:result});
	})
}
exports = module.exports = { list, get};
