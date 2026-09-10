const express = require("express");
 const router = express.Router();

 const {productDetails} = require("../controllers/productsController");
 router.post("/product", productDetails)

 module.exports = router;