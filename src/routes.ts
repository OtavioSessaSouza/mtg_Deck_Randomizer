const express = require('express');
const route = express.Router();

const homeController = require('./controllers/homeController');
const setController = require('./controllers/setController');
const cardController = require('./controllers/cardController');
const builderController = require('./controllers/builderController');

//home
route.get('/',homeController.home);

//cards
route.get('/cards', cardController.test);
route.get('/cards/random', cardController.random);
route.get('/cards/randomCM', cardController.randomCM);


//sets
route.get('/sets', setController.test);

//build
route.get('/build', builderController.BuildCommander);

module.exports = route;