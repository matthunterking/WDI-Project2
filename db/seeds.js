const mongoose          = require('mongoose');
mongoose.Promise        = require('bluebird');

const { databaseURI }   = require('../config/environment');
mongoose.connect(databaseURI);

const User              = require('../models/user');
const Restaurant        = require('../models/restaurant');

User.collection.drop();
Restaurant.collection.drop();

// Restaurant.create([{
//   restaurantName: 'Restaurant A',
//   address: '123 Street',
//   city: 'London',
//   cuisine: 'French'
// }])
//   .then((restaurants) => {
//     console.log(`${restaurants.length} restaurants were created!`);
//
//     return User.create({
//       name: 'a',
//       email: 'a@a.com',
//       password: 'a',
//       passwordConfirmation: 'a'
//     });
//   })
//   .then(users => console.log(`You have just made ${users.length} Nibble Users`))
//   .catch(err => console.log(err))
//   .finally(()=> mongoose.connection.close());
