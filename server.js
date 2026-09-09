const express = require("express")
const app = express()
const PORT = 4000;
const database = require("./config/db")

app.get("/", (req, res)=>{
res.send("Hello Wporld Learning About db")
})

database()
app.listen(PORT, ()=>{
    console.log(`server is running in ${PORT}..`)
})