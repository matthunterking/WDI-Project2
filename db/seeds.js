const mongoose          = require('mongoose');
mongoose.Promise        = require('bluebird');

const { databaseURI }   = require('../config/environment');
mongoose.connect(databaseURI);

const User              = require('../models/user');
const Restaurant        = require('../models/restaurant');

User.collection.drop();
Restaurant.collection.drop();

Restaurant.create([{
  restaurantName: 'Restaurant A',
  address: '123 Street',
  city: 'London',
  cuisine: 'French',
  img: 'http://www.realdetroitweekly.com/wp-content/uploads/2017/06/Restaurants.jpg'
},{
  restaurantName: 'Restaurant B',
  address: '456 Street',
  city: 'London',
  cuisine: 'British',
  img: 'http://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2018/02/23/restaurantes_puebla_muraldelospoblanos.jpg?itok=TG0l9tIH'
}])
  .then((restaurants) => {
    console.log(`${restaurants.length} restaurants were created!`);

    return User.create({
      name: 'Eric the Guinea Pig',
      email: 'a@a.com',
      password: 'a',
      passwordConfirmation: 'a',
      profileImg: 'https://cdn3.volusion.com/kapts.nrbqf/v/vspfiles/photos/GUINEAPIGONEDRESSED-2.jpg?1496409148'
    },{
      name: 'Jenny the Guinea Pig',
      email: 'j@j.com',
      password: 'j',
      passwordConfirmation: 'j',
      profileImg: 'https://i.ebayimg.com/images/g/UfQAAOSwT5xZR6U9/s-l1600.jpg'
    });
  })
  .then(users => console.log(`You have just made ${users.length} Nibble Users`))
  .catch(err => console.log(err))
  .finally(()=> mongoose.connection.close());
