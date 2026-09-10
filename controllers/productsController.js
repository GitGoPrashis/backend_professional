const productData = require("../models/productsModel")


const productDetails = async (req, res)=>{
    try {
        const {productId,name,price,category,stock} = req.body;
        const product = await productData.create({

            productId,
            name,
            price,
            category,
            stock 
        }
        )
        res.status(200).json({
            success : true,
            Message: "Run Successfully"
        })
        
    } catch (error) {
        res.status(500).json({
            sucess : false,
            message : "Internal Error"
        })
        
    }


}

module.exports = {productDetails};