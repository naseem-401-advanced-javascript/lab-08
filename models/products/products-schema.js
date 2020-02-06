/* eslint-disable camelcase */
/* eslint-disable new-cap */
/* eslint-disable strict */
'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
  name: { type: String, require: true },
  category: { type: String, required: true },
  display_name: { type: String, required: true },
  description: { type: String, required: true }});

module.exports = mongoose.model('products',products);