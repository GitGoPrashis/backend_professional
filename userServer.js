const express = require("express")

const connectDB = require("./config/db");
const userRoute = require("./routes/userRoute")

const app = express()
connectDB()
app.use(express.json())
app.get("/", (req, res)=>{
    res.send("This is the users List")
})

app.use("/api", userRoute)



app.listen(4000, ()=>{
    console.log("server is running in 4000 Port")
})