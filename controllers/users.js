const User = require('../models/user');

function usersIndex(req, res){
  User
    .find({isRestuarant: 'true' })
    .exec()
    .then(users => {
      res.render('home', {users});
    });
}

function usersNew(req, res) {
  res.render('sessions/new');
}

function usersCreate(req, res) {
  User
    .create(req.body)
    .then(() => res.redirect('/'));
}

function usersEdit(req, res) {
  User
    .findById(req.params.id)
    .exec()
    .then(user => res.render('users/edit', {user}));
}


module.exports = {
  index: usersIndex,
  // show: usersShow,
  // delete: usersDelete,
  new: usersNew,
  create: usersCreate,
  edit: usersEdit
  // update: usersUpdate
};
