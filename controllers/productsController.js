const Product = require("../models/productsModel")

// for showing available product in DB
const getProducts = async (req, res) => {
    try {
        const allProducts = await Product.find();

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

// for updating products in db
// const updateProducts = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { productId, name, price, category, stock } = req.body;

//         const updatedProducts = await Product.findByIdAndUpdate({
//             productId,
//             name,
//             price,
//             category,
//             stock
//         }, { new: true })
//         if (!updatedProducts) {
//             res.json({
//                 message: "cannot find Products"
//             })

//         } else {
//             res.status(200).json({
//                 products : updateProducts
//             })

//         }


//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "Internal server error",
//             error: error.message
//         });

//     }


// }

const updateProducts = async (req, res) => {
    try {
        const { id } = req.params;

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

module.exports = { getProducts, createProducts, updateProducts };
//  productId: 2,
//   name: "Smartphone",
//   price: "35000",
//         category: "Electronics",
//         stock: 15