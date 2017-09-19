/**
 * Created by manny on 6/24/15.
 */
keystone = require('keystone');
let _ = require('lodash');
function list(req,res){
	keystone.list('Post').model.find().populate({
		path: 'categories author'
	}).sort('date').exec(function(err,results){
		//size thumbnail images
		let withFitImage = _.map(results, (result) => {
			result = _.extend(result.toObject(),{
				thumbnailFitImage: result._.thumbnailImage.fit(500,500).replace('/v'+result.thumbnailImage.version, '').replace('keystone-demo', 'more-design-build')
			})
			return result;
		})
		console.log(withFitImage);
		return res.json({success:true,data:withFitImage});

		// return res.json({success:true,data:result});
	})
}
function get(req,res,next){
	if(!req.params.slug && !req.params.date){
		var err = new Error("slug required");
		return next(err)
	}
	if(req.params.date){
		var posts = keystone.list('Post').model;
		if(req.params.direction == 'next'){
			posts = posts.findOne({date:{$gt:req.params.date}}).sort('date');
		}else{
			posts = posts.findOne({date:{$lt:req.params.date}}).sort('-date');
		}
		posts.exec(function(err,result){
			return res.json({success:true,data:result});
		})
	}else{
		keystone.list('Post').model.findOne({slug: req.params.slug}).populate({
			path: 'categories author images'
		}).exec(function(err,result){
			return res.json({success:true,data:result});
		})
	}
}
exports = module.exports = { list, get};
