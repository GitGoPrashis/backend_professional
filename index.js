
const useRouter = require("./routes/studentData")
const express = require("express")


const app = express()
const PORT = 4000;

app.use(express.json())


app.get("/", (req, res)=>{
res.send("Hello world")
})


app.use("/api", useRouter)

app.listen(PORT, ()=>{
    console.log("Server is running in the 4000 PORT")
})

