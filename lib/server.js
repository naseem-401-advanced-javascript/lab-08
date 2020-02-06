/* eslint-disable no-undef */
/* eslint-disable strict */
'use strict';
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const categoriesRoutes = require('../routes/categories.js');
const productsRoutes = require('../routes/products.js');

const app = express();

app.use(express.json());// retuen it as json formated
app.use(cors()); // any one can attach ur api
app.use(morgan('dev'));

app.use('/api/v1',categoriesRoutes);// use general
app.use('/api/v1',productsRoutes);

module.exports = {
  server: app,
  start:port=>{
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT,()=>console.log(`server up ${PORT}`));
  },
};


