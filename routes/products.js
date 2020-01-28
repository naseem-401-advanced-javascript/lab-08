'ues strict';
const express = require('express');
const product = require('../models/products/products-model')
const router = express.Router();

router.get('/products', getProducts)
// router.get('/products/:id',getProductsid)
router.post('/products', createProducts)
// router.update('/products/:id',updatProducts)
// router.delete('/products/:id',deleteProducts)

function getProducts(req, res, next) {
    category.get()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(next)
}

function createProducts(req, res, next) {
    category.create(req.body)
        .then(data => {
            res.status(201).json(data)
        })
}
module.exports = router;