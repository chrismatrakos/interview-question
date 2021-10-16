const data = require('../data');

const get = function(_id){
    return getAll().find(product => product._id == _id);
}

const getAll = function(){
    return data.Products;
}
module.exports = {
    get,
    getAll
};