const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const restaurantSchema = new mongoose.Schema({
  restaurantName: String,
  address: String,
  city: String,
  cuisine: String,
  comments: [{
    comment: String,
    userId: String
  }]
  // owner: {type: mongoose.Schema.ObjectId, ref: 'User'}
});


module.exports = mongoose.model('Restaurant', restaurantSchema);