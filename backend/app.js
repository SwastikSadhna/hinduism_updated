const express = require("express")
const app = new express();

// routes
const BookRoute = require('./src/route/book');
const TempleRoute = require("./src/route/temple");
const GranthItemRoute = require("./src/route/granthitem")

app.use('/book', BookRoute);
app.use('/temple', TempleRoute);
app.use('/granthitem', GranthItemRoute);

app.listen(3000,()=>{
    console.log("server is running : http://localhost:3000/")
})