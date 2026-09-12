const mongoose = require("mongoose");

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/productsDB");
        console.log("MongoDB connected Successfully.")
        
    } catch (error) {
        console.log(error.message)
        
    }
}


module.exports = connectDB;
        // name: "Ram Sharma",
        // email: "ram.sharma@gmail.com",
        // age: 22