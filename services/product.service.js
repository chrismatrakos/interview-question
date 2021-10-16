const data = require('../data');

const get = function(attr, value){
    return getAll().filter(product => (product[attr] == value || is_member(product[attr], value)));
}

const getAll = function(){
    return data.Products;
}

const is_member = function(attribute, value){
    return attribute.toLowerCase().includes(value);
}
module.exports = {
    get,
    getAll
};