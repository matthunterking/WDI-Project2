const router = require('express').Router();
const users = require('../controllers/users');
const sessions = require('../controllers/sessions');
const restaurants = require('../controllers/restaurants');
const comments = require('../controllers/comments');

function secureRoute(req, res, next){
  if(!req.session.userId){
    return req.session.regenerate(() =>{
      req.flash('danger', 'You must be logged in');
      res.redirect('/');
    });
  }
  return next();
}

router.route('/')
  .get(restaurants.index);

router.route('/register')
  .get(users.new)
  .post(users.create);

router.route('/restaurant')
  .get(restaurants.show)
  .post(secureRoute, restaurants.create);

router.route('/restaurant/new')
  .get(secureRoute, restaurants.new);

router.route('/signin')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

router.route('/restaurant/:id')
  .get(restaurants.show)
  .put(secureRoute, restaurants.update)
  .delete(secureRoute, restaurants.delete)
  .post(restaurants.comments);

router.route('/users/:id')
  .get(secureRoute, users.show)
  .put(secureRoute, users.update)
  .delete(secureRoute, users.delete);

router.route('/users/:id/edit')
  .get(secureRoute, users.edit);

router.route('/comment/:id')
  .delete(secureRoute, comments.delete);

router.route('/user/:id/myreviews')
  .get(secureRoute, comments.index);

router.route('/restaurant/:id/edit')
  .get(secureRoute, restaurants.edit);

router.route('/*').get((req, res) => {
  res.render('statics/404');
});

module.exports = router;
