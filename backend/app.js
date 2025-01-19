const express = require("express")
const app = new express();

// routes
const BookRoute = require('./src/route/book');
const TempleRoute = require("./src/route/temple");
const GranthItemRoute = require("./src/route/granthitem")
const GranthRoute = require("./src/route/granth")

app.use('/book', BookRoute);
app.use('/temple', TempleRoute);
app.use('/granthitem', GranthItemRoute);
app.use('/granth', GranthRoute);

app.listen(3000,()=>{
    console.log("server is running : http://localhost:3000/")
})