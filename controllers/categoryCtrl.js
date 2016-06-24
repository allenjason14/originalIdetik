var User = require("../model/userModel.js");
var  Story = require("../model/storyModel.js");
var Category = require("../model/categoryModel.js")

module.exports = {

  Create: function (req, res, next) {
    console.log('first hit from backend create cat')
  		Category.create(req.body, function (err, response) {
        console.log("hit from backend createCat");
        if (err) {
  				res.status(500).send(err)
  			} else {
  				User.findByIdAndUpdate(req.body.user, {
  					$push: {
  						'category': response
  					}
  				},
           function (err, user) {
  					console.log(user);
  					if (err) {
  						res.status(500).send(err)
  					} else {
  						res.status(200).send(response)
  					}
  				})
  			}
  		})
  	},

    Read: function (req, res, next) {
      Category.findOne({_id: req.params.id}).populate("story").exec(function(err, response) {
        if (err){
          res.status(500).json(err);
        }
        else{
          res.status(200).json(response);
        }
      })
    },


    readSelCategory: function(req, res, next) {
      Category.findById(req.params.id).populate("story").exec(function(err, response) {
        if(err){
          res.status(500).json(err);
        }
        else{
          res.status(200).json(response);
        }
        })
      },

    Update: function (req, res, next) {
      Category.findByIdAndUpdate(req.params.id, {
        $push:
          req.body
      },
    function(err, response){
      if (err) {
        res.status(500).json(err);
      }
      else {
        res.status(200).json(response);
      }
    })
  },

  addToCat: function(req, res, next) {
    Category.findByIdAndUpdate(req.body.name, {
      $addToSet: {
        'story': req.body.id
      }
    }, function(err, response){
    if(err){
        res.status(500).json(err);
      }else{
        res.status(200).json(response);
      }
    })
  },


  // addToCat: function(req, res, next){
  // Category.find({_id:{$in:req.body.toUpdate}}).update({
  //   $addToSet: {
  //     'story': req.body.name
  //   }
  // }).exec(function(err, response){
  //   console.log(response);
  //     if(err){
  //       res.status(500).json(err);
  //     }else{
  //       res.status(200).json(response);
  //     }
  //   })
  // },


  // addToCat: function(req, res, next){
  // console.log(req.body._id);
  // Category.find({_id:{$in:req.body._id}}), {
  //   $addToSet: {
  //       'story': req.body
  //   }
  // },function(err, response){
  //   console.log(response);
  //     if(err){
  //       res.status(500).json(err);
  //     }else{
  //       res.status(200).json(response);
  //     }
  //   })
  // },

  // .remove().exec(function(err, response){
  //   console.log(response);
  //     if(err){
  //       res.status(500).json(err);
  //     }else{
  //       res.status(200).json(response);
  //       }
  //     })
  //   },

  removeFromCatArray: function(req, res, next) {
    Category.findByIdAndUpdate(req.params.id,
      {
      $pull: {
        "story": req.body.story
      }
    }, function(err, response) {
      if(err) {
        res.status(500).json(err);
      }
      else{
        res.status(200).json(response);
      }
    })
  }
}
