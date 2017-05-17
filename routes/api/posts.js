/**
 * Created by manny on 6/24/15.
 */
keystone = require('keystone');
function list(req,res){
	keystone.list('Post').model.find().populate({
		path: 'categories author'
	}).exec(function(err,result){
		return res.json({success:true,data:result});
	})
}
function get(req,res,next){
	if(!req.params.slug){
		var err = new Error("slug required");
		return next(err)
	}
	keystone.list('Post').model.findOne({slug: req.params.slug}).populate({
		path: 'categories author images'
	}).exec(function(err,result){
		return res.json({success:true,data:result});
	})
}
exports = module.exports = { list, get};
