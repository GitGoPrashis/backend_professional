const express = require("express");
 const router = express.Router();
 const {getProducts, createProducts, updateProducts, deleteProduct, getProductByid} = require("../controllers/productsController")

 
 router.get("/products", getProducts)
 router.post("/products", createProducts)
 router.put("/products/:id", updateProducts)
 router.delete("/products/:id", deleteProduct)
 router.get("/products/:id", getProductByid)

 module.exports = router;