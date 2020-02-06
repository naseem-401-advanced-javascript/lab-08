/* eslint-disable camelcase */
/* eslint-disable strict */
'use strict';
const productsSchema = require('./products-schema.js');
const Model = require('../mongo.js');
class Products extends Model{
  constructor(){
    super(productsSchema);
  }
}

module.exports = new Products();