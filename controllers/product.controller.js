const productService = require('../services/product.service');

const get = function(req, res){
 res.send(productService.get(req.params._id))
}

const getAll = function(req, res){
 res.send(productService.getAll())
}

module.exports = {
 get,
 getAll
};