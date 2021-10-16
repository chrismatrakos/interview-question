const express = require('express');
const url = require('url');
const querystring = require('querystring');
const router = express.Router({ mergeParams: true });

const productController = require('../controllers/product.controller');

router.route('/')
    .get(productController.getAll);

router.route('/search')
    .get(productController.get);

module.exports = router;