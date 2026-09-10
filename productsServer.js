const express = require("express")
const connectDB = require("./config/productDB")
const useRouter = require("./routes/productsRoute");


const app = express()

app.get("/", (req, res)=>{
    res.send("Hello, This is My product Lists")
})
connectDB();

app.use("/product", useRouter)

app.listen(4000, ()=>{
    console.log("server is running in 4000 Port")
})