const express = require("express")
const app = new express();
const cors = require("cors")

// routes
const AvatarRoute = require('./src/route/avatar');
const BookRoute = require('./src/route/book');
const BhaktiRoute = require('./src/route/bhakti');
const GodRoute = require('./src/route/god');
const TempleRoute = require("./src/route/temple");
const GranthItemRoute = require("./src/route/granthitem");
const GranthRoute = require("./src/route/granth");
const SlokaRoute = require("./src/route/sloka");

const path = require("path");

app.use(cors({
    origin: "*",
}))

app.use(express.json())

app.use("/images", express.static(path.join(__dirname , "public/images")))

app.use('/book', BookRoute);
app.use('/avatar', AvatarRoute);
app.use('/god', GodRoute);
app.use('/temples', TempleRoute);
app.use('/bhakti', BhaktiRoute);
app.use('/granthitem', GranthItemRoute);
app.use('/granth', GranthRoute);
app.use('/sloka', SlokaRoute);

app.listen(3000,()=>{
    console.log("server is running : http://localhost:3000/")
})