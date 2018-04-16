const router      = require('express').Router();
const users       = require('../controllers/users');
const sessions    = require('../controllers/sessions');
const restaurants = require('../controllers/restaurants');

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
  .post(restaurants.create);

router.route('/restaurant/new')
  .get(restaurants.new);

router.route('/signin')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

router.route('/restaurant/:id')
  .get(restaurants.show)
  .put(restaurants.update)
  .delete(restaurants.delete);


router.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .delete(users.delete);


router.route('/users/:id/edit')
  .get(users.edit);

router.route('/restaurant/:id/edit')
  .get(restaurants.edit);



router.route('/*').get((rew, res) => {
  res.render('statics/404');
});

module.exports = router;
