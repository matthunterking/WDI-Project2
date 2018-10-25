const User = require('../models/User');

function newRoute(req, res) {
  res.render('sessions/signin');
}

function createRoute(req, res) {
  User
    .findOne({ email: req.body.email })
    .then((user) => {
      if(!user || !user.validatePassword(req.body.password)){
        req.flash('danger', 'Wrong Credentials');
        res.status(401).render('sessions/signin');
      }
      req.session.userId = user.id;
      req.session.isLoggedIn = true;
      res.redirect('/');
    });
}

function deleteRoute(req, res){
  return req.session.regenerate(() => res.render('sessions/signout'));
}

module.exports = {
  new: newRoute,
  create: createRoute,
  delete: deleteRoute
};
