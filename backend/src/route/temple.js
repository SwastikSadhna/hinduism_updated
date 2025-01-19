const express = require("express")
const temple = require("../controller/templeController")
const router = express.Router()

router.get("/all", temple.getAllTemples)


module.exports = router;