const express = require('express');
const route = express.Router();

const homeController = require('./controllers/homeController');
const cardController = require('./controllers/cardController');
const builderController = require('./controllers/builderController');

//home
route.get('/',homeController.home);
//cards
route.get('/testcard',cardController.test);
route.get('/randomCM',cardController.randomCM);
//build
route.get('/build', builderController.BuildCommander);

module.exports = route;