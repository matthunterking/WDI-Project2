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

router.route('/user/:id')
  .get(users.edit);

router.route('/signin')
  .get(sessions.new)
  .post(sessions.create);

router.route('/users/new')
  .get(users.new);

router.route('/logout')
  .get(sessions.delete);


router.route('/*').get((rew, res) => {
  res.render('statics/404');
});

module.exports = router;
