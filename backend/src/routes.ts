const express = require('express');
const route = express.Router();

const homeController = require('./controllers/homeController');
const builderController = require('./controllers/builderController');

//home
route.get('/',homeController.home);
//build
route.get('/build', builderController.BuildCommander);

module.exports = route;