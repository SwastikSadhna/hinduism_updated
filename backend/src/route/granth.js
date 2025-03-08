const Granth = require("../controller/granthcontroller");
const express = require("express")
const router = express.Router()
const {verifyToken, checkPermission} = require("../middleware/authentication")
const {upload} = require("../middleware/fileupload")

router.get("/", Granth.getAllGranth)
router.get("/:id", Granth.getGranthDetails)
router.post("/", verifyToken, checkPermission("create","granth"), upload.single('image'), Granth.addGranth)
router.put('/:id',verifyToken, checkPermission("update","granth"), upload.single('image'), Granth.updateGranth)
router.delete('/:id',verifyToken, checkPermission("delete","granth"), Granth.deleteGranth)

module.exports = router;