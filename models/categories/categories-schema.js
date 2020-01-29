'use strict';

const mongoose = require('mongoose');

/// the schema is similar to the table's columns in mySQL
const categories = mongoose.Schema({
    // automatic will generate an id (_id=5sa4d5a1sd5)
    name: { type: String, required: true },/// required true means u have to fill it befor send it  
    display_name: { type: String, required: true },
    descreption: { type: String, required: true }
})

module.exports = mongoose.model('categories', categories);
// we send mongoos model (categoris) which is mongos schema 
// 'categories' is the table name// categories variable is the schema

