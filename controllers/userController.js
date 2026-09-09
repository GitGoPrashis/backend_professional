const User = require("../models/userModel")

const createUser = async (req, res)=>{
    try {
        const {name, email, age} = req.body;
        const user = await User.create({
            name,
            email,
            age
        })
       res.status(201).json({
        status: true,
        message: "create successfully."
       })
        

    } catch (error) {

        res.status(500).json({
            sucess : false,
            message : "Internal Error"
        })
        
    }
}

module.exports = {createUser}