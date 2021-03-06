const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
const router = require('./config/router');
mongoose.Promise = require('bluebird');
const session = require('express-session');
const flash = require('express-flash');
const User = require('./models/User');

const { port, databaseURI } = require('./config/environment');
const customResponses = require('./lib/customResponses');

mongoose.connect(databaseURI);

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.use(express.static(`${__dirname}/public`));

app.use(morgan('dev'));
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride(req => {
  if(req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(flash());
app.use(customResponses);

app.use(session({
  secret: process.env.SESSION_SECRET || 'secret',
  resave: false,
  saveUninitialized: false
}));

app.use((req, res, next) => {
  if(!req.session.userId) return next();
  User
    .findById(req.session.userId)
    .then((user) =>{
      req.session.userId._id = user._id;
      res.locals.user = user;
      res.locals.isLoggedIn = true;
      next();
    });
});

app.use(router);

app.use((err, req, res, next) =>{
  if(err) {
    err.status = err.status || 500;
    err.message = err.message || 'Internal Server Error';
    res.status(err.status);
    res.locals.err = err;
    return res.render(`statics/${err.status}`);
  }
  next();
});

app.listen(port, () => console.log(`Running on ${port}`));
