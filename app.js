const express = require("express")
require("dotenv").config()
const app=express()

app.use(express.json())
const userRoute=require("./controllers/user.controller")
//
app.use("/api/users",userRoute)
app.get("/",async(req,res)=>{
    res.send("jjjj")
})
const port=process.env.PORT||9999
app.listen(port,()=>{
    console.log("you are listening at port "+port)
})