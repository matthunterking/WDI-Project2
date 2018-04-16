const User = require('../models/user');

function usersNew(req, res) {
  res.render('sessions/new');
}

function usersShow(req, res) {
  User
    .findById(req.params.id)
    .populate()
    .exec()
    .then(user => res.render('users/show', {user}));
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

function usersUpdate(req, res) {
  User
    .findById(req.params.id)
    .exec()
    .then(user => {
      user = Object.assign(user, req.body);
      return user.save();
    })
    .then(user => res.redirect(`/users/${user.id}`));
}

function usersDelete(req, res) {
  User
    .findById(req.params.id)
    .exec()
    .then(user => user.remove())
    .then(() => res.redirect('/'));
}


module.exports = {
  show: usersShow,
  delete: usersDelete,
  new: usersNew,
  create: usersCreate,
  edit: usersEdit,
  update: usersUpdate
};
