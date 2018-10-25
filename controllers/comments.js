const Restaurant = require('../models/Restaurant');

function commentIndex(req, res) {
  Restaurant
    .find()
    .populate('comments')
    .exec()
    .then(restaurants => {
      res.render('comments/index', { restaurants });
    });
}

function commentDelete(req, res) {
  Restaurant
    .findById(req.body.restuarantid)
    .exec()
    .then(restaurant => {
      const deletecomment = restaurant.comments.id(req.body.commentid);
      deletecomment.remove();
      return restaurant.save();
    })
    .then(() => {
      res.redirect(`/user/${req.body.userid}/myreviews`);
    })
    .catch(err => console.log(err));
}

module.exports = {
  index: commentIndex,
  delete: commentDelete
};
