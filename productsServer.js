const express = require("express")
const connectDB = require("./config/productDB")
const productRouter = require("./routes/productsRoute");


const app = express()
app.use(express.json());

connectDB();
app.get("/", (req, res)=>{
    res.send("Hello, This is My product Lists")
})

app.use("/api", productRouter)

app.listen(4000, ()=>{
    console.log("server is running in 4000 Port")
})