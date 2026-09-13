const Product = require("../models/productsModel")

// for showing available product in DB
const getProducts = async (req, res) => {
    try {
        const allProducts = await Product.find() ;


        if (!allProducts || allProducts.length === 0) {
            res.json({

                Message: "There is no Products"

            })

        } else {
            res.status(200).json({
                success: true,
                products: allProducts
            })

        }


    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: "Internal Error"
        })

    }


}

// for adding new products
const createProducts = async (req, res) => {
    try {
        const { productId, name, price, category, stock } = req.body;

        const newProduct = new Product({
            productId,
            name,
            price,
            category,
            stock
        });

        await newProduct.save();

        res.status(201).json({
            success: true,
            message: "Product created successfully",
            products: newProduct
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};



const updateProducts = async (req, res) => {
    try {
        // const { id } = req.params;
        const id = req.params.id

        const { productId, name, price, category, stock } = req.body;

        const updatedProducts = await Product.findByIdAndUpdate(
            id,
            {
                productId,
                name,
                price,
                category,
                stock
            },
            { new: true }
        );

        if (!updatedProducts) {
            return res.status(404).json({
                success: false,
                message: "Cannot find product"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            products: updatedProducts
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

const deleteProduct = async (req, res)=>{
    try {
        const id= req.params.id ;
        const { productId, name, price, category, stock } = req.body;
        const deletedProducts = await Product.findByIdAndDelete(id,{
             productId,
             name,
             price,
             category,
            stock

            

        },
  )
     if (!deletedProducts) {
            return res.status(404).json({
                success: false,
                message: "Cannot find Products to Delete !"
            });
        }
         res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            products: deletedProducts
        });

        
    } catch (error) {
        res.status(500).json({
            succss: false,
            message: "Internal Server Error",
            error: error.message
        });
        
    }

}

const getProductByid = async (req, res)=>{
    try {
        const id = req.params.id
        const getid = await Product.findById(id)

        res.status(200).json({
            succss:true,
            message: "product showing by id",
            products: getid
        })
        
    } catch (error) {
         res.status(500).json({
            succss: false,
            message: "Internal Server Error",
            error: error.message
        });
        
    }
}

module.exports = { getProducts, createProducts, updateProducts, deleteProduct, getProductByid };

