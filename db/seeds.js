const mongoose          = require('mongoose');
mongoose.Promise        = require('bluebird');

const { databaseURI }   = require('../config/environment');
mongoose.connect(databaseURI);

const User              = require('../models/user');
const Restaurant        = require('../models/restaurant');

User.collection.drop();
Restaurant.collection.drop();

Restaurant.create([{
  restaurantName: 'Bar 61',
  address: '61A Streatham Hill',
  city: 'London',
  postcode: 'NW1 6FF',
  cuisine: 'International',
  img: 'http://www.realdetroitweekly.com/wp-content/uploads/2017/06/Restaurants.jpg'
},{
  restaurantName: 'Lokhandwala',
  address: '93 Charlotte Street',
  city: 'London',
  postcode: 'SW2 4LH',
  cuisine: 'Indian',
  img: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/HK_Langham_Place_Hotel_The_Place_Restaurant.jpg'
},{
  restaurantName: 'The Lounge Cafe',
  address: '113 Chalkhill Road',
  city: 'London',
  postcode: 'SE6 5HK',
  cuisine: 'British',
  img: 'https://i.pinimg.com/originals/5c/19/8b/5c198bb1e05200f2215d5aa90295bc2a.jpg'
},{
  restaurantName: 'The Oystermen Seafood Bar & Kitchen',
  address: '32 Henrietta Stree',
  city: 'London',
  postcode: 'WC2E 8NA',
  cuisine: 'British',
  img: 'http://1.bp.blogspot.com/-xY4p4-JMx4I/TfEJtHS5RFI/AAAAAAAABwQ/JwH2Fo1nQRc/s1600/IMG_1466.jpg'
}])
  .then((restaurants) => {
    console.log(`${restaurants.length} restaurants were created!`);

    return User.create({
      name: 'Sandra McDonald',
      email: 'sandra@nibble.com',
      password: 's',
      passwordConfirmation: 's',
      profileImg: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg'
    },{
      name: 'Steven Yang',
      email: 'steven@nibble.com',
      password: 's',
      passwordConfirmation: 's',
      profileImg: 'https://docfirstyeartrips.files.wordpress.com/2017/08/profile-kevin-yang.png?w=228&h=260'
    },{
      name: 'Eric Rich',
      email: 'eric@nibble.com',
      password: 'e',
      passwordConfirmation: 'e',
      profileImg: 'https://www.lawyersweekly.com.au/images/LW_Media_Library/LW-603-p28-partner-profile.jpg'
    },{
      name: 'Helen Smith',
      email: 'helen@nibble.com',
      password: 'h',
      passwordConfirmation: 'h',
      profileImg: 'http://inheridas.cl/wp-content/uploads/2016/03/594partner-profile-pic-An.jpg'
    },{
      name: 'Beth Richards',
      email: 'beth@nibble.com',
      password: 'b',
      passwordConfirmation: 'b',
      profileImg: 'https://static.makeuseof.com/wp-content/uploads/2015/11/perfect-profile-picture-background-constrast-solid.jpg'
    });
  })
  .then(users => console.log(`You have just made ${users.length} Nibble Users`))
  .catch(err => console.log(err))
  .finally(()=> mongoose.connection.close());
