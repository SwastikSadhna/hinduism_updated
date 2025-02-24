const Granth = require("../controller/granthcontroller");
const express = require("express")
const router = express.Router()

router.get("/", Granth.getAllGranth)
router.get("/:id", Granth.getGranthDetails)
router.post("/", Granth.addGranth)
router.put('/:id', Granth.updateGranth)
router.delete('/:id', Granth.deleteGranth)

module.exports = router;