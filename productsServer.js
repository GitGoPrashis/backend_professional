const express = require("express")

const app = express()

app.get("/", (req, res)=>{
res.send("Hello, This is My product Lists")
})

app.listen(3000, ()=>{
    console.log("server is running in 3000 Port")
})