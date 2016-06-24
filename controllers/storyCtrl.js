var Story = require('../model/storyModel.js');
var User = require('../model/userModel.js')
var Category = require('../model/categoryModel.js')

module.exports = {


  Create: function (req, res, next) {
  		Story.create(req.body, function (err, response) {
  			if (err) {
  				res.status(500).send(err)
  			} else {
  				User.findByIdAndUpdate(req.body.user, {
  					$push: {
  						'story': response
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

  CheckStory: function(req, res, next) {
    Story.find({}).exec(function(err, response) {
      if(err){
        res.status(500).json(err);
      }
      else{
        res.status(200).json(response);
      }
    })
  },


  SaveSections: function(req, res, next) {
      Story.findByIdAndUpdate(req.params.id,
        {
        $push: {
          'body': req.body
        }
      },
      {new: true},
       function(err, response){
            if(err){
                res.status(500).json(err);
            }else{
                res.status(200).json(response);
            }
        })
    },

  updateTab: function(req, res, next){
    Story.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, response) {
      if(err){
        res.status(500).json(err);
      }
      else{
        res.status(200).json(response);
      }
      })
  },

  readSelStory: function(req, res, next) {
    Story.findById(req.params.id).populate("body").exec(function(err, response) {
      if(err){
        res.status(500).json(err);
      }
      else{
        res.status(200).json(response);
      }
      })
    },

    Delete: function(req, res, next){
        Story.findByIdAndRemove(req.params.id, function(err, response){
          if(err){
            res.status(500).json(err);
          }else{
            res.status(200).json(response);
          }
        })
      }
  }
