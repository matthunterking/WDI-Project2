const Restaurant = require('../models/restaurant');

function commentEdit(req, res) {
  Restaurant
    .findById(req.body.restaurantid)
    .populate('restaurant.comments')
    .exec()
    .then(() => {
      const comment = req.body.commentid;
      res.render('comments/edit', {commentid});
    });
}

module.exports = {
  edit: commentEdit
};
