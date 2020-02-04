/* eslint-disable camelcase */
/* eslint-disable indent */
/* eslint-disable strict */
'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
    name: { type: String, require: true },
    category: { type: String, required: true },
    display_name: { type: String, required: true },
    descreption: { type: String, required: true }});

module.export = mongoose.model('products',products);