const router      = require('express').Router();
const users       = require('../controllers/users');
const sessions    = require('../controllers/sessions');

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
  .get(users.index);

router.route('/register')
  .get(users.new)
  .post(users.create);

router.route('/users/new')
  .get(users.new);

router.route('/signin')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

router.route('/restuarant/:id')
  .get(users.restaurantShow);


router.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .delete(users.delete);


router.route('/users/:id/edit')
  .get(users.edit);



router.route('/*').get((rew, res) => {
  res.render('statics/404');
});

module.exports = router;
