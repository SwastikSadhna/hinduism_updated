const express = require("express")
const app = new express()
const ejs = require("ejs")

// routes
const TempRoute = require('./src/route/temp');

app.use(express.static((__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views','./src/views')


app.use('/temp', TempRoute);

app.listen(3000,()=>{
    console.log("server is running : http://localhost:3000/")
})