const mongoose = require("mongoose");
const connectDb = async () => {
    try {
    await mongoose.connect("mongodb://localhost:27017/")
        console.log("database Run successfully in 400 ports.")

    } catch (error) {
        console.log(error.message)
        
    }
    
}

module.exports = connectDb;