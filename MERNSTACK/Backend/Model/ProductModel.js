const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id : {
        type : Number,
        required : true
    },
    productName : {
        type : String,
        required : true,
        unique : true
    },
    price : {
        type : Number,
        required : true
    }
})

module.exports = mongoose.model("Product", productSchema);