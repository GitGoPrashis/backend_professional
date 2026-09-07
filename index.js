const express = require("express")

const app = express()
const PORT = 4000;

const useRouter = require("./routes/studentData")

app.get("/", (req, res)=>{
res.send("Hello world")
})

app.use("/api", useRouter)

app.listen(PORT, ()=>{
    console.log("Server is running in the 4000 PORT")
})