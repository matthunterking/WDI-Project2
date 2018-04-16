const mongoose          = require('mongoose');
mongoose.Promise        = require('bluebird');

const { databaseURI }   = require('../config/environment');
mongoose.connect(databaseURI);

const User              = require('../models/user');

User.collection.drop();

User.create([{
  name: 'a',
  email: 'a@a.com',
  password: 'a',
  passwordConfirmation: 'a',
  isRestuarant: true,
  address: 'a',
  city: 'a',
  cuisine: 'a',
  comments: 'a'
}])
  .then(users => console.log(`You have just made ${users.length} Nibble Users`))
  .catch(err => console.log(err))
  .finally(()=> mongoose.connection.close());
