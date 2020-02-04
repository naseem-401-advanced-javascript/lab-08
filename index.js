/* eslint-disable indent */
'use strict ';
const mongoose = require('mongoose');
const server = require ('./lib/server.js');
const MONGODB_URI = process.env.MONGODB_URI;

const mongooseOptions = {
    useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true};
mongoose.connect(MONGODB_URI,mongooseOptions);
server.start(3000);