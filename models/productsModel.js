// productData.js

const {Schema, model} = require("mongoose")

// const mongoose = require("mongoose");

const productSchema = new Schema({
    productId : Number,
    name: String,
    price:String,
    category:String,
    stock:Number

})
const productModel = model("Product", productSchema);
module.exports = productModel;

// module.exports = mongoose.model("product", productSchema)

//   {
//         productId: 1,
//         name: "Laptop",
//         price: "85000",
//         category: "Electronics",
//         stock: 10
//     },

