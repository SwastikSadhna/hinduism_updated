const express = require("express")
const app = new express();

// routes
const BookRoute = require('./src/route/book');
const TempleRoute = require("./src/route/temple")

app.use('/book', BookRoute);
app.use('/temple', TempleRoute);

app.listen(3000,()=>{
    console.log("server is running : http://localhost:3000/")
})