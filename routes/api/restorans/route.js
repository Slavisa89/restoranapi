const express = require('express');
const RestoranCtrl = require('./RestoranCtrl');
const route = express.Router();

route
  .get('/:restoranId/findrestoran', RestoranCtrl.findBy)
module.exports = route;
