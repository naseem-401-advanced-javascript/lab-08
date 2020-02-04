/* eslint-disable indent */
/* eslint-disable new-cap */
'ues strict';
const express = require('express');
const product = require('../models/products/products-model');
const router = express.Router();

router.get('/products', getProducts);
router.get('/products/:id', getProductsById);
router.post('/products', createProducts);
router.put('/products/:id', updatProducts);
router.delete('/products/:id', deleteProducts);

function getProducts(req, res, next) {
    product.get()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(next);
}

function getProductsById(req, res, next) {
    product.get(req.params.id)
        .then(data => {
            res.status(200).json(data);
            // return the data from the database
        })
        .catch(next);
}

function createProducts(req, res, next) {
    product.create(req.body)
        .then(data => {
            res.status(201).json(data);
        })
        .catch(next);
}
function updatProducts(req, res, next) {
    product.update(req.params.id, req.body)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(next);
}
function deleteProducts(req, res, next) {
    product.delete(req.params.id)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(next);
}

module.exports = router;