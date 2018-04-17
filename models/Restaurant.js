const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const restaurantSchema = new mongoose.Schema({
  restaurantName: String,
  img: String,
  address: String,
  city: String,
  cuisine: String,
  upVotes: {type: Number, default: 0},
  downVotes: {type: Number, default: 0},
  comments: [{
    comment: String,
    rating: String,
    createdBy: {type: mongoose.Schema.ObjectId, ref: 'User'}
  }]
  // owner: {type: mongoose.Schema.ObjectId, ref: 'User'}
});


module.exports = mongoose.model('Restaurant', restaurantSchema);
