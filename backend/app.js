const express = require("express")
const app = new express();

// routes
const TempRoute = require('./src/route/temp');
const BookRoute = require('./src/route/book');

app.use('/temp', TempRoute);
app.use('/book', BookRoute);

app.listen(3000,()=>{
    console.log("server is running : http://localhost:3000/")
})