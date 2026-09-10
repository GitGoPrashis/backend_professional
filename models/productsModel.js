// productData.js

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productId : Number,
    name: String,
    price:String,
    category:String,
    stock:Number

})

module.exports = mongoose.model("product", productSchema)

