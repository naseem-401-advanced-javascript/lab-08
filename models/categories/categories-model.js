/* eslint-disable indent */
/* eslint-disable strict */
'use strict';
const schema = require('./categories-schema.js');
const Model = require('../mongo.js');

class Categories extends Model{
    constructor(){
        super(schema);
        // take the schema and send it to the model connect to mongo interface 
    }
}
module.exports = new Categories();