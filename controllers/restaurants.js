const Restaurant = require('../models/Restaurant');

function restaurantIndex(req, res){
  Restaurant
    .find()
    .exec()
    .then(restaurants => {
      res.render('home', { restaurants });
    });
}

function restaurantShow(req, res) {
  Restaurant
    .findById(req.params.id)
    .populate('comments.createdBy')
    .exec()
    .then(restaurant => res.render('restaurants/show', { restaurant }));
}

function restaurantsNew(req, res) {
  res.render('restaurants/new');
}

function restaurantsCreate(req, res) {
  Restaurant
    .create(req.body)
    .then(() => res.redirect('/'));
}

function restaurantsEdit(req, res) {
  Restaurant
    .findById(req.params.id)
    .exec()
    .then(restaurant => res.render('restaurants/edit', { restaurant }));
}

function restaurantsUpdate(req, res) {
  Restaurant
    .findById(req.params.id)
    .exec()
    .then(restaurant => {
      restaurant = Object.assign(restaurant, req.body);
      return restaurant.save();
    })
    .then(restaurant => res.redirect(`/restaurant/${restaurant.id}`));
}

function restaurantsDelete(req, res) {
  Restaurant
    .findById(req.params.id)
    .exec()
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'));
}

function restaurantComment(req, res) {
  Restaurant
    .findById(req.params.id)
    .exec()
    .then(restaurant => {
      restaurant.comments.push(req.body);
      if(req.body.rating === 'U') {
        restaurant.upVotes += 1;
      } else if (req.body.rating === 'D') {
        restaurant.downVotes += 1;
      }
      return restaurant.save();
    })
    .then(restaurant => res.redirect(`/restaurant/${restaurant.id}`));
}

module.exports = {
  index: restaurantIndex,
  show: restaurantShow,
  new: restaurantsNew,
  create: restaurantsCreate,
  edit: restaurantsEdit,
  update: restaurantsUpdate,
  delete: restaurantsDelete,
  comments: restaurantComment
};
