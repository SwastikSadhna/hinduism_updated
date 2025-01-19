const Granth = require("../controller/granthcontroller");
const express = require("express")
const router = express.Router()

router.get("/all", Granth.getAllGranth)
router.get("/items/:id", Granth.getGranthDetails)

module.exports = router;