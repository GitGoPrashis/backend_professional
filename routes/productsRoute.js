const express = require("express");
 const router = express.Router();
 const {getProducts, createProducts, updateProducts} = require("../controllers/productsController")

 
 router.get("/products", getProducts)
 router.post("/products", createProducts)
 router.put("/products/:id", updateProducts)

 module.exports = router;