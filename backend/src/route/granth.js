const Granth = require("../controller/granthcontroller");
const express = require("express")
const router = express.Router()

router.get("/", Granth.getAllGranth)
router.get("/:id", Granth.getGranthDetails)

module.exports = router;