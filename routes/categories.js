/* eslint-disable indent */
/* eslint-disable new-cap */
'ues strict';
const express = require('express');
const category = require('../models/categories/categories-model.js');
const router = express.Router();

router.get('/categories', getCategories);
router.get('/categories/:id', getCategoriesById);
router.post('/categories', createCategories);
router.put('/categories/:id', updateCategories);
router.delete('/categories/:id', deleteCategories);

function getCategories(req, res, next) {
    category.get()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(next);
}


function getCategoriesById(req, res, next) {
    category.get(req.params.id)
        .then(data => {
            res.status(200).json(data);
            // return the data from the database
        })
        .catch(next);
}

function createCategories(req, res, next) {
    category.create(req.body)
        .then(data => {
            res.status(201).json(data);
        })
        .catch(next);
}
function updateCategories(req, res, next) {
    category.update(req.params.id, req.body)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(next);
}
function deleteCategories(req, res, next) {
    category.delete(req.params.id)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(next);
}

module.exports = router;
