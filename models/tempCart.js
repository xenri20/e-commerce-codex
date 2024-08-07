const mongoose = require('mongoose');

const tempCart = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true},
    qty: { type: Number, required: true },
    category: { type: String, required: true },
    subtotal: { type: Number, required: true }

});

const tempUserCart = mongoose.model('tempUserCart', tempCart);
module.exports = { tempUserCart };
