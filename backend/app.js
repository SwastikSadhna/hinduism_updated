const express = require("express")
const app = new express()
const ejs = require("ejs")

app.use(express.static((__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views','./src/views')
app.get('/',(req,res)=>{
    res.status(200).send("Jay Shree Ram")
})

app.listen(3000,()=>{
    console.log("server is running : http://localhost:3000/")
})