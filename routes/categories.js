'ues strict';
const express = require('express');
const category = require('../models/categories/categories-model.js')
const router = express.Router();

router.get('/categories', getCategories)
router.get('/categories/:id',getCategoriesid)
router.post('/categories', createCategories)
// router.update('/categories/:id',updateCategories)
// router.delete('/categories/:id',deleteCategories)

function getCategories(req, res, next) {
    category.get()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(next)
}


function getCategoriesid(req,res,next){
    category.get(req)
}

function createCategories(req, res, next) {
    category.create(req.body)
        .then(data => {
            req.params= data._id
            res.status(201).json(data)
        })
}
module.exports = router;
