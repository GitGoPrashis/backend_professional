const productData = require("../models/productsModel");

function getProductData (req, res){
    res.json(productData)

}