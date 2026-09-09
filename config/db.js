const mongoos = require("mongoose")

const connectDb = async () => {
    try {
    await mongoos.connect("mongodb://localhost:27017/")
        console.log("database Run successfully.")

    } catch (error) {
        console.log(error.message)
        
    }
    
}

module.exports = connectDb;