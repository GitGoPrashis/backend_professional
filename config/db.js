const mongoose = require("mongoose")

const connectDb = async () => {
    try {
    await mongoose.connect("mongodb://localhost:27017/traningNodejs")
        console.log("database Run successfully.")

    } catch (error) {
        console.log(error.message)
        
    }
    
}

module.exports = connectDb;