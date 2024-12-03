const express = require("express")
const app = new express()

app.use(express.static((__dirname, 'public')))

app.get('/',(req,res)=>{
    res.send("connected")
})

app.listen(3000,()=>{
    console.log("server is running : http://localhost:3000/")
})