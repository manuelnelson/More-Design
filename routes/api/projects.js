/**
 * Created by manny on 6/24/15.
 */
keystone = require('keystone');
let _  = require('lodash');
function list(req,res){
	keystone.list('Project').model.find().populate({
		path: 'type'
	}).exec(function(err,results){
		//size thumbnail images
		let withFitImage = _.map(results, (result) => {
			result = _.extend(result.toObject(),{
				thumbnailFitImage: result._.thumbnailImage.fit(500,500).replace('/v'+result.thumbnailImage.version, '').replace('keystone-demo', 'more-design-build')
			})
			return result;
		})
		return res.json({success:true,data:withFitImage});
	})
}
function get(req,res,next){
	if(!req.params.slug){
		var err = new Error("slug required");
		return next(err)
	}
	keystone.list('Project').model.findOne({slug: req.params.slug}).populate({
		path: 'type images'
	}).exec(function(err,results){
		return res.json({success:true,data:results});
	})
}
exports = module.exports = { list, get};
